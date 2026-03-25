import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { GradientButton } from "@/components/ui/gradient-button";


const DRIVE_LINK = "https://drive.google.com/file/d/1YWQzqTx3VAVVPKsEnrFmZ0mNgEuDno9H/view?usp=sharing";
const DRIVE_DOWNLOAD = "/resume/SidCV.pdf";

/* ─── Data ─────────────────────────────────────────────────────── */

const education = [
  {
    school: "SIES Graduate School of Technology",
    degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
    score: "8.51 / 10",
    period: "Dec 2021 – May 2025",
    location: "Nerul, Navi Mumbai",
  },
  {
    school: "Shri T.P Bhatia College of Science",
    degree: "Higher Secondary Education",
    score: "91.16%",
    period: "July 2019 – April 2021",
    location: "Mumbai, Maharashtra",
  },
];

const skills = [
  "Neural Networks", "Computer Vision", "NLP", "GenAI",
  "Artificial Intelligence", "Deep Learning", "Machine Learning", "SQL",
];

const experiences = [
  {
    role: "AI Engineer",
    company: "The Good Bug",
    logo: "/images/tgb.png",
    period: "February 2026 – Present",
    location: "Prabhadevi, Mumbai",
    bullets: [
      "Architecting and leading deployment of production-grade LangGraph multi-agent systems powering customer support (Goodsy), health coaching (Bugzy), growth, and internal operations.",
      "Owning end-to-end system design, including Meta WhatsApp, LiveKit voice infrastructure, LLM orchestration, and backend integrations.",
      "Establishing evaluation pipelines, monitoring, and performance optimization while driving experimentation and product iteration to ensure scalable, reliable AI systems with measurable business impact.",
    ],
  },
  {
    role: "Product Intern (AI)",
    company: "The Good Bug",
    logo: "/images/tgb.png",
    period: "August 2025 – January 2026",
    location: "Prabhadevi, Mumbai",
    bullets: [
      "Built and deployed initial LangGraph agent workflows to automate customer interactions.",
      "Integrated Meta WhatsApp APIs to enable AI-driven messaging capabilities.",
      "Developed a prototype voice AI agent using LiveKit and open-source components.",
    ],
  },
  {
    role: "AI Intern",
    company: "Ergode",
    logo: "/images/ergodecorporate_logo.jpeg",
    period: "June 2025 – July 2025",
    location: "Andheri, Mumbai",
    bullets: [
      "Orchestrated AI agents using n8n to automate complex business workflows, reducing operational overhead.",
      "Developed LLM-powered automation pipelines that integrated with enterprise systems.",
      "Built end-to-end AI solutions from prototyping to deployment.",
    ],
  },
];

const projects: Array<{ title: string; tags: string[]; href?: string; bullets: string[] }> = [
  {
    title: "Bugzy -- AI Health & Wellness Chatbot",
    tags: ["LangGraph", "AWS Bedrock", "RAG", "FastAPI", "MongoDB"],
    bullets: [
      "Designed a multi-agent orchestration system with dynamic routing across 3 specialized agents powered by complex per-agent LangGraph state machines.",
      "Built a health knowledge retrieval pipeline (Pinecone + all-MiniLM-L6-v2) with CTAS-based emergency detection, 5-layer medical guardrails, and contraindication checking across 30+ products.",
    ],
  },
  {
    title: "Goodsy -- AI Customer Service Agent",
    tags: ["LangGraph", "AWS Bedrock", "Pinecone", "FastAPI", "Docker"],
    bullets: [
      "Automated the majority of customer service interactions via a multi-node LangGraph state machine handling order tracking, returns, exchanges, and escalation across WhatsApp and Freshchat.",
      "Built an LLM-powered order agent (AWS Bedrock) with priority-based intent detection and a semantic search microservice for accurate product FAQ responses.",
    ],
  },
];

const achievements = [
  {
    title: "Level SuperMind Hackathon 2025",
    subtitle: "Insight Sphere: Track Trends, Maximize Impact.",
    image: "/images/level_supermind.jpg",
    body: "Finalist in the Level Supermind Hackathon 2025, a national level competition in collaboration with BeerBiceps, Hitesh Choudhary, AWS, LangFlow, and DataStax. Invited to the Level office in Mumbai for a 24-hour overnight hackathon.",
  },
  {
    title: "Google GenAI Exchange Hackathon 2024",
    subtitle: "Deep Learning for Medical Imaging, AI-Powered Cancer Detection",
    image: "/images/achieve-google.png",
    body: "Finalist among the top 5 teams in the Glance Problem Track, out of over 38,000 registrations and 3,300 teams formed. Invited to Google's Gurgaon office for a special Demo Day.",
  },
  {
    title: "Smart India Hackathon 2023",
    subtitle: "Computer Vision Problem Statement, Real-Time Object Detection",
    image: "/images/achieve-sih.png",
    body: "Ranked 7th all-India and waitlisted for a computer vision problem statement in SIH 2023. Cleared the internal hackathon and was the only team from the college to reach the official first round of SIH 2023.",
  },
];

const techSkills = {
  Languages: "Python, SQL, C++",
  "Tools / Frameworks": "TensorFlow, PyTorch, Keras, Scikit-learn, LangFlow, n8n, LangChain, HuggingFace, LangGraph, LiveKit, PipeCat, Pinecone, Sentence-Transformers",
};

/* ─── Sub-components ────────────────────────────────────────────── */

const SectionLabel = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="h-px w-6 bg-primary/60" />
    <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">{label}</p>
  </div>
);

