import { useEffect, useState, useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'

const stats = [
    { value: 1965,  suffix: '+', label: 'Véhicules\nanalysés',         icon: '🚗' },
    { value: 57,    suffix: '',  label: 'Marques\ncouvertes',           icon: '🏷️' },
    { value: 1885,  suffix: '+', label: 'Modèles\nen base',             icon: '📋' },
    { value: 21942, suffix: '+', label: 'Fiches specs\ndétaillées',     icon: '📊' },
    { value: '121', isString: true, suffix: 'ans', label: 'Années de\ncouverture auto', icon: '📅' },
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
                            <span className="text-2xl mb-4 opacity-80">{stat.icon}</span>

                            {/* Chiffre */}
                            <div className="text-4xl md:text-5xl xl:text-6xl font-black text-white tracking-tighter leading-none mb-3">
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

            </div>
        </section>
    )
}
