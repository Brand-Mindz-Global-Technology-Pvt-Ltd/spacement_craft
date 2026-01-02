import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Navbar from "../../components/Navbar";
import BlogDetailHero from "../../components/blog/BlogDetailHero";
import RelatedBlogs from "../../components/blog/RelatedBlogs";
import { useSpring, animated } from "@react-spring/web";
import { useParams } from "react-router-dom";
import { getBlogBySlug, getPublishedBlogs } from "../../lib/blog/blogService";
import Footer from "@/components/Footer";
import SpecialtiesSection from "../../components/blog/SpecialtiesSection";

function cn(...args) {
  return args.filter(Boolean).join(" ");
}

const BlogPage = () => {
  const [blog, setBlog] = useState<any>(null);
  const [allBlogs, setAllBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    const loadBlog = async () => {
      if (!slug) return;
      setLoading(true);
      const [blogData, blogsData] = await Promise.all([
        getBlogBySlug(slug),
        getPublishedBlogs()
      ]);
      setBlog(blogData);

      const publishedBlogs = blogsData
        .sort((a, b) => {
          const dateA = new Date(a.publishedAt || a.createdAt || 0).getTime();
          const dateB = new Date(b.publishedAt || b.createdAt || 0).getTime();
          return dateB - dateA;
        });
      setAllBlogs(publishedBlogs);
      setLoading(false);
    };
    loadBlog();
  }, [slug]);

  // Refs for GSAP animation
  const blogSectionRef = useRef<HTMLDivElement>(null);
  const coverImageRef = useRef<HTMLImageElement>(null);
  const specialtiesRef = useRef<HTMLDivElement>(null);
  const specialtiesCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  const blogSpring = useSpring({
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    config: { tension: 120, friction: 30 },
    delay: 200,
  });

  const specialtiesSpring = useSpring({
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    config: { tension: 120, friction: 30 },
    delay: 400,
  });

  // GSAP Animations
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (blogSectionRef.current) {
      gsap.fromTo(
        blogSectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blogSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (specialtiesRef.current) {
      gsap.fromTo(
        specialtiesRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: specialtiesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate cover image on scroll
    if (coverImageRef.current) {
      gsap.fromTo(
        coverImageRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: coverImageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />

      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"
              style={{
                borderTopColor: '#0DF7D4',
                animation: 'spin 1s linear infinite'
              }}></div>
            <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#0DF7D4]/20 to-[#2C7BDC]/20 blur-xl"></div>
          </div>
        </div>
      ) : (
        <>
          {/* Blog Detail Hero */}
          <BlogDetailHero title={blog?.title || ""} />

          {/* CONTENT SECTION - Cover Image + Content in One Container */}
          <animated.section
            ref={blogSectionRef}
            style={blogSpring}
            className="w-full bg-black py-12 md:py-20"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-16">

              {/* Single Container with Radial Gradient Background & Gold Border */}
              <div
                className="relative rounded-2xl shadow-2xl overflow-hidden"
                style={{
                  background: "radial-gradient(circle, rgba(11, 255, 211, 0.4) 0%, rgba(24, 28, 27, 0.8) 100%)",
                  border: "1px solid #FEC053"
                }}
              >
                {/* Cover Image at Top with Animation */}
                {blog?.coverImage && (
                  <div className="w-full overflow-hidden">
                    <img
                      ref={coverImageRef}
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-auto object-cover"
                      draggable={false}
                    />
                  </div>
                )}

                {/* Blog Content Below Cover Image */}
                <div className="px-6 md:px-16 py-10 md:py-14">

                  {/* Title + Share + Date */}
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-700">
                    <h2 className="font-reem text-[21px] sm:text-2xl md:text-3xl text-white font-semibold flex-1">
                      {blog?.title}
                    </h2>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      {/* Share Button */}
                      <button
                        onClick={() => {
                          const url = window.location.href;
                          navigator.clipboard.writeText(url);
                          alert('Blog URL copied to clipboard!');
                        }}
                        className="flex items-center gap-2 px-3 py-2 bg-[#0DF7D4]/10 hover:bg-[#0DF7D4]/20 border border-[#0DF7D4]/30 rounded-lg transition-all duration-300 group"
                        title="Share this blog"
                      >
                        <svg
                          className="w-4 h-4 text-[#0DF7D4] group-hover:scale-110 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>

                      {/* Date */}
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-500 font-inter">Date</span>
                        <span className="text-sm text-gray-300 font-inter whitespace-nowrap">
                          {new Date(blog?.publishedAt || blog?.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div
                    className="text-gray-200 font-inter text-justify text-[12px] sm:text-[14px] md:text-[16px] leading-relaxed mb-8 prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: blog?.content || ""
                    }}
                  />

                  {/* Author Box - Centered */}
                  {blog?.authorName && (
                    <div className="flex items-center gap-4 bg-[#181A20]/80 border border-[#222] rounded-xl p-6 mt-10 shadow-lg max-w-lg mx-auto">
                      <img
                        src={blog?.authorImage || "/assets/author-avatar.jpg"}
                        alt={blog?.authorName}
                        className="w-20 h-20 rounded-full object-cover border-2 border-[#0DF7D4]"
                        draggable={false}
                      />

                      <div>
                        <div className="font-reem text-white text-lg font-semibold">
                          {blog.authorName}
                        </div>

                        <div className="text-sm text-gray-400 font-inter mb-2">
                          {blog?.authorRole || "Blog Author"}
                        </div>

                        {blog?.authorBio && (
                          <div className="text-sm text-gray-300 font-inter">
                            {blog.authorBio}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </animated.section>

          {/* SPECIALTIES SECTION (Dynamic from Admin) */}
          <SpecialtiesSection blogs={allBlogs} />

          {/* Related Blogs Section */}
          <RelatedBlogs blogs={allBlogs} currentBlogId={blog?.id} />

          <Footer />
        </>
      )}
    </div>
  );
};

export default BlogPage;
