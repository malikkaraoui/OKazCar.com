import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import OKCLogo from '../components/OKCLogo'
import { CHROME_WEB_STORE_URL } from '../data/index'

export default function Nav() {
  const { t, i18n } = useTranslation()
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

  const currentLang = i18n.resolvedLanguage || i18n.language || 'fr'

  return (
    <nav className={`okc-nav${hidden ? ' hidden' : ''}`}>
      <div className="okc-nav-inner">
        <OKCLogo size={22} />
        <div className="okc-nav-links">
          <a href="#showcase">{t('nav.extension')}</a>
          <a href="#filters">{t('nav.filters')}</a>
          <a href="#how">{t('nav.method')}</a>
          <a href="#audience">{t('nav.audience')}</a>
          <a href="#blog">{t('nav.blog')}</a>
          <a href="#faq">{t('nav.faq')}</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 0,
            fontFamily: 'var(--okc-font-mono)', fontSize: 11,
            letterSpacing: 1, textTransform: 'uppercase',
            border: '1px solid var(--okc-border)', borderRadius: 3,
            overflow: 'hidden',
          }}>
            <button
              onClick={() => i18n.changeLanguage('fr')}
              style={{
                padding: '5px 9px',
                background: currentLang === 'fr' ? 'var(--okc-text-primary)' : 'transparent',
                color: currentLang === 'fr' ? 'var(--okc-bg-white)' : 'var(--okc-text-muted)',
                cursor: 'pointer',
                transition: 'background 0.15s ease, color 0.15s ease',
                borderRight: '1px solid var(--okc-border)',
              }}>
              FR
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              style={{
                padding: '5px 9px',
                background: currentLang === 'en' ? 'var(--okc-text-primary)' : 'transparent',
                color: currentLang === 'en' ? 'var(--okc-bg-white)' : 'var(--okc-text-muted)',
                cursor: 'pointer',
                transition: 'background 0.15s ease, color 0.15s ease',
              }}>
              EN
            </button>
          </div>
          <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer" className="okc-btn okc-btn--primary">
            {t('nav.install')}
          </a>
        </div>
      </div>
    </nav>
  )
}
