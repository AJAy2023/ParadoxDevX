
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full fixed top-0 z-50 bg-white border-b border-gray-100 font-sans"
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md font-bold text-lg">
            Px
          </div>
          <span className="text-black font-bold text-xl tracking-tight">Paradox<span className="font-light text-gray-500">DevX</span></span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-xs font-semibold tracking-wider text-gray-400">
          <li>
            <a href="#expertise" className="hover:text-black transition-colors uppercase">
              Expertise
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-black transition-colors uppercase">
              Products
            </a>
          </li>
          <li>
            <a href="#freelance" className="hover:text-black transition-colors uppercase">
              Freelance
            </a>
          </li>
          <li>
            <a href="#tools" className="hover:text-black transition-colors uppercase">
              Tools
            </a>
          </li>
          {/* <li>
            <a href="#blog" className="hover:text-black transition-colors uppercase">
              Blog
            </a>
          </li> */}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">


          <a href="#about" className="bg-black text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm hover:bg-gray-800 transition-colors">
            About
          </a>
        </div>

      </div>
    </motion.nav>
  )
}