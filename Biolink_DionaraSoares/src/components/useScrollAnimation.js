import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-anime]");
    const options = {
      threshold: 0.6,
    };

    const animeScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(animeScroll, options);

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
