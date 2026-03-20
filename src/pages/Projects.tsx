import { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

interface Project {
  title: string;
  description: string;
  highlights?: string[];
  year: string;
  category: string;
  tags: string[];
  href: string;
  featured?: boolean;
  image?: string;
  video?: string;
}

const projects: Project[] = [
  {
    title: "English – Hebrew Transformer",
    description: "A PyTorch implementation of a Transformer model for English-to-Hebrew translation, trained on the OPUS100 multilingual dataset.",
    highlights: [
      "End-to-end training pipeline: data prep → model → training → inference in one notebook.",
      "Custom BilingualDataset builds encoder/decoder inputs with [SOS]/[EOS]/[PAD] tokens and masks.",
      "Sinusoidal positional encoding + scaled token embeddings for stable Transformer training.",
      "Causal masking for decoder ensures autoregressive translation correctness.",
      "Kaggle-ready setup with configurable hyperparameters and checkpointed weights."
    ],
    year: "2024",
    category: "Deep Learning",
    tags: ["PyTorch", "Transformer", "Seq2Seq", "OPUS100", "NLP", "Translation"],
    href: "https://github.com/Sid3503/EngHebrew-Transformer",
    featured: true,
    image: "/images/eng2heb.png"
  },
  {
    title: "Cancero",
    description: "Catch it fast, prevent the pain — an AI-powered cancer-detection tool combining computer vision and NLP for early screening.",
    highlights: [
      "CNN-based image classification for medical scans (e.g., MRI, CT, X-ray).",
      "PDF upload with markdown summaries and AI-generated diagnostic insights.",
      "Confidence plots for predictions, plus doctor recommendations and booking flow.",
      "Real-time cancer research updates via News API integration."
    ],
    year: "2024",
    category: "AI / Healthcare",
    tags: ["Flask", "Computer Vision", "Medical Imaging", "NLP", "PDF Summarization", "News API"],
    href: "https://github.com/Sid3503/Cancero",
    featured: true,
    image: "/images/cancero.png",
    video: "/videos/cancero.mp4"
  },
  {
    title: "InsightSphere",
    description: "AI-powered insight generation platform that transforms unstructured data into actionable business intelligence.",
    highlights: [
      "Social media engagement analytics across LinkedIn, Twitter, Facebook, and Instagram.",
      "Astra DB vector search retrieves relevant records to ground user queries.",
      "LangFlow workflow builds dynamic prompts with context + history + current question.",
      "Groq LLM delivers context-aware insights in a Flask web app.",
      "Chart.js dashboards for trends, post-type comparisons, and platform breakdowns."
    ],
    year: "2024",
    category: "NLP / AI",
    tags: ["LangFlow", "Astra DB", "Groq LLM", "Flask", "Chart.js", "Vector Search"],
    href: "https://github.com/Sid3503/InsightSphere",
    image: "/images/insight.png",
    video: "/videos/insightsphere.mp4"
  },
  {
    title: "AnimeGAN",
    description: "Generate anime-style images using a Generative Adversarial Network trained from scratch with custom architecture choices.",
    highlights: [
      "DCGAN architecture optimized for anime face generation in PyTorch.",
      "Trained on the 63k+ Anime Face Dataset with a full preprocessing pipeline.",
      "Training visualization tools and video output of generation progress.",
      "Configurable hyperparameters for faster experimentation and tuning."
    ],
    year: "2023",
    category: "Generative AI",
    tags: ["PyTorch", "DCGAN", "GANs", "Computer Vision", "Image Generation", "Anime Faces"],
    href: "https://github.com/Sid3503/AnimeGAN",
    video: "/videos/gans_training.mp4"
  },
  {
    title: "VQGAN",
    description: "Implemented VQGAN (Vector Quantized GAN) combining vector quantization with adversarial training for high-fidelity image synthesis.",
    highlights: [
      "VQ-VAE + GAN pipeline that learns a discrete visual codebook.",
      "Explains encoder → quantizer → decoder flow with training loop intuition.",
      "Minimal implementation focused on MNIST digit generation examples."
    ],
    year: "2023",
    category: "Advanced GANs",
    tags: ["VQGAN", "VQ-VAE", "Vector Quantization", "GANs", "Image Synthesis", "MNIST"],
    href: "https://github.com/Sid3503/VQgan",
    image: "/images/vqgan_samples.png",
    featured: true
  },
];

const ProjectsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="blur-content">

        {/* Hero */}
        <section ref={heroRef} className="relative px-6 md:px-12 lg:px-20 pt-32 pb-0">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-display font-bold leading-[1.0] tracking-[-0.03em] text-foreground"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              projects
            </motion.h1>

            <motion.p
              className="font-mono text-xs text-muted-foreground pb-3 max-w-xs md:text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              a selection of work spanning machine learning, deep learning, and software engineering
            </motion.p>
          </div>

          <motion.div
            className="max-w-7xl mx-auto mt-10 h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </section>

        {/* Projects Cards List */}
        <section className="px-6 md:px-12 lg:px-20 py-16 pb-32">
          <div className="max-w-7xl mx-auto flex flex-col gap-32">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative group">
                {/* Left Card Area */}
                <motion.a 
                  href={project.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-[75%] rounded-[32px] overflow-hidden block relative group/card bg-[#111111] text-foreground border border-border/20 hover:border-primary/40 transition-colors"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <div className="p-8 md:p-12 flex flex-col h-full">
                    {/* Top Bar */}
                    <div 
                      className="flex justify-between items-center pb-4 mb-8 border-b border-border/40 group-hover/card:border-primary/30 transition-colors duration-500"
                    >
                      <span className="font-mono text-sm tracking-tight text-white/50 group-hover/card:text-primary transition-colors duration-500">{project.year}</span>
                      <span className="font-mono text-sm tracking-tight text-white/50 group-hover/card:text-primary transition-colors duration-500">{project.category}</span>
                    </div>
                    
                    {/* Title & Arrow */}
                    <div className="flex justify-between items-start mb-12">
                      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight pr-4 leading-[1.1] text-white">
                        {project.title.toLowerCase()}
                      </h2>
                      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shrink-0 mt-2">
                        <motion.svg 
                          width="100%" height="100%" viewBox="0 0 14 14" fill="none"
                          className="origin-center text-white/30 group-hover/card:text-primary transition-colors duration-500"
                          variants={{
                            rest: { scale: 1, rotate: 0 },
                            hover: { scale: 1.15, rotate: -15 }
                          }}
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                      </div>
                    </div>

                    {/* Image/Video Container */}
                    <div className="w-full relative aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden mt-auto bg-black/5" style={{ transform: "translateZ(0)" }}>
                      <motion.div
                        className="w-full h-full"
                        variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {project.video ? (
                          <video 
                            src={project.video} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="absolute inset-0 w-full h-full object-cover" 
                          />
                        ) : (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            loading="lazy" 
                            className="absolute inset-0 w-full h-full object-cover" 
                          />
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.a>

                {/* Right Text Area */}
                <motion.div 
                  className="w-full lg:w-[25%] lg:pt-[128px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <p className="font-mono text-[13px] md:text-sm leading-[1.8] max-w-sm text-muted-foreground group-hover:text-primary/90 transition-colors duration-500">
                    {project.description}
                  </p>

                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mt-6">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 group-hover:text-primary/70 transition-colors duration-500">
                        highlights
                      </p>
                      <ul className="mt-3 space-y-2 text-[13px] md:text-sm leading-[1.6] text-muted-foreground">
                        {project.highlights.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex gap-2">
                            <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border/40 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-white/60 hover:text-primary transition-colors"
                    >
                      view repo
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </SmoothScroll>
  );
};

export default ProjectsPage;
