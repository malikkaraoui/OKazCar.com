import { useRef } from 'react'
/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from 'framer-motion'
import { Puzzle, Link as LinkIcon, Sparkles } from 'lucide-react'

const processSteps = [
    {
        id: 'step-install',
        icon: Puzzle,
        title: 'Installez l’extension',
        description: 'Ajoutez OKazCar depuis le Chrome Web Store. C’est gratuit, sans compte, sans inscription.',
        visualLabel: 'Chrome Web Store',
        visualTitle: 'Installation en 10 secondes',
        visualCaption: 'Ajoutez OKazCar, épinglez-la et vous êtes prêt.',
    },
    {
        id: 'step-open',
        icon: LinkIcon,
        title: 'Ouvrez une annonce',
        description: 'Naviguez sur Leboncoin, La Centrale ou AutoScout24. L’extension se réveille automatiquement.',
        visualLabel: 'Annonce détectée',
        visualTitle: 'Une page auto devient intelligible',
        visualCaption: 'Le panel OKazCar s’injecte sans quitter votre navigation.',
    },
    {
        id: 'step-read',
        icon: Sparkles,
        title: 'Lisez le verdict',
        description: 'Le panel OKazCar apparaît avec le score, les filtres détaillés et les alertes à surveiller.',
        visualLabel: 'Verdict',
        visualTitle: 'Le bon feeling, avec des preuves',
        visualCaption: 'Score, comparatif marché et alertes utiles, au même endroit.',
    },
]

export default function Process() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const mockUpScale = useTransform(scrollYProgress, [0, 0.1], [0.95, 1])
    const mockUpOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
        <section id="process" className="bg-bg-subtle relative" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Sticky Container for the entire section layout */}
                <div className="relative flex flex-col md:flex-row h-[200vh]">

                    {/* Left Column: Scrolling Texts */}
                    <div className="flex-1 w-full md:w-1/2 flex flex-col pt-32 pb-32 z-10">
                        <div className="mb-32">
                            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
                                Simple comme bonjour
                            </p>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate leading-tight font-sans">
                                3 étapes. <br className="hidden md:block" />3 secondes.
                            </h2>
                        </div>

                        <div className="flex-1 flex flex-col justify-between space-y-[20vh] md:space-y-[35vh] pb-[20vh]">
                            {processSteps.map((step, index) => {
                                return (
                                    <motion.div
                                        key={step.id}
                                        className="flex items-start gap-6 opacity-40 transition-opacity duration-300"
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ margin: "-45% 0px -45% 0px" }}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-cta">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <step.icon className="w-6 h-6 text-primary" />
                                                <h3 className="text-2xl font-bold text-slate">{step.title}</h3>
                                            </div>
                                            <p className="text-lg text-text-secondary leading-relaxed max-w-sm">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Column: Sticky Mockup */}
                    <div className="fixed md:sticky top-0 md:top-24 right-0 md:right-auto md:w-1/2 h-[100vh] md:h-[calc(100vh-6rem)] flex items-center justify-center pointer-events-none p-6 md:p-12 z-0 md:z-10 opacity-10 md:opacity-100">
                        <motion.div
                            className="w-full max-w-lg bg-white rounded-2xl shadow-popup border border-gray-100 overflow-hidden"
                            style={{ scale: mockUpScale, opacity: mockUpOpacity }}
                        >
                            <div className="p-8 pb-12 relative overflow-hidden h-[450px]">
                                {/* Visual Step 1 */}
                                <motion.div
                                    className="absolute inset-0 p-8 flex flex-col pt-12"
                                    style={{ opacity: useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]) }}
                                >
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Chrome Web Store</span>
                                    <h3 className="text-2xl font-bold text-slate mb-2">Installation en 10 secondes</h3>
                                    <p className="text-sm text-text-secondary mb-10">Ajoutez OKazCar, épinglez-la et vous êtes prêt.</p>

                                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-auto text-center">
                                        <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-white mx-auto mb-4 shadow-sm">
                                            <Puzzle className="w-8 h-8" />
                                        </div>
                                        <div className="h-10 w-48 bg-blue-500 rounded-lg mx-auto mb-2 text-white flex items-center justify-center font-bold text-sm">Ajouter à Chrome</div>
                                        <div className="h-3 w-32 bg-gray-200 rounded-full mx-auto"></div>
                                    </div>
                                </motion.div>

                                {/* Visual Step 2 */}
                                <motion.div
                                    className="absolute inset-0 p-8 flex flex-col pt-12"
                                    style={{ opacity: useTransform(scrollYProgress, [0.35, 0.45, 0.65, 0.75], [0, 1, 1, 0]) }}
                                >
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Annonce détectée</span>
                                    <h3 className="text-2xl font-bold text-slate mb-2">Une page auto devient intelligible</h3>
                                    <p className="text-sm text-text-secondary mb-10">Le panel OKazCar s&apos;injecte sans quitter la page.</p>

                                    <div className="relative mt-auto border border-gray-200 rounded-xl overflow-hidden shadow-sm h-48 bg-white">
                                        <div className="bg-gray-100 h-8 flex items-center px-4 gap-2">
                                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                                        </div>
                                        <div className="p-4 flex gap-4 h-full relative">
                                            <div className="w-1/2 h-full bg-gray-100 rounded-md"></div>
                                            <div className="w-1/2 flex flex-col gap-2">
                                                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                                                <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                                                <div className="h-8 w-1/3 bg-gray-200 rounded mt-4"></div>
                                            </div>

                                            {/* Fake extension injecting */}
                                            <motion.div
                                                className="absolute right-0 top-0 bottom-0 w-[80px] bg-white border-l border-primary/20 shadow-[-5px_0_15px_rgba(37,99,235,0.1)] p-2"
                                                initial={{ x: 100 }}
                                                whileInView={{ x: 0 }}
                                                transition={{ type: "spring", damping: 15 }}
                                            >
                                                <div className="w-full h-8 bg-blue-50 rounded mb-2"></div>
                                                <div className="w-full h-16 bg-gray-50 rounded"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Visual Step 3 */}
                                <motion.div
                                    className="absolute inset-0 p-8 flex flex-col pt-12"
                                    style={{ opacity: useTransform(scrollYProgress, [0.7, 0.8], [0, 1]) }}
                                >
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Verdict</span>
                                    <h3 className="text-2xl font-bold text-slate mb-2">Le bon feeling, avec des preuves</h3>
                                    <p className="text-sm text-text-secondary mb-10">Score, comparatif marché et alertes utiles.</p>

                                    <div className="mt-auto border border-primary/20 rounded-xl overflow-hidden shadow-card h-48 bg-white p-5 flex flex-col items-center justify-center">
                                        <div className="w-20 h-20 rounded-full border-4 border-green-400 flex items-center justify-center mb-4">
                                            <span className="text-2xl font-black text-slate">86</span>
                                        </div>
                                        <div className="w-full h-6 bg-pass/10 rounded overflow-hidden flex">
                                            <div className="w-2/3 h-full bg-pass flex items-center justify-center text-[8px] text-white font-bold">PRIX OK</div>
                                        </div>
                                        <div className="w-full h-6 bg-warning/10 rounded flex items-center px-2 mt-2">
                                            <span className="text-[10px] text-warning font-bold">! IMPORT</span>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
