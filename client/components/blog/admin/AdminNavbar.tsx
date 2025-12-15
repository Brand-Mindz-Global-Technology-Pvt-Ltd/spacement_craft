import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "react-hot-toast";

const AdminNavbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/admin/blog/login");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  return (
    <div className="w-full bg-[#181818] p-4 border-b border-gray-800 text-white sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold font-reem">Admin Panel</h1>

        <div className="flex items-center gap-4">
          {/* User Info */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
            <div className="w-2 h-2 bg-[#0DF7D4] rounded-full animate-pulse" />
            <span className="text-sm font-inter text-gray-300">
              {currentUser?.email}
            </span>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg transition-all duration-300 group"
            title="Logout"
          >
            <svg
              className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="text-sm font-inter text-red-400">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
