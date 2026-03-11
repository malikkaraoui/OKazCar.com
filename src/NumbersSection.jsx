import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
    { value: 1965, suffix: '', label: 'Véhicules analysés' },
    { value: 57, suffix: '', label: 'Marques uniques' },
    { value: 1885, suffix: '', label: 'Modèles uniques' },
    { value: 21942, suffix: '', label: 'Fiches specs détaillées' },
    { value: '1904 → 2025', isString: true, label: 'Couverture années' },
]

function AnimatedCounter({ value, isString, prefix = "", suffix = "", duration = 1.5 }) {
    const [count, setCount] = useState(0)
    const nodeRef = useRef(null)
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" })

    useEffect(() => {
        if (!isInView || isString) return

        let startTimestamp = null
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)

            // easeOutExpo
            const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

            setCount(Math.floor(easing * value))

            if (progress < 1) {
                window.requestAnimationFrame(step)
            } else {
                setCount(value)
            }
        }

        window.requestAnimationFrame(step)
    }, [isInView, value, duration, isString])

    if (isString) {
        return (
            <span ref={nodeRef} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate tracking-tighter">
                {value}
            </span>
        )
    }

    return (
        <span ref={nodeRef} className="text-4xl md:text-5xl lg:text-7xl font-black text-slate tabular-nums tracking-tighter">
            {prefix}{count}{suffix}
        </span>
    )
}

export default function NumbersSection() {
    return (
        <section id="numbers" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-primary font-bold text-sm tracking-widest uppercase mb-4"
                    >
                        En Chiffres
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-slate leading-tight"
                    >
                        Conçu pour les acheteurs exigeants.
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 divide-x divide-gray-100">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center px-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        >
                            <AnimatedCounter
                                value={stat.value}
                                isString={stat.isString}
                                prefix={stat.prefix}
                                suffix={stat.suffix}
                            />
                            <span className="mt-4 text-sm md:text-base font-medium text-text-secondary max-w-[150px]">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
