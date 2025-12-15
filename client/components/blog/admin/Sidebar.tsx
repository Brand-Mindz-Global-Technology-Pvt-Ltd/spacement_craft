import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  const menuItems = [
    { label: "Dashboard", path: "/admin/blog/dashboard" },
    { label: "Blog List", path: "/admin/blog/list" },
    { label: "Add Blog", path: "/admin/blog/create" },
  ];

  return (
    <div className="w-64 bg-[#111] h-screen p-6 border-r border-gray-800 fixed left-0 top-0">
      <h2 className="text-xl font-bold mb-6 text-white">Admin</h2>

      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block px-3 py-2 rounded-md transition ${pathname === item.path
                ? "bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] text-black font-semibold"
                : "text-gray-300 hover:bg-[#222] hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
