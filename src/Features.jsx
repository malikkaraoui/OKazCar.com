/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Snowflake, AlertTriangle, Mail, Copy, Check } from 'lucide-react'


const features = [
    {
        id: 'score',
        title: 'Un score de fiabilité clair et objectif',
        description: "11 filtres passent l'annonce au crible : cohérence km/année, prix vs marché, numéro de téléphone, vendeur pro, véhicule importé, rappels constructeur, historique de publication… Chaque signal est pondéré pour un score final sur 100.",
        type: 'score'
    },
    {
        id: 'price',
        title: 'Comparez le prix au marché en temps réel',
        description: "OKazCar croise 4 sources de prix — annonces similaires, cote Argus, Leboncoin et La Centrale — sur 12 pays européens. Vous voyez instantanément si le prix est dans la norme, une bonne affaire, ou suspect.",
        type: 'price'
    },
    {
        id: 'alerts',
        title: 'Les signaux que vous ne voyez pas',
        description: "Numéro étranger ou virtuel ? Véhicule importé sans le dire ? Annonce republiée pour paraître récente ? SIRET invalide chez un pro ? OKazCar cumule 7 signaux d'alerte et vous prévient avant de contacter le vendeur.",
        type: 'alerts'
    },
    {
        id: 'tires',
        title: 'Les dimensions de pneus, sans chercher',
        description: "OKazCar affiche automatiquement les dimensions de pneus compatibles avec le véhicule. Loi Montagne incluse : si le véhicule est dans l'un des 34 départements concernés, vous êtes alerté sur l'obligation de pneus hiver (novembre à mars).",
        type: 'tires'
    },
    {
        id: 'recalls',
        title: 'Rappels constructeur : on vérifie pour vous',
        description: "Airbags Takata, freins, direction… OKazCar vérifie automatiquement si le véhicule est concerné par un rappel constructeur. Si c'est le cas, le score tombe à zéro et un lien officiel du gouvernement est fourni pour agir.",
        type: 'recalls'
    },
    {
        id: 'email',
        title: 'Un email au vendeur en 1 clic',
        description: "OKazCar rédige un email personnalisé basé sur l'analyse complète de l'annonce. Les bonnes questions sont posées, le ton est professionnel, sans jargon. Vous copiez, vous envoyez — le vendeur reçoit un message crédible, pas un template générique.",
        type: 'email'
    },
]

// Specialized Visual Components for each feature

const ScoreVisual = () => (
    <div className="w-full h-full relative flex items-center justify-center bg-bg-light rounded-2xl border border-gray-100 min-h-[260px] sm:min-h-[300px] md:min-h-[380px] overflow-hidden shadow-floating">
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
    <div className="w-full h-full relative p-4 md:p-6 flex items-center justify-center bg-slate text-white overflow-hidden rounded-2xl min-h-[260px] sm:min-h-[300px] md:min-h-[380px]">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

        <motion.img
            src="/img-prix-analyse.png"
            alt="Analyse du prix"
            className="w-[120%] h-auto max-w-none md:w-[115%] md:max-w-[560px] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 rotate-[-2deg]"
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring" }}
        />
    </div>
)

const AlertsVisual = () => {
    return (
        <div className="w-full h-full relative p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center bg-orange-50 overflow-hidden rounded-2xl border border-orange-100 min-h-[280px] sm:min-h-[300px] md:min-h-[390px]">
            <motion.img
                src="/img-alertes.png"
                alt="Alertes intelligentes"
                className="w-full h-auto max-w-[260px] sm:max-w-[280px] md:max-w-[360px] rounded-xl shadow-popup relative z-10 translate-x-2 sm:translate-x-4 md:translate-x-10 translate-y-2 sm:translate-y-4 md:translate-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
            />
            <motion.img
                src="/img-alerte-detail.png"
                alt="Détail alerte"
                className="w-full h-auto max-w-[240px] sm:max-w-[280px] md:max-w-[330px] rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative md:absolute z-20 mt-4 md:mt-0 md:left-8 md:bottom-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 }}
            />
        </div>
    )
}


