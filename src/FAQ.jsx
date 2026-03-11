/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqItems = [
    {
        q: 'C’est vraiment gratuit ?',
        a: 'Oui, 100% gratuit. Pas de compte, pas d’abonnement, pas de données personnelles collectées.',
    },
    {
        q: 'Quels sites sont supportés ?',
        a: 'leboncoin.fr, lacentrale.fr et AutoScout24 (France, Allemagne, Belgique, Suisse, Italie, Pays-Bas, Autriche, Espagne, Pologne, Luxembourg, Suède + .com) — soit 3 plateformes et 14 domaines web couverts.',
    },
    {
        q: 'Comment fonctionne le score ?',
        a: '10 filtres analysent différents aspects de l’annonce : Complétude des données, Modèle reconnu, Cohérence km/an, Prix vs marché, Évaluation globale, Prix vs Argus, Analyse téléphone, SIRET vendeur, Détection import, Ancienneté annonce. Chaque filtre a un poids selon son importance. Le score final est une moyenne pondérée sur 100.',
    },
    {
        q: 'Mes données sont-elles collectées ?',
        a: 'Non. L’extension analyse l’annonce que vous consultez et c’est tout. Aucune donnée personnelle n’est stockée ni transmise. Consultez notre politique de confidentialité.',
    },
    {
        q: 'Ça marche sur Firefox / Safari / Edge ?',
        a: 'Pour l’instant, OKazCar est disponible uniquement sur Google Chrome (et les navigateurs compatibles Chromium comme Brave, Edge, Opera).',
    },
    {
        q: 'Comment le prix marché est-il calculé ?',
        a: 'OKazCar collecte les prix d’annonces similaires (même modèle, même année, kilométrage proche) sur leboncoin et AutoScout24, puis calcule la médiane pour une estimation fiable.',
    },
]

function AccordionItem({ item, isOpen, onClick }) {
    return (
        <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={onClick}
            >
                <span className="font-bold text-slate text-lg">{item.q}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex-shrink-0 ml-4 text-primary"
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-6 pb-5 text-text-secondary leading-relaxed border-t border-gray-50 pt-3">
                            {item.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section id="faq" className="py-24 md:py-32 bg-bg-light">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-extrabold text-slate leading-tight"
                    >
                        Questions fréquentes
                    </motion.h2>
                </div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <AccordionItem
                                item={item}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
