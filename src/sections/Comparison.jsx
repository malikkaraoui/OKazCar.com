import { motion } from 'framer-motion'
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
            <motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              {t('comparison.eyebrow')}
            </motion.div>
            <motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('comparison.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}
          style={{ border: '1px solid var(--okc-border)', borderRadius: 4, overflow: 'hidden', background: 'var(--okc-bg-white)' }}>
          {/* Header */}
          <div style={{
            display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr',
            padding: '18px 24px', borderBottom: '1px solid var(--okc-border)',
            alignItems: 'baseline',
          }}>
            <span className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>{t('comparison.col_feature')}</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--okc-text-muted)' }}>{t('comparison.col_without')}</span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>{t('comparison.col_with')}</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr',
              padding: '16px 24px',
              borderBottom: i < rows.length - 1 ? '1px solid var(--okc-border)' : 'none',
              alignItems: 'center', fontSize: 14,
            }}>
              <span style={{ fontWeight: 500 }}>{r.feat}</span>
              <span style={{ color: 'var(--okc-text-muted)' }}>{r.without}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--okc-pass)', flexShrink: 0 }} />
                {r.with}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
