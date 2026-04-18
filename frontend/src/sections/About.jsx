import { Activity, Database, Cloud, Rocket } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const cardVariant = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }

    return (
        <section id="expertise" className="py-32 bg-light-dots text-black border-b border-gray-200">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20"
                >
                    <div className="max-w-2xl">
                        <div className="text-xs font-mono-tag tracking-widest text-gray-400 mb-8 uppercase flex items-center gap-4">
                            <span>02</span>
                            <span>OUR EXPERTISE</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                            Production-grade systems that scale
                        </h2>
                    </div>

                    <div className="max-w-sm text-right hidden md:block">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We architect digital products that don't just look premium, but function flawlessly at scale—from intricate real-time ecosystems to specialized developer tooling.
                        </p>
                    </div>
                </motion.div>

                {/* 2x2 Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 bg-white border border-gray-200"
                >

                    {/* Card 1 */}
                    <motion.div variants={cardVariant} className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-[#f8f8f8] transition-colors group">
                        <div className="flex justify-between items-start mb-16 border-b border-gray-100 pb-8">
                            <span className="text-gray-300 font-mono text-2xl">01</span>
                            <div className="p-3 border border-black bg-black rounded-sm group-hover:-translate-y-1 transition-transform">
                                <Activity size={20} className="text-gray-400" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Modern Web Platforms</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Building dynamic, highly interactive frontend applications using React.js and modern frameworks.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={cardVariant} className="p-10 md:p-14 border-b border-gray-200 hover:bg-[#f8f8f8] transition-colors group">
                        <div className="flex justify-between items-start mb-16 border-b border-gray-100 pb-8">
                            <span className="text-gray-300 font-mono text-2xl">02</span>
                            <div className="p-3 border border-black bg-black rounded-sm group-hover:-translate-y-1 transition-transform">
                                <Database size={20} className="text-gray-400" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Scalable Backends & APIs</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            RESTful APIs and microservices built with Node.js and Express for performance and reliability.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={cardVariant} className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-[#f8f8f8] transition-colors group">
                        <div className="flex justify-between items-start mb-16 border-b border-gray-100 pb-8">
                            <span className="text-gray-300 font-mono text-2xl">03</span>
                            <div className="p-3 border border-black bg-black rounded-sm group-hover:-translate-y-1 transition-transform">
                                <Cloud size={20} className="text-gray-400" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Database Architecture</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Designing efficient schemas and handling data with MongoDB and associated scalable solutions.
                        </p>
                    </motion.div>

                    {/* Card 4 - Dark element with moving Y-axis line */}
                    <motion.div variants={cardVariant} className="p-10 md:p-14 relative overflow-hidden hover:bg-[#f8f8f8] transition-colors group">

                        {/* Animated Black Line */}
                        <motion.div
                            className="absolute left-0 top-0 w-1 bg-black h-1/3"
                            animate={{ y: ["0%", "200%", "0%"] }}
                            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                        />

                        <div className="flex justify-between items-start mb-16 border-b border-gray-100 pb-8 relative z-10">
                            <span className="text-gray-300 font-mono text-2xl">04</span>
                            <div className="p-3 border border-black bg-black rounded-sm group-hover:-translate-y-1 transition-transform">
                                <Rocket size={20} className="text-white" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4 relative z-10">End-to-end Product Engineering</h3>
                        <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                            From concept to deployment, we ship complete developer tools and platforms, not just prototypes.
                        </p>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    )
}