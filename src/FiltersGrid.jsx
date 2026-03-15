/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import {
    FileText, CarFront, Gauge, LineChart, BarChart3,
    Phone, Building2, Globe, ClipboardCheck, Clock, AlertTriangle
} from 'lucide-react'

const filterCards = [
    {
        id: 'L1', title: 'Qualité d\'extraction', icon: FileText,
        desc: 'Vérifie la complétude des données extraites : prix, marque, modèle, année, km et 5 champs secondaires. Fail si 3 champs critiques ou plus sont manquants.',
    },
    {
        id: 'L2', title: 'Référentiel véhicule', icon: CarFront,
        desc: 'Vérifie que le make/model existe dans la base OKazCar (3 218 modèles, 546 000+ versions). Auto-création depuis CSV d\'enrichissement si véhicule inconnu.',
    },
    {
        id: 'L3', title: 'Cohérence données', icon: Gauge,
        desc: 'Croise année, km, prix et catégorie. Détecte les km suspects avec un ratio km/an adapté par type : citadine ~10k, SUV ~17k, sportive ~12k. Tolérance de 50 %.',
    },
    {
        id: 'L4', title: 'Prix vs marché', icon: LineChart,
        desc: 'Compare le prix à 4 sources en cascade : MarketPrice crowdsourcé, ArgusPrice, estimations LBC, La Centrale. ±10 % = pass, ±25 % = warning, au-delà = fail.',
    },
    {
        id: 'L5', title: 'Analyse statistique', icon: BarChart3,
        desc: 'Z-score sur les prix de référence. z > 3 = outlier, z > 2 = marginal. Applique un malus diesel urbain en zone dense (risque FAP bouché au-delà de 30 000 km).',
    },
    {
        id: 'L6', title: 'Téléphone vendeur', icon: Phone,
        desc: 'Validation multi-pays (FR, CH, DE…). Détecte les préfixes ARCEP de démarchage, les numéros virtuels OnOff, les indicatifs étrangers et l\'absence de téléphone chez un pro.',
    },
    {
        id: 'L7', title: 'SIRET / UID', icon: Building2,
        desc: 'Vérifie l\'immatriculation pro : SIRET via API SIRENE (FR), UID CHE avec checksum modulo-11 (CH). Fallback sur le rating vendeur (≥ 4.0/5, 20+ avis). Skip si particulier.',
    },
    {
        id: 'L8', title: 'Détection import', icon: Globe,
        desc: 'Accumule 7 signaux pondérés : préfixe étranger, mots-clés import, langue étrangère, signaux fiscaux, immatriculation WW/COC/RTI, prix anormalement bas, pro sans ID.',
    },
    {
        id: 'L9', title: 'Qualité de l\'annonce', icon: ClipboardCheck,
        desc: 'Évalue les signaux de confiance : longueur description (≥ 200 car. = fort), type vendeur, nombre de photos, options Urgent/Boost, visibilité téléphone et précision de la localisation.',
    },
    {
        id: 'L10', title: 'Ancienneté annonce', icon: Clock,
        desc: 'Seuils dynamiques par segment : populaire ~21j, milieu de gamme ~35j, premium ~50-75j. Utilise la médiane réelle du marché (fenêtre 90j, ≥ 5 échantillons). Malus republication.',
    },
    {
        id: 'L11', title: 'Rappel constructeur', icon: AlertTriangle,
        desc: 'Interroge la base des rappels constructeur par véhicule et plage d\'années. Fail immédiat (score 0.0) si rappel trouvé. Lien vers le site gouvernemental inclus.',
    },
]

export default function FiltersGrid() {
    return (
        <section id="filters" className="py-20 md:py-32 bg-bg-dark border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
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
                        11 filtres. Zéro angle mort.
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filterCards.map((card, index) => {
                        return (
                            <motion.article
                                key={card.id}
                                className="group relative bg-bg-dark-mid rounded-2xl p-5 sm:p-8 border border-white/5 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                            >
                                {/* Glow behind on hover */}
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-2xl" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <span className="text-primary-light font-bold font-mono tracking-wider">{card.id}</span>
                                        <card.icon className="w-5 h-5 text-white/40 group-hover:text-primary-light transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 sm:mb-3 group-hover:text-white transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed text-[0.95rem] sm:text-sm">
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
