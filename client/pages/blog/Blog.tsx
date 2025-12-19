import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import BlogHero from "../../components/blog/BlogHero";
import FeaturedBlog from "../../components/blog/FeaturedBlog";
import BlogList from "../../components/blog/BlogList";
import MoreBlogs from "../../components/blog/MoreBlogs";
import SpecialtiesSection from "../../components/blog/SpecialtiesSection";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { getAllBlogs, getPublishedBlogs } from "../../lib/blog/blogService";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";


// Utility function for conditional classNames (Tailwind-friendly)
function cn(...args: (string | false | undefined | null)[]) {
  return args.filter(Boolean).join(" ");
}




const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasFetched) {
          fetchBlogs();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasFetched]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const data = await getPublishedBlogs();
      // Sort by date (newest first)
      const publishedBlogs = data
        .sort((a, b) => new Date(b.date || b.createdAt || 0).getTime() - new Date(a.date || a.createdAt || 0).getTime());
      setBlogs(publishedBlogs);
      setHasFetched(true);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <BlogHero />

      <section ref={sectionRef} className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-14 lg:py-20 bg-black min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Featured Skeleton */}
              <div className="lg:col-span-5 h-[500px] bg-[#181A20] rounded-2xl border border-white/5 p-6 animate-pulse space-y-4">
                <Skeleton className="w-full h-[260px] rounded-xl" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="pt-4 flex justify-end">
                  <Skeleton className="h-10 w-32 rounded-lg" />
                </div>
              </div>
              {/* List Skeleton */}
              <div className="lg:col-span-7 space-y-5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-32 bg-[#181A20] rounded-2xl border border-white/5 p-5 flex gap-4 animate-pulse">
                    <div className="flex-1 space-y-3">
                      <Skeleton className="h-6 w-1/2" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                    <Skeleton className="w-32 h-full rounded-xl" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Featured Blog */}
                <FeaturedBlog blog={blogs[0]} />

                {/* Blog List (3 recent blogs) */}
                <BlogList blogs={blogs.slice(1, 4)} />
              </div>

              {/* More Blogs Section */}
              {blogs.length > 4 && <MoreBlogs blogs={blogs.slice(4)} />}
            </>
          )}
        </div>
      </section>

      {/* Specialties Section - Dynamic from Admin */}
      <SpecialtiesSection blogs={blogs} />

      <Footer />
    </div>
  );
};

export default Blog;
