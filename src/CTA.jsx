/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Logo } from './Navbar'

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/detail/okazcar-analyse-annonces/eakomgkenllkkmfccjjfoegealnchmmo'

export default function CTA() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden gradient-hero flex flex-col items-center text-center px-4 sm:px-6">

            {/* Abstract Glow */}
            <div className="absolute inset-0 pointer-events-none gradient-glow opacity-50 mix-blend-overlay" />

            <div className="mb-10 sm:mb-12 relative z-10">
                <Logo dark={false} appIcon={true} className="text-3xl sm:text-4xl md:text-[2.6rem] gap-3 sm:gap-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.14)]" />
            </div>

            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 relative z-10 text-balance"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Prêt à acheter malin ?
            </motion.h2>

            <motion.p
                className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 sm:mb-12 relative z-10 font-medium"
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
                    className="inline-block w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-primary font-bold text-lg sm:text-xl rounded-2xl shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all"
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
