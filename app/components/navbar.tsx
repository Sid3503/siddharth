"use client"
import { useState, useEffect } from "react"
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

// Hydration-safe wrapper for useMediaQuery
function useHydrationSafeMediaQuery(query: { minWidth: number }) {
  const mediaQueryResult = useMediaQuery(query)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return mounted ? mediaQueryResult : false
}

export default function FloatingNavbar() {
  const isDesktop = useHydrationSafeMediaQuery({ minWidth: 768 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleNavClick = (href: string, index: number) => {
    setActiveIndex(index)
    const element = document.querySelector(href)
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update active index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      const sections = navLinks.map(link => ({
        id: link.href,
        element: document.querySelector(link.href)
      }))

      let newActiveIndex = 0
      
      sections.forEach(({ element }, index) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            newActiveIndex = index
          }
        }
      })

      if (window.scrollY < 100) {
        newActiveIndex = 0
      }

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeIndex])

  // Calculate indicator position for both mobile and desktop
  const getIndicatorStyle = () => {
    if (isDesktop) {
      // For desktop, use same logic as mobile but with button width of 120px
      return {
        x: activeIndex * 128, // 120px width + 8px gap
        width: 120,
      }
    } else {
      // For mobile, fix the calculation to match actual button dimensions
      return {
        x: activeIndex * 56, // 48px width + 8px gap (from gap-2 class)
        width: 48,
      }
    }
  }

  // Get transition settings based on device
  const getTransitionSettings = () => {
    return {
      type: "tween",
      ease: "easeInOut",
      duration: 0.4
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center"
    >
      <div className="relative flex items-center gap-2 p-1 rounded-full backdrop-blur-xl bg-white/20 dark:bg-[#0a0a0a]/30 shadow-lg border border-white/20 dark:border-white/10">
        {/* Animated background indicator */}
        <motion.div
          className="absolute h-12 rounded-full bg-gradient-to-r from-indigo-500/20 to-rose-500/20 border border-indigo-500/30 dark:border-rose-500/30"
          initial={false}
          animate={getIndicatorStyle()}
          transition={getTransitionSettings()}
        />
        
        {navLinks.map(({ href, icon, label }, index) => (
          <motion.button
            key={href}
            onClick={() => handleNavClick(href, index)}
            onMouseEnter={() => isDesktop && setHoveredIndex(index)}
            onMouseLeave={() => isDesktop && setHoveredIndex(null)}
            whileHover={isDesktop ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`relative group flex items-center justify-center h-12 rounded-full transition-all duration-300 z-10 ${
              activeIndex === index 
                ? 'text-indigo-600 dark:text-rose-400' 
                : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'
            }`}
            style={{
              width: isDesktop ? '120px' : '48px'
            }}
          >
            <div className="flex items-center gap-2 px-3 overflow-hidden">
              <span className="flex-shrink-0">
                {icon}
              </span>
              
              {/* Show label on desktop */}
              {isDesktop && (
                <motion.span
                  className="text-xs font-medium whitespace-nowrap"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.span>
              )}
            </div>
            
            {/* Tooltip for mobile only */}
            {!isDesktop && (
              <motion.span
                className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-xs font-medium text-black/80 dark:text-white/80 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg border border-white/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none"
                initial={{ y: 5, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                {label}
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  )
}
