import React, { useCallback } from "react";
import Sidebar from "../../../../components/blog/admin/Sidebar";
import AdminNavbar from "../../../../components/blog/admin/AdminNavbar";
import BlogForm from "../../../../components/blog/admin/BlogForm";
import { createBlog } from "../../../../lib/blog/blogService";
import { useNavigate } from "react-router-dom";

const AddBlog: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(
  async (blogData: any) => {
    console.log("[AddBlog] handleSubmit called with:", blogData);
    try {
      await createBlog(blogData);
      console.log("[AddBlog] createBlog finished, navigating...");
      navigate("/admin/blog/list");
    } catch (error) {
      console.error("[AddBlog] Error creating blog:", error);
      throw error; // Re-throw so BlogForm can show toast
    }
  },
  [navigate]
);




  return (
    <div className="flex bg-black min-h-screen text-white ml-64">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminNavbar />

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Blog</h2>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 shadow-md">
            <BlogForm mode="create" onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
