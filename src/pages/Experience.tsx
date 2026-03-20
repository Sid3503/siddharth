import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { useIsMobile } from "@/hooks/use-mobile";

interface ExperienceItem {
  role: string;
  company: string;
  logo: string;
  status: "Current" | "Completed";
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "The Good Bug",
    logo: "/images/tgb.png",
    status: "Current",
    period: "February 2026 - Present",
    location: "Prabhadevi, Mumbai",
    bullets: [
      "Architected and deployed a highly scalable, multi-agent conversational system using LangGraph and FastAPI, supporting complex consumer health journeys for India's fastest-growing D2C gut health brand during its hyper-growth phase.",
      "Engineered an intelligent Orchestrator handling personalized interactions for a user base of 1M+ customers, dynamically routing chats based on CRM data, session state, and in-memory caching.",
      "Designed robust state-machine conversation flows integrating LLMs via AWS Bedrock and RAG pipelines to automate support and drive conversion across ~350K monthly website visitors.",
      "Owned end-to-end Meta WhatsApp integrations and deployed FastAPI and MongoDB architecture on AWS EC2, ensuring seamless, persistent chat histories to handle thousands of high-intent D2C queries.",
    ],
    tags: ["LangGraph", "FastAPI", "MongoDB", "AWS Bedrock", "AWS EC2", "WhatsApp API", "Agent Orchestration", "State Machines", "RAG"],
  },
  {
    role: "Product Intern (AI)",
    company: "The Good Bug",
    logo: "/images/tgb.png",
    status: "Completed",
    period: "August 2025 - January 2026",
    location: "Prabhadevi, Mumbai",
    bullets: [
      "Prototyped and developed early iterations of the multi-agent conversational system using LangGraph and FastAPI, laying the resilient AI engineering foundation for a rapidly scaling, highly-backed Series B startup.",
      "Built initial routing logic and API integrations for WhatsApp, testing context managers to construct personalized LLM prompts using AWS Bedrock.",
      "Designed and structured the core MongoDB session state architecture, ensuring the chatbot framework was robust enough to reliably handle the company's exponential user growth and high-volume traffic.",
    ],
    tags: ["LLM Routing", "Prompt Engineering", "LiveKit", "Context Management", "Python", "API Integrations", "NLP"],
  },
  {
    role: "AI Intern",
    company: "Ergode",
    logo: "/images/ergodecorporate_logo.jpeg",
    status: "Completed",
    period: "June 2025 - July 2025",
    location: "Andheri, Mumbai",
    bullets: [
      "Worked on orchestration and deployment of AI agents using n8n.",
      "Designed intelligent, modular workflows that integrated multiple AI tools, APIs, and conditional logic.",
      "Implemented autonomous task execution pipelines that reduced manual intervention and optimized business operations.",
      "Collaborated on scalable, real-time systems powered by GenAI, webhooks, and automation triggers.",
    ],
    tags: ["n8n", "AI Agent Orchestration", "Task Automation", "Workflow Design", "Webhooks & APIs", "Generative AI Integration"],
  },
];

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const isMobile = useIsMobile();
  const mobileCardHeight = "calc(100svh - 10rem)";

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const totalCards = experiences.length;
  const maxScale = 1;
  const minScale = 0.9 + (totalCards - 1 - index) * 0.02;

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [maxScale, maxScale, minScale, minScale]
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      ref={cardRef}
      className="sticky mb-16"
      style={{
        top: `calc(8rem + ${index * 50}px)`,
        scale,
        transformOrigin: "top center",
        zIndex: index + 1,
        perspective: 1200
      }}
    >
      <div
        className="rounded-xl overflow-hidden bg-card border border-border flex flex-col"
        style={{
          height: isMobile ? mobileCardHeight : undefined,
          maxHeight: isMobile ? mobileCardHeight : undefined,
        }}
      >
        {/* Top meta bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-border flex-none">
          <div className="flex items-center gap-2">
            <img src={item.logo} alt={item.company} className="w-5 h-5 rounded object-contain" />
            <span className="font-mono text-xs text-primary">{item.company}</span>
          </div>
          <span className={`font-mono text-xs px-3 py-1 rounded-full ${
            item.status === "Current"
              ? "text-accent bg-accent/10"
              : "text-muted-foreground bg-muted"
          }`}>
            {item.status}
          </span>
        </div>

        {/* Content */}
        <motion.div
          data-lenis-prevent={isMobile ? "" : undefined}
          data-lenis-prevent-touch={isMobile ? "" : undefined}
          data-lenis-prevent-wheel={isMobile ? "" : undefined}
          className="px-6 py-8 flex-1 min-h-0"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            overflowY: isMobile ? "auto" : "visible",
            overscrollBehavior: isMobile ? "contain" : undefined,
            WebkitOverflowScrolling: isMobile ? "touch" : undefined,
          }}
        >
          <motion.div
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2"
            variants={lineVariants}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground">
              {item.role}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              {item.period}
            </span>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-muted-foreground mb-6"
            variants={lineVariants}
          >
            <span>{item.location}</span>
          </motion.div>

          <div className="space-y-3 mb-8">
            {item.bullets.map((bullet, i) => (
              <motion.div
                key={i}
                className="flex gap-3"
                variants={lineVariants}
              >
                <span className="text-primary mt-1.5 shrink-0">•</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{bullet}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="font-mono text-xs text-muted-foreground mb-3"
            variants={lineVariants}
          >
            Key focus areas:
          </motion.p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <motion.span
                key={tag}
                className="font-mono text-xs text-muted-foreground border border-border rounded-full px-3 py-1.5 hover:text-foreground hover:border-foreground/40 transition-colors duration-300"
                variants={tagVariants}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ExperiencePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const mobileCardHeight = "calc(100svh - 10rem)";

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
                experience
              </motion.h1>

              <motion.p
                className="font-mono text-xs text-muted-foreground pb-3 max-w-xs md:text-right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                my professional journey, roles, and key focus areas across different teams
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

          {/* Content layer */}
          <section className="px-6 md:px-12 lg:px-20 py-16 pb-32">
            <div className="max-w-6xl mx-auto flex flex-col relative">
              {experiences.map((item, index) => (
                <ExperienceCard key={item.role + item.company} item={item} index={index} />
              ))}
              <div
                aria-hidden="true"
                style={{ height: isMobile ? mobileCardHeight : undefined }}
              />
            </div>
          </section>

        </div>
      </div>
    </SmoothScroll>
  );
};

export default ExperiencePage;
