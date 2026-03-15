/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/detail/okazcar-analyse-annonces/eakomgkenllkkmfccjjfoegealnchmmo'

const navItems = [
    { id: 'showcase', label: 'Démo' },
    { id: 'features', label: 'Fonctionnalités' },
    { id: 'process', label: 'Comment ça marche' },
    { id: 'filters', label: 'Les filtres' },
    { id: 'faq', label: 'FAQ' },
]

export function WheelIcon({ className = '' }) {
    return (
        <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none">
            <circle cx="72" cy="70" r="39" stroke="currentColor" strokeWidth="8" opacity="0.95" />
            <circle cx="72" cy="70" r="8" fill="currentColor" opacity="0.95" />
            <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.95">
                <line x1="72" y1="38" x2="72" y2="62" />
                <line x1="72" y1="38" x2="72" y2="62" transform="rotate(72 72 70)" />
                <line x1="72" y1="38" x2="72" y2="62" transform="rotate(144 72 70)" />
                <line x1="72" y1="38" x2="72" y2="62" transform="rotate(216 72 70)" />
                <line x1="72" y1="38" x2="72" y2="62" transform="rotate(288 72 70)" />
            </g>
            <circle cx="30" cy="30" r="15" stroke="#fbbf24" strokeWidth="6" />
            <path d="M30 20v20M20 30h20" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" />
        </svg>
    )
}

export function Logo({ dark = false, className = '', appIcon = false }) {
    return (
        <div className={`flex items-center gap-2 font-bold text-xl tracking-tight ${dark ? 'text-slate' : 'text-white'} ${className}`}>
            <span className={`flex items-center justify-center ${appIcon ? 'h-14 w-14 rounded-[18px] bg-white/12 border border-white/16 shadow-[0_12px_34px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md' : ''}`}>
                <WheelIcon className={`object-contain ${appIcon ? 'w-9 h-9' : 'w-8 h-8'}`} />
            </span>
            <span>
                OKaz<span className="text-accent">Car</span>
            </span>
        </div>
    )
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            setIsScrolled(currentScrollY > 16)

            if (currentScrollY > lastScrollY + 12 && currentScrollY > 120) {
                setIsHidden(true)
                setIsMenuOpen(false)
            } else if (currentScrollY < lastScrollY - 12) {
                setIsHidden(false)
            }

            lastScrollY = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}
                initial={{ y: 0 }}
                animate={{ y: isHidden ? '-100%' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-17 sm:h-20 flex items-center justify-between">
                    <a href="#hero" aria-label="Retour en haut" className="z-50 relative">
                        <Logo dark={isScrolled || isMenuOpen} />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-text-secondary hover:text-text-primary' : 'text-white/80 hover:text-white'}`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href={CHROME_WEB_STORE_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="gradient-cta text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-cta hover:shadow-cta-hover transition-all opacity-90 hover:opacity-100"
                        >
                            Installer gratuitement
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`md:hidden z-50 relative flex h-11 w-11 items-center justify-center rounded-2xl border transition-colors ${isMenuOpen || isScrolled ? 'border-slate-200 bg-white text-slate shadow-[0_10px_30px_rgba(15,23,42,0.08)]' : 'border-white/15 bg-white/10 text-white backdrop-blur-md'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-slate/45 backdrop-blur-sm md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 28 }}
                            transition={{ duration: 0.24, ease: 'easeOut' }}
                            className="fixed inset-x-0 bottom-0 z-40 rounded-t-[28px] bg-white px-5 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-5 shadow-[0_-10px_40px_rgba(15,23,42,0.16)] md:hidden"
                        >
                            <div className="mx-auto max-w-md">
                                <div className="mx-auto mb-5 h-1.5 w-14 rounded-full bg-slate-200" />

                                <nav className="flex flex-col gap-2 text-slate">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-4 text-base font-semibold"
                                        >
                                            <span>{item.label}</span>
                                            <span className="text-slate-300">→</span>
                                        </a>
                                    ))}
                                    <a
                                        href={CHROME_WEB_STORE_URL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-3 gradient-cta text-white px-6 py-4 rounded-2xl font-bold text-center shadow-cta"
                                    >
                                        Installer gratuitement
                                    </a>
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
