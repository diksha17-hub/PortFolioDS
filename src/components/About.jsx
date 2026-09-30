import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLanguage, FaBirthdayCake } from 'react-icons/fa'
import { Reveal, Counter, TiltCard } from '../Effects'

const info = [
  { icon: FaEnvelope, text: 'dikshasalve2020@gmail.com' },
  { icon: FaPhone, text: '+91 8010637674' },
  { icon: FaMapMarkerAlt, text: 'A/P Panoli, Tal-Parner, Dist-Ahmednagar - 414302' },
  { icon: FaBirthdayCake, text: '17 May 2002' },
  { icon: FaLanguage, text: 'English, Marathi, Hindi' },
]
const stats = [
  { value: 1.5, suffix: '+', label: 'Years Exp.' },
  { value: 4, suffix: '+', label: 'Projects' },
  { value: 10, suffix: '+', label: 'Technologies' },
]
const education = [
  { degree: 'MCS', year: '2025', college: 'New Arts College Parner', uni: 'Pune University' },
  { degree: 'BCS', year: '2023', college: 'New Arts College Parner', uni: 'Pune University' },
  { degree: '12th', year: '2020', college: 'New English School Parner', uni: 'State Board' },
  { degree: '10th', year: '2018', college: 'Netaji Subhash Chandra Bose Vidyalaya Panoli', uni: 'State Board' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 0', background: '#0d1224', width: '100%' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 2rem' }}>
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-2">Get to know me</p>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal from="left">
            <div className="flex flex-col items-center gap-8">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[2px] rotate-3">
                  <div className="w-full h-full rounded-2xl bg-[#0d1224]" />
                </div>
                <div className="absolute inset-[2px] rounded-2xl overflow-hidden">
                  <img src="/aboutMyself.png" alt="Diksha Salve" className="w-full h-full object-cover" />
                </div>
              </div>

              <TiltCard className="w-full card p-6 neon-border space-y-4">
                {info.map(({ icon: Icon, text }, i) => (
                  <motion.div key={text} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 text-gray-400">
                    <Icon className="text-cyan-400 text-sm flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{text}</span>
                  </motion.div>
                ))}
              </TiltCard>
            </div>
          </Reveal>

          <Reveal from="right">
            <h3 className="text-2xl font-bold text-white mb-4">Diksha Shamrao Salve</h3>
            <p className="text-gray-400 leading-relaxed mb-5">
              Self-driven Full Stack Developer focused on growth and continuous learning, skilled in building responsive
              user interfaces with React.js, JavaScript (ES6), HTML, and CSS, along with developing robust backend
              solutions using Java, Spring Boot, and MySQL.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Eager to collaborate in dynamic teams to deliver innovative, scalable, and user-centric applications.
              With hands-on experience at <span className="text-cyan-400 font-medium">Mokszen Technology Pvt Ltd</span> and
              training at <span className="text-cyan-400 font-medium">Giri's Tech Hub, Pune</span>.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({ value, suffix, label }, i) => (
                <motion.div key={label} whileHover={{ y: -5, scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: 'spring' }}
                  className="card p-4 text-center neon-border">
                  <div className="text-2xl font-bold gradient-text"><Counter value={value} suffix={suffix} /></div>
                  <div className="text-gray-500 text-xs mt-1">{label}</div>
                </motion.div>
              ))}
            </div>

            <h4 className="text-white font-semibold mb-4 text-lg">Education</h4>
            <div className="space-y-3">
              {education.map(({ degree, year, college, uni }, i) => (
                <motion.div key={degree} whileHover={{ x: 6 }}
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="card p-4 neon-border flex justify-between items-start">
                  <div>
                    <span className="text-cyan-400 font-bold text-sm">{degree}</span>
                    <p className="text-white text-sm mt-0.5">{college}</p>
                    <p className="text-gray-500 text-xs">{uni}</p>
                  </div>
                  <span className="text-gray-500 text-xs bg-white/5 px-2 py-1 rounded">{year}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
