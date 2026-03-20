import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";

const skillsRow1 = [
  "Python", "TensorFlow", "PyTorch", "Hugging Face", "LangChain",
  "Flask", "GCP", "Vercel", "Pandas", "NumPy", "C++", "LangGraph",
];
const skillsRow2 = [
  "SQL", "Keras", "Scikit-learn", "LiveKit", "Pandas", "PostgreSQL",
  "Render", "C++", "LangGraph", "SQL", "Keras", "Scikit-learn",
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} className="relative px-6 md:px-12 lg:px-20 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-mono text-sm text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          .about me
        </motion.p>

        <motion.div
          className="w-full h-px bg-border mb-12"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div style={{ y }}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-snug text-foreground">
              Architecting agentic systems at the intersection of orchestrated workflows and frontier LLM research.
            </h3>
          </motion.div>

          <div className="flex flex-col items-start lg:items-end justify-between gap-8">
            {/* Profile photo from public */}
            <motion.div
              className="w-40 h-40 lg:w-52 lg:h-52 rounded-2xl overflow-hidden border border-border self-end"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <img
                src="/images/my_ghib.png"
                alt="Siddharth Mishra"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <Link to="/resume">
              <GradientButton className="gap-3 rounded-full group py-3 px-6 text-sm">
                resume
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
          </div>
        </div>

        {/* Skills marquee */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-mono text-sm text-muted-foreground mb-6">.skills</p>
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee">
              {[...skillsRow1, ...skillsRow1].map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="shrink-0 font-mono text-xs text-muted-foreground border border-border rounded-full px-4 py-2 hover:text-foreground hover:border-foreground/40 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden mt-3">
            <div className="flex gap-4 animate-marquee-reverse">
              {[...skillsRow2, ...skillsRow2].map((skill, i) => (
                <span
                  key={`${skill}-r-${i}`}
                  className="shrink-0 font-mono text-xs text-muted-foreground border border-border rounded-full px-4 py-2 hover:text-foreground hover:border-foreground/40 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
