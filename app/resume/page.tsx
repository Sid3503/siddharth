"use client"

import Header from "@/components/header"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import TechnicalSkills from "@/components/technical-skills"
import { motion } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#030303] text-black dark:text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl -z-10" />

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-lg md:text-xl font-bold text-black/90 dark:text-white/90">
          Siddharth Mishra
        </Link>
        <ThemeToggle />
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
                    <p className="text-indigo-600 dark:text-indigo-300 font-medium text-sm">Ergode</p>
                  </div>
                  <div className="mt-1 sm:mt-0 text-xs text-gray-500 dark:text-gray-400 font-medium">June 2025 - Present</div>
                </div>
                <ul className="list-disc pl-5 mt-2 text-xs text-black/80 dark:text-white/80 space-y-1">
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
