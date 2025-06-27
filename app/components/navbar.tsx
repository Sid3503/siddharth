"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Home, Award, FolderKanban, Mail, Briefcase } from "lucide-react"
import { useMediaQuery } from "react-responsive"

const navLinks = [
  { href: "#home", icon: <Home size={20} />, label: "Home" },
  { href: "#experience", icon: <Briefcase size={20} />, label: "Experience" },
  { href: "#achievements", icon: <Award size={20} />, label: "Achievements" },
  { href: "#projects", icon: <FolderKanban size={20} />, label: "Projects" },
  { href: "#contact", icon: <Mail size={20} />, label: "Contact" },
]

export default function FloatingNavbar() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [activeLink, setActiveLink] = useState("#home")
  const [circleStyle, setCircleStyle] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [isNavbarAnimated, setIsNavbarAnimated] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [tappedIndex, setTappedIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Responsive sizing
  const labelWidths: Record<string, number> = {
    "Home": isMobile ? 60 : 70,
    "Experience": isMobile ? 90 : 100,
    "Achievements": isMobile ? 100 : 110,
    "Projects": isMobile ? 80 : 90,
    "Contact": isMobile ? 75 : 85
  }

  const baseButtonSize = isMobile ? 40 : 48
  const expandedButtonPadding = isMobile ? 12 : 16

  const handleNavClick = (href: string, index: number) => {
    setActiveLink(href)
    setTappedIndex(index)
    const element = document.querySelector(href)
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    updateCirclePosition(index)
  }

  const updateCirclePosition = (index: number) => {
    setTimeout(() => {
      const btn = containerRef.current?.querySelectorAll("button")[index]
      if (btn && containerRef.current) {
        const rect = btn.getBoundingClientRect()
        const containerRect = containerRef.current.getBoundingClientRect()
        
        const left = rect.left - containerRect.left
        const top = rect.top - containerRect.top
        
        const isInteracted = hoveredIndex === index || tappedIndex === index
        const expandedWidth = labelWidths[navLinks[index].label] + baseButtonSize
        const currentWidth = isInteracted ? expandedWidth : baseButtonSize
        
        setCircleStyle({
          left: left - 2,
          top: top - 2,
          width: currentWidth + 4,
          height: rect.height + 4,
        })
      }
    }, 50)
  }

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => ({
        id: link.href,
        element: document.querySelector(link.href)
      })).filter(section => section.element)

      let currentSection = "#home"
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            currentSection = id
          }
        }
      })

      if (window.scrollY < 100) currentSection = "#home"
      if (currentSection !== activeLink) setActiveLink(currentSection)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeLink])

  // Update circle position on state changes
  useEffect(() => {
    const index = navLinks.findIndex(link => link.href === activeLink)
    if (index !== -1) updateCirclePosition(index)
  }, [activeLink, hoveredIndex, tappedIndex])

  // Initialize navbar
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavbarAnimated(true)
      updateCirclePosition(0)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  // Reset tapped state after animation
  useEffect(() => {
    if (tappedIndex !== null) {
      const timer = setTimeout(() => setTappedIndex(null), 1000)
      return () => clearTimeout(timer)
    }
  }, [tappedIndex])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center"
    >
      <div
        ref={containerRef}
        className={`relative flex items-center gap-1 p-1 rounded-full backdrop-blur-xl ${
          isMobile ? 'bg-white/30 dark:bg-[#0a0a0a]/50' : 'bg-white/20 dark:bg-[#0a0a0a]/30'
        } shadow-lg border border-white/20 dark:border-white/10`}
      >
        {isNavbarAnimated && (
          <motion.div
            className="absolute rounded-full border-2 border-indigo-500/50 dark:border-rose-500/50 bg-gradient-to-r from-indigo-500/10 to-rose-500/10"
            initial={{ opacity: 0 }}
            animate={{
              left: circleStyle.left,
              top: circleStyle.top,
              width: circleStyle.width,
              height: circleStyle.height,
              opacity: 1,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 30,
              opacity: { duration: 0.3 }
            }}
          />
        )}

        {navLinks.map(({ href, icon, label }, index) => {
          const isInteracted = hoveredIndex === index || tappedIndex === index
          
          return (
            <motion.button
              key={href}
              onClick={() => handleNavClick(href, index)}
              onHoverStart={() => !isMobile && setHoveredIndex(index)}
              onHoverEnd={() => !isMobile && setHoveredIndex(null)}
              onTouchStart={() => isMobile && setHoveredIndex(index)}
              onTouchEnd={() => isMobile && setTimeout(() => setHoveredIndex(null), 300)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative flex items-center justify-center overflow-hidden rounded-full z-10"
            >
              <motion.div
                className={`flex items-center gap-3 ${
                  isMobile ? 'h-10 px-3' : 'h-12 px-4'
                } bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10`}
                animate={{
                  width: isInteracted ? labelWidths[label] + baseButtonSize : baseButtonSize,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <motion.span
                  className="flex-shrink-0 text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white"
                  animate={{
                    scale: isInteracted ? 1.15 : 1,
                  }}
                >
                  {icon}
                </motion.span>
                
                <motion.span
                  className="text-sm font-medium text-black/80 dark:text-white/80 whitespace-nowrap"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{
                    opacity: isInteracted ? 1 : 0,
                    x: isInteracted ? 0 : -5,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.span>
              </motion.div>
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}
