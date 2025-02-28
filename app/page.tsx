"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpencv,
  SiReact,
  SiFlask,
  SiNextdotjs,
} from "react-icons/si"
import { useEffect } from "react"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Page() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  // Smooth scrolling for navigation links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const targetElement = document.querySelector(target.hash)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", handleClick))

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick))
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#030303] text-white">
      {/* Fixed Hero Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <header className="relative z-10 p-4 md:p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-lg md:text-xl font-bold text-white/90">
          Siddharth Mishra
        </Link>
        <nav className="space-x-4 md:space-x-6">
          <a href="#achievements" className="hover:text-white/90 text-white/60 text-sm md:text-base font-bold transition-colors duration-300 ease-in-out">
            Achievements
          </a>
          <a href="#projects" className="hover:text-white/90 text-white/60 text-sm md:text-base font-bold transition-colors duration-300 ease-in-out">
            Projects
          </a>
          <a href="#contact" className="hover:text-white/90 text-white/60 text-sm md:text-base font-bold transition-colors duration-300 ease-in-out">
            Contact
          </a>
        </nav>
      </header>

      <main className="relative">
        {/* Hero Section with Geometric Shapes */}
        <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <ElegantShape
              delay={0.3}
              width={600}
              height={140}
              rotate={12}
              gradient="from-indigo-500/[0.15]"
              className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            />
            <ElegantShape
              delay={0.5}
              width={500}
              height={120}
              rotate={-15}
              gradient="from-rose-500/[0.15]"
              className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            />
            <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-8}
              gradient="from-violet-500/[0.15]"
              className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            />
            <ElegantShape
              delay={0.6}
              width={200}
              height={60}
              rotate={20}
              gradient="from-amber-500/[0.15]"
              className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                    Hi, I&apos;m
                  </span>
                  <br />
                  <span
                    className={cn(
                      "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                      pacifico.className,
                    )}
                  >
                    Siddharth Mishra
                  </span>
                </h1>
              </motion.div>

              <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                  AI Developer & Data Scientist
                </p>
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="flex justify-center gap-4"
              >
                <Link href="/resume">
                  <Button
                    variant="outline"
                    className="bg-white/5 border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500 ease-in-out"
                  >
                    View Resume
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rest of the content */}
        <div className="relative bg-[#030303]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303] to-[#030303]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
            {/* About Section */}
            <section id="about" className="py-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-white/80"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">About Me</h2>
                <p className="max-w-2xl text-sm md:text-base">
                  AI Developer and Data Scientist specializing in machine learning and deep learning solutions.
                  Passionate about building intelligent systems that solve real-world problems through innovative
                  technology and data-driven insights.
                </p>
              </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-4 flex flex-col items-center bg-white/[0.03] border-white/[0.08]">
                      <skill.icon className="text-4xl md:text-5xl text-white/80" />
                      <p className="mt-2 font-medium text-sm md:text-base text-white/60">{skill.name}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Achievements */}
            <section id="achievements" className="py-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Achievements</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex" // Add flex to ensure consistent alignment
                  >
                    <Card className="overflow-hidden bg-white/[0.03] border-white/[0.08] w-full h-full">
                      <div className="relative h-48">
                        <Image
                          src={achievement.image || "/placeholder.svg"}
                          alt={achievement.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 flex-grow">
                        <h3 className="font-bold text-xl text-white">{achievement.title}</h3>
                        <p className="text-white/60 mt-2">
                          {achievement.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden bg-white/[0.03] border-white/[0.08]">
                      <div className="relative h-72">
                        <video
                          src={project.video || "/placeholder.mp4"}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-bold text-xl text-white">{project.title}</h3>
                          {project.github && (
                            <Link
                              href={project.github}
                              className="text-white/60 hover:text-white transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-6 h-6" />
                            </Link>
                          )}
                        </div>
                        <p className="text-white/60 mb-4">{project.description}</p>
                        <div className="flex gap-2 flex-wrap">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="bg-white/[0.03] border-white/[0.08] text-white/60"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Contact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-white/[0.03] border-white/[0.08]">
                    <h3 className="font-bold text-xl text-white mb-4">Get in Touch</h3>
                    <p className="text-white/60 mb-6">
                      Feel free to reach out to me for any inquiries or collaborations. I&apos;m always open to new opportunities and discussions.
                    </p>
                    <div className="flex flex-col space-y-4">
                      <a href="mailto:siddharthmishra072@gmail.com" className="flex items-center text-white/60 hover:text-white">
                        <Mail className="w-6 h-6 mr-2" />
                        mishrasiddharth072@gmail.com
                      </a>
                    </div>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-white/[0.03] border-white/[0.08]">
                    <h3 className="font-bold text-xl text-white mb-4">Follow Me</h3>
                    <p className="text-white/60 mb-6">
                      Stay updated with my latest projects and achievements by following me on these platforms.
                    </p>
                    <div className="flex space-x-4">
                      <Link href="https://github.com/Sid3503" className="text-white/60 hover:text-white">
                        <Github className="w-6 h-6" />
                      </Link>
                      <Link href="https://www.linkedin.com/in/siddharth-mishra-0a5227228/" className="text-white/60 hover:text-white">
                        <Linkedin className="w-6 h-6" />
                      </Link>
                      <Link href="https://x.com/siddharthm3503" className="text-white/60 hover:text-white">
                        <Twitter className="w-6 h-6" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-8 md:py-10 border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-center items-center">
          <p className="text-sm text-white">© 2025. Siddharth Mishra.</p>
        </div>
      </footer>
    </div>
  )
}

const achievements = [
  {
    title: "Level SuperMind Hackathon 2025",
    description:
      "Finalist in the Level Supermind Hackathon 2025, a national level competition in collaboration with BeerBiceps, Hitesh Choudhary, AWS, LangFlow, and DataStax.",
    image: "/images/level_supermind.jpg",
  },
  {
    title: "Google GenAI Exchange Hackathon 2024",
    description:
      "Finalist among the top 5 teams in the Glance Problem Track, out of over 38,000 registrations and 3,300 teams formed across Asia.",
    image: "/images/google_genai.jpg",
  },
  {
    title: "Smart India Hackathon 2023",
    description: "Ranked 7th all-India and waitlisted for a computer vision problem statement in SIH 2023.",
    image: "/images/sih23.png",
  },
]

const projects = [
  {
    title: "InsightSphere",
    description: "Track Trends, Maximize Impact.",
    video: "/videos/insightsphere.mp4",
    technologies: ["Flask", "Gemini", "DataStax", "Langflow"],
    github: "https://github.com/Sid3503/InsightSphere",
  },
  {
    title: "Cancero",
    description: "Catch it fast, prevent the pain, with AI insights, health to gain.",
    video: "/videos/cancero.mp4",
    technologies: ["Flask", "PyPDF", "Computer Vision", "NLP"],
    github: "https://github.com/Sid3503/Cancero",
  },
]

const skills = [
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Scikit-Learn", icon: SiScikitlearn },
  { name: "OpenCV", icon: SiOpencv },
  { name: "React", icon: SiReact },
  { name: "Flask", icon: SiFlask },
  { name: "Next.js", icon: SiNextdotjs },
]