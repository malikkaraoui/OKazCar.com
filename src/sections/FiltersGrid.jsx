import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FILTERS } from '../data/index'

const ease = [0.22, 1, 0.36, 1]

export default function FiltersGrid() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const f = FILTERS

  return (
    <section id="filters" className="okc-section" style={{ background: 'var(--okc-bg-light)' }}>
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              {t('filters.eyebrow')}
            </motion.div>
            <motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('filters.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </motion.h2>
          </div>
          <motion.p className="okc-lead"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: 0.15, ease }}>
            {t('filters.lead_pre')} <strong>L2</strong> {t('filters.lead_ref')} <strong>L4</strong> {t('filters.lead_market')} <strong>2.0</strong> {t('filters.lead_suffix')} <strong>16.0</strong>{t('filters.lead_end')}
          </motion.p>
        </div>

        <div className="okc-grid-12" style={{ gap: 24, alignItems: 'start' }}>
          {/* Left: filter list */}
          <div style={{ gridColumn: 'span 6' }}>
            <div style={{ borderTop: '1px solid var(--okc-border)' }}>
              {f.map((flt, i) => {
                const isActive = i === active
                return (
                  <motion.button
                    key={flt.id}
                    onClick={() => setActive(i)}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.5, delay: i * 0.04, ease }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '50px 1fr 60px 28px',
                      gap: 16,
                      alignItems: 'center',
                      width: '100%',
                      padding: '18px 8px',
                      textAlign: 'left',
                      borderBottom: '1px solid var(--okc-border)',
                      background: isActive ? 'var(--okc-bg-white)' : 'transparent',
                      transition: 'background 0.2s ease',
                      cursor: 'pointer',
                    }}>
                    <span className="okc-mono" style={{ color: isActive ? 'var(--okc-text-primary)' : 'var(--okc-text-muted)', fontWeight: 600 }}>
                      {flt.id}
                    </span>
                    <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--okc-text-primary)', letterSpacing: '-0.2px' }}>
                      {flt.name}
                    </span>
                    <span className="okc-mono" style={{ color: flt.critical ? 'var(--okc-fail)' : 'var(--okc-text-muted)', textAlign: 'right', fontSize: 13 }}>
                      ×{flt.weight.toFixed(1)}
                    </span>
                    <span style={{ textAlign: 'right', color: 'var(--okc-text-muted)', fontFamily: 'var(--okc-font-mono)', fontSize: 16 }}>
                      {isActive ? '–' : '+'}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Right: detail panel */}
          <div style={{ gridColumn: 'span 6', position: 'sticky', top: 100 }}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease }}
              style={{
                background: 'var(--okc-bg-white)',
                border: '1px solid var(--okc-border)',
                padding: '36px 36px 32px',
                borderRadius: 4,
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <span className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>
                  {t('filters.filter_label')} {f[active].id}
                </span>
                {f[active].critical && (
                  <span className="okc-pill okc-pill--fail">{t('filters.critical_badge')}</span>
                )}
              </div>
              <h3 style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-1px', margin: 0, lineHeight: 1.1 }}>
                {f[active].name}
              </h3>
              <p style={{ fontSize: 15, color: 'var(--okc-text-secondary)', lineHeight: 1.65, marginTop: 20 }}>
                {f[active].role}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--okc-border)' }}>
                <div>
                  <div className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>{t('filters.weight_label')}</div>
                  <div style={{ fontSize: 24, fontWeight: 500, marginTop: 4, letterSpacing: '-0.5px' }}>
                    {f[active].weight.toFixed(1)} <span style={{ color: 'var(--okc-text-muted)', fontSize: 14 }}>/ 16.0</span>
                  </div>
                </div>
                <div>
                  <div className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>{t('filters.status_label')}</div>
                  <div style={{ fontSize: 24, fontWeight: 500, marginTop: 4, letterSpacing: '-0.5px' }}>
                    {f[active].critical ? t('filters.status_blocking') : t('filters.status_weighted')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
