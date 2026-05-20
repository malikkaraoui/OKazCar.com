import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const ease = [0.22, 1, 0.36, 1]

export default function Comparison() {
  const { t } = useTranslation()
  const rows = t('comparison.rows', { returnObjects: true })

  return (
    <section id="compare" className="okc-section" style={{ background: 'var(--okc-bg-light)' }}>
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <Motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              {t('comparison.eyebrow')}
            </Motion.div>
            <Motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('comparison.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </Motion.h2>
          </div>
        </div>

        <div className="okc-desktop-only">
          <Motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}
            onMouseDown={e => e.preventDefault()}
            style={{ border: '1px solid var(--okc-border)', borderRadius: 6, overflow: 'hidden', userSelect: 'none', WebkitUserSelect: 'none' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.6fr' }}>
              <div style={{ padding: '16px 24px', background: 'var(--okc-bg-light)', borderBottom: '1px solid var(--okc-border)' }}>
                <span className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>{t('comparison.col_feature')}</span>
              </div>
              <div style={{ padding: '16px 20px', background: '#f0f0ec', borderBottom: '1px solid var(--okc-border)', borderLeft: '1px solid var(--okc-border)' }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: '#888', fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1 }}>{t('comparison.col_without')}</span>
              </div>
              <div style={{ padding: '16px 20px', background: '#0a0a0a', borderBottom: '1px solid #0a0a0a', borderLeft: '1px solid #0a0a0a', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#fff', fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1 }}>{t('comparison.col_with')}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: '#fbbf24', fontFamily: 'var(--okc-font-mono)', letterSpacing: 1 }}>★</span>
              </div>
            </div>
            {rows.map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.6fr' }}>
                <div style={{
                  padding: '15px 24px', fontSize: 14, fontWeight: 500,
                  borderBottom: i < rows.length - 1 ? '1px solid var(--okc-border)' : 'none',
                  background: i % 2 === 0 ? '#fff' : 'var(--okc-bg-subtle)',
                }}>{r.feat}</div>
                <div style={{
                  padding: '15px 20px', fontSize: 13,
                  color: r.without === '—' ? '#c0c0c0' : 'var(--okc-text-muted)',
                  borderBottom: i < rows.length - 1 ? '1px solid var(--okc-border)' : 'none',
                  borderLeft: '1px solid var(--okc-border)',
                  background: i % 2 === 0 ? '#f9f9f7' : '#f3f3f0',
                  fontStyle: r.without === '—' ? 'normal' : 'normal',
                }}>{r.without}</div>
                <div style={{
                  padding: '15px 20px', fontSize: 13, fontWeight: 500,
                  color: '#15803d',
                  background: i % 2 === 0 ? 'rgba(21,128,61,0.06)' : 'rgba(21,128,61,0.10)',
                  borderBottom: i < rows.length - 1 ? '1px solid rgba(21,128,61,0.12)' : 'none',
                  borderLeft: '2px solid rgba(21,128,61,0.2)',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{ color: '#15803d', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓</span>
                  {r.with}
                </div>
              </div>
            ))}
          </Motion.div>
        </div>

        <Motion.div
          className="okc-mobile-only okc-compare-cards"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
          {rows.map((r, i) => (
            <div key={i} className="okc-compare-card">
              <div className="okc-compare-card-title">{r.feat}</div>
              <div className="okc-compare-card-grid">
                <div className="okc-compare-card-panel okc-compare-card-panel--without">
                  <span className="okc-compare-card-label">{t('comparison.col_without')}</span>
                  <div className="okc-compare-card-value" style={{ color: r.without === '—' ? '#b7b7b0' : 'var(--okc-text-secondary)' }}>{r.without}</div>
                </div>
                <div className="okc-compare-card-panel okc-compare-card-panel--with">
                  <span className="okc-compare-card-label">{t('comparison.col_with')}</span>
                  <div className="okc-compare-card-value" style={{ color: 'var(--okc-pass)', fontWeight: 500 }}>✓ {r.with}</div>
                </div>
              </div>
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}
