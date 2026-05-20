import { motion as Motion } from 'framer-motion'
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
      <div className="okc-showcase-browser-media">
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
    <Motion.div {...fadeUp} transition={{ duration: 0.6, ease }}
      className="okc-showcase-highlight-card">
      <div className="okc-showcase-highlight-head">
        <h3 className="okc-h3">{title}</h3>
        <span className="okc-mono" style={{ color: 'var(--okc-text-muted)' }}>{n}</span>
      </div>
      <p className="okc-showcase-highlight-desc">{desc}</p>
    </Motion.div>
  )
}

export default function Showcase() {
  const { t } = useTranslation()

  return (
    <section id="showcase" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <Motion.div className="okc-eyebrow" {...fadeUp} transition={{ duration: 0.6, ease }}>
              {t('showcase.eyebrow')}
            </Motion.div>
            <Motion.h2 className="okc-h2" style={{ marginTop: 20 }} {...fadeUp} transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('showcase.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </Motion.h2>
          </div>
          <Motion.p className="okc-lead" {...fadeUp} transition={{ duration: 0.6, delay: 0.15, ease }}>
            {t('showcase.lead')}
          </Motion.p>
        </div>

        <div className="okc-grid-12" style={{ alignItems: 'start', gap: 32 }}>
          <Motion.div className="col-7"
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, ease }}>
            <BrowserMock />
          </Motion.div>
          <div className="col-5 okc-showcase-highlights-list">
            <Highlight n="01" title={t('showcase.h01_title')} desc={t('showcase.h01_desc')} />
            <Highlight n="02" title={t('showcase.h02_title')} desc={t('showcase.h02_desc')} />
            <Highlight n="03" title={t('showcase.h03_title')} desc={t('showcase.h03_desc')} />
          </div>
        </div>
      </div>
    </section>
  )
}
