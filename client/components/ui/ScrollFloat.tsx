// src/components/ui/ScrollFloat.tsx

import { useEffect, useMemo, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

const ScrollFloat = ({
  children,
  progress = 0,
  tag = 'div',
  containerClassName = '',
  textClassName = '',
}) => {
  const containerRef = useRef(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="char" key={index} style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]) as ReactNode[];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charElements = el.querySelectorAll('.char');
    if (charElements.length === 0) return;

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      charElements,
      {
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%',
      },
      {
        ease: 'back.inOut(1.7)',
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: 0.03,
      }
    );

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [children]);

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.progress(progress);
    }
  }, [progress]);

  const CustomTag = tag as keyof JSX.IntrinsicElements;

  // This is the clean, correct return statement with no extra comments or typos.
  return (
    <CustomTag ref={containerRef} className={containerClassName} style={{ overflow: 'hidden' }}>
      <span className={textClassName}>{splitText}</span>
    </CustomTag>
  );
};

export default ScrollFloat;