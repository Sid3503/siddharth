import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import NeuralNetAnimation from "@/components/NeuralNetAnimation";

interface ProjectItem {
  title: string;
  description: string;
  github: string;
  tags: string[];
  image?: string;
  video?: string;
}

const RESUME_URL = "https://drive.google.com/file/d/1YWQzqTx3VAVVPKsEnrFmZ0mNgEuDno9H/view?usp=sharing";

const projects: ProjectItem[] = [
  {
    title: "GutSync AI",
    description: "A multi-agent architecture orchestrated by LangGraph to analyze digestive health symptoms via NLP, document vision, and targeted research integration.",
    github: "https://github.com/Sid3503/gut-sync",
    tags: ["LangGraph", "FastAPI", "Agentic AI", "GPT-4o-mini", "Pydantic"],
  },
  {
    title: "AI Sahayak",
    description:
      "Proactive intelligence platform for Indian Kirana & MSMEs with a conversational Hinglish chat interface.",
    github: "https://github.com/Sid3503/ai-sahayak",
    tags: ["AWS Bedrock", "LangGraph", "FastAPI", "React", "SageMaker"],
    video: "/videos/ai_sahayak.mp4",
  },
  {
    title: "English – Hebrew Translator",
    description:
      "A PyTorch implementation of a Transformer model for English-to-Hebrew translation, trained on OPUS100 datasets.",
    github: "https://github.com/Sid3503/EngHebrew-Transformer",
    tags: ["PyTorch", "OPUS100"],
    image: "/images/eng2heb.png",
  },
  {
    title: "Cancero",
    description:
      "Catch it fast, prevent the pain, with AI insights, health to gain.",
    github: "https://github.com/Sid3503/Cancero",
    tags: ["Flask", "PyPDF", "Computer Vision", "NLP"],
    image: "/images/cancero.png",
    video: "/videos/cancero.mp4",
  },

  {
    title: "AnimeGAN",
    description:
      "Generate anime-style images using a Generative Adversarial Network (GAN) trained from scratch.",
    github: "https://github.com/Sid3503/AnimeGAN",
    tags: ["PyTorch", "Python", "GANs", "Deep Learning", "Computer Vision"],
    video: "/videos/gans_training.mp4",
  },
  {
    title: "VQGAN",
    description:
      "Implemented VQGAN (Vector Quantized GAN) that combines vector quantization with adversarial training.",
    github: "https://github.com/Sid3503/VQgan",
    tags: ["VQ-VAE", "Transformer", "Vector Quantization", "GANs"],
    image: "/images/vqgan_samples.png",
  },
];

export { RESUME_URL };

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeProject = activeIndex !== null ? projects[activeIndex] : null;
  const hasMedia = activeProject && (activeProject.image || activeProject.video);

  return (
    <section id="projects" ref={ref} className="relative px-6 md:px-12 lg:px-20 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-mono text-sm text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          .featured projects
        </motion.p>

        <motion.div
          className="w-full h-px bg-border mb-12"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Split: list on left, preview on right */}
        <div className="flex gap-12 items-start">
          {/* Project list */}
          <div className="flex-1 space-y-0">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border hover:border-foreground/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="flex-1">
                  <h3
                    className={`text-xl md:text-2xl lg:text-3xl font-display font-medium transition-colors duration-300 ${
                      activeIndex === index ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-muted-foreground border border-border rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0 shrink-0">
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    view
                  </span>
                  <motion.svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    animate={activeIndex === index ? { scale: 1.1, rotate: -15 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300 origin-center"
                  >
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right-side preview panel — desktop only */}
          <div className="hidden lg:block w-[340px] flex-shrink-0 sticky top-28">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/30 bg-card">
              {/* Default state — subtle grid */}
              <AnimatePresence mode="wait">
                {!hasMedia ? (
                  <motion.div
                    key="empty"
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <NeuralNetAnimation />
                  </motion.div>
                ) : activeProject.video ? (
                  <motion.video
                    key={`video-${activeIndex}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={activeProject.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  />
                ) : (
                  <motion.img
                    key={`img-${activeIndex}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={activeProject.image}
                    alt={activeProject.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                  />
                )}
              </AnimatePresence>

              {/* Overlay label */}
              <AnimatePresence>
                {activeProject && (
                  <motion.div
                    key="label"
                    className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="font-mono text-xs text-white/80">{activeProject.title}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hover hint when nothing is hovered */}
            <AnimatePresence>
              {!activeProject && (
                <motion.p
                  className="font-mono text-xs text-muted-foreground/40 text-center mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  hover a project to preview
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
