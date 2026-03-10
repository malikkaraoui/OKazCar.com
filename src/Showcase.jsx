import { motion } from 'framer-motion'

const showcaseHighlights = [
    { icon: '📊', label: 'Score global' },
    { icon: '🔍', label: '9 filtres IA' },
    { icon: '⚡', label: 'Analyse en 3 sec' },
]

export default function Showcase() {
    return (
        <section id="showcase" className="py-24 md:py-32 bg-bg-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-primary font-bold text-sm tracking-widest uppercase mb-4"
                    >
                        L'extension en action
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-slate leading-tight"
                    >
                        Tout ce que vous devez savoir.<br />
                        En un coup d'œil.
                    </motion.h2>
                </div>

                {/* Main Showcase Mockup */}
                <motion.div
                    className="relative max-w-5xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* Desktop Browser Frame */}
                    <div className="rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-shadow duration-500 overflow-hidden border border-black/5 flex flex-col min-h-[500px] md:min-h-[600px]">

                        {/* Browser Top Bar */}
                        <div className="bg-gray-100 flex items-center px-4 py-3 border-b border-gray-200 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                            <div className="ml-4 flex-1 h-6 bg-white rounded-md border border-gray-200 flex items-center px-3">
                                <span className="text-xs text-muted">leboncoin.fr/voitures/249819...</span>
                            </div>
                        </div>

                        {/* Content Split */}
                        <div className="flex-1 flex flex-col md:flex-row bg-gray-50 relative">

                            {/* Left Side: Leboncoin Listing (Image) */}
                            <div className="flex-[2] bg-white z-0 relative overflow-hidden">
                                <img
                                    src="/Capture d’écran 2026-03-10 à 15.24.02.png"
                                    alt="Annonce leboncoin"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Right Side: OKazCar Extension Panel INJECTED */}
                            <div className="flex-[1] md:min-w-[360px] bg-white border-t md:border-t-0 md:border-l border-gray-100 shadow-[-20px_0_40px_rgba(0,0,0,0.06)] z-10 p-6 flex flex-col">

                                {/* Panel Header */}
                                <div className="flex items-center justify-between pb-5 border-b border-gray-100 mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                                            <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none" stroke="currentColor" strokeWidth="12"><circle cx="64" cy="64" r="56" /><circle cx="64" cy="64" r="12" fill="currentColor" /><path d="M64 22v30M98 47L73 63M105 88l-26-14M64 106V76M23 88l26-14M30 47l25 16" strokeWidth="8" strokeLinecap="round" /></svg>
                                        </div>
                                        <span className="font-bold text-lg">OKaz<span className="text-accent">Car</span></span>
                                    </div>
                                </div>

                                {/* Score Section */}
                                <div className="bg-bg-subtle rounded-xl p-5 mb-6 border border-gray-100 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-bold text-slate mb-1">Score Global</h3>
                                        <p className="text-xs text-muted">Fiabilité estimée</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-right">
                                            <div className="text-2xl font-black text-pass leading-none">86<span className="text-sm font-bold text-muted">/100</span></div>
                                        </div>
                                        {/* Mini SVG Gauge */}
                                        <div className="w-12 h-12 relative flex-shrink-0">
                                            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#22c55e" strokeWidth="4" strokeDasharray="86, 100" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Filters Result List */}
                                <div className="flex-1 space-y-4">
                                    {/* L4: Price */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-pass/10 text-pass flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                        <div>
                                            <div className="flex items-center justify-between w-full min-w-[200px]">
                                                <span className="text-sm font-bold text-slate">L4 Prix vs marché</span>
                                                <span className="text-xs font-bold text-pass">OK</span>
                                            </div>
                                            <p className="text-xs text-muted mt-1">Aligné avec la médiane européenne</p>
                                        </div>
                                    </div>

                                    {/* L6: Phone */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-pass/10 text-pass flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                        <div>
                                            <div className="flex items-center justify-between w-full min-w-[200px]">
                                                <span className="text-sm font-bold text-slate">L6 Analyse téléphone</span>
                                                <span className="text-xs font-bold text-pass">RAS</span>
                                            </div>
                                            <p className="text-xs text-muted mt-1">Numéro français identifié</p>
                                        </div>
                                    </div>

                                    {/* L8: Import Warning */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-warning/10 text-warning flex items-center justify-center flex-shrink-0 mt-0.5">!</div>
                                        <div>
                                            <div className="flex items-center justify-between w-full min-w-[200px]">
                                                <span className="text-sm font-bold text-slate">L8 Détection import</span>
                                                <span className="text-xs font-bold text-warning">À surveiller</span>
                                            </div>
                                            <p className="text-xs text-muted mt-1">Origine probable : Allemagne</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-4 border-t border-gray-100 text-center">
                                    <span className="text-[10px] text-muted uppercase font-bold tracking-widest">Analyse en 1.2s</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

                {/* Highlights below mockup */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 md:mt-16">
                    {showcaseHighlights.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="flex items-center justify-center gap-3 bg-white px-6 py-4 rounded-xl shadow-glass border border-black/5"
                        >
                            <span className="text-2xl">{item.icon}</span>
                            <strong className="text-slate font-bold">{item.label}</strong>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
