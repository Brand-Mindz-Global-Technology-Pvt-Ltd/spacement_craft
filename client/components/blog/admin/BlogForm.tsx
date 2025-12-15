import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../../firebase";
import { toast } from "../../../hooks/use-toast";

// Wrapper to suppress ReactQuill's findDOMNode warning
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


interface BlogData {
    title: string;
    slug: string;
    shortDescription: string;
    category: string;
    tags: string[];
    date: string;
    content: string;
    coverImage: string;
    bannerImage: string;

    // NEW FIELDS
    isFeatured: boolean;
    isCurated: boolean;
    isPublished: boolean;

    seoTitle: string;
    seoDescription: string;
    metaKeywords: string[];

    authorName: string;
    authorRole: string;
    authorImage: string;
}


const storage = getStorage(app);

const uploadImage = async (file: File, folder: string) => {
    const fileRef = ref(storage, `${folder}/${Date.now()}_${file.name}`);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
};




const BlogForm: React.FC<BlogFormProps> = ({ mode, onSubmit, initialData }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [uploadingCover, setUploadingCover] = useState(false);
    const [uploadingBanner, setUploadingBanner] = useState(false);
    const [uploadingAuthor, setUploadingAuthor] = useState(false);

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
            isPublished: true,
            seoTitle: "",
            seoDescription: "",
            metaKeywords: [],
            authorName: "",
            authorRole: "",
            authorImage: "",
        }
    );

    // Track previous content to prevent ReactQuill onChange loop
    const previousContentRef = useRef(blog.content);


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
            await onSubmit(blog);
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
                    className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
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
                    className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
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
                <select
                    value={blog.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
               text-white focus:border-cyan-400 outline-none transition"
                >
                    <option value="">Select category</option>
                    <option value="space">Space</option>
                    <option value="technology">Technology</option>
                    <option value="satellite">Satellite</option>
                    <option value="technology2">Technology 2</option>
                    <option value="satellite2">Satellite 2</option>
                </select>
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
                    className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
               text-white focus:border-cyan-400 outline-none transition"
                />
            </div>



            {/* Blog Date */}
            <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-300">Blog Date</label>
                <input
                    type="date"
                    value={blog.date || ""}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
               text-white focus:border-cyan-400 outline-none transition"
                />
            </div>

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

                {blog.coverImage && (
                    <img
                        src={blog.coverImage}
                        className="mt-3 h-32 rounded-lg border border-gray-700 object-cover"
                    />
                )}
            </div>

            {/* Banner Image */}
            <div className="mb-6">
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

                {blog.bannerImage && (
                    <img
                        src={blog.bannerImage}
                        className="mt-3 h-32 rounded-lg border border-gray-700 object-cover"
                    />
                )}
            </div>


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

                {/* Published */}
                <label className="flex items-center gap-3 bg-black border border-yellow-400/20 
                   px-4 py-3 rounded-lg cursor-pointer">
                    <input
                        type="checkbox"
                        checked={blog.isPublished}
                        onChange={(e) => handleChange("isPublished", e.target.checked)}
                        className="w-4 h-4"
                    />
                    <span className="text-gray-300 text-sm">Published</span>
                </label>

            </div>

            {/* SEO Title */}
            <div className="mb-5">
                <label className="block mb-2 text-sm text-gray-300">SEO Title</label>
                <input
                    type="text"
                    value={blog.seoTitle}
                    onChange={(e) => handleChange("seoTitle", e.target.value)}
                    placeholder="SEO title for Google"
                    className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
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
                    className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
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
                        className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
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
                        className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-400/20 
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
                    {uploadingAuthor && (
                        <p className="text-sm text-cyan-400 mt-2">Uploading author image...</p>
                    )}

                    {blog.authorImage && (
                        <img
                            src={blog.authorImage}
                            className="mt-3 h-20 w-20 rounded-full border border-gray-700 object-cover"
                        />
                    )}
                </div>
            </div>





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

        </form>
    );
};

export default BlogForm;
