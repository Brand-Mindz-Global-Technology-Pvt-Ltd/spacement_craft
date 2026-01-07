import React from "react";
import JobCard from "./JobCard";
import { jobListings } from "../../data/jobListings";

const MainSection = () => {
  return (
    <>
      {/* Image & Quote Section - Overlaid Content on Wide Image */}
      <section className="w-full flex flex-col items-center justify-center mt-8">
        <div className="relative w-full overflow-hidden shadow-2xl bg-black flex flex-col items-center min-h-[260px] md:min-h-[380px] h-[350px]">
          {/* Background Image */}
          <img
            src="/assets/careerthought.png"
            alt="Eclipse Career"
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable={false}
            style={{ zIndex: 0 }}
          />
          {/* Optional: Overlay for better text contrast */}
          <div className="absolute inset-0 lg:bg-gradient-to-b lg:from-black/0 lg:via-black/0 lg:to-black/70 bg-gradient-to-b from-black/10  via-black/10 to-black/80 z-10" />
          {/* Quote Content - Centered Over Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-end z-20 px-4 py-0 ">
            <p className="text-white text-center text-base md:text-xl font-reem  font-extralight mb-3 tracking-wide drop-shadow-lg">
              "THE ONLY WAY TO DO GREAT WORK IS TO<br className="hidden md:block" /> LOVE WHAT YOU DO"
            </p>
            <span className="text-[#0BFFD3] text-sm md:text-lg font-reem font-extralight text-center drop-shadow-lg">
              - STEVE JOBS
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Card with Job Listings */}
      <section id="open-positions" className="w-full flex flex-col items-center justify-center mt-16 mb-12 px-4">
        <div
          className="w-full max-w-7xl rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(29,233,182,0.3)]"
          style={{
            background: "radial-gradient(circle, rgba(11, 255, 211, 0.3) 0%, #000000 100%)"
          }}>
          {/* Outer Border */}
          < div className="pointer-events-none absolute inset-0 rounded-2xl border border-[#F4C62F]/70 shadow-[0_0_12px_rgba(244,198,47,0.35)]" ></div>

          {/* Inner Accent Lines */}
          <div className="pointer-events-none absolute inset-0">
            {/* Bottom */}
            <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#F4C62F]/60" />
            {/* Left */}
            <span className="absolute left-0 top-4 bottom-4 w-[1px] bg-[#0000]/60" />
            {/* Right */}
            <span className="absolute right-0 top-4 bottom-4 w-[1px] bg-[#0000]/60" />
          </div>

          <div className="flex flex-col lg:flex-row">

            {/* Left Section - Image */}
            <div className="lg:w-2/5 relative lg:py-9 lg:px-1 lg:pl-5 p-4 flex-shrink-0">
              <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/career/careers.jpeg"
                  alt="Person working at desk"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  draggable={false}
                />
              </div>
            </div>

            {/* Right Section - Job Listings */}
            <div className="lg:w-3/5 lg:py-8 lg:px-2 py-4 px-2">
              <div
                className="space-y-8 max-h-[600px] overflow-y-auto pr-2"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(255, 255, 255, 0.2) transparent'
                }}
              >
                {jobListings.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              <style>{`
                div::-webkit-scrollbar {
                  width: 4px;
                }
                div::-webkit-scrollbar-track {
                  background: transparent;
                }
                div::-webkit-scrollbar-thumb {
                  background: rgba(255, 255, 255, 0.2);
                  border-radius: 10px;
                }
                div::-webkit-scrollbar-thumb:hover {
                  background: rgba(255, 255, 255, 0.3);
                }
              `}</style>
            </div>
          </div>
        </div >
      </section >

      {/* Bottom Quote Section */}
      < section className="w-full flex flex-col items-center justify-center mt-8 mb-10 px-4" >
        <p className="text-white text-xl md:text-2xl font-reem font-medium text-center tracking-widest">
          "LET'S BUILD WHAT'S NEXT, TOGETHER"
        </p>
      </section >
    </>
  )
}

export default MainSection;