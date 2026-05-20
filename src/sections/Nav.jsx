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
  const [menuOpen, setMenuOpen] = useState(false)

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

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const LANGS = ['fr', 'en', 'es', 'it', 'de']

  const switchLang = (newLang) => {
    const newPath = location.pathname.replace(/^\/(fr|en|es|it|de)/, `/${newLang}`)
    i18n.changeLanguage(newLang)
    navigate(newPath)
  }

  const close = () => setMenuOpen(false)

  const LangButtons = ({ onSwitch }) => (
    <>
      {LANGS.map((l, i) => (
        <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {i > 0 && <span style={{ color: 'var(--okc-border)', fontSize: 10 }}>|</span>}
          <button onClick={() => { switchLang(l); onSwitch?.() }} style={{
            fontFamily: 'var(--okc-font-mono)', fontSize: 11,
            textTransform: 'uppercase', letterSpacing: 1,
            background: 'none', border: 'none', cursor: l === lang ? 'default' : 'pointer',
            color: l === lang ? 'var(--okc-text-primary)' : 'var(--okc-text-muted)',
            fontWeight: l === lang ? 600 : 400, padding: 0,
          }}>{l}</button>
        </span>
      ))}
    </>
  )

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
          <span style={{ display: 'flex', gap: 6, alignItems: 'center', marginLeft: 20, paddingLeft: 20, borderLeft: '1px solid var(--okc-border)' }}>
            <LangButtons />
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer" className="okc-btn okc-btn--primary okc-nav-cta">
            {t('nav.install')}
          </a>
          <button
            className={`okc-burger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="okc-mobile-menu">
          <a href="#showcase" onClick={close}>{t('nav.extension')}</a>
          <a href="#filters" onClick={close}>{t('nav.filters')}</a>
          <a href="#how" onClick={close}>{t('nav.method')}</a>
          <a href="#audience" onClick={close}>{t('nav.audience')}</a>
          <Link to={lp('/blog')} onClick={close}>{t('nav.blog')}</Link>
          <a href="#faq" onClick={close}>{t('nav.faq')}</a>
          <div className="okc-mobile-lang"><LangButtons onSwitch={close} /></div>
          <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer"
            className="okc-btn okc-btn--primary okc-mobile-cta" onClick={close}>
            {t('nav.install')}
          </a>
        </div>
      )}
    </nav>
  )
}
