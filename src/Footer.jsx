import { Logo } from './Navbar'

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/'

export default function Footer() {
    return (
        <footer className="bg-bg-dark py-16 text-text-white-muted text-sm border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Brand & Copy */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <Logo dark={false} />
                    <p className="mt-2 text-center md:text-left">
                        Fait avec ❤️ pour les acheteurs auto exigeants.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-medium">
                    <a href="#faq" className="hover:text-white transition-colors">Politique de confidentialité</a>
                    <a
                        href={CHROME_WEB_STORE_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        Chrome Web Store
                    </a>
                    <a href="mailto:contact@okazcar.com" className="hover:text-white transition-colors">Contact</a>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right text-xs opacity-60">
                    © {new Date().getFullYear()} OKazCar. Tous droits réservés.
                </div>

            </div>
        </footer>
    )
}
