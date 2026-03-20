import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";

const rotatingWords = [
  "Applied AI",
  "Machine Learning",
  "LLMs",
  "NLP",
  "Computer Vision",
  "Data Science",
  "MLOps",
  "Generative AI",
  "Systems",
  "Research",
];
const rotatingStatus = [
  "building intelligent systems",
  "solving hard problems",
  "focused on real-world AI",
  "architecting scalable systems",
  "building applied AI",
  "solving complex problems",
  "building end-to-end systems",
  "shipping real-world AI",
  "scaling intelligent solutions",
];

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const gridScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.15]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      setStatusIndex((prev) => (prev + 1) % rotatingStatus.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col px-6 md:px-12 lg:px-20 pt-20 grid-lines"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          scale: gridScale,
          opacity: gridOpacity,
          perspective: 1200,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="w-full h-full grid-lines" />
      </motion.div>

      <div className="flex items-center justify-between pt-8">
        <p className="font-mono text-xs text-muted-foreground"></p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
          <span className="font-mono text-xs text-muted-foreground flex items-center overflow-hidden h-4">
            <span className="relative inline-block h-full">
              <span className="invisible whitespace-nowrap">
                scaling intelligent solutions
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingStatus[statusIndex]}
                  className="absolute left-0 top-0 whitespace-nowrap"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-110%" }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {rotatingStatus[statusIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-display font-extrabold leading-[1.0] tracking-[-0.03em] text-foreground">
          <span className="block">Hi, I'm</span>
          <span className="block">Siddharth Mishra</span>
          <span className="relative inline-block overflow-hidden align-bottom" style={{ height: '1.2em' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                className="block text-primary whitespace-nowrap font-mono font-medium tracking-normal"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-110%" }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <motion.p
          className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Building intelligent systems — from raw data to real-world impact.
        </motion.p>

        <motion.div
          className="mt-8 md:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/projects">
            <GradientButton className="gap-3 rounded-full group py-3 px-6 text-sm">
              my work
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="origin-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-[15deg]"
              >
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </GradientButton>
          </Link>
        </motion.div>
      </div>

      <div className="absolute right-12 bottom-1/3 hidden lg:block">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-muted-foreground/30">
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="0.5" />
          <line x1="16" y1="2" x2="16" y2="30" stroke="currentColor" strokeWidth="0.5" />
          <line x1="2" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
