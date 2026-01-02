import React from 'react';

interface BlogListProps {
    blogs: any[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
    if (!blogs || blogs.length === 0) return null;

    return (
        <div className="lg:col-span-7 flex flex-col gap-5">
            {blogs.map((item, i) => (
                <div
                    key={i}
                    className="group relative bg-[#181A20]/85 border border-yellow-400/10 rounded-2xl p-4 sm:p-5 shadow backdrop-blur-sm transition-all duration-300 hover:border-[#0BFFD3] flex flex-col sm:flex-row items-center sm:items-stretch gap-4 overflow-hidden"
                >
                    {/* Hover Glow */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0BFFD3]/20 via-transparent to-transparent blur-2xl" />
                    </div>
                    {/* Cover Image on the RIGHT */}
                    {item.coverImage ? (
                        <div className="relative w-full sm:w-36 md:w-44 h-32 sm:h-auto flex-shrink-0 rounded-xl overflow-hidden z-10">
                            <img
                                src={item.coverImage}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                draggable={false}
                            />
                        </div>
                    ) : (
                        <div className="relative w-full sm:w-36 md:w-44 h-32 flex-shrink-0 rounded-xl bg-gray-900/50 flex items-center justify-center border border-white/5 z-10">
                            <span className="text-gray-600 text-[10px]">No Image</span>
                        </div>
                    )}
                    <div className="relative z-10 flex-1 flex flex-col justify-between py-1">
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                <h3 className="font-reem text-[16px] sm:text-base md:text-lg text-white group-hover:text-[#0BFFD3] transition-colors line-clamp-1">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="font-inter text-[12px] sm:text-xs md:text-sm text-gray-300 leading-5 mt-2 line-clamp-2">
                                {item.shortDescription || item.content?.replace(/<[^>]*>?/gm, '').slice(0, 150)}
                            </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <p className="text-gray-400 text-[10px] md:text-xs">
                                {new Date(item.publishedAt || item.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </p>
                            <button
                                className="bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] px-3 py-1 rounded-lg text-white font-inter text-xs border border-yellow-400/30 hover:from-[#0DF7D4]/85 hover:to-[#2C7BDC]/85 transition transform hover:scale-105"
                                onClick={() => (window.location.href = `/blog/${item.slug}`)}
                            >
                                Read
                            </button>
                        </div>
                    </div>

                    {/* Tags at Top Right */}
                    <span className="absolute top-3 right-3 z-20 bg-[#23272F]/80 px-3 py-[6px] rounded-full text-white text-[10px] md:text-[11px] font-inter border border-white/5">
                        {item.isFeatured ? 'Featured' : item.isCuratedCore ? 'Curated' : 'Latest'}
                    </span>


                </div>
            ))}
        </div>
    );
};

export default BlogList;
