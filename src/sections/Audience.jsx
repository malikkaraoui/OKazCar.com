import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const ease = [0.22, 1, 0.36, 1]

export default function Audience() {
  const { t } = useTranslation()
  const items = t('audience.items', { returnObjects: true })

  return (
    <section id="audience" className="okc-section" style={{ background: 'var(--okc-bg-light)' }}>
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <Motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              {t('audience.eyebrow')}
            </Motion.div>
            <Motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('audience.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </Motion.h2>
          </div>
        </div>
        <div className="okc-grid-12 okc-audience-grid">
          {items.map((it, i) => (
            <Motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="okc-audience-card">
              <div>
                <span className="okc-pill" style={{ background: 'transparent', border: '1px solid var(--okc-border)', color: 'var(--okc-text-muted)' }}>
                  {it.tag}
                </span>
                <h3 className="okc-h3" style={{ marginTop: 24, fontSize: 24 }}>{it.t}</h3>
                <p style={{ fontSize: 15, color: 'var(--okc-text-secondary)', lineHeight: 1.6, marginTop: 14 }}>{it.d}</p>
              </div>
              <a href="#install" className="okc-audience-link">
                {t('audience.learn_more')}
              </a>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
