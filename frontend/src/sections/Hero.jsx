import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero(){

return(

<section id="home" className="relative py-52 overflow-hidden">

{/* animated glow background */}

<motion.div
className="absolute w-[700px] h-[700px] bg-orange-500/15 rounded-full blur-3xl"
animate={{x:[-100,100,-100],y:[-50,50,-50]}}
transition={{duration:20,repeat:Infinity}}
/>

<motion.div
className="absolute right-0 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-3xl"
animate={{x:[100,-100,100],y:[50,-50,50]}}
transition={{duration:18,repeat:Infinity}}
/>

<div className="max-w-4xl mx-auto text-center relative z-10 px-6">
 <span className="text-xs border border-gray-700 px-3 py-1 rounded-full text-gray-400 mb-6 inline-block">
PRODUCT STUDIO
</span>

<h1 className="text-6xl font-bold leading-tight mt-12">
Build Fast.
<br/>
Ship Products.
</h1>

<p className="text-gray-400 mt-6 text-lg">
ParadoxDevX is an independent product studio building
modern developer tools and platforms.
</p>

<div className="flex justify-center gap-4 mt-10">

<a
href="#projects"
className="bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
>

View Products
<ArrowRight size={18}/>

</a>

</div>

</div>

</section>

)

}