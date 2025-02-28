"use client"

import Header from "@/components/header"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import TechnicalSkills from "@/components/technical-skills"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#030303] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      <header className="relative z-10 p-4 md:p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-lg md:text-xl font-bold text-white/90">
          Siddharth Mishra
        </Link>
      </header>

      <main className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Header />
          </motion.div>

          <hr className="border-gray-700 my-8" />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h2 className="font-bold text-2xl mb-4">🎓 Education</h2>
            <p className="italic text-gray-300 mb-2">Academic background and qualifications</p>
            <Education />
          </motion.div>

          <hr className="border-gray-700 my-8" />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="font-bold text-2xl mb-4">💡 Skills</h2>
            <p className="italic text-gray-300 mb-2">Key strengths and expertise</p>
            <Skills />
          </motion.div>

          <hr className="border-gray-700 my-8" />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h2 className="font-bold text-2xl mb-4">📂 Projects</h2>
            <p className="italic text-gray-300 mb-2">Notable work and contributions</p>
            <Projects />
          </motion.div>

          <hr className="border-gray-700 my-8" />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h2 className="font-bold text-2xl mb-4">🏆 Achievements</h2>
            <p className="italic text-gray-300 mb-2">Awards and recognitions</p>
            <Achievements />
          </motion.div>

          <hr className="border-gray-700 my-8" />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <h2 className="font-bold text-2xl mb-4">🔧 Technical Skills</h2>
            <p className="italic text-gray-300 mb-2">Tools and technologies</p>
            <TechnicalSkills />
          </motion.div>
        </div>
      </main>
    </div>
  )
}