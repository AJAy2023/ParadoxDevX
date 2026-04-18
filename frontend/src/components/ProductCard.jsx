import { ArrowUpRight, Github, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function ProductCard({ title, description, status, skills, number, category }) {
  const isPlanned = status === "PLANNED"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group border-t border-[#222] py-10 transition-colors hover:bg-[#0a0a0a]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[150px_1fr_200px] gap-8 items-start">

        {/* Left: Number & Category */}
        <div className="font-mono-tag text-xs tracking-widest text-[#555] uppercase">
          <span className="block text-[#888] mb-1">{number}</span>
          {category}
        </div>

        {/* Middle: Info & Tags */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            {title}
          </h3>
          <p className="text-[#888] text-sm leading-relaxed mb-6 max-w-2xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="text-[10px] font-mono-tag tracking-wider border border-[#333] px-2 py-1 text-[#666] uppercase hover:bg-white hover:text-black transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Status & Links */}
        <div className="flex flex-col items-end gap-6 text-right h-full">
          <div className="flex items-center gap-2 text-xs font-mono-tag tracking-widest uppercase">
            {/* Status Dot Colors */}
            <span className={`w-1.5 h-1.5 ${status === "PLANNED" ? "bg-[#8b7a65]" : /* Brown-grey */
                status === "IN PROGRESS" ? "bg-yellow-500" :
                  "bg-white"
              }`}></span>

            <span className={status === "PLANNED" ? "text-[#555]" : "text-[#aaa]"}>{status}</span>
          </div>

          <div className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight size={24} className={isPlanned ? "text-[#333]" : "text-white"} />
          </div>

          {!isPlanned && (
            <div className="flex gap-4 text-xs font-mono-tag text-[#666] mt-auto uppercase tracking-wide">
              <a href="#" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Globe size={14} /> Visit
              </a>
              <a href="#" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Github size={14} /> GitHub
              </a>
            </div>
          )}
        </div>

      </div>
    </motion.div>
  )
}       