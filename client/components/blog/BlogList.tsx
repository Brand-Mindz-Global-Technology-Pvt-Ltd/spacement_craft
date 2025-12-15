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
                    className="relative bg-[#181A20]/85 border border-yellow-400/10 rounded-2xl p-4 sm:p-5 shadow backdrop-blur-sm transition-colors duration-200 hover:border-[#FEC053] flex flex-col sm:flex-row items-start gap-4"
                >
                    {/* Cover Image */}
                    {item.coverImage && (
                        <div className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
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

                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="font-reem text-[16px] sm:text-base md:text-lg text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-xs leading-none">{item.date}</p>
                        </div>

                        <p className="font-inter text-[12px] sm:text-xs md:text-sm text-gray-300 leading-5 mt-2 line-clamp-3">
                            {item.shortDescription}
                        </p>

                        <div className="mt-4 flex justify-end">
                            <button
                                className="bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] px-3 py-1 rounded-lg text-white font-inter text-xs border border-yellow-400/30 hover:from-[#0DF7D4]/85 hover:to-[#2C7BDC]/85 transition"
                                onClick={() => (window.location.href = `/blog/${item.slug}`)}
                            >
                                Read
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
