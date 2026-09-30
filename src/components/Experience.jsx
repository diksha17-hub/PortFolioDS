import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase } from 'react-icons/fa'
import { Reveal, TiltCard } from '../Effects'

const experiences = [
  {
    role: 'Software Developer (Java + React.js)',
    company: 'Mokszen Technology Pvt Ltd, Pune',
    period: 'May 2025 – Present',
    type: 'Full Time',
    points: [
      'Developed and maintained full-stack web applications using Java, Spring Boot, and React.js',
      'Built responsive UI pages using React.js, HTML, CSS, and JavaScript',
      'Developed backend modules using Java 8, Spring Boot, JSP/Servlet, and MySQL',
      'Integrated APIs and implemented dynamic data loading using Ajax',
      'Worked on admin panel features, destination management, and visa-related modules',
    ],
    tech: ['Java 8', 'Spring Boot', 'React.js', 'MySQL', 'JSP/Servlet', 'Ajax'],
    color: 'from-cyan-400 to-blue-500',
  },
  {
    role: 'Trainee Software Developer (Java)',
    company: "Giri's Tech Hub, Pune",
    period: 'April 2025 – October 2025 (7 months)',
    type: 'Trainee',
    points: [
      'Gained hands-on experience with Java, Spring Boot, and React.js through real-world project training',
      'Developed REST APIs and responsive UIs',
      'Worked on backend modules and database integration using MySQL',
      'Learned best practices for full-stack development',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST API'],
    color: 'from-purple-400 to-pink-500',
  },
]

export default function Experience() {
  const lineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ['start 80%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <section id="experience" style={{ padding: '6rem 0', background: '#0d1224', width: '100%' }}>
      <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 2rem' }}>
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-2">My journey</p>
            <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full" />
          </div>
        </Reveal>

        <div ref={lineRef} className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
          <motion.div style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                <motion.div
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className={`absolute -left-[21px] top-5 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                  <span className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} animate-ping opacity-40`} />
                  <FaBriefcase className="text-white text-[8px] relative" />
                </motion.div>

                <Reveal from={i % 2 ? 'right' : 'left'} delay={0.1}>
                  <TiltCard className="card p-6 neon-border hover:border-cyan-500/40 transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        <p className={`text-sm font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">{exp.period}</span>
                        <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full">{exp.type}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.points.map((p, j) => (
                        <motion.li key={j} className="text-gray-400 text-sm flex gap-2"
                          initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                          transition={{ delay: 0.3 + j * 0.08 }}>
                          <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>{p}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <motion.span key={t} whileHover={{ y: -3, scale: 1.1 }}
                          className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors cursor-default">
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </TiltCard>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
