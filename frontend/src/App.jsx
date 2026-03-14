import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Footer from "./components/Footer"

function App(){

return(

<div className="bg-black min-h-screen">

<Navbar/>

<Hero/>

<Projects/>

<About/>

<Footer/>

</div>

)

}

export default App