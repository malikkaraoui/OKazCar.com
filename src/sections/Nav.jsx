import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import OKCLogo from '../components/OKCLogo'
import { useLang } from '../context/lang'
import { CHROME_WEB_STORE_URL } from '../data/index'

export default function Nav() {
  const { t, i18n } = useTranslation()
  const { lang, lp } = useLang()
  const navigate = useNavigate()
  const location = useLocation()
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

  const switchLang = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr'
    const newPath = location.pathname.replace(/^\/(fr|en)/, `/${newLang}`)
    i18n.changeLanguage(newLang)
    navigate(newPath)
  }

  return (
    <nav className={`okc-nav${hidden ? ' hidden' : ''}`}>
      <div className="okc-nav-inner">
        <Link to={lp('/')}><OKCLogo size={22} /></Link>
        <div className="okc-nav-links">
          <a href="#showcase">{t('nav.extension')}</a>
          <a href="#filters">{t('nav.filters')}</a>
          <a href="#how">{t('nav.method')}</a>
          <a href="#audience">{t('nav.audience')}</a>
          <Link to={lp('/blog')}>{t('nav.blog')}</Link>
          <a href="#faq">{t('nav.faq')}</a>
          <button onClick={switchLang} style={{
            fontFamily: 'var(--okc-font-mono)', fontSize: 11,
            textTransform: 'uppercase', letterSpacing: 1,
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--okc-text-muted)', padding: 0,
          }}>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
        <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer" className="okc-btn okc-btn--primary">
          {t('nav.install')}
        </a>
      </div>
    </nav>
  )
}
