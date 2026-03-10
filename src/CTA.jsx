/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Logo } from './Navbar'

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/detail/okazcar-analyse-annonces/eakomgkenllkkmfccjjfoegealnchmmo'

export default function CTA() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden gradient-hero flex flex-col items-center text-center px-6">

            {/* Abstract Glow */}
            <div className="absolute inset-0 pointer-events-none gradient-glow opacity-50 mix-blend-overlay" />

            {/* Large Rotating Wheel */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                className="mb-12 text-white/20 relative z-10"
            >
                <svg className="w-24 h-24" viewBox="0 0 128 128" fill="none" stroke="currentColor" strokeWidth="8">
                    <circle cx="64" cy="64" r="56" strokeWidth="6" />
                    <circle cx="64" cy="64" r="12" fill="currentColor" />
                    <path d="M64 22v30M98 47L73 63M105 88l-26-14M64 106V76M23 88l26-14M30 47l25 16" strokeLinecap="round" strokeWidth="6" />
                </svg>
            </motion.div>

            <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Prêt à acheter malin ?
            </motion.h2>

            <motion.p
                className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 relative z-10 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                Installez OKazCar en 10 secondes.<br />
                Votre prochain achat auto mérite mieux qu'un feeling.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10"
            >
                <a
                    href={CHROME_WEB_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-10 py-5 bg-white text-primary font-bold text-xl rounded-2xl shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all"
                >
                    Ajouter à Chrome — Gratuit
                </a>
                <p className="text-white/60 text-sm mt-6 font-medium">
                    Extension Chrome · Gratuit · Sans inscription
                </p>
            </motion.div>

        </section>
    )
}
