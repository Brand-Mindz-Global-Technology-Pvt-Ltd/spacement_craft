import React from 'react';

interface ContactInfoItem {
    icon: React.ReactNode;
    content: React.ReactNode;
}

interface ContactInfoSectionProps {
    title: string;
    items: ContactInfoItem[];
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ title, items }) => {
    return (
        <div>
            <h3 className="mb-2 text-base font-semibold tracking-wide text-white/90 relative pb-2">
                {title}
                <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-cyan-400"></span>
            </h3>
            <ul className="space-y-3 text-white/80 mt-4">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className="inline-block w-5 h-5 text-cyan-400 mt-0.5">
                            {item.icon}
                        </span>
                        <div className="flex-1">{item.content}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactInfoSection;
