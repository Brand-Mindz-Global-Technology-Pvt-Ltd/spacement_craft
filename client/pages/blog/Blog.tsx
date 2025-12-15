import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import BlogHero from "../../components/blog/BlogHero";
import FeaturedBlog from "../../components/blog/FeaturedBlog";
import BlogList from "../../components/blog/BlogList";
import MoreBlogs from "../../components/blog/MoreBlogs";
import SpecialtiesSection from "../../components/blog/SpecialtiesSection";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { getAllBlogs } from "../../lib/blog/blogService";
import { useNavigate } from "react-router-dom";


// Utility function for conditional classNames (Tailwind-friendly)
function cn(...args: (string | false | undefined | null)[]) {
  return args.filter(Boolean).join(" ");
}



// Example specialties data for each tab
const specialtiesData: Record<string, Array<{
  title: string;
  img: string;
  desc: string;
  date?: string;
  isCurated?: boolean;
}>> = {
  space: [
    {
      title: "Hyperspectral Vision",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.",
      date: "2025-05-01",
      isCurated: true,
    },
    {
      title: "Defence Surveillance",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/3f1e84217d78a591e5fe172b0a9b8d3029537341?width=1009",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.",
      date: "2025-06-10",
    },
    {
      title: "Ocean Net",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/46faf5a2fa5b4c6392659eaf48c4ad8540804c04?width=978",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.",
      date: "2025-07-15",
    },
  ],
  technology: [
    {
      title: "Farm Scan",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      desc: "Monitor crop health and optimize yield with real-time multispectral imaging.",
      date: "2025-08-01",
      isCurated: true,
    },
    {
      title: "Sky Vision",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      desc: "High-resolution atmospheric analysis for weather and climate research.",
      date: "2025-09-10",
    },
    {
      title: "Traffic Sense 360",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
      desc: "Urban mobility insights and traffic monitoring from orbit.",
      date: "2025-10-05",
    },
  ],
  satellite: [
    {
      title: "Mineris",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      desc: "Resource mapping and mineral exploration with advanced sensors.",
      date: "2025-11-01",
    },
    {
      title: "Eco Watch",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051",
      desc: "Track environmental changes and support conservation efforts.",
      date: "2025-12-10",
      isCurated: true,
    },
    {
      title: "OceanNet",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/46faf5a2fa5b4c6392659eaf48c4ad8540804c04?width=978",
      desc: "Comprehensive ocean monitoring for research and industry.",
      date: "2026-01-15",
    },
  ],
  technology2: [
    {
      title: "Tech Demo 1",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      desc: "A new technology demonstration.",
      date: "2026-02-01",
    },
    {
      title: "Tech Demo 2",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      desc: "Another technology demonstration.",
      date: "2026-03-10",
    },
  ],
  satellite2: [
    {
      title: "Satellite Demo 1",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/3f1e84217d78a591e5fe172b0a9b8d3029537341?width=1009",
      desc: "A new satellite demonstration.",
      date: "2026-04-01",
    },
    {
      title: "Satellite Demo 2",
      img: "https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051",
      desc: "Another satellite demonstration.",
      date: "2026-05-10",
    },
  ],
};

const Blog = () => {
  const [selectedTab, setSelectedTab] = useState("space");
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const data = await getAllBlogs();
        // Filter only published blogs and sort by date (newest first)
        const publishedBlogs = data
          .filter((blog) => blog.isPublished === true)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setBlogs(publishedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);


  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <BlogHero />

      {/* Loading State */}
      {loading ? (
        <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-20 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
            <div className="relative">
              {/* Spinning circle */}
              <div className="w-16 h-16 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"
                style={{
                  borderTopColor: '#0DF7D4',
                  animation: 'spin 1s linear infinite'
                }}></div>
              {/* Inner glow */}
              <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#0DF7D4]/20 to-[#2C7BDC]/20 blur-xl"></div>
            </div>
            <p className="mt-6 text-gray-400 font-inter text-sm">Loading blogs...</p>
          </div>
        </section>
      ) : (
        <>
          <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-14 lg:py-20 bg-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Featured Blog */}
              <FeaturedBlog blog={blogs[0]} />

              {/* Blog List (3 recent blogs) */}
              <BlogList blogs={blogs.slice(1, 4)} />
            </div>

            {/* More Blogs Section */}
            {blogs.length > 4 && <MoreBlogs blogs={blogs.slice(4)} />}
          </section>


          {/* Specialties Section - Dynamic from Admin */}
          <SpecialtiesSection blogs={blogs} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Blog;
