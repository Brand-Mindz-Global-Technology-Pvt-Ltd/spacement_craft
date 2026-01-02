import React from "react";

export interface JobData {
    id: number;
    title: string;
    type: string;
    description: string;
    location: string;
}

interface JobCardProps {
    job: JobData;
    emailTo?: string;
}

const JobCard: React.FC<JobCardProps> = ({
    job,
    emailTo = "careers@spacemancraft.in"
}) => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${encodeURIComponent(
        `Job Application: ${job.title} - ${job.location}`
    )}&body=${encodeURIComponent(
        `Dear Hiring Manager,\n\nI am interested in the ${job.title} position at Spacemancraft.\n\n[Add your details here]\n\nSincerely,\n[Your Name]`
    )}`;

    return (
        <div className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-black/25 group">
            <div className="w-0.5 h-32 bg-[#ffffff] rounded-full flex-shrink-0"></div>
            <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                        <p className="text-[#0BFFD3] text-[10px] md:text-xs font-semibold font-reem uppercase tracking-wider mb-1">
                            {job.type}
                        </p>
                        <h3 className="text-white text-[14px] md:text-[16px] lg:text-lg font-bold font-reem mb-2">
                            {job.title}
                        </h3>
                        <p className="text-gray-400 text-[11px] md:text-sm leading-relaxed lg:line-clamp-3 font-inter">
                            {job.description}
                        </p>
                        <p className="text-[#0BFFD3] text-[11px] md:text-sm font-bold font-inter mt-2">
                            Location : {job.location}
                        </p>
                    </div>
                    <a
                        href={gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 lg:mt-0 lg:ml-6 bg-transparent border border-white text-white group-hover:bg-gradient-to-r group-hover:from-[#1de9b6] group-hover:to-blue-600 group-hover:border-transparent px-6 py-2 rounded-md text-[11px] md:text-sm font-semibold transition-all duration-200 inline-block text-center"
                    >
                        <span className="group-hover:hidden font-reem">APPLY NOW</span>
                        <span className="hidden group-hover:inline font-reem">JOIN OUR TEAM</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
