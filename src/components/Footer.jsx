// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
// import { motion } from 'framer-motion'

// export default function Footer() {
//   return (
//     <footer className="bg-[#080b14] border-t border-white/5 py-10 px-6 text-center">
//       <motion.p className="text-2xl font-bold gradient-text mb-4">Diksha Salve</motion.p>
//       <p className="text-gray-500 text-sm mb-6">Full Stack Developer · Java · Spring Boot · React.js</p>
//       <div className="flex justify-center gap-5 mb-6">
//         {[
//           { icon: FaGithub, href: 'https://github.com/diksha-salve' },
//           { icon: FaLinkedin, href: 'https://linkedin.com/in/diksha-salve' },
//           { icon: FaEnvelope, href: 'mailto:dikshasalve2020@gmail.com' },
//         ].map(({ icon: Icon, href }, i) => (
//           <motion.a key={i} href={href} target="_blank" rel="noreferrer"
//             whileHover={{ y: -3, color: '#22d3ee' }}
//             className="text-gray-500 hover:text-cyan-400 transition-colors text-xl">
//             <Icon />
//           </motion.a>
//         ))}
//       </div>
//       <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Diksha Shamrao Salve. All rights reserved.</p>
//     </footer>
//   )
// }


import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Reveal } from '../Effects'

const socials = [
  { icon: FaGithub, href: 'https://github.com/diksha-salve', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/diksha-salve-a7b788325/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:dikshasalve2020@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#080b14] border-t border-white/5 py-10 px-6 text-center overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <Reveal>
        <p className="text-2xl font-bold gradient-text mb-4">Diksha Salve</p>
        <p className="text-gray-500 text-sm mb-6">Full Stack Developer · Java · Spring Boot · React.js</p>
        <div className="flex justify-center gap-5 mb-6">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              whileHover={{ y: -5, scale: 1.25 }}
              className="text-gray-500 hover:text-cyan-400 transition-colors text-xl">
              <Icon />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Diksha Shamrao Salve. All rights reserved.</p>
      </Reveal>

      <motion.a href="#home" aria-label="Back to top" whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30">
        <FaArrowUp />
      </motion.a>
    </footer>
  )
}