import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Freelance from "./sections/Freelance"
import Tools from "./sections/Tools"
import About from "./sections/About"
import AboutMe from "./sections/AboutMe"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Freelance />
      <Tools />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App