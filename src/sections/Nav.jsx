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
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer" className="okc-btn okc-btn--primary">
            {t('nav.install')}
          </a>
          <button
            onClick={() => i18n.changeLanguage(currentLang === 'fr' ? 'en' : 'fr')}
            style={{
              fontFamily: 'var(--okc-font-mono)',
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: 1,
              padding: '9px 14px',
              borderRadius: 2,
              border: '1px solid var(--okc-text-primary)',
              background: 'transparent',
              color: 'var(--okc-text-primary)',
              cursor: 'pointer',
              lineHeight: 1,
            }}>
            {currentLang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </div>
    </nav>
  )
}
