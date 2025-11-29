import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 p-2 text-sm font-medium text-black shadow-[0_0_35px_rgba(56,189,248,0.45)] transition-all duration-300 hover:from-cyan-300 hover:to-blue-500 hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-110 active:scale-95 opacity-90"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-4 w-4" style={{color:"white"}} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
