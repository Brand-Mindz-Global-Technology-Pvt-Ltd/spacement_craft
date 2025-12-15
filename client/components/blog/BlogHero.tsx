import React, { useEffect, useState } from "react";

// Utility function for conditional classNames (Tailwind-friendly)
function cn(...args: (string | false | undefined | null)[]) {
    return args.filter(Boolean).join(" ");
}

const BlogHero = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Reveal banner after a short delay
        const bannerTimer = setTimeout(() => {
            setShowBanner(true);
        }, 100);

        return () => clearTimeout(bannerTimer);
    }, []);

    return (
        <div
            className={cn(
                "relative w-full min-h-[350px] md:min-h-[500px] h-[50vw] max-h-[800px] flex items-end justify-start overflow-hidden transition-all duration-1000 ease-out",
                showBanner ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
        >
            <img
                src="/assets/blog/blogbanner.png"
                alt="Blog Banner"
                className="absolute inset-0 w-full h-full object-cover object-center"
                draggable={false}
            />
            <div className="absolute inset-0 lg:bg-gradient-to-b lg:from-black/0 lg:via-black/0 lg:to-black/0 bg-gradient-to-b from-black/10 via-black/10 to-black/80" />
            <div className="relative z-10 px-4 md:px-16 pb-8 md:pb-16 w-full">
                <h1 className="text-[21px] md:text-[38px] lg:text-[44px] font-normal letter-spacing-[2px] font-reem text-white drop-shadow-lg">
                    Blog
                </h1>
                <nav className="mt-3 flex items-center space-x-2 text-white/80 text-xs md:text-sm font-reem">
                    <a href="/" className="hover:underline font-reem">
                        Home
                    </a>
                    <span className="mx-1">{' > '}</span>
                    <span className="text-white font-medium font-reem">Blog</span>
                </nav>
            </div>
        </div>
    );
};

export default BlogHero;
