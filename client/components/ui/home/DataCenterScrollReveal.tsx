import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DataCenterScrollRevealProps {
  children: React.ReactNode;
  backgroundImage: string;
  onProgressChange?: (progress: number) => void;
}

const DataCenterScrollReveal = ({
  children,
  backgroundImage,
  onProgressChange,
}: DataCenterScrollRevealProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const blackScreenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const blackScreen = blackScreenRef.current;
    const content = contentRef.current;
    const bgImage = bgImageRef.current;

    if (!section || !blackScreen || !content || !bgImage) return;

    // More reliable mobile detection using matchMedia
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // On mobile, ensure content is visible immediately
    if (isMobile) {
      // Set content visible immediately as a safety measure
      gsap.set([content, bgImage], { opacity: 1, y: 0 });

      // Also use IntersectionObserver for smooth fade-in if needed
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to([content, bgImage], {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
              });
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      observer.observe(section);

      // Safety timeout: ensure content is visible after 500ms regardless
      const safetyTimeout = setTimeout(() => {
        gsap.set([content, bgImage], { opacity: 1, y: 0 });
      }, 500);

      return () => {
        observer.disconnect();
        clearTimeout(safetyTimeout);
      };
    }

    // Desktop: Use ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'center 40%',
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);
          if (onProgressChange) {
            onProgressChange(progress);
          }
        },
      },
    });

    // Animation sequence for desktop
    tl.fromTo(
      blackScreen,
      {
        height: '0%',
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        ease: 'power3.out',
      },
      0
    );

    tl.fromTo(
      content,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out',
      },
      0.25
    );

    tl.fromTo(
      bgImage,
      {
        opacity: 0,
        scale: 1.1,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: 'power2.inOut',
      },
      0.6
    );

    return () => {
      tl.kill();
    };
  }, [onProgressChange]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-stretch overflow-hidden
       min-h-[80vh]      /* default for desktop */
    md:min-h-[80vh]
    lg:min-h-[120vh]
    sm:min-h-[900px]   /* small screens */
    xs:min-h-[800px]   /* extra small */
    "

    >
      {/* Background Image Layer (z-0) */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 lg:w-full lg:h-full w-[100%] h-[100%]  lg:bg-no-repeat bg-cover lg:bg-center bg-center pointer-events-none select-none"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          zIndex: 0,
          opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0, // Show immediately on mobile
        }}
        aria-hidden="true"
      />

      {/* Top gradient overlay (z-1) - Lighter for brighter image */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Black Screen Overlay (z-5) - slides up from bottom */}
      <div
        ref={blackScreenRef}
        className="absolute bottom-0 left-0 right-0 bg-black pointer-events-none"
        style={{
          zIndex: 5,
          height: '0%',
          opacity: 0,
        }}
        aria-hidden="true"
      />

      {/* Content Layer (z-10) */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-start w-full h-full px-4"
        style={{
          paddingTop: '80px',
          opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0, // Show immediately on mobile
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default DataCenterScrollReveal;
