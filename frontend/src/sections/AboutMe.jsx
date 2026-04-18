import { User } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section id="about" className="py-32 bg-[#050505] text-white border-b border-[#222] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3"
          >
            <div className="text-xs font-mono-tag tracking-widest text-[#555] mb-8 uppercase flex items-center gap-4">
              <span>06</span>
              <span>ABOUT</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              The Lab.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-2/3 max-w-2xl text-[#888] text-sm md:text-base leading-relaxed space-y-6 md:pt-14"
          >
            <p>
              ParadoxDevX is a digital product lab and freelance studio focused on building high-performance, real-time web applications. We bridge the gap between creative product design and heavy-duty scalable backends.
            </p>
            <p>
              Whether we are shipping our own internal products or acting as the technical engine for external clients, we treat every codebase with the same level of architectural rigor and visual polish.
            </p>
            <div className="pt-8 block">
              <a href="https://x.com/ParadoxDevX" className="inline-flex items-center gap-3 border border-[#333] hover:bg-white hover:text-black transition-colors px-6 py-3 text-sm font-bold text-white uppercase group">
                <User size={16} className="group-hover:scale-110 transition-transform" /> Work with us
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
