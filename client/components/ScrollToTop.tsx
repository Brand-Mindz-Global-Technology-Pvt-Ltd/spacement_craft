import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    // Store the previous pathname
    const prevPath = previousPathname.current;
    previousPathname.current = pathname;

    // If navigating TO Index page FROM Solution page, don't scroll to top
    if (pathname === "/" && prevPath === "/solution") {
      return; // Don't scroll to top, preserve position
    }

    // For all other navigation scenarios, scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
