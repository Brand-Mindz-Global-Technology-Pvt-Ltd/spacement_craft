import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SpaceTourismScrollRevealProps {
  children: React.ReactNode;
  backgroundImage: string;
  onProgressChange?: (progress: number) => void;
}

const SpaceTourismScrollReveal = ({
  children,
  backgroundImage,
  onProgressChange,
}: SpaceTourismScrollRevealProps) => {
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

    // Ensure content is visible on mobile even if ScrollTrigger doesn't fire
    const isMobile = window.innerWidth < 768;

    // Create a master timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom', // Start when section enters viewport
        end: 'center center', // End when section center reaches viewport center
        scrub: 2, // Strong scrub for pronounced effect
        refreshPriority: -1, // Lower priority for mobile
        invalidateOnRefresh: true, // Recalculate on resize
        anticipatePin: 1, // Help with mobile performance
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);
          if (onProgressChange) {
            onProgressChange(progress);
          }
        },
        onEnter: () => {
          // Fallback for mobile: ensure content is visible
          if (isMobile) {
            gsap.set([content, bgImage], { opacity: 1 });
          }
        },
      },
    });

    // Animation sequence:

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

    // 2. All content fades in together
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
      0.25 // Start after black screen begins
    );

    // 3. Background image fades in last
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
      0.6 // Start after content is visible
    );

    // Mobile fallback: if ScrollTrigger doesn't work, show content after delay
    if (isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to([content, bgImage], {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      if (section) {
        observer.observe(section);
      }
    }

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
          opacity: 0, // Start invisible
        }}
        aria-hidden="true"
      />

      {/* Top gradient overlay (z-1) - Lighter for brighter image */}
      <div
        className="absolute inset-0 lg:bg-gradient-to-b lg:from-black/40 lg:via-black/30 lg:to-transparent bg-gradient-to-b from-black/80 via-black/80 to-transparent pointer-events-none"
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
          opacity: 0, // Start invisible
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default SpaceTourismScrollReveal;
