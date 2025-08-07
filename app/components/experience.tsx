import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">Experience</h2>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/30 via-rose-400/30 to-indigo-400/10" />

          {/* Experience Item */}
          <div className="relative flex items-start space-x-4">
            {/* Timeline dot */}
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-400 to-rose-400 rounded-full flex items-center justify-center border-2 border-white dark:border-[#030303] relative z-10">
              <div className="w-3 h-3 bg-white dark:bg-[#030303] rounded-full animate-pulse" />
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <Card className="bg-black/[0.01] dark:bg-white/[0.02] border-black/[0.05] dark:border-white/[0.08] hover:border-indigo-400/30 transition-all duration-500 ease-in-out overflow-hidden group relative hover:shadow-lg hover:-translate-y-1">
                <div className="p-4 md:p-5">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 relative rounded-full overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#18181b]">
                        <Image
                          src="/images/ergodecorporate_logo.jpeg"
                          alt="Ergode Logo"
                          fill
                          style={{ objectFit: 'contain' }}
                          sizes="32px"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-black/80 dark:text-white/80 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-all duration-300 ease-in-out">
                          AI Intern
                        </h3>
                        <p className="text-indigo-500 dark:text-indigo-300 font-medium text-sm transition-all duration-300 ease-in-out group-hover:text-indigo-600 dark:group-hover:text-indigo-200">Ergode</p>
                      </div>
                    </div>
                    <div className="mt-1 md:mt-0">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 transition-all duration-300 ease-in-out group-hover:bg-blue-500/20 group-hover:border-blue-500/40">
                        <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-1" />
                        Completed
                      </span>
                    </div>
                  </div>

                  {/* Duration */}
                  <p className="text-black/50 dark:text-white/50 text-xs mb-2 transition-all duration-300 ease-in-out group-hover:text-black/60 dark:group-hover:text-white/60">June 2025 - July 2025</p>

                  {/* Description */}
                  <ul className="list-disc pl-5 text-black/70 dark:text-white/70 text-sm leading-relaxed mb-4 transition-all duration-300 ease-in-out group-hover:text-black/80 dark:group-hover:text-white/80 space-y-1">
                    <li className="hover:scale-[1.01] hover:shadow-sm transition-all duration-300 ease-in-out">Working on <span className="font-bold">Orchestration and deployment</span> of AI agents using n8n.</li>
                    <li className="hover:scale-[1.01] hover:shadow-sm transition-all duration-300 ease-in-out"><span className="font-bold">Designing intelligent, modular workflows</span> that integrate multiple AI tools, APIs, and conditional logic to perform complex tasks end-to-end.</li>
                    <li className="hover:scale-[1.01] hover:shadow-sm transition-all duration-300 ease-in-out">Implementing <span className="font-bold">autonomous task execution pipelines</span> that reduce manual intervention and optimize business operations.</li>
                    <li className="hover:scale-[1.01] hover:shadow-sm transition-all duration-300 ease-in-out">Collaborating on scalable, real-time systems powered by <span className="font-bold">GenAI, webhooks, and automation triggers</span>.</li>
                  </ul>

                  {/* Key Focus Areas */}
                  <div className="mt-3">
                    <div className="mb-1 text-xs font-semibold text-black/70 dark:text-white/70">Key focus areas:</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "n8n",
                        "AI Agent Orchestration",
                        "Task Automation",
                        "Workflow Design",
                        "Webhooks & APIs",
                        "Generative AI Integration",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 text-xs font-medium text-indigo-700 dark:text-indigo-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/5 to-rose-400/5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none" />
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Add the following to ensure TypeScript recognizes this file as a module
export { }; 
