import { ArrowUpRight } from "lucide-react"
import ProductCard from "../components/ProductCard"

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-dark-grid border-b border-gray-900">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 border-b border-[#222] pb-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-tag tracking-widest text-[#555] mb-8 uppercase flex items-center gap-4">
              <span>03</span>
              <span>PRODUCTS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              What we're building
            </h2>
          </div>

          <div className="max-w-xs text-right hidden md:block">
            <p className="text-[#888] text-sm leading-relaxed">
              Thoughtfully crafted tools for developers, teams, and growing businesses.
            </p>
          </div>
        </div>

        {/* Product List */}
        <div className="flex flex-col border-b border-[#222]">

          <ProductCard
            number="01"
            category="COLLAB"
            title="BuddyCode"
            status="IN PROGRESS"
            description="Real-time competitive coding platform. Create custom rooms to battle peers head-to-head in problem solving, discuss collaboratively, and get unblocked with AI-assisted hints."
            skills={["React.js", "Express.js", "WebRTC", "Socket.IO", "Node.js", "MongoDB"]}
          />

          <ProductCard
            number="02"
            category="DISCOVERY"
            title="EchoVibe"
            status="IN PROGRESS"
            description="A community-driven discovery platform for hidden digital gems. Explore, test, and review lesser-known internet projects and open-source repositories."
            skills={["Next.js", "Express.js", "Node.js", "MongoDB"]}
          />

          <ProductCard
            number="03"
            category="HIRING"
            title="FindDevs"
            status="PLANNED"
            description="Platform to discover and connect with local developers and students around you for building projects and technical collaboration."
            skills={["Next.js", "MongoDB", "Express.js", "Node.js"]}
          />

        </div>

        {/* Bottom Actions */}
        <div className="mt-12 flex justify-end">
          <a href="#projects" className="border border-[#333] text-[#aaa] hover:text-white hover:border-white transition-colors px-6 py-3 text-sm font-bold flex items-center gap-3">
            View all products
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}