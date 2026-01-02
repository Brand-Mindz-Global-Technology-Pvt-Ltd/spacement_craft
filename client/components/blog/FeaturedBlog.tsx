import React from 'react';

interface FeaturedBlogProps {
    blog: any;
}

const FeaturedBlog: React.FC<FeaturedBlogProps> = ({ blog }) => {
    if (!blog) return null;

    return (
        <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-[#23272F] to-[#181A20] border border-[#FEC053] rounded-2xl shadow-xl overflow-hidden flex flex-col lg:h-[560px]">
                {/* Featured Image */}
                <div className="relative w-full h-[240px] sm:h-[260px]">
                    {/* <img
                        src={blog.coverImage || "https://api.builder.io/api/v1/image/assets/TEMP/8d131cf968ba9d25f16ec41d57b7bf0809d4b910?width=1420"}
                        alt={blog.title || "Featured Blog"}
                        className="w-full h-full object-cover"
                        draggable={false}
                    /> */}
                    {blog.coverImage ? (
                        <img
                            src={blog.coverImage}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="relative w-full h-full flex-shrink-0 rounded-xl bg-gray-900/50 flex items-center justify-center border border-white/5 z-10">
                            <span className="text-gray-600 text-[10px]">No Image</span>
                        </div>
                    )}
                    <span className="absolute top-3 right-3 bg-[#23272F]/80 px-3 py-[6px] rounded-full text-white text-[11px] font-inter">
                        {blog.isFeatured ? 'Featured' : blog.isCuratedCore ? 'Curated Core' : 'Latest'}
                    </span>
                </div>

                {/* Featured Content */}
                <div className="flex-1 flex flex-col p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-reem text-[18px] sm:text-lg md:text-xl text-white">
                            {blog.title}
                        </h3>
                        <div className="text-right flex-shrink-0">
                            <p className="text-gray-400 text-xs leading-none mb-1">Date</p>
                            <p className="text-white text-xs sm:text-[13px] leading-none">
                                {new Date(blog.publishedAt || blog.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>
                    </div>

                    <p className="font-inter text-[12px] sm:text-xs md:text-sm text-gray-300 leading-5 mb-4 flex-1 line-clamp-5">
                        {blog.shortDescription || "No description available yet."}
                    </p>

                    <div className="flex justify-end">
                        <button
                            className="bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] px-4 py-1.5 rounded-lg text-white font-inter text-xs border border-yellow-400/30 hover:from-[#0DF7D4]/85 hover:to-[#2C7BDC]/85 transition"
                            onClick={() => {
                                if (blog.slug) {
                                    window.location.href = `/blog/${blog.slug}`;
                                }
                            }}
                        >
                            Explore more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlog;
