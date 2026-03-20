import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { GradientButton } from "@/components/ui/gradient-button";

const SOCIAL_LINKS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    label: "twitter / x",
    handle: "@SiddharthM3503",
    href: "https://x.com/SiddharthM3503",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    label: "github",
    handle: "@Sid3503",
    href: "https://github.com/Sid3503",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "linkedin",
    handle: "Siddharth Mishra",
    href: "https://www.linkedin.com/in/siddharth-mishra-0a5227228/",
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/mishrasiddharth072@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `Contact Form: ${form.subject || 'New message'}`,
          _template: "table",
        }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#111111] text-foreground flex flex-col">
        <Navbar />
        <div className="blur-content">
          <div className="flex-1 w-full flex items-center pt-24 pb-12">
            <div className="max-w-[1300px] w-full mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 h-full my-auto">
            
            {/* Left Column (Hero & Socials) */}
            <motion.div 
              className="flex flex-col justify-between py-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-16 lg:mb-24">
                <h4 className="font-mono text-[11px] md:text-xs tracking-[0.2em] text-primary uppercase mb-8">
                  Get In Touch
                </h4>
                
                <h1 className="text-[3.5rem] sm:text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-display font-bold leading-[0.9] tracking-tight mb-8">
                  let's build<br />
                  something<br />
                  <span className="text-primary">real.</span>
                </h1>
                
                <p className="text-lg md:text-[22px] text-muted-foreground leading-[1.6] max-w-md font-sans">
                  Got a problem worth solving? An idea worth building? I'm always open to interesting conversations — work, collabs, or just good tech talk.
                </p>
              </div>

              {/* Socials Divider */}
              <div className="w-full h-px bg-white/10 mb-6" />

              <div className="flex flex-col">
                {SOCIAL_LINKS.map(social => (
                  <motion.a 
                    key={social.label} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-primary/50 transition-colors"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] rounded-full border border-white/20 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-colors">
                        {social.icon}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-sans text-[17px] font-medium text-white group-hover:text-primary transition-colors">
                          {social.label}
                        </span>
                        <span className="font-sans text-[13px] text-muted-foreground">
                          {social.handle}
                        </span>
                      </div>
                    </div>
                    <motion.svg 
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      className="text-muted-foreground group-hover:text-primary transition-colors origin-center"
                      variants={{
                        rest: { scale: 1, rotate: 0 },
                        hover: { scale: 1.15, rotate: -15 }
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column (Form) */}
            <motion.div 
              className="w-full lg:pl-16 xl:pl-24 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-[500px] text-center border border-white/10 rounded-2xl bg-white/5">
                  <p className="text-3xl font-display text-white mb-3">message sent 🎉</p>
                  <p className="text-[17px] text-muted-foreground">I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="font-mono text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-colors font-sans text-base placeholder:text-muted-foreground/50 text-white" 
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <label className="font-mono text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-colors font-sans text-base placeholder:text-muted-foreground/50 text-white" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-colors font-sans text-base placeholder:text-muted-foreground/50 text-white" 
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[11px] font-semibold tracking-[0.1em] text-muted-foreground uppercase">Message</label>
                    <textarea 
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project, idea, or just say hi..." 
                      rows={6} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-colors font-sans text-base placeholder:text-muted-foreground/50 text-white resize-none" 
                    />
                  </div>

                  <GradientButton 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-[18px] text-[15px] group mt-2"
                  >
                    {isSubmitting ? "sending..." : "send it"} 
                    {!isSubmitting && (
                      <svg 
                        width="14" height="14" viewBox="0 0 14 14" fill="none"
                        className="origin-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-[15deg]"
                      >
                        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </GradientButton>
                  
                  <p className="text-center font-sans text-[12px] text-muted-foreground/80 mt-1">
                    usually reply within 24 hrs &bull; no spam, ever
                  </p>
                </form>
              )}
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
    </SmoothScroll>
  );
};

export default ContactPage;
