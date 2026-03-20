import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

declare global {
  interface Window {
    __lenis?: { scrollTo: (target: number | string, options?: { immediate?: boolean }) => void };
  }
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Close mobile menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = (
    event?: React.MouseEvent<HTMLAnchorElement>,
    target?: string,
    smooth?: boolean,
  ) => {
    setIsMenuOpen(false);
    const lenis = window.__lenis;

    if (target && event) {
      if (isHome) {
        event.preventDefault();
        if (lenis) {
          lenis.scrollTo(target, { immediate: !smooth });
        } else {
          const el = document.querySelector(target);
          if (el) {
            el.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: smooth ? "smooth" : "auto" });
          }
        }
        return;
      }
      return;
    }
  };

  // Add/remove class to body when menu opens/closes for background blur
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMenuOpen]);

  const navLinks = (
    <>
      <Link 
        to="/#about" 
        className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
        onClick={(event) => handleLinkClick(event, "#about", true)}
      >
        about
      </Link>
      <Link 
        to="/experience" 
        className={`font-mono text-xs transition-colors duration-300 py-2 ${location.pathname === "/experience" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        onClick={() => handleLinkClick()}
      >
        experience
      </Link>
      <Link 
        to="/achievements" 
        className={`font-mono text-xs transition-colors duration-300 py-2 ${location.pathname === "/achievements" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        onClick={() => handleLinkClick()}
      >
        achievements
      </Link>
      <Link 
        to="/projects" 
        className={`font-mono text-xs transition-colors duration-300 py-2 ${location.pathname === "/projects" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        onClick={() => handleLinkClick()}
      >
        projects
      </Link>
      <Link 
        to="/contact" 
        className={`font-mono text-xs transition-colors duration-300 py-2 ${location.pathname === "/contact" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        onClick={() => handleLinkClick()}
      >
        contact
      </Link>
      <Link
        to="/resume"
        className="font-mono text-xs text-primary hover:text-primary/80 transition-colors duration-300 py-2"
        onClick={() => handleLinkClick()}
      >
        resume
      </Link>
    </>
  );

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[70] flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link
          to="/"
          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          .siddharth
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-[70] flex flex-col justify-center items-center gap-1 w-8 h-8 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-muted-foreground transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-muted-foreground transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-muted-foreground transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </motion.nav>

      {/* Centered Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-2xl md:hidden centered-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="flex flex-col items-center justify-center gap-8 w-full px-6"
              onClick={(event) => event.stopPropagation()}
            >
              {navLinks}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
