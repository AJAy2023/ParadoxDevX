import { motion } from "framer-motion"

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-dark-grid border-b border-gray-900">

      <div className="max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center text-center md:text-left mt-8 md:mt-0">

        {/* Top tracking text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-between items-center text-[10px] md:text-xs font-mono-tag tracking-widest text-[#666] mb-12 uppercase select-none"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#666] inline-block"></span>
            PRODUCT STUDIO
          </div>
          <div>EST. 2026</div>
        </motion.div>

        {/* Massive Typography */}
        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-[11vw] leading-[0.85] font-black tracking-tighter uppercase ml-[-0.05em] "
        >
          <motion.div variants={item} className="text-white ">PRODUCT</motion.div>
          <motion.div variants={item} className="text-white">LAB &</motion.div>
          <motion.div variants={item} className="text-[#333]">FREELANCE.</motion.div>
        </motion.h1>

        {/* Bottom Description & Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-t border-[#222] pt-10"
        >

          <p className="text-[#888] max-w-md text-sm md:text-base leading-relaxed">
            ParadoxDevX is an independent product lab and freelance studio. We build modern developer tools, scalable platforms, and turn client ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href="#projects" className="bg-white text-black text-sm font-bold px-8 py-3 w-full sm:w-auto text-center hover:bg-gray-200 transition-colors">
              View Products
            </a>
            <a href="https://x.com/ParadoxDevX" target="_blank" className="bg-black text-white border border-[#333] text-sm font-bold px-8 py-3 w-full sm:w-auto text-center hover:bg-[#111] transition-colors">
              Follow the Build
            </a>
          </div>

        </motion.div>

      </div>

    </section>
  )
}