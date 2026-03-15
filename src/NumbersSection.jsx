import { useEffect, useState, useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'

/* — Icônes SVG inline — monoline, premium, cohérentes — */
const icons = {
    marques: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20" opacity=".35" />
            <circle cx="12" cy="12" r="4" className="stroke-accent" />
        </svg>
    ),
    generations: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 17h14M3 13l2.5 4h13l2.5-4" />
            <circle cx="7.5" cy="17" r="1.5" className="stroke-accent" />
            <circle cx="16.5" cy="17" r="1.5" className="stroke-accent" />
            <path d="M6 13l1.5-4h9L18 13" opacity=".5" />
            <path d="M9.5 9l1-3h3l1 3" opacity=".35" />
        </svg>
    ),
    modeles: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" className="stroke-accent" />
        </svg>
    ),
    versions: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <path d="M7 16l4-5 4 3 5-7" className="stroke-accent" />
            <circle cx="7" cy="16" r="1" fill="currentColor" opacity=".5" />
            <circle cx="11" cy="11" r="1" fill="currentColor" opacity=".5" />
            <circle cx="15" cy="14" r="1" fill="currentColor" opacity=".5" />
            <circle cx="20" cy="7" r="1" fill="currentColor" opacity=".5" />
        </svg>
    ),
    couverture: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" className="stroke-accent" />
        </svg>
    ),
}

const stats = [
    { value: 178,    suffix: '',  label: 'Marques\ncouvertes',           icon: icons.marques },
    { value: 1389,   suffix: '',  label: 'Générations\nen base',         icon: icons.generations },
    { value: 3218,   suffix: '',  label: 'Modèles\nen base',             icon: icons.modeles },
    { value: 546000, suffix: '+', label: 'Versions\nréférencées',       icon: icons.versions },
    { value: '2000 – 2026', isString: true, suffix: '', label: 'Couverture\nmaintenue à jour', icon: icons.couverture },
]

function AnimatedCounter({ value, isString, suffix = "", duration = 2 }) {
    const [count, setCount] = useState(0)
    const nodeRef = useRef(null)
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" })

    useEffect(() => {
        if (!isInView || isString) return

        let startTimestamp = null
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
            const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setCount(Math.floor(easing * value))
            if (progress < 1) window.requestAnimationFrame(step)
            else setCount(value)
        }

        window.requestAnimationFrame(step)
    }, [isInView, value, duration, isString])

    return (
        <span ref={nodeRef} className="tabular-nums">
            {isString ? value : count.toLocaleString('fr-FR')}
            {suffix && <span className="text-accent ml-1">{suffix}</span>}
        </span>
    )
}

export default function NumbersSection() {
    return (
        <section id="numbers" className="relative bg-[#0b1628] py-16 md:py-20 overflow-hidden">

            {/* Glow de fond */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-75 bg-primary/20 rounded-full blur-[100px] opacity-40" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

                {/* Titre section */}
                <Motion.div
                    className="text-center mb-10 md:mb-14"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent/80 mb-3">
                        Base de données
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                        Des chiffres qui prouvent la profondeur de l'analyse
                    </h2>
                </Motion.div>

                {/* Grid chiffres */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8">
                    {stats.map((stat, index) => (
                        <Motion.div
                            key={index}
                            className="flex flex-col items-center text-center px-5 py-8 md:py-10 bg-[#0b1628] hover:bg-white/3 transition-colors duration-300 last:col-span-2 md:last:col-span-1 xl:last:col-span-1"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: index * 0.09, duration: 0.5, ease: 'easeOut' }}
                        >
                            {/* Icône */}
                            <div className="mb-4 text-white/50">{stat.icon}</div>

                            {/* Chiffre */}
                            <div className={`${stat.isString ? 'text-2xl md:text-3xl xl:text-4xl' : 'text-4xl md:text-5xl xl:text-6xl'} font-black text-white tracking-tighter leading-none mb-3`}>
                                <AnimatedCounter
                                    value={stat.value}
                                    isString={stat.isString}
                                    suffix={stat.suffix}
                                />
                            </div>

                            {/* Label */}
                            <p className="text-xs md:text-sm font-medium text-white/40 leading-snug whitespace-pre-line">
                                {stat.label}
                            </p>
                        </Motion.div>
                    ))}
                </div>

                {/* — Couverture plateformes — */}
                <Motion.div
                    className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {/* AutoScout24 */}
                    <div className="rounded-xl border border-white/8 bg-white/[0.02] px-6 py-5">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="https://www.autoscout24.fr/favicon.ico"
                                alt="AutoScout24"
                                className="w-5 h-5 rounded bg-white"
                                onError={(e) => { e.target.style.display = 'none' }}
                            />
                            <span className="text-sm font-bold text-white/90">AutoScout24</span>
                            <span className="ml-auto text-xs font-semibold text-accent/80 bg-accent/10 px-2.5 py-0.5 rounded-full">12 pays</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {[
                                { tld: '.ch', country: 'Suisse' },
                                { tld: '.de', country: 'Allemagne' },
                                { tld: '.fr', country: 'France' },
                                { tld: '.it', country: 'Italie' },
                                { tld: '.be', country: 'Belgique' },
                                { tld: '.nl', country: 'Pays-Bas' },
                                { tld: '.at', country: 'Autriche' },
                                { tld: '.es', country: 'Espagne' },
                                { tld: '.pl', country: 'Pologne' },
                                { tld: '.lu', country: 'Luxembourg' },
                                { tld: '.se', country: 'Suède' },
                                { tld: '.com', country: 'International' },
                            ].map(({ tld, country }) => (
                                <span
                                    key={tld}
                                    title={country}
                                    className="px-2 py-1 text-[11px] font-mono font-semibold text-white/50 bg-white/5 rounded-md hover:bg-white/10 hover:text-white/80 transition-colors cursor-default"
                                >
                                    {tld}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* ParuVendu — Bientôt */}
                    <div className="rounded-xl border border-white/8 bg-white/[0.02] px-6 py-5 relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="https://www.paruvendu.fr/favicon.ico"
                                alt="ParuVendu"
                                className="w-5 h-5 rounded bg-white"
                                onError={(e) => { e.target.style.display = 'none' }}
                            />
                            <span className="text-sm font-bold text-white/90">ParuVendu</span>
                            <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/15 px-2.5 py-0.5 rounded-full">Bientôt</span>
                        </div>
                        <p className="text-sm text-white/40 leading-relaxed">
                            <span className="text-white/70 font-semibold tabular-nums">{(114645).toLocaleString('fr-FR')}</span> annonces automobiles à intégrer prochainement.
                        </p>
                        {/* Ligne de progression subtile */}
                        <div className="mt-4 h-px bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full w-1/3 bg-gradient-to-r from-primary/60 to-primary/20 rounded-full" />
                        </div>
                    </div>
                </Motion.div>

            </div>
        </section>
    )
}
