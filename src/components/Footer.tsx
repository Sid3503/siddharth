import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";

const contactLinks = [
  {
    label: "Email",
    sub: "Drop me a message anytime",
    href: "mailto:mishrasiddharth072@gmail.com",
    display: "mishrasiddharth072@gmail.com",
  },
  {
    label: "LinkedIn",
    sub: "Let's connect professionally",
    href: "https://www.linkedin.com/in/siddharth-mishra-0a5227228/",
    display: "Connect on LinkedIn",
  },
  {
    label: "GitHub",
    sub: "Check out my code",
    href: "https://github.com/Sid3503",
    display: "View GitHub Profile",
  },
];

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" ref={ref} className="relative px-6 md:px-12 lg:px-20 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-mono text-sm text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          .contact
        </motion.p>

        <motion.div
          className="w-full h-px bg-border mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
            get in
            <br />
            touch
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mb-12">
            Interested in working together? Feel free to reach out through any of the platforms below.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border bg-card p-6 hover:border-foreground/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <h4 className="font-display font-semibold text-foreground mb-1">{link.label}</h4>
              <p className="font-mono text-xs text-muted-foreground mb-4">{link.sub}</p>
              <span className="font-mono text-xs text-primary group-hover:text-primary/80 transition-colors duration-300">
                {link.display} →
              </span>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground mb-4">
            Prefer a direct conversation? I'm always open to discussing new opportunities.
          </p>
          <GradientButton className="gap-3 rounded-full group py-3 px-6 text-sm" asChild>
            <a href="mailto:mishrasiddharth072@gmail.com">
              send me a message
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="origin-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-[15deg]"
              >
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </GradientButton>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground"></p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/siddharth-mishra-0a5227228/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              linkedin
            </a>
            <a
              href="https://github.com/Sid3503"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
