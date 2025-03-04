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
            <h2 className="font-bold text-2xl mb-4">🏆 Achievements</h2>
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