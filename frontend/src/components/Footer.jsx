import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer(){

return(

<footer className="border-t border-gray-800 py-10">

<div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

<p className="text-gray-500 text-sm">
© 2026 ParadoxDevX
</p>

<div className="flex gap-6 text-gray-400">

<a href="https://github.com/AJAy2023/" target="_blank" className="hover:text-white transition">
<Github size={20}/>
</a>

<a href="https://x.com/ParadoxDevX" target="_blank" className="hover:text-white transition">
<Twitter size={20}/>
</a>

<a href="https://www.linkedin.com/in/paradox-devx-8916b73b7/?isSelfProfile=true" target="_blank" className="hover:text-white transition">
<Linkedin size={20}/>
</a>

</div>

</div>

</footer>

)

}