export default function Navbar(){

return(

<nav className="w-full flex justify-center pt-6 fixed top-0 z-50">

<div className="flex items-center gap-8 bg-black/60 backdrop-blur-md border border-gray-800 rounded-full px-6 py-2 shadow-lg">

<h1 className="text-white font-semibold">
ParadoxDevX
</h1>

<ul className="flex gap-2 text-sm">

<li>
<a href="#home" className="px-4 py-2 rounded-full text-gray-400 hover:bg-white hover:text-black transition-all duration-300">
 Home
</a>
</li>

<li>
<a href="#projects" className="px-4 py-2 rounded-full text-gray-400 hover:bg-white hover:text-black transition-all duration-300">
 Products
</a>
</li>

<li>
<a href="#about" className="px-4 py-2 rounded-full text-gray-400 hover:bg-white hover:text-black transition-all duration-300">
 About
</a>
</li>

</ul>

</div>

</nav>

)

}