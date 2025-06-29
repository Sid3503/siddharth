"use client"

import Header from "@/components/header"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import TechnicalSkills from "@/components/technical-skills"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#030303] text-black dark:text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl -z-10" />

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* View Resume Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onClick={() => {
              window.open('https://drive.google.com/file/d/13M4UVtSSKkapGKlwZTDky7xXXdkvbyzP/view?usp=sharing', '_blank')
            }}
            className="relative group flex items-center justify-center p-3"
          >
            <Image
              src="/images/view-icon.png"
              alt="View Resume"
              width={22}
              height={22}
            />
            {/* Tooltip */}
            <span className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-xs font-medium text-black/80 dark:text-white/80 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg border border-white/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
              View Resume
            </span>
          </motion.button>

          {/* Download Resume Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              // Create a temporary link to download the resume
              const link = document.createElement('a')
              link.href = '/resume/SiddharthResume.pdf'
              link.download = 'SiddharthResume.pdf'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
            className="relative group flex items-center justify-center p-3"
          >
            <Image
              src="/images/download-icon.png"
              alt="Download"
              width={22}
              height={22}
            />
            {/* Tooltip */}
            <span className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-xs font-medium text-black/80 dark:text-white/80 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg border border-white/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
              Download Resume
            </span>
          </motion.button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Header />
          </motion.div>

          <hr className="border-gray-300 dark:border-gray-700 my-8" />

          {/* Education Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h2 className="font-bold text-2xl mb-4">🎓 Education</h2>
            <p className="italic text-gray-500 dark:text-gray-300 mb-2">Academic background and qualifications</p>
            <Education />
          </motion.div>

          <hr className="border-gray-300 dark:border-gray-700 my-8" />

          {/* Skills Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="font-bold text-2xl mb-4">💡 Skills</h2>
            <p className="italic text-gray-500 dark:text-gray-300 mb-2">Key strengths and expertise</p>
            <Skills />
          </motion.div>

          <hr className="border-gray-300 dark:border-gray-700 my-8" />

          {/* Experience Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
            <h2 className="font-bold text-2xl mb-4">💼 Experience</h2>
            <div className="bg-white dark:bg-[#18181b] rounded-lg p-5 flex flex-col sm:flex-row items-start gap-4 shadow-sm">
              <div className="w-14 h-14 relative rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#18181b] flex-shrink-0">
                <Image
                  src="/images/ergodecorporate_logo.jpeg"
                  alt="Ergode Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="56px"
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">AI Intern</h3>
                    <p className="text-indigo-600 dark:text-indigo-300 font-medium italic text-sm">Ergode</p>
                  </div>
                  <div className="mt-1 sm:mt-0 text-sm text-gray-500 dark:text-gray-400 font-medium">June 2025 - Present</div>
                </div>
                <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                  <li>Agentic AI development and automation of intelligent workflows using agentic frameworks.</li>
                  <li>Designing, developing, and deploying AI agents to automate complex tasks and streamline business processes.</li>
                  <li>Building adaptive, autonomous solutions for real-world problems in a collaborative environment.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <hr className="border-gray-300 dark:border-gray-700 my-8" />

          {/* Projects Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h2 className="font-bold text-2xl mb-4 text-black dark:text-white">📂 Projects</h2>
            <p className="italic text-gray-700 dark:text-gray-300 mb-2">
              Notable work and contributions
            </p>

            <Projects />
          </motion.div>

          <hr className="border-gray-300 dark:border-gray-700 my-8" />

          {/* Achievements Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h2 className="font-bold text-2xl mb-4">🏆 Achievements/Extra Curricular</h2>
            <p className="italic text-gray-500 dark:text-gray-300 mb-2">Awards and recognitions</p>
            <Achievements />
          </motion.div>

          <hr className="border-gray-300 dark:border-gray-700 my-8" />

          {/* Technical Skills Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <h2 className="font-bold text-2xl mb-4">🔧 Technical Skills</h2>
            <p className="italic text-gray-500 dark:text-gray-300 mb-2">Tools and technologies</p>
            <TechnicalSkills />
          </motion.div>
        </div>
      </main>
    </div>
  )
}
