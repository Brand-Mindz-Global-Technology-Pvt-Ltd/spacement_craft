import React from 'react';

interface MoreBlogsProps {
    blogs: any[];
}

const MoreBlogs: React.FC<MoreBlogsProps> = ({ blogs }) => {
    if (!blogs || blogs.length === 0) return null;

    return (
        <div className="max-w-7xl mx-auto mt-12 px-4">
            <h2 className="font-reem text-2xl md:text-3xl text-white mb-6">Remaining Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((item, i) => (
                    <div
                        key={i}
                        className="relative bg-[#181A20]/85 border border-yellow-400/10 rounded-2xl overflow-hidden shadow backdrop-blur-sm transition-colors duration-200 hover:border-[#FEC053]"
                    >
                        {/* Cover Image */}
                        {item.coverImage && (
                            <div className="relative w-full h-48">
                                <img
                                    src={item.coverImage}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                />
                            </div>
                        )}

                        {/* Tags */}
                        {(item.isFeatured || item.isCuratedCore) && (
                            <span className="absolute top-3 right-3 bg-[#23272F]/80 px-3 py-[6px] rounded-full text-white text-[11px] font-inter">
                                {item.isFeatured ? 'Featured' : 'Curated Core'}
                            </span>
                        )}

                        <div className="p-4">
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="font-reem text-[16px] text-white line-clamp-2">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-gray-400 text-xs mb-2">{item.date}</p>
                            <p className="font-inter text-[12px] text-gray-300 leading-5 line-clamp-3 mb-4">
                                {item.shortDescription}
                            </p>
                            <button
                                className="w-full bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] px-3 py-2 rounded-lg text-white font-inter text-xs border border-yellow-400/30 hover:from-[#0DF7D4]/85 hover:to-[#2C7BDC]/85 transition"
                                onClick={() => (window.location.href = `/blog/${item.slug}`)}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreBlogs;
