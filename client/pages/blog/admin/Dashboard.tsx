import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/blog/admin/Sidebar";
import AdminNavbar from "../../../components/blog/admin/AdminNavbar";
import { getAllBlogs } from "../../../lib/blog/blogService";
import { useAuth } from "../../../contexts/AuthContext";

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    drafts: 0,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const blogs = await getAllBlogs();
        const published = blogs.filter((b) => b.isPublished).length;
        setStats({
          total: blogs.length,
          published,
          drafts: blogs.length - published,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const StatCard = ({ title, value, icon, gradient }: any) => (
    <div
      className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border border-white/10"
      style={{
        background: gradient,
      }}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-300 font-inter text-sm">{title}</h3>
          <div className="text-3xl">{icon}</div>
        </div>
        <p className="text-4xl font-bold text-white font-reem">
          {loading ? "..." : value}
        </p>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
    </div>
  );

  const QuickAction = ({ title, description, icon, onClick, color }: any) => (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl p-6 bg-white/5 border border-white/10 hover:border-[#0DF7D4]/50 transition-all duration-300 text-left w-full"
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${color}`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-white font-reem text-lg mb-1">{title}</h4>
          <p className="text-gray-400 font-inter text-sm">{description}</p>
        </div>
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-[#0DF7D4] group-hover:translate-x-1 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </button>
  );

  return (
    <div className="flex bg-black min-h-screen text-white ml-64">
      <Sidebar />
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-reem text-white mb-2">
              Dashboard
            </h1>
            <p className="text-gray-400 font-inter">
              Welcome back, {currentUser?.email?.split("@")[0] || "Admin"}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Total Blogs"
              value={stats.total}
              icon="📝"
              gradient="linear-gradient(135deg, rgba(13, 247, 212, 0.1) 0%, rgba(13, 247, 212, 0.05) 100%)"
            />
            <StatCard
              title="Published"
              value={stats.published}
              icon="✅"
              gradient="linear-gradient(135deg, rgba(44, 123, 220, 0.1) 0%, rgba(44, 123, 220, 0.05) 100%)"
            />
            <StatCard
              title="Drafts"
              value={stats.drafts}
              icon="📄"
              gradient="linear-gradient(135deg, rgba(254, 192, 83, 0.1) 0%, rgba(254, 192, 83, 0.05) 100%)"
            />
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-reem text-white mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <QuickAction
                title="Create New Blog"
                description="Write and publish a new blog post"
                icon="✍️"
                color="bg-gradient-to-br from-[#0DF7D4]/20 to-[#0DF7D4]/10"
                onClick={() => navigate("/admin/blog/create")}
              />
              <QuickAction
                title="Manage Blogs"
                description="View, edit, or delete existing blogs"
                icon="📋"
                color="bg-gradient-to-br from-[#2C7BDC]/20 to-[#2C7BDC]/10"
                onClick={() => navigate("/admin/blog/list")}
              />
            </div>
          </div>

          {/* Info Card */}
          {/* <div className="rounded-2xl p-6 bg-gradient-to-r from-[#0DF7D4]/10 to-[#2C7BDC]/10 border border-white/10">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h3 className="text-white font-reem text-lg mb-2">
                  Pro Tip
                </h3>
                <p className="text-gray-300 font-inter text-sm leading-relaxed">
                  Use rich formatting in your blog posts to make them more engaging.
                  Add images, headings, and lists to improve readability.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
