import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const About = () => (
  <>
    {/* Responsive Navbar with content offset to prevent overlap */}
    <div className="relative w-full bg-black">
      <Navbar />
      {/* Spacer to offset content below the fixed navbar */}
      <div className="h-[64px] md:h-[72px] lg:h-[80px]" />
      {/* Main About Section */}
      <section
        className="relative bg-black w-full min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden"
        style={{ maxWidth: "100vw" }}
      >
        {/* Mobile/Tablet: Astronaut Video at top */}
        <div className="relative lg:hidden w-full h-[60vh] md:h-[80vh] flex-shrink-0 overflow-hidden">
          <div className="relative h-full w-full flex items-center justify-center">
            <video
              src="/assets/about/spaceman.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="block w-full h-full object-cover"
              style={{
                zIndex: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
        </div>

        {/* Left Side: Astronaut Image (hidden on mobile/tablet) */}
        <div className="relative hidden lg:flex w-1/2 h-[calc(100vh-80px)] flex-shrink-0 items-center justify-end overflow-hidden">
          <div className="relative h-full w-full flex items-center justify-center">
            <video
              src="/assets/about/spaceman.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="block w-full h-full object-cover"
              style={{
                zIndex: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[calc(100vh-80px)] lg:py-10 lg:px-4 px-5 text-justify sm:px-8">
          <div
            className="w-full flex flex-col items-center justify-center"
            style={{
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            <h2
              className="font-reem font-normal text-white mb-4 text-[21px] md:text-[38px] lg:text-[48px] leading-tight text-left w-full"
            >
              About Spaceman Craft
            </h2>
            <p
              className="font-inter font-semibold text-white mb-4 tracking-tight text-sm md:text-lg text-left w-full"
            >
              "Driven by Innovation. Defined by Excellence."
            </p>
            <div className="flex flex-col gap-4 w-full">
              <p className="font-inter text-white/80 text-justify leading-relaxed text-[12px] md:text-sm ">
                At Spaceman Craft Private Limited, we are driven by innovation and a passion for engineering excellence. Established in 2022 and headquartered in Kanyakumari, Tamil Nadu, our company is focused on designing and developing advanced solutions in aerospace, manufacturing, and next-generation technologies.
              </p>
              <p className="font-inter text-white/80 text-justify leading-relaxed text-[12px] md:text-sm ">
                Guided by industry experts and supported by a dynamic team, we strive to build reliable, efficient, and sustainable systems that push the boundaries of what’s possible. From nurturing student talent through CubeSat programs to pioneering electric space thruster technology, Spaceman Craft is committed to shaping the future of space exploration and engineering with creativity, precision, and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Stats Section */}
    <section
      className="relative w-full bg-black flex justify-center items-center py-8 px-2 md:px-12"
      style={{
        minHeight: "110px",
        overflow: "visible",
      }}
    >
      {/* <div className="relative w-full max-w-5xl flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center sm:gap-2 md:gap-8"> */}
        {/* Stat 1 */}
        {/* <div className="flex flex-col items-center flex-1 min-w-[100px] py-3">
          <span className="text-white text-[21px] md:text-[38px] font-bold font-inter">
            25<span className="align-super text-base font-normal">+</span>
          </span>
          <span className="text-white/80 text-[10px] md:text-xs mt-1 font-inter text-center">
            Years of Experience
          </span>
        </div> */}
        {/* Stat 2 */}
        {/* <div className="flex flex-col items-center flex-1 min-w-[100px] py-3">
          <span className="text-white text-[21px] md:text-[38px] font-bold font-inter">25K</span>
          <span className="text-white/80 text-[10px] md:text-xs mt-1 font-inter text-center">
            Completed Projects
          </span>
        </div> */}
        {/* Astronaut Image */}
        {/* <div className="flex flex-col items-center flex-1 min-w-[100px] relative h-[70px] xs:h-[80px] md:h-[120px] py-3">
          <img
            src="/assets/ABOUTEX.png"
            alt="Astronaut"
            className="absolute inset-0 w-full h-full object-cover object-center z-10"
            style={{
              filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.7))",
              pointerEvents: "none",
              userSelect: "none",
            }}
            draggable={false}
          />
        </div> */}
        {/* Stat 3 */}
        {/* <div className="flex flex-col items-center flex-1 min-w-[100px] py-3">
          <span className="text-white text-[21px] md:text-[38px] font-bold font-inter">2K</span>
          <span className="text-white/80 text-[10px] md:text-xs mt-1 font-inter text-center">
            Our Specialists
          </span>
        </div> */}
        {/* Stat 4 */}
        {/* <div className="flex flex-col items-center flex-1 min-w-[100px] py-3">
          <span className="text-white text-[21px] md:text-[38px] font-bold font-inter">5K</span>
          <span className="text-white/80 text-[10px] md:text-xs mt-1 font-inter text-center">
            Success Stories
          </span>
        </div> */}
      {/* </div> */}
    </section>

    {/* CEO Section - Responsive */}
    <section className="w-full bg-black flex flex-col items-center justify-center py-8 px-2 sm:py-10 md:py-12 md:px-6">
      <div className="flex flex-col md:flex-row items-start justify-center w-full gap-6 sm:gap-8 md:gap-12 max-w-6xl">
        {/* Left: CEO Image */}
        <div className="w-full md:w-[45%] flex-shrink-0 flex justify-center md:justify-start h-full mb-6 md:mb-0">
          <img
            src="./assets/ceo.png.jpeg"
            alt="CEO"
            className="
              rounded-sm object-cover shadow-lg border border-white/10
              w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[440px] md:max-w-[480px]
              h-[220px] xs:h-[260px] sm:h-[320px] md:h-[380px]
            "
            style={{
              background: "#222",
              objectPosition: "center top",
              userSelect: "none",
              pointerEvents: "none",
            }}
            draggable={false}
          />
        </div>
        {/* Right: Content */}
        <div
          className="flex-1 flex flex-col justify-start w-full md:w-[55%] max-w-full"
          style={{ minHeight: "unset", maxWidth: "850px" }}
        >
          <h2 className="font-reem text-[21px] md:text-[38px] font-normal text-white lg:px-0 px-4 mb-3 md:mb-4 mt-2 md:mt-0">
            Meet <span className="font-reem font-normal">Our CEO</span>
          </h2>
          <div className="space-y-3">
            <p className="font-inter text-white/80 leading-relaxed text-[12px] md:text-sm px-4 lg:px-0 text-justify">
            Praveen Kumar, Founder & CEO of Spaceman Craft Private Limited, is driven by a bold vision and nearly 12 years of hands-on experience in developing his own space technology inventions. Fueled by passion and purpose, he leads the mission to build world-class space innovations from India—with his sights firmly set on the Moon.
            </p>
            <p className="font-inter text-white/80 px-4 lg:px-0 leading-relaxed text-[12px] md:text-sm text-justify">
              International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems.
            </p>

          </div>
        </div>
      </div>
    </section>

    {/* CEO's Message Section */}
    <section className="w-full flex flex-col items-center justify-center pb-16 px-4 md:px-0 bg-black">
      <div className="w-full max-w-[1400px] flex flex-col items-center px-2 md:px-8">
        <h2 className="font-reem text-[21px] md:text-[38px] font-normal text-white mb-6 text-center tracking-wide">
          CEO’S MESSAGE
        </h2>
        <div
          className="w-full rounded-lg overflow-hidden shadow-2xl border border-white/10 relative"
          style={{
            backgroundImage: "url('/assets/CEOMESSAGE.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 240, // Increased from 120
            maxHeight: 340, // Increased from 170
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1400px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-6">
            <span className="text-white text-2xl mb-2 font-reem">“</span>
            <p className="text-white text-center font-inter text-[12px] md:text-sm max-w-2xl drop-shadow-lg whitespace-pre-line">
              From the wheel to spaceflight, humanity’s greatest leaps began with the urge to
              move. On this pale blue dot, we are but a tiny speck—yet one that dares to propel
              itself beyond, while the rest drift with space-time. At Spaceman Craft, we exist to
              make that leap possible.
            </p>
            <div className="mt-4 text-white/80 text-[10px] md:text-xs font-inter text-center">
              <span className="italic">_ Praveen Kumar N,</span>
              <br />
              <span className="italic">CEO, Spaceman Craft</span>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Gallery/Quote Section */}
    <section className="w-full max-w-full flex flex-col items-center justify-center py-0 bg-black px-0 overflow-x-hidden">
      <div className="w-full max-w-full flex flex-col gap-0 px-0">
        {/* Top Row: Two images + Quote block */}
        <div className="flex flex-col md:flex-row gap-0 w-full max-w-full">
          {/* Image 1 */}
          <div className="flex-1 min-w-0 flex items-stretch">
            <img
              src="/assets/aboutg1.png"
              alt="Rocket Launch"
              className="w-full h-full aspect-[4/3] object-cover object-center"
              style={{ minHeight: "160px", maxHeight: "320px" }}
              draggable={false}
            />
          </div>
          {/* Image 2 */}
          <div className="flex-1 min-w-0 flex items-stretch">
            <img
              src="/assets/aboutg2.png"
              alt="Spacecraft Window"
              className="w-full h-full aspect-[4/3] object-cover object-center"
              style={{ minHeight: "160px", maxHeight: "320px" }}
              draggable={false}
            />
          </div>
          {/* Quote Block with BG */}
          <div
            className="flex-1 min-w-0 flex items-center justify-center relative"
            style={{
              backgroundImage: "url('/assets/aboutg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "160px",
              height: "100%",
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-2 py-6">
              <svg width="48" height="48" viewBox="0 0 48 48" className="mb-2 text-cyan-400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="38" fontSize="48" fontFamily="Arial" fill="#22d3ee">“</text>
              </svg>
              <p className="text-white text-center font-inter text-sm md:text-base max-w-xs">
                Fueling Space Dreams With Electric Propulsion Brilliance.
              </p>
            </div>
          </div>
        </div>
        {/* Bottom Row: Two images, left is square, right is wide */}
        <div className="flex flex-col md:flex-row gap-0 w-full max-w-full mt-0">
          {/* Image 3: Square */}
          <div className="flex-1 min-w-0 flex items-stretch">
            <img
              src="/assets/aboutg4.png"
              alt="Earth at Night"
              className="w-full h-full aspect-square object-cover object-center"
              style={{ minHeight: "160px", maxHeight: "320px" }}
              draggable={false}
            />
          </div>
          {/* Image 4: Wide */}
          <div className="flex-[2] min-w-0 overflow-hidden flex items-stretch">
            <img
              src="/assets/aboutg5.png"
              alt="Earth from Orbit"
              className="w-full h-full aspect-[16/7] object-cover object-center"
              style={{ minHeight: "160px", maxHeight: "320px", width: "100%" }}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default About;
