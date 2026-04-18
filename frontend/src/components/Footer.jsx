import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-grid border-t border-gray-900 py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Top Row - Logo & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-[#222]">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm font-bold text-sm tracking-tighter">
               Px
             </div>
             <span className="text-white font-bold tracking-tight text-xl">ParadoxDevX</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[#888] font-mono-tag text-xs tracking-widest uppercase mt-8 md:mt-0">
             <a href="#about" className="hover:text-white transition-colors">About</a>
             <a href="#projects" className="hover:text-white transition-colors">Products</a>
             <a href="#freelance" className="hover:text-white transition-colors">Freelance</a>
             <a href="#tools" className="hover:text-white transition-colors">Tools</a>
          </div>
        </div>
        
        {/* Middle Row - Text & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-[#222] gap-10">
          <p className="text-[#888] text-sm md:text-base leading-relaxed max-w-xl">
            A digital product lab engineering real-time platforms, developer tools, and custom communities. Operating independently to ship our own ambitious software, while partnering with creators to build theirs.
          </p>
          <div className="flex gap-4">
              <a href="https://x.com/ParadoxDevX" target="_blank" className="border border-[#333] p-3 text-[#888] hover:bg-[#111] hover:text-white hover:border-[#555] transition-all rounded-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              <a href="https://github.com/AJAy2023/" target="_blank" className="border border-[#333] p-3 text-[#888] hover:bg-[#111] hover:text-white hover:border-[#555] transition-all rounded-sm flex items-center justify-center">
                <Github size={18}/>
              </a>
              <a href="https://www.linkedin.com/company/paradoxdevx/" target="_blank" className="border border-[#333] p-3 text-[#888] hover:bg-[#111] hover:text-white hover:border-[#555] transition-all rounded-sm flex items-center justify-center">
                <Linkedin size={18}/>
              </a>
          </div>
        </div>

        {/* Bottom Row - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[#666] font-mono-tag text-[10px] md:text-xs tracking-wider">
           <p>© 2026 ParadoxDevX. All rights reserved.</p>
           <div className="flex gap-6 mt-6 md:mt-0 lowercase tracking-normal">
              <a href="#" className="hover:text-[#aaa] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#aaa] transition-colors">Terms</a>
           </div>
        </div>

      </div>
    </footer>
  )
}