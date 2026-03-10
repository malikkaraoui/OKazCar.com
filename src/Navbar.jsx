import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/'

const navItems = [
    { id: 'features', label: 'Fonctionnalités' },
    { id: 'process', label: 'Comment ça marche' },
    { id: 'numbers', label: 'Chiffres' },
    { id: 'faq', label: 'FAQ' },
]

function WheelIcon({ className = '' }) {
    return (
        <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="64" cy="64" r="56" fill="none" stroke="currentColor" strokeWidth="12" />
            <circle cx="64" cy="64" r="12" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="8" strokeLinecap="round">
                <line x1="64" y1="22" x2="64" y2="52" />
                <line x1="64" y1="22" x2="64" y2="52" transform="rotate(72 64 64)" />
                <line x1="64" y1="22" x2="64" y2="52" transform="rotate(144 64 64)" />
                <line x1="64" y1="22" x2="64" y2="52" transform="rotate(216 64 64)" />
                <line x1="64" y1="22" x2="64" y2="52" transform="rotate(288 64 64)" />
            </g>
        </svg>
    )
}

export function Logo({ dark = false }) {
    return (
        <div className={`flex items-center gap-2 font-bold text-xl tracking-tight ${dark ? 'text-slate' : 'text-white'}`}>
            <WheelIcon className={`w-8 h-8 ${dark ? 'text-slate' : 'text-white'}`} />
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

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}
                initial={{ y: 0 }}
                animate={{ y: isHidden ? '-100%' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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
                        className="md:hidden z-50 relative p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-slate" />
                        ) : (
                            <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate' : 'text-white'}`} />
                        )}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-lg font-medium text-slate">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="border-b border-gray-100 pb-4"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href={CHROME_WEB_STORE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="gradient-cta text-white px-6 py-4 rounded-xl font-bold text-center mt-4 shadow-cta"
                            >
                                Installer gratuitement
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
