import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-40px' } }

function BrowserMock() {
  return (
    <div onMouseDown={e => e.preventDefault()} style={{
      borderRadius: 6,
      border: '1px solid var(--okc-border)',
      overflow: 'hidden',
      boxShadow: '0 30px 80px -30px rgba(15,23,42,0.22), 0 12px 24px -12px rgba(15,23,42,0.1)',
      background: 'var(--okc-bg-white)',
      userSelect: 'none', WebkitUserSelect: 'none',
    }}>
      <div style={{ height: 460, overflow: 'hidden' }}>
        <img
          src="/Une_decision_rationnelle.png"
          alt="OKazCar extension injectée dans l'annonce"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
        />
      </div>
    </div>
  )
}

function Highlight({ n, title, desc }) {
  return (
    <motion.div {...fadeUp} transition={{ duration: 0.6, ease }}
      style={{ borderTop: '1px solid var(--okc-border)', paddingTop: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h3 className="okc-h3">{title}</h3>
        <span className="okc-mono" style={{ color: 'var(--okc-text-muted)' }}>{n}</span>
      </div>
      <p style={{ margin: '12px 0 0', color: 'var(--okc-text-secondary)', fontSize: 15, lineHeight: 1.55 }}>{desc}</p>
    </motion.div>
  )
}

export default function Showcase() {
  const { t } = useTranslation()

  return (
    <section id="showcase" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <motion.div className="okc-eyebrow" {...fadeUp} transition={{ duration: 0.6, ease }}>
              {t('showcase.eyebrow')}
            </motion.div>
            <motion.h2 className="okc-h2" style={{ marginTop: 20 }} {...fadeUp} transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('showcase.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </motion.h2>
          </div>
          <motion.p className="okc-lead" {...fadeUp} transition={{ duration: 0.6, delay: 0.15, ease }}>
            {t('showcase.lead')}
          </motion.p>
        </div>

        <div className="okc-grid-12" style={{ alignItems: 'start', gap: 32 }}>
          <motion.div style={{ gridColumn: 'span 7' }}
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, ease }}>
            <BrowserMock />
          </motion.div>
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 28 }}>
            <Highlight n="01" title={t('showcase.h01_title')} desc={t('showcase.h01_desc')} />
            <Highlight n="02" title={t('showcase.h02_title')} desc={t('showcase.h02_desc')} />
            <Highlight n="03" title={t('showcase.h03_title')} desc={t('showcase.h03_desc')} />
          </div>
        </div>
      </div>
    </section>
  )
}
