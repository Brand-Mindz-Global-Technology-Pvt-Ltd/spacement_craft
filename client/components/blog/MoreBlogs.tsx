import React from 'react';

interface MoreBlogsProps {
    blogs: any[];
}

const MoreBlogs: React.FC<MoreBlogsProps> = ({ blogs }) => {
    if (!blogs || blogs.length === 0) return null;

    return (
        <div className="max-w-7xl mx-auto mt-20 px-4">
            <div className="text-center mb-10">
                <h2 className="font-reem text-[21px] md:text-[32px] text-white leading-tight">Related Blogs</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((item, i) => (
                    <div
                        key={i}
                        className="group relative bg-[#181A20]/85 border border-yellow-400/10 rounded-2xl overflow-hidden shadow backdrop-blur-sm transition-all duration-300 hover:border-[#0BFFD3] flex flex-col"
                    >
                        {/* Hover Glow */}
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0BFFD3]/15 via-transparent to-transparent blur-2xl" />
                        </div>

                        {/* Cover Image */}
                        <div className="relative w-full h-52 overflow-hidden z-10">
                            {item.coverImage ? (
                                <img
                                    src={item.coverImage}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    draggable={false}
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-700 text-xs">No Image</div>
                            )}

                            {/* Tags */}
                            <span className="absolute top-3 right-3 bg-[#23272F]/80 px-3 py-[6px] rounded-full text-white text-[10px] md:text-[11px] font-inter border border-white/5 z-20">
                                {item.isFeatured ? 'Featured' : item.isCuratedCore ? 'Curated' : 'Latest'}
                            </span>
                        </div>

                        <div className="p-5 flex-1 flex flex-col z-10">
                            <div className="flex items-start justify-between gap-2 mb-3">
                                <h3 className="font-reem text-[17px] text-white line-clamp-2 leading-snug group-hover:text-[#0BFFD3] transition-colors">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="font-inter text-[13px] text-gray-300 leading-relaxed line-clamp-3 mb-6 flex-1">
                                {item.shortDescription || item.content?.replace(/<[^>]*>?/gm, '').slice(0, 120)}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <p className="text-gray-400 text-[10px] uppercase tracking-wider">{item.date || 'Recent'}</p>
                                <button
                                    className="bg-transparent border border-[#0DF7D4]/30 px-4 py-1.5 rounded-lg text-[#0DF7D4] font-inter text-xs hover:bg-[#0DF7D4] hover:text-black transition duration-300"
                                    onClick={() => (window.location.href = `/blog/${item.slug}`)}
                                >
                                    Read Post
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreBlogs;
