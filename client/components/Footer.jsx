const Footer = () => (
  <footer className="relative overflow-hidden text-white">
    <div className="absolute inset-0">
      <img
        src="/assets/14-footer-background.jpg"
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
            <li><a href="#about" className="hover:text-white">About us</a></li>
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
  );