const TiresVisual = () => {
    const tires = ['205/55 R16', '225/45 R17', '225/40 R18']
    return (
        <div className="w-full h-full relative flex flex-col items-center justify-center bg-slate text-white overflow-hidden rounded-2xl min-h-[260px] sm:min-h-[300px] md:min-h-[380px] p-6 md:p-8">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
            <div className="relative z-10 w-full max-w-[280px] md:max-w-[420px] space-y-3 md:space-y-4">
                {tires.map((tire, i) => (
                    <motion.div
                        key={tire}
                        className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3.5 border border-white/10"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 * i }}
                    >
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/60">
                            R{16 + i}
                        </div>
                        <span className="font-mono font-semibold text-sm md:text-base tracking-wide">{tire}</span>
                        {i === 0 && <span className="ml-auto text-[10px] font-bold uppercase bg-primary/30 text-primary-light px-2 py-0.5 rounded-full">Origine</span>}
                    </motion.div>
                ))}
                <motion.div
                    className="flex items-center gap-2 mt-5 bg-accent/15 rounded-xl px-4 py-3 border border-accent/20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Snowflake className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold text-accent/90">Loi Montagne — pneus hiver obligatoires</span>
                </motion.div>
            </div>
        </div>
    )
}

const RecallsVisual = () => (
    <div className="w-full h-full relative flex items-center justify-center bg-red-50 overflow-hidden rounded-2xl border border-red-100 min-h-[260px] sm:min-h-[300px] md:min-h-[380px] p-6 md:p-8">
        <motion.div
            className="relative z-10 w-full max-w-[300px] md:max-w-[390px] bg-white rounded-xl shadow-popup p-5 md:p-6 border border-red-200"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                    <p className="font-bold text-slate text-sm">Rappel constructeur</p>
                    <p className="text-xs text-red-600 font-semibold mt-0.5">Airbag Takata</p>
                </div>
                <span className="ml-auto text-[10px] font-bold uppercase bg-red-100 text-red-700 px-2 py-0.5 rounded-full whitespace-nowrap">Score 0/100</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed mb-3">
                Ce véhicule est concerné par le rappel Takata (airbags défectueux). Demandez impérativement au vendeur si le remplacement a été effectué.
            </p>
            <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                <span className="underline underline-offset-2">Voir sur ecologie.gouv.fr</span>
                <span className="text-primary/40">→</span>
            </div>
        </motion.div>
    </div>
)

const EmailVisual = () => (
    <div className="w-full h-full relative flex items-center justify-center bg-bg-light overflow-hidden rounded-2xl border border-gray-100 min-h-[260px] sm:min-h-[300px] md:min-h-[380px] p-6 md:p-8">
        <motion.div
            className="relative z-10 w-full max-w-[300px] md:max-w-[390px] bg-white rounded-xl shadow-popup p-5 md:p-6 border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-slate">Email au vendeur</span>
                <span className="ml-auto text-[10px] bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">Généré par IA</span>
            </div>
            <div className="space-y-2 mb-4">
                <div className="h-2 bg-gray-100 rounded-full w-full" />
                <div className="h-2 bg-gray-100 rounded-full w-11/12" />
                <div className="h-2 bg-gray-100 rounded-full w-full" />
                <div className="h-2 bg-primary/10 rounded-full w-9/12" />
                <div className="h-2 bg-gray-100 rounded-full w-full" />
                <div className="h-2 bg-gray-100 rounded-full w-7/12" />
            </div>
            <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <button className="flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg">
                    <Copy className="w-3 h-3" /> Copier
                </button>
                <span className="flex items-center gap-1 text-[11px] text-green-600 font-semibold">
                    <Check className="w-3.5 h-3.5" /> Prêt à envoyer
                </span>
            </motion.div>
        </motion.div>
    </div>
)

export default function Features() {
    return (
        <section id="features" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="max-w-3xl mb-14 md:mb-32">
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
                        6 outils qui évitent<br className="hidden md:block" /> les mauvaises surprises.
                    </motion.h2>
                </div>

                <div className="space-y-8 md:space-y-48">
                    {features.map((feature, index) => {
                        const isReversed = index % 2 === 1
                        return (
                            <div key={feature.id} className={`rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] flex flex-col md:flex-row items-center gap-8 md:gap-24 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none ${isReversed ? 'md:flex-row-reverse' : ''}`}>

                                {/* Text Content */}
                                <motion.div
                                    className="flex-1"
                                    initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    <h3 className="text-[1.6rem] md:text-[28px] font-bold text-slate mb-4 md:mb-6 leading-snug">
                                        {feature.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>

                                {/* Visual Content */}
                                <div className="flex-1 w-full max-w-[620px] md:max-w-none">
                                    {feature.type === 'score' && <ScoreVisual />}
                                    {feature.type === 'price' && <PriceVisual />}
                                    {feature.type === 'alerts' && <AlertsVisual />}
                                    {feature.type === 'tires' && <TiresVisual />}
                                    {feature.type === 'recalls' && <RecallsVisual />}
                                    {feature.type === 'email' && <EmailVisual />}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
