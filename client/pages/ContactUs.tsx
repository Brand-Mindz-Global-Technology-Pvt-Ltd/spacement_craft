import React from "react";

const ContactUs = () => (
  <div className="min-h-screen w-full bg-black text-white">
    {/* Hero Section with Spacecraft Image - Fullscreen */}
    <div className="relative w-full min-h-screen h-screen flex items-end justify-start overflow-hidden">
      <img
        src="/assets/contactbg.png"
        alt="Spacecraft in orbit"
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable={false}
        style={{ minHeight: "100vh", maxHeight: "100vh" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      <div className="relative z-10 px-8 md:px-16 pb-12 md:pb-20">
        <h1 className="text-3xl md:text-4xl font-semibold font-reem text-white drop-shadow-lg">
          Contact Us
        </h1>
      </div>
    </div>

    <div className="w-full bg-black py-12 px-4 md:px-0">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
    
    {/* Connect With Us */}
    <div>
      <h3 className="mb-2 text-base font-semibold tracking-wide text-white/90 relative pb-2">
        CONNECT WITH US
        <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-cyan-400"></span>
      </h3>
      <ul className="space-y-3 text-white/80 mt-4">
        <li className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 text-cyan-400">
            {/* Lucide Phone Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0122 16.92z" />
            </svg>
          </span>
          +971 54 589 7690
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 text-cyan-400">
            {/* Lucide Smartphone Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" stroke="currentColor" strokeWidth={2} fill="none"/>
              <path d="M12 18h.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          +971 56 680 1583
        </li>
      </ul>
    </div>

    {/* Find Us */}
    <div>
      <h3 className="mb-2 text-base font-semibold tracking-wide text-white/90 relative pb-2">
        FIND US
        <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-cyan-400"></span>
      </h3>
      <div className="text-white/80 leading-relaxed mt-4 space-y-3">
        <div className="flex items-start gap-2">
          <span className="inline-block w-5 h-5 text-cyan-400 mt-1">
            {/* Location icon (Lucide MapPin SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418 0-8-5.373-8-10A8 8 0 0112 3a8 8 0 018 8c0 4.627-3.582 10-8 10zm0-7a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </span>
          <div>
            Jafza Shipyard, Shed H42<br />
            Dubai, United Arab Emirates
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="inline-block w-5 h-5 text-cyan-400 mt-1">
            {/* Location icon (Lucide MapPin SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418 0-8-5.373-8-10A8 8 0 0112 3a8 8 0 018 8c0 4.627-3.582 10-8 10zm0-7a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </span>
          <div>
            Jafza Shipyard, Shed H42<br />
            Dubai, United Arab Emirates
          </div>
        </div>
      </div>
    </div>

    {/* Opening Hours */}
    <div>
      <h3 className="mb-2 text-base font-semibold tracking-wide text-white/90 relative pb-2 flex items-center gap-2">
        OPENING HOURS
        <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-cyan-400"></span>
      </h3>
      <ul className="text-white/80 mt-4 space-y-2">
        <li className="flex items-center gap-2">
          <span className="inline-block w-5 h-5 text-cyan-400">
            {/* Clock icon (Lucide Clock SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className="flex flex-col">
            <span>Mon - Fri: 7am – 5pm</span>
            <span>Saturday: 7am – 2pm</span>
            <span>Sunday: Close</span>
          </div>
        </li>
      </ul>
    </div>

  </div>
</div>


    {/* Map Section */}
    <div className=" bg-black pb-12  md:px-0">
      <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg border border-white/10">
        <div className="w-full h-[320px] md:h-[380px] relative">
          <iframe
            title="AUTORE DMCC MAIN OFFICE Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d55.123456!3d25.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b123456789%3A0x123456789abcdef!2sJafza%20Shipyard!5e0!3m2!1sen!2sae!4v1680000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 220, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
{/* Contact Form Section Above Footer */}
<div className="relative  flex ">
  {/* Background image full width */}
 
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content wrapper: Only the form, centered left of the background image */}
  <div className="relative w-full flex">
  {/* Background container matches form height */}
  <div className="relative w-full max-w-9xl mx-auto h-[500px] md:h-[600px]">
    {/* Background image */}
    <img
      src="/assets/messagebg.png"
      alt="Rocket launch"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Glassmorphism Form */}
    <div className="relative z-10 flex justify-start h-full">
      <div className="flex-1 max-w-lg bg-white/10 backdrop-blur-lg p-10 md:p-14 text-white shadow-lg flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">GET IN TOUCH</h2>
        <p className="mb-8 text-white/80">
          Need expert yacht maintenance and services? Fill out the form below, and our team will get back to you promptly
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-white/40 focus:border-cyan-400 outline-none py-2 text-sm"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Your message</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-white/40 focus:border-cyan-400 outline-none py-2 text-sm resize-none"
              placeholder="Type your message"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 border border-white rounded-md hover:bg-cyan-500 hover:text-black transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

</div>

    
    
  <footer className="relative overflow-hidden text-white">
    <div className="absolute inset-0">
      <img
        src="/assets/Footer.png"
        alt="Star field footer background"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <img src="/assets/01-logo.jpg" alt="Spacemancraft" className="mx-auto mb-4 h-10 w-auto" />
        <p className="text-sm leading-relaxed text-white/80">
          A revolutionary blend of spacecraft and passenger vehicle, powered by cost‑effective solar electric propulsion.
          It paves the way for human exploration across Earth’s orbit and beyond, making space travel more affordable and
          accessible than ever before.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-base font-semibold">Navigate</h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/ourproduct" className="hover:text-white">Product</a></li>
            <li><a href="#solution" className="hover:text-white">Solution</a></li>
            <li><a href="#vision" className="hover:text-white">Vision</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li>
              <a href="/about" className="hover:text-white">
                About us
              </a>
            </li>
            
            <li>
            <a href="/contactus" className="hover:text-white">
            Contact us
            </a>
            </li>
            
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold">Reach Out</h3>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-white/70" />
              <span>Tamil Nadu, India</span>
            </li>
            <li className="flex items-start gap-3 break-all">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-white/70" />
              <a href="mailto:spacemancraftindia@gmail.com" className="hover:text-white">spacemancraftindia@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold">Enquire Now</h3>
          <button
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_35px_rgba(56,189,248,0.45)] transition hover:from-cyan-300 hover:to-blue-500"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Discover Our Thruster
          </button>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 pt-4 text-xs text-white/70 md:flex md:items-center md:justify-between">
        <p>© 2025 Spacemancraft. All Rights Reserved.</p>
        <div className="mt-3 flex gap-4 md:mt-0">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Refund Policy</a>
        </div>
      </div>
    </div>
  </footer>
  </div>

  
);

export default ContactUs;

