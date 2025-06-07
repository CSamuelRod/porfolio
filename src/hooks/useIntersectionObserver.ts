// src/hooks/useIntersectionObserver.ts
import { useEffect } from "react";

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, callback]);
};

export default useIntersectionObserver;
