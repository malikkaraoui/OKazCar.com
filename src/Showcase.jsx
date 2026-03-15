import { useState } from 'react'
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

const showcaseHighlights = [
    { icon: '📊', label: 'Score global' },
    { icon: '🔍', label: '11 filtres IA' },
    { icon: '⚡', label: 'Analyse en 3 sec' },
]

export default function Showcase() {
    const [activeTab, setActiveTab] = useState('lbc')

    return (
        <section id="showcase" className="py-24 md:py-32 bg-bg-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

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
                    <div className="rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-shadow duration-500 overflow-hidden border border-black/5 flex flex-col min-h-[360px] sm:min-h-[500px] md:min-h-[600px]">

                        {/* Browser Top Bar */}
                        <div className="bg-gray-100 flex items-center px-4 py-3 border-b border-gray-200 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />

                            {/* URL Bar reflecting active platform */}
                            <div className="ml-4 flex-1 h-8 bg-white rounded-md border border-gray-200 flex items-center px-4 font-mono text-xs text-muted overflow-hidden">
                                {activeTab === 'lbc' ? 'https://www.leboncoin.fr/ad/voitures/...' :
                                    activeTab === 'lc' ? 'https://www.lacentrale.fr/auto-occasion-annonce-...' :
                                        'https://www.autoscout24.be/offres/...'}
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="flex-1 bg-gray-50 relative overflow-hidden group">

                            {/* AutoScout24 Screenshot */}
                            <img
                                src="/img-as24-panel.png"
                                alt="Interface OKazCar sur AutoScout24"
                                className={`absolute inset-0 w-full h-full object-contain sm:object-cover object-left-top bg-white transition-opacity duration-700 ${activeTab === 'as24' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                            />

                            {/* La Centrale Screenshot */}
                            <img
                                src="/img-lc-panel.png"
                                alt="Interface OKazCar sur La Centrale"
                                className={`absolute inset-0 w-full h-full object-contain sm:object-cover object-left-top bg-white transition-opacity duration-700 ${activeTab === 'lc' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                            />

                            {/* Leboncoin Screenshot */}
                            <img
                                src="/img-lbc-panel.png"
                                alt="Interface OKazCar sur Leboncoin"
                                className={`absolute inset-0 w-full h-full object-contain sm:object-cover object-left-top bg-white transition-opacity duration-700 ${activeTab === 'lbc' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                            />

                            {/* Platform Toggle Overlay */}
                            <div className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-20 flex flex-wrap justify-center bg-white/90 backdrop-blur-md p-1.5 rounded-2xl sm:rounded-full shadow-floating border border-gray-200 gap-1.5 sm:gap-0">
                                <button
                                    onClick={() => setActiveTab('lbc')}
                                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'lbc' ? 'bg-primary text-white shadow-md' : 'text-slate hover:bg-gray-100'}`}
                                >
                                    <img src="https://www.leboncoin.fr/favicon.ico" className="w-4 h-4 rounded-full bg-white" alt="LBC" onError={(e) => { e.target.style.display = 'none' }} />
                                    <span className="hidden sm:inline">Leboncoin</span>
                                    <span className="sm:hidden">LBC</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('lc')}
                                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'lc' ? 'bg-primary text-white shadow-md' : 'text-slate hover:bg-gray-100'}`}
                                >
                                    <img src="https://www.lacentrale.fr/favicon.ico" className="w-4 h-4 rounded-full bg-white" alt="LC" onError={(e) => { e.target.style.display = 'none' }} />
                                    <span className="hidden sm:inline">La Centrale</span>
                                    <span className="sm:hidden">LC</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('as24')}
                                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'as24' ? 'bg-primary text-white shadow-md' : 'text-slate hover:bg-gray-100'}`}
                                >
                                    <img src="https://www.autoscout24.fr/favicon.ico" className="w-4 h-4 rounded-full bg-white" alt="AS24" onError={(e) => { e.target.style.display = 'none' }} />
                                    AutoScout24
                                </button>
                            </div>

                        </div>
                    </div>
                </motion.div>

                {/* Highlights below mockup */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12 md:mt-16">
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
