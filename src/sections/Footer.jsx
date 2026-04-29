import { useTranslation } from 'react-i18next'
import OKCLogo from '../components/OKCLogo'

export default function Footer() {
  const { t } = useTranslation()

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
              <li><a href="#blog">{t('footer.link_blog')}</a></li>
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
          <span className="okc-mono">{t('footer.version')}</span>
        </div>
      </div>
    </footer>
  )
}
