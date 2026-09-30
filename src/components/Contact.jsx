import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const contacts = [
  { icon: FaEnvelope, label: 'Email', value: 'dikshasalve2020@gmail.com', href: 'mailto:dikshasalve2020@gmail.com', color: '#22d3ee' },
  { icon: FaPhone, label: 'Phone', value: '+91 8010637674', href: 'tel:+918010637674', color: '#a855f7' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Pune, Maharashtra, India', href: '#', color: '#f43f5e' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/diksha-salve', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/diksha-salve-a7b788325/', label: 'LinkedIn' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 px-6 bg-[#0d1224] relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-2">Get in touch</p>
            <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
            <motion.div initial={{ width: 0 }} animate={inView ? { width: '4rem' } : {}} transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Info side */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
              <p className="text-gray-400 leading-relaxed mb-8 text-base">
                I'm currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hi — feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                {contacts.map(({ icon: Icon, label, value, href, color }, i) => (
                  <motion.a key={label} href={href}
                    initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/[0.03] transition-colors">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{ background: `${color}15`, border: `1px solid ${color}30`, boxShadow: `0 0 0 0 ${color}40` }}>
                      <Icon style={{ color, fontSize: '1rem' }} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{label}</p>
                      <p className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }, i) => (
                  <motion.a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                    initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                    whileHover={{ y: -4, scale: 1.15 }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all">
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Form side */}
            <motion.form initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
              onSubmit={e => e.preventDefault()}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 space-y-4"
              style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}>
              {[
                { type: 'text', placeholder: 'Your Name' },
                { type: 'email', placeholder: 'Your Email' },
                { type: 'text', placeholder: 'Subject' },
              ].map(({ type, placeholder }, i) => (
                <motion.input key={placeholder} type={type} placeholder={placeholder}
                  initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 placeholder-gray-600 outline-none focus:border-cyan-500/60 focus:bg-white/[0.07] transition-all text-sm" />
              ))}
              <motion.textarea rows={4} placeholder="Your Message"
                initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.64 }}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 placeholder-gray-600 outline-none focus:border-cyan-500/60 focus:bg-white/[0.07] transition-all text-sm resize-none" />
              <motion.button type="submit"
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(34,211,238,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 transition-all shine">
                <FaPaperPlane className="text-sm" /> Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
