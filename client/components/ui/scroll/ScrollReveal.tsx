import { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  manualProgress?: number;
}

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  manualProgress,
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    // Create a timeline
    const tl = gsap.timeline({
        paused: true,
    });
    timelineRef.current = tl;

    const wordElements = el.querySelectorAll('.word');

    // Rotation animation
    tl.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        duration: 1,
      },
      0
    );

    // Opacity animation
    tl.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        duration: 1,
      },
      0
    );

    // Blur animation
    if (enableBlur) {
      tl.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          duration: 1,
        },
        0
      );
    }

    let trigger: ScrollTrigger | undefined;

    if (manualProgress === undefined) {
        trigger = ScrollTrigger.create({
            trigger: el,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true,
            animation: tl,
        });
    } else {
        tl.progress(manualProgress);
    }

    return () => {
      if (trigger) trigger.kill();
      if (tl) tl.kill();
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, manualProgress === undefined]); 

  // Update progress efficiently without re-creating timeline
  useEffect(() => {
      if (manualProgress !== undefined && timelineRef.current) {
          timelineRef.current.progress(manualProgress);
      }
  }, [manualProgress]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-white text-[32px] md:text-[38px] lg:text-[44px] font-normal font-reem tracking-wide ${textClassName}`}>{splitText}</p>
    </h2>

    
  );
};

export default ScrollReveal;
