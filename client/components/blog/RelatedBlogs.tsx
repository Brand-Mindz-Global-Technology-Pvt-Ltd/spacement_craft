import React from 'react';

interface RelatedBlogsProps {
    blogs: any[];
    currentBlogId?: string;
}

const RelatedBlogs: React.FC<RelatedBlogsProps> = ({ blogs, currentBlogId }) => {
    // Filter out current blog and limit to 3 related blogs
    const relatedBlogs = blogs
        .filter(blog => blog.id !== currentBlogId)
        .slice(0, 3);

    if (relatedBlogs.length === 0) return null;

    return (
        <section className="w-full bg-black py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-16">
                <h2 className="font-reem text-2xl md:text-3xl text-white mb-8">Related Blogs</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedBlogs.map((blog, i) => (
                        <div
                            key={i}
                            className="relative bg-[#181A20]/85 border border-yellow-400/10 rounded-2xl overflow-hidden shadow backdrop-blur-sm transition-colors duration-200 hover:border-[#FEC053] cursor-pointer"
                            onClick={() => window.location.href = `/blog/${blog.slug}`}
                        >
                            {/* Cover Image */}
                            {blog.coverImage && (
                                <div className="relative w-full h-48">
                                    <img
                                        src={blog.coverImage}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                        draggable={false}
                                    />
                                </div>
                            )}

                            {/* Tags */}
                            {(blog.isFeatured || blog.isCuratedCore) && (
                                <span className="absolute top-3 right-3 bg-[#23272F]/80 px-3 py-[6px] rounded-full text-white text-[11px] font-inter">
                                    {blog.isFeatured ? 'Featured' : 'Curated Core'}
                                </span>
                            )}

                            <div className="p-4">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="font-reem text-[16px] text-white line-clamp-2">
                                        {blog.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-xs mb-2">{blog.date}</p>
                                <p className="font-inter text-[12px] text-gray-300 leading-5 line-clamp-3 mb-4">
                                    {blog.shortDescription}
                                </p>
                                <button
                                    className="w-full bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] px-3 py-2 rounded-lg text-white font-inter text-xs border border-yellow-400/30 hover:from-[#0DF7D4]/85 hover:to-[#2C7BDC]/85 transition"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = `/blog/${blog.slug}`;
                                    }}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedBlogs;
