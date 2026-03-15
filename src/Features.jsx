/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Snowflake, AlertTriangle, Mail, Copy, Check } from 'lucide-react'

const GeminiBadge = ({ className = '' }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
        <defs>
            <linearGradient id="geminiGradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#4285F4" />
                <stop offset="0.45" stopColor="#7C4DFF" />
                <stop offset="1" stopColor="#00C2FF" />
            </linearGradient>
        </defs>
        <path
            d="M12 3.5c.85 3.45 1.9 4.5 5.35 5.35-3.45.85-4.5 1.9-5.35 5.35-.85-3.45-1.9-4.5-5.35-5.35 3.45-.85 4.5-1.9 5.35-5.35Zm5.7 9.55c.45 1.8 1 2.35 2.8 2.8-1.8.45-2.35 1-2.8 2.8-.45-1.8-1-2.35-2.8-2.8 1.8-.45 2.35-1 2.8-2.8Z"
            fill="url(#geminiGradient)"
        />
    </svg>
)


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
        <div className="w-full h-full relative overflow-hidden rounded-2xl border border-sky-100 min-h-[260px] sm:min-h-[300px] md:min-h-[380px] p-6 md:p-8 bg-linear-to-br from-bg-dark via-bg-dark-mid to-sky-950">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '26px 26px' }} />
            <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-bg-dark/5 to-transparent pointer-events-none" />

            <div className="relative z-10 grid h-full items-end gap-5 md:grid-cols-[1.08fr_0.92fr] md:gap-6">
                <motion.div
                    className="relative min-h-65 md:min-h-95"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute left-2 top-2 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
                        <Snowflake className="h-3.5 w-3.5 text-accent" />
                        Hiver / Loi Montagne
                    </div>

                    <svg viewBox="0 0 520 360" className="h-full w-full overflow-visible">
                        <defs>
                            <linearGradient id="snowTrack" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
                                <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.96" />
                            </linearGradient>
                            <linearGradient id="tireSide" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#334155" />
                                <stop offset="55%" stopColor="#0f172a" />
                                <stop offset="100%" stopColor="#020617" />
                            </linearGradient>
                            <radialGradient id="rimCore" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#f8fafc" />
                                <stop offset="100%" stopColor="#94a3b8" />
                            </radialGradient>
                            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                                <feGaussianBlur stdDeviation="10" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <path
                            d="M30 282C120 258 192 248 268 255C342 262 400 288 486 322"
                            fill="none"
                            stroke="url(#snowTrack)"
                            strokeWidth="46"
                            strokeLinecap="round"
                            opacity="0.96"
                            filter="url(#softGlow)"
                        />
                        <path
                            d="M34 282C124 260 194 251 268 257C341 263 399 289 480 320"
                            fill="none"
                            stroke="#cbd5e1"
                            strokeWidth="18"
                            strokeLinecap="round"
                            strokeDasharray="8 11"
                            opacity="0.9"
                        />

                        <g transform="translate(184 74)">
                            <ellipse cx="110" cy="206" rx="112" ry="22" fill="#0f172a" opacity="0.18" />
                            <circle cx="110" cy="140" r="96" fill="url(#tireSide)" />
                            <circle cx="110" cy="140" r="70" fill="#111827" stroke="#475569" strokeWidth="14" />
                            <circle cx="110" cy="140" r="42" fill="url(#rimCore)" />
                            <circle cx="110" cy="140" r="10" fill="#64748b" />

                            {[0, 30, 60, 90, 120, 150].map((angle) => (
                                <rect
                                    key={angle}
                                    x="103"
                                    y="82"
                                    width="14"
                                    height="34"
                                    rx="7"
                                    fill="#e2e8f0"
                                    transform={`rotate(${angle} 110 140)`}
                                />
                            ))}

                            {[0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160].map((angle) => (
                                <rect
                                    key={angle}
                                    x="101"
                                    y="38"
                                    width="18"
                                    height="22"
                                    rx="6"
                                    fill="#64748b"
                                    opacity="0.65"
                                    transform={`rotate(${angle} 110 140)`}
                                />
                            ))}

                            <path d="M18 188c34-18 57-26 93-28" fill="none" stroke="#f8fafc" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
                            <path d="M198 166c26 7 44 16 69 31" fill="none" stroke="#f8fafc" strokeWidth="8" strokeLinecap="round" opacity="0.55" />
                        </g>
                    </svg>
                </motion.div>

                <motion.div
                    className="w-full max-w-75 md:max-w-97.5 justify-self-center md:justify-self-end rounded-xl border border-white/70 bg-white/96 p-5 md:p-6 text-slate shadow-[0_24px_60px_rgba(15,23,42,0.18)]"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                        <Snowflake className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold text-slate">Pneus hiver</span>
                        <span className="ml-auto text-[10px] bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">Loi Montagne</span>
                    </div>

                    <div className="space-y-3 mb-4">
                        {tires.map((tire, i) => (
                            <motion.div
                                key={tire}
                                className="flex items-center justify-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-[0_14px_36px_rgba(15,23,42,0.08)] border border-primary/5"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.12 * i }}
                            >
                                <div className="w-9 h-9 rounded-full bg-primary/8 flex items-center justify-center text-[11px] font-bold text-primary">
                                    R{16 + i}
                                </div>
                                <span className="font-mono font-semibold text-sm tracking-wide text-slate">{tire}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="rounded-xl bg-warning/10 border border-warning/20 px-4 py-4">
                        <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-warning/15 flex items-center justify-center shrink-0">
                                <Snowflake className="w-4.5 h-4.5 text-warning" />
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <p className="text-sm font-bold text-warning">Loi Montagne</p>
                                    <span className="text-[10px] font-bold uppercase bg-warning/15 text-warning px-2 py-0.5 rounded-full whitespace-nowrap">
                                        Alerte hiver
                                    </span>
                                </div>
                                <p className="mt-1 text-sm font-semibold text-warning">Pneus hiver obligatoires</p>
                                <p className="mt-1.5 text-xs leading-relaxed text-warning/85">
                                    Alerte affichée automatiquement si le véhicule entre dans la période et la zone concernées.
                                </p>
                            </div>
                        </div>
                    </div>
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
                <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
                    <GeminiBadge className="w-3.5 h-3.5" />
                    Gemini
                </span>
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
