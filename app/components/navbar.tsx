"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Home, Award, FolderKanban, Mail, Briefcase } from "lucide-react"

const navLinks = [
  { href: "#home", icon: <Home size={20} />, label: "Home" },
  { href: "#experience", icon: <Briefcase size={20} />, label: "Experience" },
  { href: "#achievements", icon: <Award size={20} />, label: "Achievements" },
  { href: "#projects", icon: <FolderKanban size={20} />, label: "Projects" },
  { href: "#contact", icon: <Mail size={20} />, label: "Contact" },
]

export default function FloatingNavbar() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNavClick = (href: string, index: number) => {
    setActiveIndex(index)
    const element = document.querySelector(href)
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center"
    >
      <div className="relative flex items-center gap-1 p-1 rounded-full backdrop-blur-xl bg-white/20 dark:bg-[#0a0a0a]/30 shadow-lg border border-white/20 dark:border-white/10">
        {/* Simple sliding background indicator */}
        <motion.div
          className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500/20 to-rose-500/20 border border-indigo-500/30 dark:border-rose-500/30"
          initial={false}
          animate={{
            x: activeIndex * 52, // 48px width + 4px gap
          }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 30,
            duration: 0.3
          }}
        />
        
        {navLinks.map(({ href, icon, label }, index) => (
          <motion.button
            key={href}
            onClick={() => handleNavClick(href, index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`relative group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 z-10 ${
              activeIndex === index 
                ? 'text-indigo-600 dark:text-rose-400' 
                : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'
            }`}
          >
            {icon}
            
            {/* Tooltip */}
            <motion.span
              className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-xs font-medium text-black/80 dark:text-white/80 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg border border-white/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none"
              initial={{ y: 5, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
            >
              {label}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  )
}
