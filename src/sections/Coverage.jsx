import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PLATFORMS } from '../data/index'

const ease = [0.22, 1, 0.36, 1]

export default function Coverage() {
  const { t } = useTranslation()

  return (
    <section id="coverage" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <Motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              {t('coverage.eyebrow')}
            </Motion.div>
            <Motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('coverage.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </Motion.h2>
          </div>
          <Motion.p className="okc-lead"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: 0.15, ease }}>
            {t('coverage.lead')}
          </Motion.p>
        </div>

        <div className="okc-desktop-only">
          <div className="okc-table-scroll">
            <Motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}
              style={{ border: '1px solid var(--okc-border)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{
                display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 1fr',
                padding: '14px 24px',
                background: 'var(--okc-text-primary)', color: 'var(--okc-bg-white)',
                fontFamily: 'var(--okc-font-mono)', fontSize: 11,
                textTransform: 'uppercase', letterSpacing: 1,
              }}>
                <span>{t('coverage.col_platform')}</span>
                <span>{t('coverage.col_domain')}</span>
                <span>{t('coverage.col_country')}</span>
                <span style={{ textAlign: 'right' }}>{t('coverage.col_status')}</span>
              </div>
              {PLATFORMS.map((p, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 1fr',
                  padding: '13px 24px',
                  borderBottom: i < PLATFORMS.length - 1 ? '1px solid var(--okc-border)' : 'none',
                  alignItems: 'center', fontSize: 14,
                  background: 'var(--okc-bg-white)',
                }}>
                  <span style={{ fontWeight: 500 }}>{p.name}</span>
                  <span className="okc-mono" style={{ color: 'var(--okc-text-secondary)', fontSize: 13 }}>{p.domain}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 17 }}>{p.flag}</span>
                    {p.country}
                  </span>
                  <span style={{ textAlign: 'right' }}>
                    <span className="okc-pill okc-pill--pass">{t('coverage.status_active')}</span>
                  </span>
                </div>
              ))}
            </Motion.div>
          </div>
        </div>

        <Motion.div
          className="okc-mobile-only okc-coverage-cards"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
          {PLATFORMS.map((p, i) => (
            <div key={i} className="okc-coverage-card">
              <div className="okc-coverage-card-top">
                <div>
                  <div className="okc-coverage-card-platform">{p.name}</div>
                  <div className="okc-coverage-card-domain">{p.domain}</div>
                </div>
                <span className="okc-pill okc-pill--pass">{t('coverage.status_active')}</span>
              </div>

              <div className="okc-coverage-card-row">
                <div>
                  <span className="okc-coverage-card-label">{t('coverage.col_country')}</span>
                  <div className="okc-coverage-card-value">{p.flag} {p.country}</div>
                </div>
                <div>
                  <span className="okc-coverage-card-label">{t('coverage.col_domain')}</span>
                  <div className="okc-coverage-card-value">{p.domain}</div>
                </div>
              </div>
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}
