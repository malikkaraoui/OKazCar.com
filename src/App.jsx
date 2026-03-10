import Navbar from './Navbar'
import Hero from './Hero'
import Showcase from './Showcase'
import Features from './Features'
import Process from './Process'
import FiltersGrid from './FiltersGrid'
import NumbersSection from './NumbersSection'
import FAQ from './FAQ'
import CTA from './CTA'
import Footer from './Footer'

function App() {
  return (
    <div className="font-sans antialiased bg-white selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <Process />
        <FiltersGrid />
        <NumbersSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
