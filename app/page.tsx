"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { Github, Linkedin, Twitter, Mail, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useState } from "react"
import {
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpencv,
  SiFlask,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiSqlite,
  SiKeras,
  SiGooglecloud,
  SiVercel,
  SiRender,
  SiPostgresql,
} from "react-icons/si"
import { useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ExternalLink } from "lucide-react"
import Experience from "./components/experience"

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
            "backdrop-blur-[2px] border-2 border-white/[0.15] dark:border-white/[0.15] border-black/[0.05]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] dark:after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

// Custom LangChain Icon Component
const LangChainIcon = ({ className }: { className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    width="1em"
    height="1em"
  >
    <path d="M6.0988 5.9175C2.7359 5.9175 0 8.6462 0 12s2.736 6.0825 6.0988 6.0825h11.8024C21.2641 18.0825 24 15.3538 24 12s-2.736 -6.0825 -6.0988 -6.0825ZM5.9774 7.851c0.493 0.0124 1.02 0.2496 1.273 0.6228 0.3673 0.4592 0.4778 1.0668 0.8944 1.4932 0.5604 0.6118 1.199 1.1505 1.7161 1.802 0.4892 0.5954 0.8386 1.2937 1.1436 1.9975 0.1244 0.2335 0.1257 0.5202 0.31 0.7197 0.0908 0.1204 0.5346 0.4483 0.4383 0.5645 0.0555 0.1204 0.4702 0.286 0.3263 0.4027 -0.1944 0.04 -0.4129 0.0476 -0.5616 -0.1074 -0.0549 0.126 -0.183 0.0596 -0.2819 0.0432a4 4 0 0 0 -0.025 0.0736c-0.3288 0.0219 -0.5754 -0.3126 -0.732 -0.565 -0.3111 -0.168 -0.6642 -0.2702 -0.982 -0.446 -0.0182 0.2895 0.0452 0.6485 -0.231 0.8353 -0.014 0.5565 0.8436 0.0656 0.9222 0.4804 -0.061 0.0067 -0.1286 -0.0095 -0.1774 0.0373 -0.2239 0.2172 -0.4805 -0.1645 -0.7385 -0.007 -0.3464 0.174 -0.3808 0.3161 -0.8096 0.352 -0.0237 -0.0359 -0.0143 -0.0592 0.0059 -0.0811 0.1207 -0.1399 0.1295 -0.3046 0.3356 -0.3643 -0.2122 -0.0334 -0.3899 0.0833 -0.5686 0.1757 -0.2323 0.095 -0.2304 -0.2141 -0.5878 0.0164 -0.0396 -0.0322 -0.0208 -0.0615 0.0018 -0.0864 0.0908 -0.1107 0.2102 -0.127 0.345 -0.1208 -0.663 -0.3686 -0.9751 0.4507 -1.2813 0.0432 -0.092 0.0243 -0.1265 0.1068 -0.1845 0.1652 -0.05 -0.0548 -0.0123 -0.1212 -0.0099 -0.1857 -0.0598 -0.028 -0.1356 -0.041 -0.1179 -0.1366 -0.1171 -0.0395 -0.1988 0.0295 -0.286 0.0952 -0.0787 -0.0608 0.0532 -0.1492 0.0776 -0.2125 0.0702 -0.1216 0.23 -0.025 0.3111 -0.1126 0.2306 -0.1308 0.552 0.0814 0.8155 0.0455 0.203 0.0255 0.4544 -0.1825 0.3526 -0.39 -0.2171 -0.2767 -0.179 -0.6386 -0.1839 -0.9695 -0.0268 -0.1929 -0.491 -0.4382 -0.6252 -0.6462 -0.1659 -0.1873 -0.295 -0.4047 -0.4243 -0.6182 -0.4666 -0.9008 -0.3198 -2.0584 -0.9077 -2.8947 -0.266 0.1466 -0.6125 0.0774 -0.8418 -0.119 -0.1238 0.1125 -0.1292 0.2598 -0.139 0.4161 -0.297 -0.2962 -0.2593 -0.8559 -0.022 -1.1855 0.0969 -0.1302 0.2127 -0.2373 0.342 -0.3316 0.0292 -0.0213 0.0391 -0.0419 0.0385 -0.0747 0.1174 -0.5267 0.5764 -0.7391 1.0694 -0.7267m12.4071 0.46c0.5575 0 1.0806 0.2159 1.474 0.6082s0.61 0.9145 0.61 1.4704c0 0.556 -0.2167 1.078 -0.61 1.4698v0.0006l-0.902 0.8995a2.08 2.08 0 0 1 -0.8597 0.5166l-0.0164 0.0047 -0.0058 0.0164a2.05 2.05 0 0 1 -0.474 0.7308l-0.9018 0.8995c-0.3934 0.3924 -0.917 0.6083 -1.4745 0.6083s-1.0806 -0.216 -1.474 -0.6083c-0.813 -0.8107 -0.813 -2.1294 0 -2.9402l0.9019 -0.8995a2.056 2.056 0 0 1 0.858 -0.5143l0.017 -0.0053 0.0058 -0.0158a2.07 2.07 0 0 1 0.4752 -0.7337l0.9018 -0.8995c0.3934 -0.3924 0.9171 -0.6083 1.4745 -0.6083zm0 0.8965a1.18 1.18 0 0 0 -0.8388 0.3462l-0.9018 0.8995a1.181 1.181 0 0 0 -0.3427 0.9252l0.0053 0.0572c0.0323 0.2652 0.149 0.5044 0.3374 0.6917 0.13 0.1296 0.2733 0.2114 0.4471 0.2686a0.9 0.9 0 0 1 0.014 0.1582 0.884 0.884 0 0 1 -0.2609 0.6304l-0.0554 0.0554c-0.3013 -0.1028 -0.5525 -0.253 -0.7794 -0.4792a2.06 2.06 0 0 1 -0.5761 -1.0968l-0.0099 -0.0578 -0.0461 0.0368a1.1 1.1 0 0 0 -0.0876 0.0794l-0.9024 0.8995c-0.4623 0.461 -0.4623 1.212 0 1.673 0.2311 0.2305 0.535 0.346 0.8394 0.3461 0.3043 0 0.6077 -0.1156 0.8388 -0.3462l0.9019 -0.8995c0.4623 -0.461 0.4623 -1.2113 0 -1.673a1.17 1.17 0 0 0 -0.4367 -0.2749 1 1 0 0 1 -0.014 -0.1611c0 -0.2591 0.1023 -0.505 0.2901 -0.6923 0.3019 0.1028 0.57 0.2694 0.7962 0.495 0.3007 0.2999 0.4994 0.679 0.5756 1.0968l0.0105 0.0578 0.0455 -0.0373a1.1 1.1 0 0 0 0.0887 -0.0794l0.902 -0.8996c0.4622 -0.461 0.4628 -1.2124 0 -1.6735a1.18 1.18 0 0 0 -0.8395 -0.3462Zm-9.973 5.1567 -0.0006 0.0006c-0.0793 0.3078 -0.1048 0.8318 -0.506 0.847 -0.033 0.1776 0.1228 0.2445 0.2655 0.1874 0.141 -0.0645 0.2081 0.0508 0.2557 0.1657 0.2177 0.0317 0.5394 -0.0725 0.5516 -0.3298 -0.325 -0.1867 -0.4253 -0.5418 -0.5662 -0.8709" fill="currentColor" strokeWidth={1} />
  </svg>
);

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)

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

  useEffect(() => {
    const handleClick = (e: Event) => {
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
    <div className="min-h-screen w-full bg-white dark:bg-[#030303] text-black dark:text-white">
      {/* Remove the fixed background gradient */}
      {/* <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" /> */}

      {/* Apply gradient to the main container */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl -z-10" />

      {/* Header */}
      <header className="relative z-50 p-4 md:p-6 flex items-center justify-between max-w-6xl mx-auto">
        {/* Brand Name (left) */}
        <Link href="/" className="text-lg md:text-xl font-bold text-black/90 dark:text-white/90">
          Siddharth Mishra
        </Link>

        {/* Centered Navbar for Desktop */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          <a href="#experience" className="hover:text-black/90 dark:hover:text-white/90 text-black/60 dark:text-white/60 text-sm md:text-base font-bold transition-colors duration-300 ease-in-out">
            Experience
          </a>
          <a href="#achievements" className="hover:text-black/90 dark:hover:text-white/90 text-black/60 dark:text-white/60 text-sm md:text-base font-bold transition-colors duration-300 ease-in-out">
            Achievements
          </a>
          <a href="#projects" className="hover:text-black/90 dark:hover:text-white/90 text-black/60 dark:text-white/60 text-sm md:text-base font-bold transition-colors duration-300 ease-in-out">
            Projects
          </a>
          <a href="#contact" className="hover:text-black/90 dark:hover:text-white/90 text-black/60 dark:text-white/60 text-sm md:text-base font-bold transition-colors duration-300 ease-in-out">
            Contact
          </a>
        </nav>

        {/* Theme Toggle & Mobile Menu Button (right) */}
        <div className="flex md:hidden items-center gap-4">
          <button
            className="text-black dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Theme toggle only for desktop */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed md:hidden top-20 right-4 bg-white dark:bg-[#0a0a0a] rounded-lg shadow-xl border border-black/10 dark:border-white/10 p-4 w-56 flex flex-col space-y-3 z-50"
          >
            <a href="#experience" className="px-3 py-2 rounded-md text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/5 text-sm font-medium transition-colors" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#achievements" className="px-3 py-2 rounded-md text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/5 text-sm font-medium transition-colors" onClick={() => setIsOpen(false)}>Achievements</a>
            <a href="#projects" className="px-3 py-2 rounded-md text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/5 text-sm font-medium transition-colors" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="px-3 py-2 rounded-md text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/5 text-sm font-medium transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            <div className="px-3 py-2 border-t border-black/10 dark:border-white/10 mt-2">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
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
              gradient="from-indigo-500/[0.15] dark:from-indigo-500/[0.15] from-indigo-500/[0.05]"
              className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            />
            <ElegantShape
              delay={0.5}
              width={500}
              height={120}
              rotate={-15}
              gradient="from-rose-500/[0.15] dark:from-rose-500/[0.15] from-rose-500/[0.05]"
              className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            />
            <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-8}
              gradient="from-violet-500/[0.15] dark:from-violet-500/[0.15] from-violet-500/[0.05]"
              className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            />
            <ElegantShape
              delay={0.6}
              width={200}
              height={60}
              rotate={20}
              gradient="from-amber-500/[0.15] dark:from-amber-500/[0.15] from-amber-500/[0.05]"
              className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80 dark:from-white dark:to-white/80">
                    Hi, I&apos;m
                  </span>
                  <br />
                  <div className="relative inline-block">
                    {/* Main Text */}
                    <span
                      className={cn(
                        "bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-black/90 to-rose-600 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300",
                        pacifico.className,
                        "relative z-10 inline-block"
                      )}
                    >
                      Siddharth Mishra
                      {/* Shining Overlay */}
                      <span
                        className="absolute inset-0 bg-white/80 dark:bg-white/10"
                        style={{
                          maskImage: "linear-gradient(-75deg, rgba(0,0,0,0.3) 30%, #000 50%, rgba(0,0,0,0.3) 70%)",
                          WebkitMaskImage: "linear-gradient(-75deg, rgba(0,0,0,0.3) 30%, #000 50%, rgba(0,0,0,0.3) 70%)",
                          animation: "shine 3s ease-in-out infinite",
                        }}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </h1>
              </motion.div>
              <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                <p className="text-base sm:text-lg md:text-xl text-black/40 dark:text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
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
                    className="bg-black/5 border-black/10 text-black hover:bg-black hover:text-white dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 ease-in-out"
                  >
                    View Resume
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rest of the content */}
        <div className="relative bg-white dark:bg-[#030303]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white dark:via-[#030303] dark:to-[#030303]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
            {/* About Section */}
            <section id="about" className="py-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-black/80 dark:text-white/80"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">About Me</h2>
                <p className="max-w-2xl text-sm md:text-base">
                  AI Developer and Data Scientist specializing in machine learning and deep learning solutions.
                  Passionate about building intelligent systems that solve real-world problems through innovative
                  technology and data-driven insights.
                </p>
              </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black dark:text-white">Skills</h2>
              <div className="relative overflow-hidden">
                {/* First Row - Moving Right */}
                <div className="flex md:animate-scroll-right animate-scroll-right-mobile">
                  {firstRowSkills.map((skill, index) => (
                    <motion.div
                      key={`right-${index}`}
                      className="flex-shrink-0 px-4"
                    >
                      <Card className="p-4 flex flex-col items-center bg-white dark:bg-[#0a0a0a] border-black/[0.05] dark:border-white/[0.08] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-[200px]">
                        <skill.icon className="text-4xl md:text-5xl text-black dark:text-white" />
                        <p className="mt-2 font-medium text-sm md:text-base text-black/60 dark:text-white/60">
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {firstRowSkills.map((skill, index) => (
                    <motion.div
                      key={`right-dup-${index}`}
                      className="flex-shrink-0 px-4"
                    >
                      <Card className="p-4 flex flex-col items-center bg-white dark:bg-[#0a0a0a] border-black/[0.05] dark:border-white/[0.08] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-[200px]">
                        <skill.icon className="text-4xl md:text-5xl text-black dark:text-white" />
                        <p className="mt-2 font-medium text-sm md:text-base text-black/60 dark:text-white/60">
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Second Row - Moving Left */}
                <div className="flex md:animate-scroll-left animate-scroll-left-mobile mt-8">
                  {secondRowSkills.map((skill, index) => (
                    <motion.div
                      key={`left-${index}`}
                      className="flex-shrink-0 px-4"
                    >
                      <Card className="p-4 flex flex-col items-center bg-white dark:bg-[#0a0a0a] border-black/[0.05] dark:border-white/[0.08] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-[200px]">
                        <skill.icon className="text-4xl md:text-5xl text-black dark:text-white" />
                        <p className="mt-2 font-medium text-sm md:text-base text-black/60 dark:text-white/60">
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {secondRowSkills.map((skill, index) => (
                    <motion.div
                      key={`left-dup-${index}`}
                      className="flex-shrink-0 px-4"
                    >
                      <Card className="p-4 flex flex-col items-center bg-white dark:bg-[#0a0a0a] border-black/[0.05] dark:border-white/[0.08] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-[200px]">
                        <skill.icon className="text-4xl md:text-5xl text-black dark:text-white" />
                        <p className="mt-2 font-medium text-sm md:text-base text-black/60 dark:text-white/60">
                          {skill.name}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <Experience />

            {/* Achievements Section */}
            <section id="achievements" className="py-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black dark:text-white">
                Achievements
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full flex flex-col overflow-hidden bg-black/[0.01] dark:bg-white/[0.03] border-black/[0.05] dark:border-white/[0.08] transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10 hover:-translate-y-1">
                      {/* Image Container with Gradient Overlay */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={achievement.image || "/placeholder.svg"}
                          alt={achievement.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent dark:from-black/70 dark:via-black/30" />
                        {/* Achievement Title Overlay */}
                        <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white drop-shadow-lg line-clamp-2">
                          {achievement.title}
                        </h3>
                      </div>

                      {/* Text Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <p className="text-black/60 dark:text-white/60 mb-4 flex-grow">
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
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black dark:text-white">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group" // Added group for hover effects
                  >
                    <Card className="overflow-hidden bg-black/[0.01] dark:bg-white/[0.03] border-black/[0.05] dark:border-white/[0.08] h-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10 hover:-translate-y-1">
                      {/* Media Container with Gradient Overlay */}
                      <div className="relative h-72 w-full overflow-hidden">
                        {project.video ? (
                          <video
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority={index === 0}
                          />
                        )}
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent dark:from-black/70 dark:via-black/20" />

                        {/* Project Title Overlay */}
                        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-lg">
                          {project.title}
                        </h3>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 space-y-4">
                        <div className="flex justify-between items-start">
                          <p className="text-black/60 dark:text-white/60 line-clamp-2">
                            {project.description}
                          </p>
                          {project.github && (
                            <Link
                              href={project.github}
                              className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors flex-shrink-0 ml-4"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub repository"
                            >
                              <Github className="w-5 h-5" />
                            </Link>
                          )}
                        </div>

                        {/* Technologies with animated hover */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <motion.div
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Badge
                                variant="outline"
                                className="bg-black/[0.03] dark:bg-white/[0.05] border-black/[0.08] dark:border-white/[0.1] text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>

                        {/* Subtle "View Project" CTA that appears on hover */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="pt-2"
                        >
                          <Link
                            href={project.github || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                          >
                            View Project
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </Link>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="max-w-5xl mx-auto"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Get In Touch</h2>
                    <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto">
                      Interested in working together? Feel free to reach out through any of the platforms below.
                    </p>
                  </div>

                  <div className="relative">
                    {/* Background decorative elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-rose-500/5 rounded-full blur-3xl -z-10" />

                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Email Card */}
                      <motion.div 
                        whileHover={{ y: -5, scale: 1.02 }} 
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group"
                      >
                        <Card className="h-full bg-black/[0.01] dark:bg-white/[0.03] border-black/[0.05] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 overflow-hidden group-hover:shadow-lg">
                          <CardContent className="p-8 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-center mb-6 group-hover:bg-black/[0.04] dark:group-hover:bg-white/[0.04] transition-all duration-300 group-hover:scale-110">
                              <Mail className="w-8 h-8 text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-black/90 dark:group-hover:text-white/90 transition-colors duration-300">Email</h3>
                            <p className="text-black/60 dark:text-white/60 mb-6">Drop me a message anytime</p>

                            <a
                              href="mailto:mishrasiddharth072@gmail.com"
                              className="inline-flex items-center text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300"
                            >
                              mishrasiddharth072@gmail.com
                            </a>
                          </CardContent>
                        </Card>
                      </motion.div>

                      {/* LinkedIn Card */}
                      <motion.div 
                        whileHover={{ y: -5, scale: 1.02 }} 
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group"
                      >
                        <Card className="h-full bg-black/[0.01] dark:bg-white/[0.03] border-black/[0.05] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 overflow-hidden group-hover:shadow-lg">
                          <CardContent className="p-8 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-center mb-6 group-hover:bg-black/[0.04] dark:group-hover:bg-white/[0.04] transition-all duration-300 group-hover:scale-110">
                              <Linkedin className="w-8 h-8 text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-black/90 dark:group-hover:text-white/90 transition-colors duration-300">LinkedIn</h3>
                            <p className="text-black/60 dark:text-white/60 mb-6">Let&apos;s connect professionally</p>

                            <a
                              href="https://www.linkedin.com/in/siddharth-mishra-0a5227228/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300"
                            >
                              Connect on LinkedIn
                              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                          </CardContent>
                        </Card>
                      </motion.div>

                      {/* GitHub Card */}
                      <motion.div 
                        whileHover={{ y: -5, scale: 1.02 }} 
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group"
                      >
                        <Card className="h-full bg-black/[0.01] dark:bg-white/[0.03] border-black/[0.05] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 overflow-hidden group-hover:shadow-lg">
                          <CardContent className="p-8 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-center mb-6 group-hover:bg-black/[0.04] dark:group-hover:bg-white/[0.04] transition-all duration-300 group-hover:scale-110">
                              <Github className="w-8 h-8 text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-black/90 dark:group-hover:text-white/90 transition-colors duration-300">GitHub</h3>
                            <p className="text-black/60 dark:text-white/60 mb-6">Check out my code</p>

                            <a
                              href="https://github.com/Sid3503"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300"
                            >
                              View GitHub Profile
                              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>

                    {/* Direct Contact CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="mt-12 text-center"
                    >
                      <p className="text-black/60 dark:text-white/60 mb-6">
                        Prefer a direct conversation? I&apos;m always open to discussing new opportunities.
                      </p>

                      <Button
                        asChild
                        className="bg-black/5 border-black/10 text-black hover:bg-black hover:text-white dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                      >
                        <a href="mailto:mishrasiddharth072@gmail.com">Send Me a Message</a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-8 md:py-10 border-t border-black/[0.05] dark:border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-center items-center">
          <p className="text-sm text-black dark:text-white">© 2025. Siddharth Mishra.</p>
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
  {
    title: "AnimeGAN",
    description: "Generate anime-style images using a Generative Adversarial Network (GAN) trained from scratch. Watch the model learn and improve over time!",
    video: "/videos/gans_training.mp4",
    technologies: ["PyTorch", "Python", "GANs", "Deep Learning", "Computer Vision"],
    github: "https://github.com/Sid3503/AnimeGAN",
  },
  {
    title: "VQGAN",
    description: "Implemented VQGAN (Vector Quantized GAN) that combines the power of vector quantization with adversarial training.",
    image: "/images/vqgan_samples.png",
    technologies: ["VQ-VAE", "Transformer", "Vector Quantization", "GANs"],
    github: "https://github.com/Sid3503/VQgan",
  },
]

const skills = [
  // First Row Skills
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
  },
  {
    name: "Hugging Face",
    icon: SiHuggingface,
  },
  {
    name: "LangChain",
    icon: LangChainIcon,
  },
  {
    name: "Flask",
    icon: SiFlask,
  },
  {
    name: "GCP",
    icon: SiGooglecloud,
  },
  {
    name: "Vercel",
    icon: SiVercel,
  },
  {
    name: "Pandas",
    icon: SiPandas,
  },
  {
    name: "NumPy",
    icon: SiNumpy,
  },
  // Second Row Skills
  {
    name: "C++",
    icon: SiCplusplus,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "SQL",
    icon: SiSqlite,
  },
  {
    name: "Keras",
    icon: SiKeras,
  },
  {
    name: "Scikit-learn",
    icon: SiScikitlearn,
  },
  {
    name: "OpenCV",
    icon: SiOpencv,
  },
  {
    name: "Pandas",
    icon: SiPandas,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Render",
    icon: SiRender,
  }
];

// Split skills into two rows
const firstRowSkills = skills.slice(0, 10);
const secondRowSkills = skills.slice(10);
