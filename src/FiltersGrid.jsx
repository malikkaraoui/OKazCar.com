import { motion } from 'framer-motion'
import {
    FileText, CarFront, Gauge, LineChart, ShieldCheck,
    Phone, Users, Globe, Images
} from 'lucide-react'

const filterCards = [
    { id: 'L1', title: 'Données complètes', desc: 'Vérifie que toutes les infos essentielles sont renseignées.', icon: FileText },
    { id: 'L2', title: 'Modèle reconnu', desc: 'Identifie le véhicule dans notre référentiel de plus de 1800 modèles.', icon: CarFront },
    { id: 'L3', title: 'Cohérence km/année', desc: 'Détecte les kilométrages anormalement bas ou élevés.', icon: Gauge },
    { id: 'L4', title: 'Prix vs marché', desc: 'Compare le prix aux annonces similaires en temps réel.', icon: LineChart },
    { id: 'L5', title: 'Indice de confiance', desc: 'Score composite évaluant la crédibilité globale de l\'annonce.', icon: ShieldCheck },
    { id: 'L6', title: 'Analyse téléphone', desc: 'Identifie numéros étrangers, fixes, ou à risque.', icon: Phone },
    { id: 'L7', title: 'Profil vendeur', desc: 'Vérifie SIRET, ancienneté, avis pour les professionnels.', icon: Users },
    { id: 'L8', title: 'Détection import', desc: 'Repère les véhicules importés et signale les points d\'attention.', icon: Globe },
    { id: 'L9', title: 'Couverture annonce', desc: 'Analyse les photos, options et signaux de qualité de l\'annonce.', icon: Images },
]

export default function FiltersGrid() {
    return (
        <section className="py-24 md:py-32 bg-bg-dark border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-white/50 font-bold text-sm tracking-widest uppercase mb-4"
                    >
                        Analyse complète
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
                    >
                        9 filtres. Zéro angle mort.
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterCards.map((card, index) => {
                        return (
                            <motion.article
                                key={card.id}
                                className="group relative bg-bg-dark-mid rounded-2xl p-8 border border-white/5 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                            >
                                {/* Glow behind on hover */}
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-2xl" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-primary-light font-bold font-mono tracking-wider">{card.id}</span>
                                        <card.icon className="w-5 h-5 text-white/40 group-hover:text-primary-light transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed text-sm">
                                        {card.desc}
                                    </p>
                                </div>
                            </motion.article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
