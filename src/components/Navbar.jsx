// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'

// const links = [
//   { label: 'Home', href: '#home' },
//   { label: 'About', href: '#about' },
//   { label: 'Skills', href: '#skills' },
//   { label: 'Experience', href: '#experience' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Contact', href: '#contact' },
// ]

// export default function Navbar() {
//   const [active, setActive] = useState('Home')
//   const [scrolled, setScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'}`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <motion.a
//           href="#home"
//           whileHover={{ scale: 1.05 }}
//           className="text-2xl font-bold gradient-text"
//         >
//           Diksha<span className="text-white">.</span>
//         </motion.a>

//         {/* Desktop links */}
//         <ul className="hidden md:flex gap-8">
//           {links.map(l => (
//             <li key={l.label}>
//               <a
//                 href={l.href}
//                 onClick={() => setActive(l.label)}
//                 className={`text-sm font-medium transition-colors relative group ${active === l.label ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}
//               >
//                 {l.label}
//                 <span className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${active === l.label ? 'w-full' : 'w-0 group-hover:w-full'}`} />
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile hamburger */}
//         <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
//           <div className="space-y-1.5">
//             <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
//             <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
//             <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
//           </div>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-[#0d1224] border-t border-white/10 px-6 py-4 space-y-3">
//           {links.map(l => (
//             <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
//               {l.label}
//             </a>
//           ))}
//         </div>
//       )}
//     </motion.nav>
//   )
// }
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useActiveSection } from '../Effects'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
const ids = links.map(l => l.href.slice(1))

export default function Navbar() {
  const activeId = useActiveSection(ids)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a href="#home" whileHover={{ scale: 1.08 }} className="text-2xl font-bold gradient-text">
          Diksha<span className="text-white">.</span>
        </motion.a>

        <ul className="hidden md:flex gap-8">
          {links.map(l => {
            const isActive = activeId === l.href.slice(1)
            return (
              <li key={l.label} className="relative">
                <a href={l.href}
                  className={`text-sm font-medium transition-colors ${isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}>
                  {l.label}
                </a>
                {isActive && (
                  <motion.span layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                )}
              </li>
            )
          })}
        </ul>

        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0d1224] border-t border-white/10 px-6 overflow-hidden"
          >
            <div className="py-4 space-y-3">
              {links.map((l, i) => (
                <motion.a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors py-1">
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}