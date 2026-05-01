import { useTranslation } from 'react-i18next'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import OKCLogo from '../components/OKCLogo'
import { useLang } from '../context/lang'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const { lang, lp } = useLang()
  const navigate = useNavigate()
  const location = useLocation()

  const LANGS = [
    { code: 'fr', label: '🇫🇷 Français' },
    { code: 'en', label: '🇬🇧 English' },
    { code: 'de', label: '🇩🇪 Deutsch' },
    { code: 'es', label: '🇪🇸 Español' },
    { code: 'it', label: '🇮🇹 Italiano' },
  ]

  const switchLang = (newLang) => {
    const newPath = location.pathname.replace(/^\/(fr|en|es|it|de)/, `/${newLang}`)
    i18n.changeLanguage(newLang)
    navigate(newPath)
  }

  return (
    <footer className="okc-footer">
      <div className="okc-page">
        <div className="okc-footer-grid">
          <div>
            <OKCLogo size={22} />
            <p style={{ marginTop: 16, maxWidth: '32ch', color: 'var(--okc-text-secondary)', fontSize: 14, lineHeight: 1.6 }}>
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h4>{t('footer.product')}</h4>
            <ul>
              <li><a href="#showcase">{t('footer.link_extension')}</a></li>
              <li><a href="#filters">{t('footer.link_filters')}</a></li>
              <li><a href="#coverage">{t('footer.link_coverage')}</a></li>
              <li><a href="#install">{t('footer.link_install')}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t('footer.resources')}</h4>
            <ul>
              <li><Link to={lp('/blog')}>{t('footer.link_blog')}</Link></li>
              <li><a href="#how">{t('footer.link_method')}</a></li>
              <li><a href="#faq">{t('footer.link_faq')}</a></li>
              <li><a href="#">{t('footer.link_changelog')}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t('footer.legal')}</h4>
            <ul>
              <li><a href="#">{t('footer.link_privacy')}</a></li>
              <li><a href="#">{t('footer.link_legal')}</a></li>
              <li><a href="#">{t('footer.link_contact')}</a></li>
            </ul>
          </div>
        </div>
        <div className="okc-footer-bottom">
          <span>{t('footer.copyright')}</span>
          <span style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {LANGS.map(l => (
              <button key={l.code} onClick={() => switchLang(l.code)} style={{
                fontFamily: 'var(--okc-font-mono)', fontSize: 11,
                textTransform: 'uppercase', letterSpacing: 1,
                background: 'none', border: 'none',
                cursor: l.code === lang ? 'default' : 'pointer',
                color: l.code === lang ? 'var(--okc-text-primary)' : 'var(--okc-text-muted)',
                fontWeight: l.code === lang ? 600 : 400,
                padding: 0,
              }}>
                {l.label}
              </button>
            ))}
          </span>
          <span className="okc-mono">{t('footer.version')}</span>
        </div>
      </div>
    </footer>
  )
}
