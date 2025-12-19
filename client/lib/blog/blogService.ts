import { db, storage } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  updateDoc,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { BlogData } from "../../types/BlogTypes";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const blogsRef = collection(db, "blogs");

export const createBlog = async (data: any) => {
  console.log("[createBlog] called with data:", data);

  // Remove undefined values (Firestore doesn't like undefined)
  const sanitized: any = {};
  Object.keys(data).forEach((key) => {
    const value = data[key as keyof typeof data];
    if (value !== undefined) sanitized[key] = value;
  });

  const newBlog = {
    ...sanitized,
    createdAt: Date.now(),
  };

  console.log("[createBlog] final payload for Firestore:", newBlog);
  console.log("[createBlog] Attempting to write to Firestore...");

  try {
    console.log("[createBlog] 🔵 Calling addDoc NOW...");
    const startTime = Date.now();

    // Create a timeout promise that will check if blog was created
    const timeoutPromise = new Promise<any>((resolve, reject) => {
      setTimeout(async () => {
        console.log("[createBlog] ⏱️ Timeout reached, checking if blog was created...");

        // Check if a blog with this slug was created in the last 10 seconds
        const q = query(
          blogsRef,
          where("slug", "==", newBlog.slug),
          where("createdAt", ">=", startTime - 1000)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const doc = snapshot.docs[0];
          console.log("[createBlog] ✅ Blog was created! Found it with ID:", doc.id);
          resolve({ id: doc.id });
        } else {
          console.log("[createBlog] ❌ Blog not found after timeout");
          reject(new Error("Blog creation timed out and blog not found in database"));
        }
      }, 3000); // 3 second timeout - faster feedback
    });

    // Race between addDoc and timeout
    const docRef = await Promise.race([
      addDoc(blogsRef, newBlog),
      timeoutPromise
    ]);

    const endTime = Date.now();
    console.log(`[createBlog] ✅ SUCCESS! Took ${endTime - startTime}ms`);
    console.log("[createBlog] New blog created with ID:", docRef.id);

    return docRef;
  } catch (err: any) {
    console.error("[createBlog] ❌ FIRESTORE ERROR:", err);
    console.error("[createBlog] Error code:", err?.code);
    console.error("[createBlog] Error message:", err?.message);

    // Provide user-friendly error messages
    if (err?.code === "permission-denied") {
      throw new Error("Permission denied. Please check Firestore security rules.");
    } else {
      throw new Error(err?.message || "Failed to create blog. Please try again.");
    }
  }
};

export const getAllBlogs = async () => {
  try {
    // Safety timeout of 10 seconds
    const timeoutPromise = new Promise<any>((_, reject) => {
      setTimeout(() => reject(new Error("Timeout fetching blogs")), 10000);
    });

    const fetchPromise = getDocs(blogsRef);
    const snapshot = await Promise.race([fetchPromise, timeoutPromise]);

    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (err) {
    console.error("[getAllBlogs] Error:", err);
    return [];
  }
};

export const getPublishedBlogs = async () => {
  try {
    // Run two queries in parallel to catch all visible blogs:
    // 1. All blogs marked explicitly as isPublished (covers legacy + standard published)
    // 2. All blogs marked as scheduled (which might have passed their time)
    const [publishedSnap, scheduledSnap] = await Promise.all([
      getDocs(query(blogsRef, where("isPublished", "==", true))),
      getDocs(query(blogsRef, where("status", "==", "scheduled")))
    ]);

    const blogsMap = new Map();

    // Add published blogs
    publishedSnap.docs.forEach((d) => {
      blogsMap.set(d.id, { id: d.id, ...d.data() });
    });

    // Add scheduled blogs
    scheduledSnap.docs.forEach((d) => {
      blogsMap.set(d.id, { id: d.id, ...d.data() });
    });

    const allBlogs = Array.from(blogsMap.values()) as BlogData[];
    const now = new Date();

    // Filter: 
    // - Keep if isPublished === true
    // - Keep if status === 'scheduled' AND date passed
    return allBlogs.filter(blog => {
      if (blog.isPublished) return true;
      if (blog.status === 'scheduled' && blog.scheduledDate) {
        return new Date(blog.scheduledDate) <= now;
      }
      return false;
    });
  } catch (err) {
    console.error("[getPublishedBlogs] Error:", err);
    return [];
  }
};

export const getBlogById = async (id: string) => {
  const snapshot = await getDoc(doc(db, "blogs", id));
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
};

export const updateBlog = async (id: string, blog: BlogData) => {
  return await updateDoc(doc(db, "blogs", id), blog);
};

export const deleteBlog = async (id: string) => {
  return await deleteDoc(doc(db, "blogs", id));
};

export const getBlogBySlug = async (slug: string) => {
  const q = query(blogsRef, where("slug", "==", slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  const docSnap = snapshot.docs[0];
  return { id: docSnap.id, ...docSnap.data() };
};

export const uploadAuthorImage = async (file: File) => {
  const fileRef = ref(storage, `blogs/authors/${Date.now()}_${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};
// --- CATEGORY SERVICES ---

/**
 * Fetches all categories from the 'blog-categories' collection.
 */
export const getBlogCategories = async () => {
  try {
    const categoriesRef = collection(db, "blog-categories");
    const q = query(categoriesRef, orderBy("name", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as { id: string, name: string }[];
  } catch (err) {
    console.error("[getBlogCategories] Error:", err);
    return [];
  }
};

/**
 * Adds a new category to the 'blog-categories' collection.
 */
export const addBlogCategory = async (name: string) => {
  try {
    const categoriesRef = collection(db, "blog-categories");
    const docRef = await addDoc(categoriesRef, {
      name: name.trim().toLowerCase(),
      createdAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (err) {
    console.error("[addBlogCategory] Error:", err);
    throw err;
  }
};
