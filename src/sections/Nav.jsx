import { useState, useEffect } from 'react'
import OKCLogo from '../components/OKCLogo'
import { CHROME_WEB_STORE_URL } from '../data/index'

export default function Nav() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = 0
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > 120 && y > last)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`okc-nav${hidden ? ' hidden' : ''}`}>
      <div className="okc-nav-inner">
        <OKCLogo size={22} />
        <div className="okc-nav-links">
          <a href="#showcase">Extension</a>
          <a href="#filters">Filtres</a>
          <a href="#how">Méthode</a>
          <a href="#audience">Pour qui</a>
          <a href="#blog">Conseils</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer" className="okc-btn okc-btn--primary">
          Installer — Gratuit
        </a>
      </div>
    </nav>
  )
}
