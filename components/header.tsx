import { Phone, Mail, Linkedin, Github } from "lucide-react"

const Peerlist = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M8.87 3h6.26a6 6 0 0 1 5.963 5.337l.21 1.896c.131 1.174.131 2.36 0 3.534l-.21 1.896A6 6 0 0 1 15.13 21H8.87a6 6 0 0 1-5.963-5.337l-.21-1.896a16 16 0 0 1 0-3.534l.21-1.896A6 6 0 0 1 8.87 3" />
      <path d="M9 17v-4m0 0V7h4a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3z" />
    </g>
  </svg>
)

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
          href="https://peerlist.io/sid3503"
          className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black/90 dark:hover:text-white/90"
        >
          <Peerlist className="w-[18px] h-[18px]" />
          <span>Peerlist</span>
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
