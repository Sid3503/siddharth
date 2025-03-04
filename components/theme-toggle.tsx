"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-10 h-10 bg-white/5 border border-white/10 hover:bg-white/10 dark:bg-black/5 dark:border-black/10 dark:hover:bg-black/10"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={theme}
        className="absolute"
      >
        {theme === "dark" ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-black" />}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}