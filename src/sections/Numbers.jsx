import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Counter from '../components/Counter'
import { STATS } from '../data/index'

const ease = [0.22, 1, 0.36, 1]

export default function Numbers() {
  const { t } = useTranslation()
  const statLabels = t('numbers.stats', { returnObjects: true })

  return (
    <section className="okc-section" style={{ background: 'var(--okc-text-primary)', color: 'var(--okc-bg-white)', borderTop: 'none' }}>
      <div className="okc-page">
        <div className="okc-sec-head" style={{ marginBottom: 80 }}>
          <div>
            <motion.div className="okc-eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              {t('numbers.eyebrow')}
            </motion.div>
            <motion.h2 className="okc-h2" style={{ marginTop: 20, color: 'var(--okc-bg-white)' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('numbers.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </motion.h2>
          </div>
        </div>
        <div className="okc-grid-12">
          {STATS.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="col-3" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 24 }}>
              <div style={{ fontSize: 'clamp(48px, 5vw, 88px)', fontWeight: 500, letterSpacing: '-2px', lineHeight: 1, color: 'var(--okc-bg-white)' }}>
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 12, marginTop: 16, color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1 }}>
                {statLabels[i] ? statLabels[i].label : s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
