import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import Showcase from './sections/Showcase'
import FiltersGrid from './sections/FiltersGrid'
import LiveDemo from './sections/LiveDemo'
import HowItWorks from './sections/HowItWorks'
import Audience from './sections/Audience'
import Coverage from './sections/Coverage'
import Numbers from './sections/Numbers'
import Comparison from './sections/Comparison'
import Blog from './sections/Blog'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Showcase />
        <FiltersGrid />
        <LiveDemo />
        <HowItWorks />
        <Audience />
        <Coverage />
        <Numbers />
        <Comparison />
        <Blog />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
