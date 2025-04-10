import { Phone, Mail, Linkedin, Github } from "lucide-react"

export default function Header() {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white font-orbitron">Siddharth Mishra</h1>
      <div className="flex flex-wrap gap-4">
        <a
          href="tel:+919136359345"
          className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black/90 dark:hover:text-white/90"
        >
          <Phone size={18} />
          <span>+91 91363-59345</span>
        </a>
        <a
          href="mailto:mishrasiddharth072gmail.com"
          className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black/90 dark:hover:text-white/90"
        >
          <Mail size={18} />
          <span>mishrasiddharth072gmail.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/siddharth-mishra-0a5227228/"
          className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black/90 dark:hover:text-white/90"
        >
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Sid3503"
          className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black/90 dark:hover:text-white/90"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
        <a
          href="https://exuberant-week-19a.notion.site/Siddharth-Mishra-c534e96b354b45db87a6b45ee22cf90e"
          className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black/90 dark:hover:text-white/90"
        >
          <span className="font-bold">Notion</span>
        </a>
      </div>
    </header>
  )
}
