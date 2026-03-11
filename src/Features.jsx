/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'


const features = [
    {
        id: 'score',
        title: 'Un score de fiabilité clair et objectif',
        description: '9 filtres analysent l’annonce : cohérence km/année, prix vs marché, numéro de téléphone, vendeur pro, véhicule importé, historique de publication… Chaque signal est pondéré pour un score final sur 100.',
        type: 'score'
    },
    {
        id: 'price',
        title: 'Comparez le prix au marché en temps réel',
        description: 'OKazCar collecte les prix d’annonces similaires sur leboncoin et AutoScout24 (12 pays européens). Vous voyez instantanément si le prix est dans la norme, une bonne affaire, ou suspect.',
        type: 'price'
    },
    {
        id: 'alerts',
        title: 'Les signaux que vous ne voyez pas',
        description: 'Numéro étranger ? Véhicule importé ? Annonce republiée pour paraître récente ? Kilométrage incohérent ? OKazCar détecte les anomalies invisibles et vous alerte avant de contacter le vendeur.',
        type: 'alerts'
    }
]

// Specialized Visual Components for each feature

const ScoreVisual = () => (
    <div className="w-full h-full relative flex items-center justify-center bg-bg-light rounded-2xl border border-gray-100 min-h-[300px] overflow-hidden shadow-floating">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50 rounded-2xl"></div>
        <motion.img
            src="/img-score.png"
            alt="Indice de confiance"
            className="w-full h-full object-cover object-center absolute inset-0 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
        />
    </div>
)

const PriceVisual = () => (
    <div className="w-full h-full relative p-4 flex items-center justify-center bg-slate text-white overflow-hidden rounded-2xl min-h-[300px]">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

        <motion.img
            src="/img-prix-analyse.png"
            alt="Analyse du prix"
            className="w-[120%] h-auto max-w-none md:w-full md:max-w-[400px] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 rotate-[-2deg]"
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring" }}
        />
    </div>
)

const AlertsVisual = () => {
    return (
        <div className="w-full h-full relative p-6 flex flex-col items-center justify-center bg-orange-50 overflow-hidden rounded-2xl border border-orange-100 min-h-[300px]">
            <motion.img
                src="/img-alertes.png"
                alt="Alertes intelligentes"
                className="w-full h-auto max-w-[280px] rounded-xl shadow-popup relative z-10 translate-x-4 translate-y-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
            />
            <motion.img
                src="/img-alerte-detail.png"
                alt="Détail alerte"
                className="w-full h-auto max-w-[280px] rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] absolute z-20 left-4 md:left-10 bottom-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 }}
            />
        </div>
    )
}


export default function Features() {
    return (
        <section id="features" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-3xl mb-20 md:mb-32">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold text-sm tracking-widest uppercase mb-4"
                    >
                        Fonctionnalités
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-slate leading-tight"
                    >
                        3 blocs qui évitent<br className="hidden md:block" /> les mauvaises surprises.
                    </motion.h2>
                </div>

                <div className="space-y-32 md:space-y-48">
                    {features.map((feature, index) => {
                        const isReversed = index % 2 === 1
                        return (
                            <div key={feature.id} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isReversed ? 'md:flex-row-reverse' : ''}`}>

                                {/* Text Content */}
                                <motion.div
                                    className="flex-1"
                                    initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    <h3 className="text-2xl md:text-[28px] font-bold text-slate mb-6 leading-snug">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-text-secondary leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>

                                {/* Visual Content */}
                                <div className="flex-1 w-full max-w-[500px]">
                                    {feature.type === 'score' && <ScoreVisual />}
                                    {feature.type === 'price' && <PriceVisual />}
                                    {feature.type === 'alerts' && <AlertsVisual />}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
