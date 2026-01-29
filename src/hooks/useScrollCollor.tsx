import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollColor() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 1. Find the LOGO and the DARK SECTIONS
    const logoElement = document.getElementById("logo-trigger");
    const darkSections = document.querySelectorAll('[data-header="dark"]');

    if (!logoElement || darkSections.length === 0) {
      setIsDark(false);
      return;
    }

    let ticking = false;

    const checkOverlap = () => {
      // 2. Get the exact position of the logo
      const logoRect = logoElement.getBoundingClientRect();

      // Calculate the vertical center of the logo
      const logoCenterY = logoRect.top + logoRect.height / 2;

      // Optional: Calculate horizontal center if you have side-by-side black/white columns
      // const logoCenterX = logoRect.left + (logoRect.width / 2);

      let isOverlapping = false;

      // 3. Check if the logo's center is inside any dark section
      for (const section of darkSections) {
        const sectionRect = section.getBoundingClientRect();

        // Logic: Is the Logo's Y center between the Top and Bottom of the section?
        if (
          logoCenterY >= sectionRect.top &&
          logoCenterY <= sectionRect.bottom
        ) {
          isOverlapping = true;
          break;
        }
      }

      setIsDark(isOverlapping);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkOverlap);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", checkOverlap); // Re-check if window resizes

    checkOverlap(); // Check immediately on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkOverlap);
    };
  }, [location.pathname]);

  return isDark;
}
