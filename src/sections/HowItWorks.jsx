import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const ease = [0.22, 1, 0.36, 1]

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('howitworks.steps', { returnObjects: true })

  return (
    <section id="how" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              {t('howitworks.eyebrow')}
            </motion.div>
            <motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('howitworks.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </motion.h2>
          </div>
        </div>
        <div className="okc-grid-12">
          {steps.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              style={{ gridColumn: 'span 3', borderTop: '2px solid var(--okc-text-primary)', paddingTop: 24 }}>
              <span className="okc-mono" style={{ color: 'var(--okc-text-muted)' }}>0{i + 1}</span>
              <h3 className="okc-h3" style={{ marginTop: 14 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: 'var(--okc-text-secondary)', lineHeight: 1.6, marginTop: 12 }}>{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
