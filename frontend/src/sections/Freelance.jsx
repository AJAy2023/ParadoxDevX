import { ArrowUpRight } from "lucide-react"
import ProductCard from "../components/ProductCard"

export default function Freelance() {
  return (
    <section id="freelance" className="py-32 bg-[#0a0a0a] border-b border-gray-900">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 border-b border-[#222] pb-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-tag tracking-widest text-[#555] mb-8 uppercase flex items-center gap-4">
              <span>04</span>
              <span>FREELANCE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Client Work
            </h2>
          </div>

          <div className="max-w-xs text-right hidden md:block">
            <p className="text-[#888] text-sm leading-relaxed">
              Tailored software and platforms built in collaboration with external founders and creators.
            </p>
          </div>
        </div>

        {/* Client List */}
        <div className="flex flex-col border-b border-[#222]">

          <ProductCard
            number="01"
            category="COMMUNITY"
            title="AdivsGames"
            status="PLANNED"
            description="Dedicated community platform for the AdivsGames YouTube channel, featuring curated game updates, direct links, and audience engagement."
            skills={["Next.js", "Node.js", "Community", "Gaming"]}
          />

        </div>

      </div>
    </section>
  )
}
