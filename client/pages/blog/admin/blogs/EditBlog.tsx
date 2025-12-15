import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../../../components/blog/admin/Sidebar";
import AdminNavbar from "../../../../components/blog/admin/AdminNavbar";
import BlogForm from "../../../../components/blog/admin/BlogForm";

import { getBlogById, updateBlog } from "../../../../lib/blog/blogService";

const EditBlog: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await getBlogById(id!);
      setBlog(data);
      setLoading(false);
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = useCallback(async (updatedData: any) => {
    try {
      await updateBlog(id!, updatedData);
      navigate("/admin/blog/list");
    } catch (error) {
      console.error("Error updating blog:", error);
      throw error; // Re-throw so BlogForm can handle it
    }
  }, [id, navigate]);

  return (
    <div className="flex bg-black min-h-screen text-white ml-64">
      <Sidebar />

      <div className="flex-1">
        <AdminNavbar />

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>

          {loading ? (
            <p className="text-gray-400">Loading...</p>
          ) : (
            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <BlogForm mode="edit" initialData={blog} onSubmit={handleSubmit} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
