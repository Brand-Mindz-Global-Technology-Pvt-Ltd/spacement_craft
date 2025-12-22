import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/blog/admin/Sidebar";
import AdminNavbar from "../../../../components/blog/admin/AdminNavbar";
import { getAllBlogs, deleteBlog } from "../../../../lib/blog/blogService";
import { BlogData } from "../../../../types/BlogTypes";
import { Link } from "react-router-dom";

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const formatDate = (date: any) => {
    if (!date) return "N/A";
    const d = new Date(date);
    if (isNaN(d.getTime())) return "Invalid Date";
    return d.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const fetchBlogs = async () => {
    setLoading(true);
    const data = await getAllBlogs();
    setBlogs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async () => {
    if (!deleteId) return;
    setIsDeleting(true);
    try {
      await deleteBlog(deleteId);
      await fetchBlogs();
      setDeleteId(null);
    } catch (error) {
      console.error("Delete error:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex bg-black min-h-screen text-white ml-64">
      <Sidebar />

      <div className="flex-1">
        <AdminNavbar />

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">All Blogs</h2>

            <Link
              to="/admin/blog/create"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 rounded-lg text-black font-medium shadow"
            >
              + New Blog
            </Link>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <div className="relative">
                <div className="w-12 h-12 border-4 border-gray-700 border-t-transparent rounded-full animate-spin"
                  style={{
                    borderTopColor: '#0DF7D4',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#0DF7D4]/20 to-[#2C7BDC]/20 blur-lg"></div>
              </div>
              <p className="mt-4 text-gray-400 text-sm">Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <p className="text-gray-400">No blogs found.</p>
          ) : (
            <table className="w-full table-auto border border-gray-800 bg-[#111] text-sm rounded-lg overflow-hidden">
              <thead className="bg-[#1a1a1a] border-b border-gray-700 text-gray-300">
                <tr>
                  <th className="p-3 text-left">Title</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Created At</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="border-b border-gray-800 hover:bg-[#222]"
                  >
                    <td className="p-3">{blog.title}</td>
                    <td className="p-3 capitalize">{blog.category}</td>
                    <td className="p-3 text-gray-400">
                      {formatDate(blog.createdAt)}
                    </td>
                    <td className="p-3">
                      {(blog.status === "published" ||
                        (blog.status === "scheduled" && blog.scheduledDate && new Date(blog.scheduledDate) <= new Date()) ||
                        (blog.isPublished && blog.status !== 'scheduled')) ? (
                        <div className="flex flex-col">
                          <span className="text-green-400 font-medium">Published</span>
                          <span className="text-[10px] text-gray-500">{formatDate(blog.publishedAt || blog.createdAt)}</span>
                        </div>
                      ) : blog.status === "scheduled" ? (
                        <div className="flex flex-col">
                          <span className="text-blue-400 font-medium">Scheduled</span>
                          <span className="text-[10px] text-gray-500">{formatDate(blog.scheduledDate)}</span>
                        </div>
                      ) : (
                        <div className="flex flex-col">
                          <span className="text-yellow-400 font-medium">Draft</span>
                          <span className="text-[10px] text-gray-500">{formatDate(blog.updatedAt || blog.createdAt)}</span>
                        </div>
                      )}
                    </td>
                    <td className="p-3 flex gap-3">
                      <Link
                        to={`/admin/blog/edit/${blog.id}`}
                        className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => setDeleteId(blog.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md text-xs"
                      >
                        Delete
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => !isDeleting && setDeleteId(null)}
          ></div>

          <div className="relative w-full max-w-md bg-[#0b0b0b] border border-red-500/20 rounded-2xl shadow-2xl p-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-red-500/10 blur-[80px] rounded-full"></div>

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">Confirm Delete</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Are you sure you want to delete this blog? This action is permanent and cannot be undone.
              </p>

              <div className="flex gap-4">
                <button
                  disabled={isDeleting}
                  onClick={() => setDeleteId(null)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-800 text-gray-300 font-medium hover:bg-gray-800 hover:text-white transition disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  disabled={isDeleting}
                  onClick={handleDelete}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition disabled:opacity-50 flex items-center justify-center"
                >
                  {isDeleting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : "Delete Blog"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
