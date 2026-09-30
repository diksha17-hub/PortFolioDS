import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'

const projects = [
  {
    title: 'Shamudri Tourism LLC Website',
    company: 'Mokszen Technology',
    role: 'Full Stack Developer',
    desc: 'Responsive tourism platform for travel services, visa processing, destination info, and customer inquiries.',
    points: [
      'Developed responsive UI pages using React.js, HTML, CSS, and JavaScript',
      'Built backend modules using Java 8, Spring Boot, JSP/Servlet, and MySQL',
      'Integrated APIs and implemented dynamic data loading using Ajax',
      'Worked on admin panel features, destination management, and visa-related modules',
    ],
    tech: ['Java 8', 'Spring Boot', 'React.js', 'MySQL', 'Ajax', 'JSP/Servlet'],
    gradient: 'from-cyan-500 to-blue-600',
    icon: '✈️',
    github: 'https://github.com/diksha-salve',
    live: 'https://www.shamudritourism.ae/',
  },
  {
    title: 'Shamudri Tourism CRM',
    company: 'Mokszen Technology Pvt. Ltd.',
    role: 'Full Stack Developer',
    desc: 'CRM platform for managing tourism and visa-related customer leads, enquiries, and follow-up activities.',
    points: [
      'Developed responsive CRM interfaces using React.js, Tailwind CSS',
      'Built REST APIs using Java, Spring Boot, and MySQL',
      'Implemented lead management for tracking customer enquiries',
      'Integrated frontend with backend APIs for dynamic CRM operations',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST API', 'Tailwind CSS'],
    gradient: 'from-purple-500 to-pink-600',
    icon: '📊',
    github: 'https://github.com/diksha-salve',
    live: 'https://crm.shamudritourism.ae/',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0e1a] relative overflow-hidden">
      {/* background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
              className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-2">What I've built</motion.p>
            <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
            <motion.div initial={{ width: 0 }} animate={inView ? { width: '4rem' } : {}} transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="project-card relative group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
                style={{ boxShadow: hovered === i ? '0 20px 60px rgba(34,211,238,0.12)' : '0 4px 20px rgba(0,0,0,0.3)' }}
              >
                {/* top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${p.gradient}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                        {p.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base leading-tight">{p.title}</h3>
                        <p className={`text-xs font-medium bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent`}>{p.company}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <motion.a href={p.github} target="_blank" rel="noreferrer" whileHover={{ scale: 1.2, rotate: 10 }}
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors">
                        <FaGithub className="text-sm" />
                      </motion.a>
                      <motion.a href={p.live} whileHover={{ scale: 1.2, rotate: -10 }}
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors">
                        <FaExternalLinkAlt className="text-xs" />
                      </motion.a>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs text-gray-500 mb-3">
                    <FaCode className="text-cyan-400/60" /> {p.role}
                  </span>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>

                  <ul className="space-y-2 mb-5 flex-1">
                    {p.points.map((pt, j) => (
                      <motion.li key={j} className="text-gray-500 text-xs flex gap-2"
                        initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.2 + j * 0.07 }}>
                        <span className="text-cyan-400 flex-shrink-0 mt-0.5">▸</span>{pt}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {p.tech.map(t => (
                      <motion.span key={t} whileHover={{ scale: 1.1, y: -2 }}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors cursor-default">
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
            className="text-center mt-12">
            <motion.a href="https://github.com/diksha-salve" target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.3)' }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-colors">
              <FaGithub /> View All on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