const Divider = () => (
  <div className="w-full h-px bg-white/5 mb-6" />
);

const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Page ──────────────────────────────────────────────────────── */

const ResumePage = () => (
  <SmoothScroll>
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="blur-content">

      {/* Hero bar */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-10 lg:gap-14">
          <div>
            {/* Back */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors mb-10 group"
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
                  <path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                back to home
              </Link>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold leading-none tracking-[-0.03em] text-foreground mb-6"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              résumé
            </motion.h1>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <GradientButton className="rounded-full px-5 py-2.5 text-xs group gap-2.5" asChild>
                <a
                  href={DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/view-icon.png" alt="" className="w-3.5 h-3.5 invert opacity-50 group-hover:opacity-100 transition-opacity" />
                  view on drive
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="origin-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-[15deg]"
                  >
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </GradientButton>

              <GradientButton variant="variant" className="rounded-full px-5 py-2.5 text-xs group gap-2.5" asChild>
                <a
                  href={DRIVE_DOWNLOAD}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/download-icon.png" alt="" className="w-3.5 h-3.5 opacity-70 invert group-hover:opacity-100 transition-opacity" />
                  download pdf
                </a>
              </GradientButton>
            </motion.div>
          </div>

          {/* Identity */}
          <motion.div
            className="rounded-2xl border border-border/40 bg-white/[0.03] p-6 md:p-8 h-fit"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
              contact
            </p>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Siddharth Mishra</h2>
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
              {[
                { label: "mishrasiddharth072@gmail.com", href: "mailto:mishrasiddharth072@gmail.com" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/siddharth-mishra-0a5227228/" },
                { label: "GitHub", href: "https://github.com/Sid3503" },
                { label: "Peerlist", href: "https://peerlist.io/sid3503" },
                { label: "Hugging Face", href: "https://huggingface.co/Sid3503" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 lg:px-20 py-14">
        <div className="max-w-6xl mx-auto lg:columns-2 lg:gap-10 space-y-8">
          {/* Education */}
          <section className="rounded-2xl border border-border/40 bg-white/[0.03] p-8 md:p-10 break-inside-avoid">
            <SectionLabel label="education" />
            <Divider />
            <div className="space-y-8">
              {education.map((edu) => (
                <FadeIn key={edu.school}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-lg">{edu.school}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{edu.degree}</p>
                      <p className="font-mono text-xs text-primary mt-1">{edu.score}</p>
                    </div>
                    <div className="text-right font-mono text-xs text-muted-foreground shrink-0">
                      <p>{edu.period}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="rounded-2xl border border-border/40 bg-white/[0.03] p-8 md:p-10 break-inside-avoid">
            <SectionLabel label="experience" />
            <Divider />
            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <FadeIn key={exp.role + exp.period} delay={i * 0.07}>
                  <div className="flex gap-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-9 h-9 mt-0.5 rounded-lg object-contain bg-card border border-border p-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                        <div>
                          <p className="font-mono text-xs text-primary mb-0.5">{exp.company}</p>
                          <h3 className="font-display font-semibold text-foreground text-xl">{exp.role}</h3>
                        </div>
                        <div className="font-mono text-xs text-muted-foreground text-right shrink-0">
                          <p>{exp.period}</p>
                          <p>{exp.location}</p>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {exp.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-primary mt-1.5 shrink-0">•</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="rounded-2xl border border-border/40 bg-white/[0.03] p-8 md:p-10 break-inside-avoid">
            <SectionLabel label="skills" />
            <Divider />
            <FadeIn>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs text-muted-foreground border border-border rounded-full px-3 py-1.5 hover:text-foreground hover:border-foreground/30 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* Projects */}
          <section className="rounded-2xl border border-border/40 bg-white/[0.03] p-8 md:p-10 break-inside-avoid">
            <SectionLabel label="projects" />
            <Divider />
            <div className="space-y-8">
              {projects.map((proj, i) => (
                <FadeIn key={proj.title} delay={i * 0.07}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-display font-semibold text-foreground text-lg">{proj.title}</h3>
                      {proj.href && (
                        <a
                          href={proj.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors"
                        >
                          view repo
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] text-muted-foreground border border-border rounded-full px-2.5 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {proj.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="rounded-2xl border border-border/40 bg-white/[0.03] p-8 md:p-10 break-inside-avoid">
            <SectionLabel label="achievements" />
            <Divider />
            <div className="space-y-8">
              {achievements.map((ach, i) => (
                <FadeIn key={ach.title} delay={i * 0.07}>
                  <div className="flex gap-5">
                    <img
                      src={ach.image}
                      alt={ach.title}
                      className="w-14 h-14 rounded-xl object-cover border border-border flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-lg leading-tight">{ach.title}</h3>
                      <p className="font-mono text-xs text-primary mt-0.5 mb-2">{ach.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ach.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="rounded-2xl border border-border/40 bg-white/[0.03] p-8 md:p-10 break-inside-avoid">
            <SectionLabel label="technical skills" />
            <Divider />
            <FadeIn>
              <div className="space-y-4">
                {Object.entries(techSkills).map(([label, value]) => (
                  <div key={label} className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <span className="font-mono text-xs text-foreground w-36 shrink-0">{label}:</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>
        </div>
      </div>

      {/* Footer strip */}
      <div className="px-6 md:px-12 lg:px-20 py-10 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-end gap-4">
          <Link to="/" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
            ← back to home
          </Link>
        </div>
      </div>
    </div>
  </div>
  </SmoothScroll>
);

export default ResumePage;
