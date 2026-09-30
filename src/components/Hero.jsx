



import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { SplitText } from '../Effects'

function Particles() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const mouse = { x: -999, y: -999 }
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    const dots = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.4 + 0.1,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach(d => {
        d.x += d.dx; d.y += d.dy
        if (d.x < 0 || d.x > canvas.width) d.dx *= -1
        if (d.y < 0 || d.y > canvas.height) d.dy *= -1
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34,211,238,${d.o})`; ctx.fill()
      })
      dots.forEach((a, i) => {
        // lines from dots to the mouse
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (md < 160) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(168,85,247,${0.35 * (1 - md / 160)})`
          ctx.lineWidth = 0.7; ctx.stroke()
        }
        dots.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(34,211,238,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

function useTyping(words, speed = 100) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1500)
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length - 1 === 0) { setDeleting(false); setWordIdx((wordIdx + 1) % words.length) }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIdx, words, speed])
  return text
}

const roles = ['Full Stack Developer', 'Java Developer', 'React.js Developer', 'Spring Boot Developer']
const socials = [
  { icon: FaGithub, href: 'https://github.com/diksha-salve', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/diksha-salve-a7b788325/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:dikshasalve2020@gmail.com', label: 'Email' },
  { icon: FaPhone, href: 'tel:+918010637674', label: 'Phone' },
]

const item = (i) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 + i * 0.15 },
})

export default function Hero() {
  const typed = useTyping(roles)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e1a]">
      <Particles />
      <motion.div animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 12 }}
        className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 pt-20">
        <div className="flex-1 text-center lg:text-left">
          <motion.div {...item(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs tracking-widest uppercase mb-5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Available for work
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <motion.span {...item(1)} className="inline-block mr-3">Hi, I'm</motion.span>
            <SplitText text="Diksha Salve" className="gradient-text" delay={0.6} />
          </h1>
          <motion.div {...item(3)} className="text-xl md:text-2xl text-gray-300 mb-6 h-8 flex items-center justify-center lg:justify-start gap-2">
            <span>I'm a </span>
            <span className="text-cyan-400 font-semibold">{typed}</span>
            <span className="w-0.5 h-6 bg-cyan-400 animate-pulse" />
          </motion.div>
          <motion.p {...item(4)} className="text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            Self-driven Full Stack Developer skilled in building responsive UIs with React.js and robust backend solutions using Java, Spring Boot & MySQL. Currently working at <span className="text-cyan-400">Mokszen Technology Pvt Ltd, Pune</span>.
          </motion.p>

          <motion.div {...item(5)} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <motion.a href="#projects" whileHover={{ scale: 1.06, boxShadow: '0 0 25px rgba(34,211,238,0.5)' }} whileTap={{ scale: 0.96 }}
              className="shine px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
              View My Work
            </motion.a>
            <motion.a href="/DikshaSalveCV.pdf" download="DikshaSalveCV.pdf" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
              className="shine px-7 py-3 rounded-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-colors">
              Download CV
            </motion.a>
          </motion.div>

          <motion.div {...item(6)} className="flex gap-5 justify-center lg:justify-start">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                whileHover={{ y: -5, scale: 1.2, rotate: 8 }} className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, type: 'spring' }} className="flex-shrink-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72 float">
            <div className="absolute -inset-4 rounded-full bg-cyan-400/20 blur-2xl animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-500 p-[3px] animate-spin" style={{ animationDuration: '8s' }}>
              <div className="w-full h-full rounded-full bg-[#0a0e1a]" />
            </div>
            <div className="absolute inset-[3px] rounded-full overflow-hidden">
              <img src="/PortFolioimage.png" alt="Diksha Salve" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a href="#about" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400 flex flex-col items-center gap-1 text-xs">
        <span>Scroll Down</span><span>↓</span>
      </motion.a>
    </section>
  )
}