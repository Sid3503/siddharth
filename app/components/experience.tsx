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
                          AI Agents Orchestration Intern
                        </h3>
                        <p className="text-indigo-500 dark:text-indigo-300 font-medium text-sm transition-all duration-300 ease-in-out group-hover:text-indigo-600 dark:group-hover:text-indigo-200">Ergode</p>
                      </div>
                    </div>
                    <div className="mt-1 md:mt-0">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 transition-all duration-300 ease-in-out group-hover:bg-green-500/20 group-hover:border-green-500/40">
                        <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full mr-1 animate-pulse" />
                        Current
                      </span>
                    </div>
                  </div>

                  {/* Duration */}
                  <p className="text-black/50 dark:text-white/50 text-xs mb-2 transition-all duration-300 ease-in-out group-hover:text-black/60 dark:group-hover:text-white/60">June 2025 - Present</p>

                  {/* Description */}
                  <ul className="list-disc pl-5 text-black/70 dark:text-white/70 text-xs leading-relaxed mb-4 transition-all duration-300 ease-in-out group-hover:text-black/80 dark:group-hover:text-white/80 space-y-1">
                    <li>Specializing in <strong>AI agents orchestration and automation</strong> using the n8n platform to create intelligent, autonomous workflows.</li>
                    <li>Designing and implementing <strong>multi-agent systems</strong> that collaborate to automate complex business processes and decision-making tasks.</li>
                    <li>Building <strong>workflow automation solutions</strong> that integrate AI agents with existing systems and APIs for seamless data processing and task execution.</li>
                    <li>Developing <strong>intelligent automation pipelines</strong> that leverage AI agents for data analysis, content generation, and process optimization.</li>
                    <li>Creating <strong>agent-based workflows</strong> that can adapt to changing requirements and learn from execution patterns to improve efficiency.</li>
                    <li>Implementing <strong>orchestration strategies</strong> for coordinating multiple AI agents to work together on complex, multi-step automation tasks.</li>
                  </ul>

                  {/* Key Focus Areas */}
                  <div className="mt-3">
                    <div className="mb-1 text-xs font-semibold text-black/70 dark:text-white/70">Key focus areas:</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AI Agents Orchestration",
                        "n8n Platform",
                        "Workflow Automation",
                        "Multi-Agent Systems",
                        "Process Optimization",
                        "Intelligent Automation",
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

                  {/* Technologies & Tools */}
                  <div className="mt-3">
                    <div className="mb-1 text-xs font-semibold text-black/70 dark:text-white/70">Technologies & Tools:</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "n8n Workflow Engine",
                        "AI Agent Frameworks",
                        "API Integration",
                        "REST APIs",
                        "Webhook Automation",
                        "Data Processing",
                        "Decision Trees",
                        "Conditional Logic",
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-md bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-700 text-xs font-medium text-rose-700 dark:text-rose-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          {tech}
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
export {}; 
