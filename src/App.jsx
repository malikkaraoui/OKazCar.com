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

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/detail/okazcar-analyse-annonces/eakomgkenllkkmfccjjfoegealnchmmo'

function App() {
  return (
    <div className="font-sans antialiased bg-white selection:bg-primary/20 selection:text-primary pb-24 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <NumbersSection />
        <Showcase />
        <Features />
        <Process />
        <FiltersGrid />
        <FAQ />
        <CTA />
      </main>
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 md:hidden pointer-events-none">
        <div className="mx-auto max-w-md rounded-[22px] border border-slate-200/80 bg-white/92 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl pointer-events-auto">
          <a
            href={CHROME_WEB_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-2xl bg-primary px-5 py-3.5 text-base font-extrabold text-white shadow-cta"
          >
            Installer gratuitement
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
