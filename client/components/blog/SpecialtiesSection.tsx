import React, { useState, useRef } from 'react';

// Utility function for conditional classNames
function cn(...args: (string | false | undefined | null)[]) {
    return args.filter(Boolean).join(" ");
}

interface SpecialtiesSectionProps {
    blogs: any[];
}

const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ blogs }) => {
    const [selectedTab, setSelectedTab] = useState<string>("all");

    // Get unique categories from blogs
    const categories = ["all", ...Array.from(new Set(blogs.map(blog => blog.category).filter(Boolean)))];

    // Filter blogs by selected category
    const filteredBlogs = selectedTab === "all"
        ? blogs
        : blogs.filter(blog => blog.category === selectedTab);

    return (
        <section className="w-full max-w-7xl mx-auto mt-12 mb-16 px-4">
            <h2 className="font-reem text-2xl md:text-3xl text-white mb-6">Specialties</h2>

            {/* Tabs - Mobile Responsive */}
            <div className="flex gap-2 md:gap-4 mb-8 overflow-x-auto pb-2">
                {categories.map((category, idx) => (
                    <button
                        key={category + idx}
                        className={cn(
                            "px-3 py-2 md:px-6 md:py-2 rounded-md font-inter text-sm md:text-base border border-[#222] transition-all whitespace-nowrap flex-shrink-0 capitalize",
                            selectedTab === category
                                ? "bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] text-white shadow-[0_0_16px_0_rgba(13,247,212,0.25)] font-semibold"
                                : "bg-black/60 text-gray-200 hover:bg-[#181A20]/80 hover:text-white"
                        )}
                        onClick={() => setSelectedTab(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Horizontally scrollable cards with hand-drag (no visible scrollbar) */}
            <div
                className="relative select-none"
                style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0px, black 16px, black calc(100% - 16px), transparent 100%)" }}
            >
                <div
                    className="flex gap-4 md:gap-8 overflow-x-auto pb-2 snap-x snap-mandatory touch-pan-x"
                    style={{
                        scrollBehavior: "smooth",
                        cursor: "grab",
                        userSelect: "none",
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                        WebkitOverflowScrolling: "touch"
                    }}
                    tabIndex={0}
                    ref={el => {
                        // Attach drag-to-scroll logic only once
                        if (!el) return;
                        if ((el as any)._dragScrollAttached) return;
                        (el as any)._dragScrollAttached = true;

                        let isDown = false;
                        let startX = 0;
                        let scrollLeft = 0;

                        // Mouse events for desktop
                        el.addEventListener("mousedown", (e) => {
                            isDown = true;
                            el.classList.add("dragging");
                            el.style.cursor = "grabbing";
                            startX = e.pageX - el.offsetLeft;
                            scrollLeft = el.scrollLeft;
                        });
                        el.addEventListener("mouseleave", () => {
                            isDown = false;
                            el.classList.remove("dragging");
                            el.style.cursor = "grab";
                        });
                        el.addEventListener("mouseup", () => {
                            isDown = false;
                            el.classList.remove("dragging");
                            el.style.cursor = "grab";
                        });
                        el.addEventListener("mousemove", (e) => {
                            if (!isDown) return;
                            e.preventDefault();
                            const x = e.pageX - el.offsetLeft;
                            const walk = (x - startX) * 1.2;
                            el.scrollLeft = scrollLeft - walk;
                        });

                        // Touch events for mobile
                        el.addEventListener("touchstart", (e) => {
                            isDown = true;
                            el.classList.add("dragging");
                            startX = e.touches[0].pageX - el.offsetLeft;
                            scrollLeft = el.scrollLeft;
                        }, { passive: false });

                        el.addEventListener("touchend", () => {
                            isDown = false;
                            el.classList.remove("dragging");
                        });

                        el.addEventListener("touchmove", (e) => {
                            if (!isDown) return;
                            e.preventDefault();
                            const x = e.touches[0].pageX - el.offsetLeft;
                            const walk = (x - startX) * 1.2;
                            el.scrollLeft = scrollLeft - walk;
                        }, { passive: false });

                        // Hide scrollbar
                        el.style.scrollbarWidth = "none";
                        (el as HTMLElement).style.setProperty("overflow", "auto");
                        (el as HTMLElement).style.setProperty("scrollbar-width", "none");
                        (el as HTMLElement).style.setProperty("scrollbar-color", "transparent transparent");

                        const styleId = "hide-scrollbar-style";
                        if (!document.getElementById(styleId)) {
                            const style = document.createElement("style");
                            style.id = styleId;
                            style.innerHTML = `
                .flex::-webkit-scrollbar { display: none !important; height: 0 !important; background: transparent !important; }
                .flex.dragging { cursor: grabbing !important; }
              `;
                            document.head.appendChild(style);
                        }
                    }}
                >
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog, idx) => (
                            <div
                                key={blog.id || idx}
                                className={cn(
                                    "group relative bg-[#181A20]/85 border border-yellow-400/10 rounded-2xl p-0 shadow backdrop-blur-sm transition-colors duration-200 hover:border-[#FEC053] flex flex-col snap-center cursor-pointer",
                                    idx === 0 ? "ml-2 md:ml-6" : "",
                                    idx === filteredBlogs.length - 1 ? "mr-2 md:mr-6" : ""
                                )}
                                style={{
                                    minWidth: "280px",
                                    maxWidth: "320px",
                                    width: "100%",
                                    minHeight: "350px"
                                }}
                                onClick={() => window.location.href = `/blog/${blog.slug}`}
                            >
                                {/* Card Image */}
                                <div className="relative w-full h-[140px] md:h-[180px] rounded-t-2xl overflow-hidden">
                                    <img
                                        src={blog.coverImage || "https://via.placeholder.com/320x180"}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                                        draggable={false}
                                    />
                                    {blog.isCuratedCore && (
                                        <span className="absolute top-2 right-2 md:top-3 md:right-3 bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] text-black text-[10px] md:text-[11px] font-semibold px-1.5 md:px-2 py-0.5 rounded shadow">
                                            Curated Core
                                        </span>
                                    )}
                                </div>

                                {/* Card Content */}
                                <div className="flex flex-col flex-1 px-4 md:px-6 py-4 md:py-5">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-reem text-sm md:text-base lg:text-lg text-white line-clamp-1">
                                            {blog.title}
                                        </h3>
                                        <span className="text-gray-400 text-xs whitespace-nowrap ml-2">{blog.date}</span>
                                    </div>
                                    <p className="font-inter text-xs md:text-sm text-gray-300 leading-4 md:leading-5 mt-1 line-clamp-3">
                                        {blog.shortDescription}
                                    </p>
                                    <div className="mt-4 md:mt-5 flex justify-end">
                                        <button
                                            className="bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] px-3 md:px-4 py-1 md:py-1.5 rounded-lg text-white font-inter text-xs border border-yellow-400/30 hover:from-[#0DF7D4]/85 hover:to-[#2C7BDC]/85 transition"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.location.href = `/blog/${blog.slug}`;
                                            }}
                                        >
                                            Explore more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="w-full text-center py-12">
                            <p className="text-gray-400 font-inter">No blogs found in this category</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SpecialtiesSection;
