import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FILTERS } from '../data/index'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-40px' } }

function ExtensionPanelMini() {
  const shown = FILTERS.slice(0, 6)
  const states = [true, true, false, true, true, true]
  return (
    <div style={{
      background: '#fff', borderRadius: 6, overflow: 'hidden',
      border: '1px solid var(--okc-border)',
      boxShadow: '0 20px 50px -15px rgba(15,23,42,0.28)',
    }}>
      <div style={{ padding: '12px 14px', background: 'linear-gradient(135deg, #1e3a5f, #2563eb)', color: '#fff' }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>OKaz<span style={{ color: '#fbbf24' }}>Car</span></div>
        <div style={{ fontSize: 11, opacity: 0.7 }}>Citroën C4 2022</div>
      </div>
      <div style={{ padding: '10px 14px', fontSize: 12 }}>
        {shown.map((f, i) => {
          const ok = states[i]
          return (
            <div key={f.id} style={{
              display: 'grid', gridTemplateColumns: '14px 28px 1fr auto',
              gap: 6, alignItems: 'center',
              padding: '7px 0',
              borderBottom: i < shown.length - 1 ? '1px solid #f0f0ec' : 'none',
            }}>
              <span style={{ color: ok ? 'var(--okc-pass)' : 'var(--okc-warning)', fontSize: 11, fontWeight: 700 }}>
                {ok ? '✓' : '⚠'}
              </span>
              <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 10, color: 'var(--okc-text-muted)' }}>{f.id}</span>
              <span style={{ fontSize: 11, color: 'var(--okc-text-primary)' }}>{f.name}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: ok ? 'var(--okc-pass)' : 'var(--okc-warning)' }}>
                {ok ? '100%' : '70%'}
              </span>
            </div>
          )
        })}
      </div>
      <div style={{ padding: 14, borderTop: '1px solid var(--okc-border)', background: 'var(--okc-bg-subtle)', textAlign: 'center' }}>
        <div style={{ fontSize: 40, fontWeight: 500, color: 'var(--okc-pass)', letterSpacing: '-1px', lineHeight: 1 }}>97</div>
        <div style={{ fontSize: 11, color: 'var(--okc-pass)', fontWeight: 500, marginTop: 4 }}>Annonce fiable</div>
      </div>
    </div>
  )
}

function BrowserMock() {
  return (
    <div style={{
      borderRadius: 6,
      border: '1px solid var(--okc-border)',
      overflow: 'hidden',
      boxShadow: '0 30px 80px -30px rgba(15,23,42,0.22), 0 12px 24px -12px rgba(15,23,42,0.1)',
      background: 'var(--okc-bg-white)',
    }}>
      {/* Chrome bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: 'var(--okc-bg-light)', borderBottom: '1px solid var(--okc-border)' }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#fc615d' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#fdbc40' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#34c84a' }} />
        <div style={{ flex: 1, marginLeft: 12, height: 26, borderRadius: 6, background: '#fff', border: '1px solid var(--okc-border)', display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 11, color: 'var(--okc-text-muted)', fontFamily: 'var(--okc-font-mono)' }}>
          leboncoin.fr/ad/voitures/3151844708
        </div>
      </div>
      {/* Page mock */}
      <div style={{ position: 'relative', minHeight: 400, background: 'linear-gradient(180deg, #f4f4f0 0%, #eaeae4 100%)' }}>
        <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16 }}>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
              <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #b8b8b0, #8a8a82)', borderRadius: 4 }} />
              <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #c0c0b8, #94948c)', borderRadius: 4 }} />
            </div>
            <div style={{ height: 12, width: '60%', background: 'rgba(0,0,0,0.18)', borderRadius: 2, marginBottom: 8 }} />
            <div style={{ height: 8, width: '85%', background: 'rgba(0,0,0,0.12)', borderRadius: 2, marginBottom: 6 }} />
            <div style={{ height: 8, width: '75%', background: 'rgba(0,0,0,0.12)', borderRadius: 2 }} />
          </div>
          <div />
        </div>
        {/* Extension panel floating */}
        <div style={{ position: 'absolute', top: 16, right: 16, width: 280 }}>
          <ExtensionPanelMini />
        </div>
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
