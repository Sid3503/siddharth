import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      duration: 2.0,
      smoothWheel: true,
      syncTouch: true,
    });
    (window as any).__lenis = lenis;
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      const win = window as any;
      if (win.__lenis === lenis) {
        delete win.__lenis;
      }
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) {
      if (hash) {
        setTimeout(() => {
          lenis.scrollTo(hash, { immediate: true });
        }, 100);
      } else {
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, hash]);

  return <>{children}</>;
};

export default SmoothScroll;
