import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;

      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100; // pixels before element enters view

        if (elementTop < windowHeight - revealPoint) {
          const delay = el.dataset.delay || 0;
          setTimeout(() => {
            el.classList.add("revealed");
          }, delay);
        } else {
          el.classList.remove("revealed");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("resize", revealOnScroll);

    // Run once on mount
    revealOnScroll();

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("resize", revealOnScroll);
    };
  }, []);
}
