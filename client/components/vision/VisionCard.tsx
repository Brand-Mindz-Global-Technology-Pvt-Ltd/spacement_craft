import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface VisionCardProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: 'left' | 'right';
    index: number;
    scrollProgress: number;
    totalCards: number;
}

const VisionCard: React.FC<VisionCardProps> = ({
    id,
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt,
    imagePosition = 'left',
    index,
    scrollProgress,
    totalCards
}) => {
    // Calculate opacity for grayscale overlay (starts later, after card is mostly read)
    const overlayOpacity = Math.max(0, (scrollProgress - 0.5) * 2);

    // Calculate scale effect (slight zoom out when being covered)
    const scale = 1 - (scrollProgress * 0.05);

    // Determine if this card should be visible
    const isVisible = scrollProgress < 1 || index === totalCards - 1;

    const ImageSection = (
        <div className="flex-1 relative min-h-[200px] md:min-h-[300px] lg:min-h-[500px] "
            style={{
                background: "radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, #181c1b 100%)"
            }}
        >
            <img
                src={imageSrc}
                alt={imageAlt}
                className={`absolute inset-0 w-full h-full object-cover 
  ${imagePosition === "left" ? "lg:pl-6 lg:py-10" : "lg:pr-6 lg:py-10"}`}
                style={{ objectPosition: "center" }}
            />
        </div>
    );

    const TextSection = (
        <div
            className="flex-1 flex flex-col justify-center px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-12"
            style={{
                background: "radial-gradient(circle, rgba(11, 255, 211, 0.15) 0%, #181c1b 100%)"
            }}
        >
            <h2 className="text-white text-[21px] md:text-[38px] lg:text-[44px] font-reem font-thin uppercase tracking-wide rounded-t-lg rounded-b-none shadow">
                {title}
            </h2>
            <div className="border-b-1 border border-white my-5"></div>
            <div className="mb-4">
                <span className="block w-full bg-[#D38600] text-white uppercase text-[14px] md:text-[18px] font-light px-4 py-2 rounded shadow font-reem text-center">
                    {subtitle}
                </span>
            </div>

            <p className="text-[#c7cfc9] text-[12px] md:text-sm text-justify leading-relaxed font-inter">
                {description}
            </p>
        </div>
    );

    return (
        <Card
            id={id}
            className="bg-[#181c1b] w-full border-t border-l border-t-white border-l-white border-b border-r border-b-[#FEC053] border-r-[#FEC053]  rounded-2xl overflow-hidden shadow-lg relative"
            style={{
                transform: `scale(${scale})`,
                transition: 'transform 0.1s linear',
                willChange: 'transform'
            }}
        >
            {/* Grayscale Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-grayscale z-10 pointer-events-none"
                style={{
                    opacity: overlayOpacity,
                    backdropFilter: `grayscale(${scrollProgress * 100}%)`,
                    transition: 'opacity 0.1s linear',
                    willChange: 'opacity'
                }}
            />

            <CardContent className="p-0 relative">
                <div className={`flex flex-col ${imagePosition === 'right' ? 'flex-col-reverse' : ''} md:flex-row`}>
                    {imagePosition === 'left' ? (
                        <>
                            {ImageSection}
                            {TextSection}
                        </>
                    ) : (
                        <>
                            {TextSection}
                            {ImageSection}
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default VisionCard;
