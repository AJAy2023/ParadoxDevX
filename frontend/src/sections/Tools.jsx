import { motion } from "framer-motion"

export default function Tools() {
  const tools = [
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion",] },
    { category: "Backend", items: ["Node.js", "Express.js", "Socket.IO", "WebRTC"] },
    { category: "Database & Auth", items: ["MongoDB", "PostgreSQL", "Redis", "Clerk"] },
    { category: "Infrastructure", items: ["GitHub Actions", "Docker", "AWS", "Vercel", "Render"] }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariant = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  }

  return (
    <section id="tools" className="py-32 bg-white border-b border-gray-200 text-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 border-b border-gray-200 pb-6"
        >
          <div>
            <div className="text-xs font-mono-tag tracking-widest text-gray-500 mb-8 uppercase flex items-center gap-4">
              <span>05</span>
              <span>TOOLS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Our Tech Stack
            </h2>
          </div>

          <div className="max-w-xs text-right hidden md:block">
            <p className="text-gray-500 text-sm leading-relaxed">
              The foundational technologies we use to build high-performance web applications and systems.
            </p>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pt-8">
          {tools.map((block, index) => (
            <motion.div
              key={index}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="font-bold text-lg mb-6 border-b border-gray-100 pb-4">{block.category}</h3>
              <ul className="space-y-4">
                {block.items.map((item, i) => (
                  <motion.li 
                    variants={itemVariant} 
                    key={i} 
                    className="flex items-center gap-3 text-sm text-gray-600 font-mono-tag tracking-wider uppercase hover:bg-gray-100 hover:text-black hover:translate-x-1 transition-all py-2 px-3 -mx-3 rounded-md cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-300"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
