import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CasesInteractive from './components/CasesInteractive'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />

      <main>
        <Hero />

        <div id="projects">
          <CasesInteractive />
        </div>

        <About />
      </main>

      <Contact />
    </>
  )
}

export default App
