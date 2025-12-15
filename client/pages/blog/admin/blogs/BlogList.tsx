import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/blog/admin/Sidebar";
import AdminNavbar from "../../../../components/blog/admin/AdminNavbar";
import { getAllBlogs, deleteBlog } from "../../../../lib/blog/blogService";
import { BlogData } from "../../../../types/BlogTypes";
import { Link } from "react-router-dom";

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    setLoading(true);
    const data = await getAllBlogs();
    setBlogs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    await deleteBlog(id);
    await fetchBlogs();
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
                  <th className="p-3 text-left">Published</th>
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
                    <td className="p-3">
                      {blog.isPublished ? (
                        <span className="text-green-400">Published</span>
                      ) : (
                        <span className="text-yellow-400">Draft</span>
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
                        onClick={() => handleDelete(blog.id)}
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
    </div>
  );
};

export default BlogList;
