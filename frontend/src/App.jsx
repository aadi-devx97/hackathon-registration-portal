import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import About from './components/layout/About'
import Timeline from './components/layout/Timeline'
import Prizes from './components/layout/Prizes'
import FinalCTA from './components/layout/FinalCTA'
import Footer from './components/layout/Footer'

function App() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Prizes />
      <FinalCTA />
      <Footer />
    </main>
  )
}

export default App
