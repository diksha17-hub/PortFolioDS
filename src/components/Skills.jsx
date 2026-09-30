import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaJava, FaReact, FaGitAlt, FaDatabase, FaServer } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiJavascript, SiHtml5, SiCss, SiPostman, SiBootstrap, SiTailwindcss, SiEclipseide, SiJquery } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const groups = [
  {
    title: 'Languages',
    items: [
      { icon: FaJava, label: 'Java 7/8', color: '#f97316' },
      { icon: SiJavascript, label: 'JavaScript ES6', color: '#eab308' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { icon: FaReact, label: 'React.js', color: '#22d3ee' },
      { icon: SiHtml5, label: 'HTML5', color: '#ef4444' },
      { icon: SiCss, label: 'CSS3', color: '#6366f1' },
      { icon: SiJquery, label: 'jQuery', color: '#2563eb' },
      { icon: SiBootstrap, label: 'Bootstrap', color: '#7c3aed' },
      { icon: SiTailwindcss, label: 'Tailwind CSS', color: '#06b6d4' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: SiSpringboot, label: 'Spring Boot', color: '#22c55e' },
      { icon: FaServer, label: 'Spring MVC', color: '#22c55e' },
      { icon: FaDatabase, label: 'JDBC / Servlet', color: '#94a3b8' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { icon: SiMysql, label: 'MySQL', color: '#3b82f6' },
      { icon: FaGitAlt, label: 'Git', color: '#f43f5e' },
      { icon: SiPostman, label: 'Postman', color: '#f97316' },
      { icon: SiEclipseide, label: 'Eclipse', color: '#7c3aed' },
      { icon: VscCode, label: 'VS Code', color: '#22d3ee' },
    ],
  },
]

const skills = [
  { name: 'Java', level: 90 },
  { name: 'Spring Boot', level: 85 },
  { name: 'React.js', level: 88 },
  { name: 'JavaScript (ES6)', level: 85 },
  { name: 'MySQL', level: 82 },
  { name: 'HTML & CSS', level: 90 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'REST API', level: 83 },
]

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-cyan-400 text-sm font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.4, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 relative"
        >
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [active, setActive] = useState('All')
  const tabs = ['All', ...groups.map(g => g.title)]

  const filtered = active === 'All' ? groups : groups.filter(g => g.title === active)

  return (
    <section id="skills" className="py-24 bg-[#0a0e1a] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-2">What I work with</p>
            <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
            <motion.div initial={{ width: 0 }} animate={inView ? { width: '4rem' } : {}} transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map(tab => (
              <motion.button key={tab} onClick={() => setActive(tab)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40'
                }`}>
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Tech cards */}
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }} className="mb-14">
              {filtered.map((group, gi) => (
                <div key={group.title} className="mb-8">
                  <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-cyan-400/40" />{group.title}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map(({ icon: Icon, label, color }, idx) => (
                      <motion.div key={label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: gi * 0.05 + idx * 0.05 }}
                        whileHover={{ y: -6, scale: 1.08 }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 cursor-default transition-all duration-200 group"
                        style={{ '--glow': color }}
                      >
                        <Icon style={{ color, fontSize: '1.2rem', filter: `drop-shadow(0 0 6px ${color}60)` }} />
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Skill bars */}
          <div className="grid md:grid-cols-2 gap-x-16">
            {skills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 0.1} />)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
