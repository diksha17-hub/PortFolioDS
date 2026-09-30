import {
  motion, useScroll, useSpring, useInView,
  useMotionValue, animate,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0 0' }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
    />
  )
}

export function CursorGlow() {
  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const sx = useSpring(x, { stiffness: 120, damping: 18 })
  const sy = useSpring(y, { stiffness: 120, damping: 18 })
  useEffect(() => {
    const move = (e) => { x.set(e.clientX - 150); y.set(e.clientY - 150) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])
  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="hidden md:block fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-3xl pointer-events-none z-40"
    />
  )
}

export function Reveal({ children, delay = 0, from = 'up', className = '' }) {
  const offsets = { up: { y: 40 }, down: { y: -40 }, left: { x: -50 }, right: { x: 50 } }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function SplitText({ text, className = '', delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          initial={{ opacity: 0, y: 30, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: delay + i * 0.05, duration: 0.5, ease: 'easeOut' }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  )
}

export function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setN(Number.isInteger(value) ? Math.round(v) : Math.round(v * 10) / 10),
    })
    return () => controls.stop()
  }, [inView, value])
  return <span ref={ref}>{n}{suffix}</span>
}

export function TiltCard({ children, className = '' }) {
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const rotateX = useSpring(rx, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(ry, { stiffness: 200, damping: 20 })
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 12)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12)
  }
  const reset = () => { rx.set(0); ry.set(0) }
  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return active
}
