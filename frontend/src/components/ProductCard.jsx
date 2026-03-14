import { motion } from "framer-motion"

export default function ProductCard({title,description,status,skills}){

const statusStyle =
status==="IN PROGRESS"
? "text-green-400 bg-green-400/10 border-green-400/30"
: "text-amber-400 bg-amber-400/10 border-amber-400/30"

return(

<motion.div
whileHover={{y:-6}}
className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-7 hover:border-gray-600 transition-all"
>

<div className="flex justify-between items-center">

<h3 className="text-xl font-semibold">
{title}
</h3>

<span className={`text-xs px-3 py-1 rounded-full border ${statusStyle}`}>
{status}
</span>

</div>

<p className="text-gray-400 mt-4">
{description}
</p>

<div className="flex flex-wrap gap-3 mt-6">

{skills.map((skill,i)=>(
<span key={i} className="text-xs border border-gray-700 px-3 py-1 rounded-md text-gray-300">
{skill}
</span>
))}

</div>

</motion.div>

)

}       