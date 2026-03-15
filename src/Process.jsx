/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Puzzle, Link as LinkIcon, Sparkles, CheckCircle2, ShieldCheck, Gauge } from 'lucide-react'
const processSteps = [
    {
        id: 'step-install',
        icon: Puzzle,
        title: 'Installez OKazCar',
        description: 'Ajoutez l’extension depuis le Chrome Web Store, puis épinglez-la pour l’avoir toujours sous la main.',
        detail: '10 secondes, sans compte, sans inscription.',
    },
    {
        id: 'step-open',
        icon: LinkIcon,
        title: 'Ouvrez une annonce',
        description: 'Naviguez sur Leboncoin, La Centrale ou AutoScout24 comme d’habitude. OKazCar détecte la page automatiquement.',
        detail: 'Aucune manipulation supplémentaire à faire.',
    },
    {
        id: 'step-read',
        icon: Sparkles,
        title: 'Lisez le verdict',
        description: 'Le score, le prix marché et les alertes importantes apparaissent immédiatement dans le panneau OKazCar.',
        detail: 'Vous savez en quelques secondes si l’annonce mérite votre temps.',
    },
]

const processHighlights = [
    { icon: CheckCircle2, label: 'Installation rapide', value: '10 sec' },
    { icon: ShieldCheck, label: 'Signaux décisifs', value: '11 filtres' },
    { icon: Gauge, label: 'Verdict clair', value: 'Score + alertes' },
]

export default function Process() {
    return (
        <section id="process" className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="text-primary font-bold text-sm tracking-widest uppercase mb-4"
                    >
                        Comment ça marche
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-slate leading-tight"
                    >
                        Installer. Ouvrir. Vérifier.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ delay: 0.2 }}
                        className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl"
                    >
                        Sur mobile comme sur desktop, l’idée doit être limpide : vous installez l’extension,
                        vous ouvrez une annonce, vous obtenez un verdict utile. Pas d’effet gadget, pas de parcours flou.
                    </motion.p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,460px)] lg:gap-10 items-start">
                    <div className="space-y-4 md:space-y-5">
                        {processSteps.map((step, index) => (
                            <motion.article
                                key={step.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className="rounded-3xl border border-slate-200 bg-bg-light p-6 md:p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                            >
                                <div className="flex items-start gap-4 md:gap-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-cta">
                                        <step.icon className="h-5 w-5" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-slate text-white px-2 text-sm font-black">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold text-slate leading-snug">
                                                {step.title}
                                            </h3>
                                        </div>

                                        <p className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed">
                                            {step.description}
                                        </p>

                                        <p className="mt-3 text-sm md:text-base font-semibold text-primary">
                                            {step.detail}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <motion.aside
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="self-start"
                    >
                        <div className="overflow-hidden rounded-[28px] bg-[#0f1d4a] p-5 md:p-6 text-white shadow-popup border border-slate-900/10">
                            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 md:p-5 backdrop-blur-sm">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                                    En pratique
                                </span>
                                <h3 className="mt-3 text-2xl md:text-3xl font-extrabold leading-tight">
                                    Une lecture simple de l’annonce.
                                </h3>
                                <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed">
                                    Pas d’effet gadget, pas de parcours tordu : juste les bons signaux au bon moment.
                                </p>
                            </div>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                {processHighlights.map((item, index) => (
                                    <div
                                        key={item.label}
                                        className={`rounded-2xl border p-4 md:p-5 ${index === 1 ? 'bg-primary/25 border-primary/35' : 'bg-white/10 border-white/15'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                                                <item.icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-white/80">{item.label}</p>
                                                <p className="text-base md:text-lg font-bold text-white">{item.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 rounded-2xl bg-white p-5 md:p-6 text-slate shadow-[0_20px_50px_rgba(2,6,23,0.25)]">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4 gap-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Verdict OKazCar</p>
                                        <p className="mt-1 text-lg font-extrabold">Annonce lisible en un coup d’œil</p>
                                    </div>
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-pass/30 bg-pass/5 text-2xl font-black text-slate">
                                        86
                                    </div>
                                </div>

                                <div className="mt-4 space-y-3 text-sm">
                                    <div className="flex items-center justify-between rounded-xl bg-bg-light px-4 py-3 gap-4">
                                        <span className="font-medium text-text-secondary">Prix marché</span>
                                        <span className="font-bold text-pass">Bien placé</span>
                                    </div>
                                    <div className="flex items-center justify-between rounded-xl bg-bg-light px-4 py-3 gap-4">
                                        <span className="font-medium text-text-secondary">Téléphone</span>
                                        <span className="font-bold text-slate">Vérifié FR</span>
                                    </div>
                                    <div className="flex items-center justify-between rounded-xl bg-warning/10 px-4 py-3 gap-4">
                                        <span className="font-medium text-warning">Point d’attention</span>
                                        <span className="font-bold text-warning">Import détecté</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    )
}
