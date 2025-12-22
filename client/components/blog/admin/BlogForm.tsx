import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../../firebase";
import { toast } from "../../../hooks/use-toast";
import { BlogData } from "../../../types/BlogTypes";
import { getBlogCategories, addBlogCategory } from "../../../lib/blog/blogService";

const QuillWrapper: React.FC<any> = (props) => {
    useEffect(() => {
        // Suppress the specific findDOMNode warning from ReactQuill
        const originalError = console.error;
        console.error = (...args: any[]) => {
            if (
                typeof args[0] === 'string' &&
                args[0].includes('findDOMNode')
            ) {
                return;
            }
            originalError.call(console, ...args);
        };

        return () => {
            console.error = originalError;
        };
    }, []);

    return <ReactQuill {...props} />;
};



interface BlogFormProps {
    mode: "create" | "edit";
    initialData?: BlogData;
    onSubmit: (data: BlogData) => Promise<void>;
}





const storage = getStorage(app);

const uploadImage = async (file: File, folder: string) => {
    const fileRef = ref(storage, `${folder}/${Date.now()}_${file.name}`);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
};




const BlogForm: React.FC<BlogFormProps> = ({ mode, onSubmit, initialData }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [uploadingCover, setUploadingCover] = useState(false);
    const [uploadingBanner, setUploadingBanner] = useState(false);
    const [uploadingAuthor, setUploadingAuthor] = useState(false);
    const [categories, setCategories] = useState<{ id: string, name: string }[]>([]);
    const [newCategory, setNewCategory] = useState("");
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [loadingCategories, setLoadingCategories] = useState(true);

    const [blog, setBlog] = useState<BlogData>(
        initialData ?? {
            title: "",
            slug: "",
            shortDescription: "",
            category: "",
            tags: [],
            date: "",
            content: "",
            coverImage: "",
            bannerImage: "",
            isFeatured: false,
            isCurated: false,
            isPublished: false, // Will be derived from status
            status: "draft",
            scheduledDate: "",
            seoTitle: "",
            seoDescription: "",
            metaKeywords: [],
            authorName: "",
            authorRole: "",
            authorBio: "",
            authorImage: "",
        }
    );

    // Track previous content to prevent ReactQuill onChange loop
    const previousContentRef = useRef(blog.content);

    // Auto-migrate "scheduled" blogs that have passed their time to "published" state in the UI
    useEffect(() => {
        if (mode === "edit" && initialData?.status === "scheduled" && initialData.scheduledDate) {
            const scheduledTime = new Date(initialData.scheduledDate).getTime();
            if (scheduledTime <= Date.now()) {
                console.log("[BlogForm] Auto-switching past scheduled blog to published state");
                setBlog((prev) => ({
                    ...prev,
                    status: "published",
                    isPublished: true,
                    // We keep the scheduledDate for reference or clear it? 
                    // Usually better to keep it until save, but logic says clear it on publish.
                    // For now, let's leave it, but submitting 'published' will clear it.
                }));
            }
        }
    }, [mode, initialData]);

    // Fetch categories on mount
    useEffect(() => {
        const fetchCategories = async () => {
            setLoadingCategories(true);
            const data = await getBlogCategories();
            setCategories(data);
            setLoadingCategories(false);
        };
        fetchCategories();
    }, []);

    const handleAddCategory = async () => {
        if (!newCategory.trim()) return;
        setIsAddingCategory(true);
        try {
            const id = await addBlogCategory(newCategory);
            const updatedCategories = await getBlogCategories();
            setCategories(updatedCategories);
            handleChange("category", newCategory.trim().toLowerCase());
            setNewCategory("");
            toast({
                title: "Success",
                description: `Category "${newCategory}" added successfully`,
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to add category",
                variant: "destructive",
            });
        } finally {
            setIsAddingCategory(false);
        }
    };


    const handleChange = (
        field: keyof BlogData,
        value: string | string[] | boolean
    ) => {
        setBlog((prev) => ({ ...prev, [field]: value }));
    };

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .trim()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    };
    const sanitizeContent = (value: string) => {
        const cleaned = value.replace(/<p><br><\/p>/g, "").trim();
        return cleaned === "" ? "" : value;
    };


    const handleFormSubmit = async () => {
        console.log("[BlogForm] submit clicked, current blog:", blog);

        if (!blog.title.trim()) {
            toast({
                title: "Validation Error",
                description: "Blog title is required",
                variant: "destructive",
            });
            return;
        }

        // Status & Scheduling Logic
        let finalStatus = blog.status;
        let finalPublished = false; // Default to false

        if (blog.status === "scheduled") {
            if (!blog.scheduledDate) {
                toast({
                    title: "Validation Error",
                    description: "Please select a date and time for scheduling.",
                    variant: "destructive",
                });
                return;
            }

            const selectedDate = new Date(blog.scheduledDate);
            const now = new Date();

            if (selectedDate <= now) {
                toast({
                    title: "Validation Error",
                    description: "Scheduled date must be in the future.",
                    variant: "destructive",
                });
                return;
            }
            // Scheduled blogs act as not published until the time comes (logic handled by consumer)
            finalPublished = false;
        } else if (blog.status === "published") {
            finalPublished = true;
            // Clear scheduled date if switching to published immediately
            handleChange("scheduledDate", "");
        } else {
            // Draft
            finalPublished = false;
            handleChange("scheduledDate", "");
        }

        // Update derived state before submission
        // Note: state updates are async, so we'll pass the corrected object directly to onSubmit
        const submissionData = {
            ...blog,
            status: finalStatus,
            isPublished: finalPublished,
            content: sanitizeContent(blog.content),
            publishedAt: (finalStatus === "published" && !blog.publishedAt) ? Date.now() : blog.publishedAt,
        };

        if (!sanitizeContent(blog.content)) {
            toast({
                title: "Validation Error",
                description: "Blog content is required",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);
        console.log("[BlogForm] isLoading set to true");

        try {
            await onSubmit(submissionData);
            console.log("[BlogForm] onSubmit finished successfully");

            toast({
                title: "Success",
                description:
                    mode === "create"
                        ? "Blog created successfully!"
                        : "Blog updated successfully!",
                variant: "default",
            });

            // 👇 THIS PREVENTS RE-RUNNING THE SUBMIT LOGIC ON RE-RENDER
            return;

        } catch (error: any) {
            console.error("[BlogForm] Error in onSubmit:", error);
            toast({
                title: "Error",
                description:
                    error?.message ||
                    `Failed to ${mode === "create" ? "create" : "update"} blog. Please try again.`,
                variant: "destructive",
            });
        } finally {
            console.log("[BlogForm] finally reached, setting isLoading false");
            setIsLoading(false);
        }
    };





    const handleFormSubmitWrapper = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        handleFormSubmit();
    };

    return (
        <form onSubmit={handleFormSubmitWrapper} className="bg-[#0b0b0b] p-8 rounded-2xl border border-yellow-400/30 shadow-[0_0_20px_rgba(0,200,255,0.15)]">
            <h3 className="text-xl text-white font-semibold mb-6">
                {mode === "create" ? "Create New Blog" : "Edit Blog"}
            </h3>

            {/* Title */}
            <div className="mb-5">
                <label className="block mb-2 text-sm text-gray-300">Blog Title</label>
                <input
                    type="text"
                    value={blog.title}
                    onChange={(e) => {
                        handleChange("title", e.target.value);
                        handleChange("slug", generateSlug(e.target.value));
                    }}

                    placeholder="Enter blog title"
                    className="w-full h-10 px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
                     text-white focus:border-cyan-400 outline-none transition"
                />
            </div>

            {/* Slug */}
            <div className="mb-5">
                <label className="block mb-2 text-sm text-gray-300">Slug (URL)</label>
                <input
                    type="text"
                    value={blog.slug}
                    onChange={(e) => handleChange("slug", e.target.value)}
                    placeholder="example-blog-title"
                    className="w-full h-10 px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
                     text-white focus:border-cyan-400 outline-none transition"
                />
            </div>

            {/* Short Description */}
            <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-300">
                    Short Description
                </label>
                <textarea
                    value={blog.shortDescription}
                    onChange={(e) => handleChange("shortDescription", e.target.value)}
                    placeholder="Write a short intro for this blog..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black border border-yellow-400/20 
                     text-white focus:border-cyan-400 outline-none resize-none transition"
                ></textarea>
            </div>

            {/* Category */}
            <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-300">Category</label>
                <div className="flex gap-2 mb-3">
                    <select
                        value={blog.category}
                        onChange={(e) => handleChange("category", e.target.value)}
                        className="flex-1 h-10 px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
                   text-white focus:border-cyan-400 outline-none transition disabled:opacity-50"
                        disabled={loadingCategories}
                    >
                        <option value="">Select category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.name}>
                                {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Add New Category */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="Or create new category..."
                        className="flex-1 h-10 px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
                         text-white focus:border-cyan-400 outline-none transition"
                    />
                    <button
                        type="button"
                        onClick={handleAddCategory}
                        disabled={isAddingCategory || !newCategory.trim()}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition disabled:opacity-50 text-sm whitespace-nowrap"
                    >
                        {isAddingCategory ? "Adding..." : "Add Category"}
                    </button>
                </div>
            </div>

            {/* Tags Input */}
            <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-300">Tags</label>
                <input
                    type="text"
                    placeholder="Add tags separated by commas (e.g., space, rocket, tech)"
                    value={blog.tags?.join(", ") || ""}
                    onChange={(e) =>
                        handleChange("tags", e.target.value.split(",").map((t) => t.trim()))
                    }
                    className="w-full h-10 px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
               text-white focus:border-cyan-400 outline-none transition"
                />
            </div>



            {/* Blog Date */}
            {/* <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-300">Blog Date</label>
                <input
                    type="date"
                    value={blog.date || ""}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="w-full h-10 px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
               text-white focus:border-cyan-400 outline-none transition"
                />
            </div> */}

            {/* Blog Content (Rich Editor) */}
            <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-300">Blog Content</label>

                <div className="bg-black border border-yellow-400/20 rounded-lg p-2">
                    <QuillWrapper
                        theme="snow"
                        value={blog.content}
                        onChange={(value) => {
                            const sanitized = sanitizeContent(value);
                            // Only update if content actually changed
                            if (sanitized !== previousContentRef.current) {
                                previousContentRef.current = sanitized;
                                handleChange("content", sanitized);
                            }
                        }}
                        className="text-white"
                    />

                </div>
            </div>

            {/* Cover Image */}
            <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-300">Cover Image</label>

                {!blog.coverImage ? (
                    <>
                        <input
                            type="file"
                            accept="image/*"
                            disabled={uploadingCover}
                            onChange={async (e) => {
                                if (!e.target.files) return;
                                setUploadingCover(true);
                                try {
                                    const url = await uploadImage(e.target.files[0], "blog-covers");
                                    handleChange("coverImage", url);
                                    toast({
                                        title: "Success",
                                        description: "Cover image uploaded successfully",
                                        variant: "default",
                                    });
                                } catch (error: any) {
                                    console.error("Error uploading cover image:", error);
                                    toast({
                                        title: "Upload Error",
                                        description: error?.message || "Failed to upload cover image. Please try again.",
                                        variant: "destructive",
                                    });
                                } finally {
                                    setUploadingCover(false);
                                }
                            }}
                            className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
                 text-white focus:border-cyan-400 outline-none transition disabled:opacity-50"
                        />
                        {uploadingCover && (
                            <p className="text-sm text-cyan-400 mt-2">Uploading cover image...</p>
                        )}
                        <p className="text-[11px] text-gray-500 mt-2 italic leading-relaxed">
                            Recommended: JPG, PNG, or WebP. Optimal dimensions: 1200x800px. Smaller or differently aspected images may not fit correctly in the blog cards.
                        </p>
                    </>
                ) : (
                    <div className="relative mt-3 w-fit">
                        <img
                            src={blog.coverImage}
                            alt="Cover"
                            className="h-32 rounded-lg border border-gray-700 object-cover"
                        />
                        <button
                            type="button"
                            onClick={() => handleChange("coverImage", "")}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 
                         hover:bg-red-600 transition shadow-lg border border-black"
                            title="Remove image"
                        >
                            <X size={16} />
                        </button>
                    </div>
                )}
            </div>

            {/* Banner Image */}
            {/* <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-300">Banner Image</label>

                <input
                    type="file"
                    accept="image/*"
                    disabled={uploadingBanner}
                    onChange={async (e) => {
                        if (!e.target.files) return;
                        setUploadingBanner(true);
                        try {
                            const url = await uploadImage(e.target.files[0], "blog-banners");
                            handleChange("bannerImage", url);
                            toast({
                                title: "Success",
                                description: "Banner image uploaded successfully",
                                variant: "default",
                            });
                        } catch (error: any) {
                            console.error("Error uploading banner image:", error);
                            toast({
                                title: "Upload Error",
                                description: error?.message || "Failed to upload banner image. Please try again.",
                                variant: "destructive",
                            });
                        } finally {
                            setUploadingBanner(false);
                        }
                    }}
                    className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
               text-white focus:border-cyan-400 outline-none transition disabled:opacity-50"
                />
                {uploadingBanner && (
                    <p className="text-sm text-cyan-400 mt-2">Uploading banner image...</p>
                )}
                <p className="text-[11px] text-gray-500 mt-2 italic leading-relaxed">
                    Recommended: High-resolution (1920x1080px or higher) in JPG, PNG, or WebP for the best display on the blog page.
                </p>

                {blog.bannerImage && (
                    <img
                        src={blog.bannerImage}
                        className="mt-3 h-32 rounded-lg border border-gray-700 object-cover"
                    />
                )}
            </div> */}


            {/* Status Toggles */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Featured */}
                <label className="flex items-center gap-3 bg-black border border-yellow-400/20 
                   px-4 py-3 rounded-lg cursor-pointer">
                    <input
                        type="checkbox"
                        checked={blog.isFeatured}
                        onChange={(e) => handleChange("isFeatured", e.target.checked)}
                        className="w-4 h-4"
                    />
                    <span className="text-gray-300 text-sm">Featured Blog</span>
                </label>

                {/* Curated */}
                <label className="flex items-center gap-3 bg-black border border-yellow-400/20 
                   px-4 py-3 rounded-lg cursor-pointer">
                    <input
                        type="checkbox"
                        checked={blog.isCurated}
                        onChange={(e) => handleChange("isCurated", e.target.checked)}
                        className="w-4 h-4"
                    />
                    <span className="text-gray-300 text-sm">Curated Core</span>
                </label>

                {/* Published / Status Selector */}
                {/* Replaces the simple checkbox with a clearer Status Selection */}
                <div className="md:col-span-1">
                    <label className="block mb-2 text-sm text-gray-300">Status</label>
                    <select
                        value={blog.status}
                        onChange={(e) => handleChange("status", e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
                           text-white focus:border-cyan-400 outline-none transition"
                    >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                        <option value="scheduled">Scheduled</option>
                    </select>
                </div>

            </div>

            {/* Scheduled Date Picker - Only visible when status is 'scheduled' */}
            {blog.status === "scheduled" && (
                <div className="mb-6 p-4 border border-blue-500/30 bg-blue-500/10 rounded-xl animate-in fade-in slide-in-from-top-2">
                    <label className="block mb-2 text-sm text-blue-300 font-semibold">
                        Select Schedule Date & Time
                    </label>

                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        {/* Date Input */}
                        <div className="flex-1">
                            <label className="block mb-1 text-xs text-gray-400">Date</label>
                            <input
                                type="date"
                                value={blog.scheduledDate ? new Date(blog.scheduledDate).toISOString().slice(0, 10) : ""}
                                min={new Date().toISOString().slice(0, 10)}
                                onChange={(e) => {
                                    const dateVal = e.target.value;
                                    const current = blog.scheduledDate ? new Date(blog.scheduledDate) : new Date();
                                    // if dateVal is empty, handle appropriately? assume valid date
                                    if (dateVal) {
                                        // Create new date object from input (YYYY-MM-DD)
                                        // Preserve time if exists
                                        const timePart = current.toTimeString().slice(0, 5);
                                        const newDateTime = new Date(`${dateVal}T${timePart}`);
                                        handleChange("scheduledDate", newDateTime.toISOString());
                                    }
                                }}
                                className="w-full h-10 px-4 py-2 rounded-lg bg-black border border-blue-400/30 
                                text-white focus:border-blue-400 outline-none transition"
                                style={{ colorScheme: "dark" }}
                            />
                        </div>

                        {/* Time Input */}
                        <div className="flex-1">
                            <label className="block mb-1 text-xs text-gray-400">Time</label>
                            <input
                                type="time"
                                value={blog.scheduledDate ? new Date(blog.scheduledDate).toTimeString().slice(0, 5) : ""}
                                onChange={(e) => {
                                    const timeVal = e.target.value;
                                    if (timeVal) {
                                        const current = blog.scheduledDate ? new Date(blog.scheduledDate) : new Date();
                                        const [hours, minutes] = timeVal.split(':');
                                        current.setHours(parseInt(hours), parseInt(minutes));
                                        handleChange("scheduledDate", current.toISOString());
                                    }
                                }}
                                className="w-full h-10 px-4 py-2 rounded-lg bg-black border border-blue-400/30 
                                text-white focus:border-blue-400 outline-none transition"
                                style={{ colorScheme: "dark" }}
                            />
                        </div>
                    </div>

                    <p className="text-xs text-blue-200 mt-2">
                        The blog will be automatically published on this date and time.
                    </p>
                </div>
            )}

            {/* SEO Title */}
            <div className="mb-5">
                <label className="block mb-2 text-sm text-gray-300">SEO Title</label>
                <input
                    type="text"
                    value={blog.seoTitle}
                    onChange={(e) => handleChange("seoTitle", e.target.value)}
                    placeholder="SEO title for Google"
                    className="w-full h-10 px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
               text-white focus:border-cyan-400 outline-none transition"
                />
            </div>

            {/* SEO Description */}
            <div className="mb-5">
                <label className="block mb-2 text-sm text-gray-300">SEO Description</label>
                <textarea
                    value={blog.seoDescription}
                    onChange={(e) => handleChange("seoDescription", e.target.value)}
                    rows={3}
                    placeholder="Short meta description for search engines"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-yellow-400/20 
               text-white focus:border-cyan-400 outline-none resize-none transition"
                />
            </div>

            {/* Meta Keywords */}
            <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-300">Meta Keywords</label>
                <input
                    type="text"
                    placeholder="keyword1, keyword2, keyword3"
                    value={blog.metaKeywords.join(", ")}
                    onChange={(e) =>
                        handleChange(
                            "metaKeywords",
                            e.target.value.split(",").map((k) => k.trim())
                        )
                    }
                    className="w-full h-10 px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
               text-white focus:border-cyan-400 outline-none transition"
                />
            </div>


            {/* Author Info */}
            <div className="mb-6 p-4 border border-yellow-400/20 rounded-xl bg-black/50">
                <h3 className="text-white text-lg font-semibold mb-4">Author Details</h3>

                {/* Author Name */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm text-gray-300">Author Name</label>
                    <input
                        type="text"
                        value={blog.authorName}
                        onChange={(e) => handleChange("authorName", e.target.value)}
                        className="w-full h-10 px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
                 text-white focus:border-cyan-400 outline-none transition"
                    />
                </div>

                {/* Author Role */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm text-gray-300">Author Role</label>
                    <input
                        type="text"
                        value={blog.authorRole}
                        onChange={(e) => handleChange("authorRole", e.target.value)}
                        className="w-full h-10 px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
                 text-white focus:border-cyan-400 outline-none transition"
                    />
                </div>

                {/* Author Bio */}
                <div className="mb-4">
                    <label className="block mb-1 text-sm text-gray-300">Author Bio</label>
                    <textarea
                        value={blog.
                            authorBio || ""}
                        onChange={(e) => handleChange("authorBio", e.target.value)}
                        placeholder="Write a short bio about the author..."
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
                 text-white focus:border-cyan-400 outline-none resize-none transition"
                    />
                </div>

                {/* Author Image Upload */}
                <div>
                    <label className="block mb-1 text-sm text-gray-300">Author Image</label>

                    {!blog.authorImage ? (
                        <>
                            <input
                                type="file"
                                accept="image/*"
                                disabled={uploadingAuthor}
                                onChange={async (e) => {
                                    if (!e.target.files) return;
                                    setUploadingAuthor(true);
                                    try {
                                        const url = await uploadImage(e.target.files[0], "authors");
                                        handleChange("authorImage", url);
                                        toast({
                                            title: "Success",
                                            description: "Author image uploaded successfully",
                                            variant: "default",
                                        });
                                    } catch (error: any) {
                                        console.error("Error uploading author image:", error);
                                        toast({
                                            title: "Upload Error",
                                            description: error?.message || "Failed to upload author image. Please try again.",
                                            variant: "destructive",
                                        });
                                    } finally {
                                        setUploadingAuthor(false);
                                    }
                                }}
                                className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
                     text-white focus:border-cyan-400 outline-none transition disabled:opacity-50"
                            />
                            <p className="text-[11px] text-gray-500 mt-2 italic leading-relaxed">
                                Recommended: Square aspect ratio (e.g., 400x400px). JPG, PNG, or WebP.
                                This image will be displayed as a circular profile in the author bio.
                            </p>
                            {uploadingAuthor && (
                                <p className="text-sm text-cyan-400 mt-2">Uploading author image...</p>
                            )}
                        </>
                    ) : (
                        <div className="relative mt-3 w-fit">
                            <img
                                src={blog.authorImage}
                                alt="Author"
                                className="h-20 w-20 rounded-full border border-gray-700 object-cover"
                            />
                            <button
                                type="button"
                                onClick={() => handleChange("authorImage", "")}
                                className="absolute 0 top-0 -right-2 bg-red-500 text-white rounded-full p-1 
                             hover:bg-red-600 transition shadow-lg border border-black"
                                title="Remove image"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    )}
                </div>
            </div>






            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-8">
                {/* Cancel / Return Button */}
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 rounded-lg bg-transparent border border-gray-600
             text-gray-300 font-semibold hover:bg-gray-800 hover:text-white transition"
                >
                    {mode === "create" ? "Cancel" : "Return"}
                </button>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC]
             text-black font-semibold shadow-[0_0_20px_rgba(0,200,255,0.3)]
             hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed
             flex items-center gap-2"
                >
                    {isLoading && (
                        <svg
                            className="animate-spin h-5 w-5 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    )}
                    {isLoading
                        ? (mode === "create" ? "Creating..." : "Updating...")
                        : (mode === "create" ? "Create Blog" : "Update Blog")
                    }
                </button>
            </div>

        </form>
    );
};

export default BlogForm;
