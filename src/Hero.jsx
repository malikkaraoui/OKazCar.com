/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 15,
            mass: 1
        }
    },
}

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden gradient-hero pt-20">

            {/* Decorative Glow */}
            <div className="absolute inset-0 pointer-events-none gradient-glow opacity-60 mix-blend-overlay" />

            {/* Background patterns/particles can go here */}

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Copy */}
                <motion.div
                    className="flex-1 text-center lg:text-left text-white max-w-2xl mx-auto lg:mx-0 pt-12 lg:pt-0"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Label */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        EXTENSION CHROME GRATUITE
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight mb-6">
                        Ne vous faites plus<br className="hidden md:block" /> avoir sur vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-lbc to-orange-400">achats auto</span>.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/80 font-normal leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                        OKazCar analyse chaque annonce en 1 clic sur Leboncoin, La Centrale et AutoScout24. Score de fiabilité, prix marché et IA intégrée.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                        <a
                            href={CHROME_WEB_STORE_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl gradient-cta text-white font-bold text-lg shadow-cta hover:shadow-cta-hover transition-all hover:-translate-y-0.5"
                        >
                            Installer sur Chrome — C'est gratuit
                        </a>
                        <a
                            href="#showcase"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-colors"
                        >
                            Voir la démo ↓
                        </a>
                    </motion.div>

                    {/* Badges */}
                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1, duration: 1 } } }} className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium">
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 backdrop-blur-sm flex items-center gap-2">
                            <img src="https://www.leboncoin.fr/favicon.ico" alt="leboncoin" className="w-4 h-4 rounded-full bg-white" onError={(e) => { e.target.style.display = 'none' }} /> leboncoin
                        </span>
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 backdrop-blur-sm flex items-center gap-2">
                            <img src="https://www.lacentrale.fr/favicon.ico" alt="La Centrale" className="w-4 h-4 rounded-full bg-white" onError={(e) => { e.target.style.display = 'none' }} /> La Centrale
                        </span>
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 backdrop-blur-sm flex items-center gap-2">
                            <img src="https://www.autoscout24.fr/favicon.ico" alt="AutoScout24" className="w-4 h-4 rounded-full bg-white" onError={(e) => { e.target.style.display = 'none' }} /> AutoScout24 <span className="opacity-60 font-normal">(12 pays)</span>
                        </span>
                    </motion.div>

                </motion.div>

                {/* Right Visual (Mockup) */}
                <motion.div
                    className="flex-1 w-full max-w-[500px] lg:max-w-none relative mt-8 lg:mt-0"
                    initial={{ opacity: 0, scale: 0.92, rotateY: 15, perspective: 1000 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                >
                    {/* Abstract representation of the extension panel on a browser */}
                    <div className="relative rounded-2xl bg-white shadow-popup overflow-hidden border border-black/5 flex flex-col h-[600px] max-h-[80vh]">
                        {/* Fake browser header */}
                        <div className="bg-gray-100 flex items-center px-4 py-3 border-b border-gray-200 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                            <div className="ml-4 flex-1 h-6 bg-white rounded-md border border-gray-200" />
                        </div>

                        {/* Fake Content area splits into LBC left, Panel right */}
                        <div className="flex-1 flex overflow-hidden bg-gray-50 relative">
                            {/* Left (LBC fake page) */}
                            <div className="flex-[2] hidden md:block p-6 opacity-40 blur-[1px]">
                                <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl mb-4" />
                                <div className="w-3/4 h-8 bg-gray-200 rounded mb-2" />
                                <div className="w-1/2 h-6 bg-gray-200 rounded mb-6" />
                                <div className="w-full h-4 bg-gray-200 rounded mb-2" />
                                <div className="w-5/6 h-4 bg-gray-200 rounded" />
                            </div>

                            {/* Right (OKazCar Panel) */}
                            <div className="flex-[1] min-w-[320px] bg-white border-l border-gray-100 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] p-5 flex flex-col z-10">
                                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                                            <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none" stroke="currentColor" strokeWidth="12"><circle cx="64" cy="64" r="56" /><circle cx="64" cy="64" r="12" fill="currentColor" /><path d="M64 22v30M98 47L73 63M105 88l-26-14M64 106V76M23 88l26-14M30 47l25 16" strokeWidth="8" strokeLinecap="round" /></svg>
                                        </div>
                                        <span className="font-bold">OKaz<span className="text-accent">Car</span></span>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded-sm">IA intégrée</span>
                                </div>

                                {/* Score */}
                                <div className="flex flex-col items-center mb-8">
                                    <div className="relative w-32 h-32">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                                            <motion.circle
                                                cx="50" cy="50" r="45" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round"
                                                strokeDasharray="283"
                                                initial={{ strokeDashoffset: 283 }}
                                                animate={{ strokeDashoffset: 283 * (1 - 0.86) }}
                                                transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-3xl font-black text-slate leading-none">86</span>
                                            <span className="text-xs font-bold text-muted">/100</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 text-sm font-bold text-pass bg-pass/10 px-3 py-1 rounded-full">Excellente affaire</span>
                                </div>

                                {/* Highlights Grid */}
                                <div className="grid grid-cols-2 gap-3 mt-auto">
                                    <div className="bg-bg-subtle p-3 rounded-lg border border-gray-100">
                                        <div className="text-[10px] text-muted uppercase font-bold mb-1">Prix Marché</div>
                                        <div className="text-sm font-semibold text-slate">Bon alignement</div>
                                    </div>
                                    <div className="bg-bg-subtle p-3 rounded-lg border border-gray-100">
                                        <div className="text-[10px] text-muted uppercase font-bold mb-1">Téléphone</div>
                                        <div className="text-sm font-semibold text-slate">Vérifié FR</div>
                                    </div>
                                    <div className="bg-bg-subtle p-3 rounded-lg border border-gray-100">
                                        <div className="text-[10px] text-muted uppercase font-bold mb-1">Vendeur</div>
                                        <div className="text-sm font-semibold text-slate">Pro (SIRET OK)</div>
                                    </div>
                                    <div className="bg-bg-subtle p-3 rounded-lg border border-gray-100">
                                        <div className="text-[10px] text-muted uppercase font-bold mb-1">Historique</div>
                                        <div className="text-sm font-semibold text-slate">Premium</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating animated UI elements */}
                    <motion.div
                        className="absolute -right-6 top-1/4 bg-white rounded-xl shadow-glass p-4 border border-gray-100 flex items-center gap-3 z-20"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 }}
                    >
                        <div className="w-8 h-8 rounded-full bg-pass/10 flex items-center justify-center text-pass">✓</div>
                        <div>
                            <p className="text-xs font-bold text-slate">Analyse terminée</p>
                            <p className="text-[10px] text-muted">en 1.2s</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    )
}
