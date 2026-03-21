import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

interface SmoothScrollProps {
  children: ReactNode;
}

// (pointer: coarse) = primary input is a touchscreen (phone/tablet).
// Laptops — even touchscreen ones — report (pointer: fine) because their
// primary pointer is a mouse/trackpad, so Lenis stays active for them.
const isPrimaryTouchDevice = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // On real touch/mobile devices, skip Lenis entirely.
    // Native browser momentum scrolling already feels smooth; Lenis's
    // syncTouch + touchMultiplier causes an unnaturally fast jitter on mobile.
    if (isPrimaryTouchDevice()) return;

    const lenis = new Lenis({
      lerp: 0.06,
      duration: 2.0,
      smoothWheel: true,
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
