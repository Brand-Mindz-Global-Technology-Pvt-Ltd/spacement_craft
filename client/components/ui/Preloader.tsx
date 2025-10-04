import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react"; // 🚀 icon

const logo = "/assets/spacemancraft-logo.png"; 

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const [showLoadingElements, setShowLoadingElements] = useState(false);

  useEffect(() => {
    // Phase 1: Show logo animation for 2 seconds
    const logoPhaseTimer = setTimeout(() => {
      setShowLoadingElements(true);
    }, 2000);

    // Phase 2: Start loading animation after logo phase
    const loadingPhaseTimer = setTimeout(() => {
      const duration = 6000; // total 6 seconds for loading
      const startTime = performance.now();

      function animate(time: number) {
        const elapsed = time - startTime;
        const t = Math.min(elapsed / duration, 1);

        // Smooth cubic easing
        const eased =
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const current = Math.floor(eased * 100);
        setProgress(current);

        if (elapsed < duration) requestAnimationFrame(animate);
        else {
          setProgress(100);
          setTimeout(() => setShow(false), 600);
        }
      }

      requestAnimationFrame(animate);
    }, 2000); // Start loading after 2 seconds

    return () => {
      clearTimeout(logoPhaseTimer);
      clearTimeout(loadingPhaseTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* === LOGO === */}
          <motion.img
            src={logo}
            alt="Logo"
            className="w-36 h-auto mb-6"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ 
              opacity: [0.3, 1, 1], 
              scale: [0.8, 1.05, 1],
              filter: [
                "drop-shadow(0 0 4px #0BFFD3)",
                "drop-shadow(0 0 20px #0BFFD3) drop-shadow(0 0 40px #3070DE)",
                "drop-shadow(0 0 12px #0BFFD3) drop-shadow(0 0 30px #3070DE)"
              ]
            }}
            transition={{ 
              duration: 2, 
              ease: "easeOut",
              times: [0, 0.7, 1]
            }}
          />

          {/* === LOADING ELEMENTS - SHOW AFTER LOGO PHASE === */}
          {showLoadingElements && (
            <>
              {/* === SUBHEADING === */}
              <motion.p
                className="text-gray-400 text-sm mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Exploring innovation beyond the stars
              </motion.p>

              {/* === PROGRESS BAR WITH ROCKET === */}
              <div className="relative w-56 h-2 rounded-full bg-white/10 overflow-hidden mb-6 mt-2">
                {/* Fill bar */}
                <motion.div
                  className="h-full rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.25 }}
                  style={{
                    background: "linear-gradient(90deg, #0BFFD3 0%, #3070DE 100%)",
                  }}
                />

                {/* Rocket moving along the bar */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2"
                  animate={{ left: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.25 }}
                >
                  <Rocket
                    className="w-4 h-4 text-[#0BFFD3]"
                    style={{
                      filter: "drop-shadow(0 0 6px #0BFFD3)",
                      transform: "translateX(-50%)",
                    }}
                  />
                </motion.div>
              </div>

              {/* === PERCENTAGE === */}
              <motion.div
                className="text-white text-sm tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Loading {progress}%
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
