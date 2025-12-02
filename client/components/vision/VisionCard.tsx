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
}

const VisionCard: React.FC<VisionCardProps> = ({
    id,
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt,
    imagePosition = 'left'
}) => {
    const ImageSection = (
        <div className="flex-1 flex items-center justify-center p-6 md:p-8">
            <div className="w-full h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="object-cover w-full h-full rounded-xl border border-[#222826]"
                    style={{ objectPosition: "center" }}
                />
            </div>
        </div>
    );

    const TextSection = (
        <div className="flex-1 flex flex-col justify-center px-8 py-8 md:py-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-2xl font-semibold uppercase tracking-wide mb-4 font-inter bg-[#222826] px-4 py-2 rounded-t-lg rounded-b-none shadow">
                {title}
            </h2>
            <div className="mb-4">
                <span className="bg-[#f7b93e] text-[#222826] text-base md:text-lg font-semibold px-4 py-2 rounded shadow font-inter inline-block">
                    {subtitle}
                </span>
            </div>
            <p className="text-[#c7cfc9] text-sm md:text-base leading-relaxed font-inter">
                {description}
            </p>
        </div>
    );

    return (
        <Card id={id} className="bg-[#181c1b] border border-[#222826] rounded-2xl overflow-hidden shadow-lg mt-8">
            <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
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
