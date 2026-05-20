import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FILTERS } from '../data/index'

const ease = [0.22, 1, 0.36, 1]

function FilterDetail({ filter, t, className = '', showTitle = true }) {
  return (
    <div className={`okc-filters-detail ${className}`.trim()}>
      <div className="okc-filters-detail-head">
        <span className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>
          {t('filters.filter_label')} {filter.id}
        </span>
        {filter.critical && (
          <span className="okc-pill okc-pill--fail">{t('filters.critical_badge')}</span>
        )}
      </div>
      {showTitle && <h3 className="okc-filters-detail-title">{filter.name}</h3>}
      <p className="okc-filters-detail-copy">{filter.role}</p>
      <div className="okc-filters-detail-stats">
        <div>
          <div className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>{t('filters.weight_label')}</div>
          <div style={{ fontSize: 24, fontWeight: 500, marginTop: 4, letterSpacing: '-0.5px' }}>
            {filter.weight.toFixed(1)} <span style={{ color: 'var(--okc-text-muted)', fontSize: 14 }}>/ 16.0</span>
          </div>
        </div>
        <div>
          <div className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>{t('filters.status_label')}</div>
          <div style={{ fontSize: 24, fontWeight: 500, marginTop: 4, letterSpacing: '-0.5px' }}>
            {filter.critical ? t('filters.status_blocking') : t('filters.status_weighted')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FiltersGrid() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const f = FILTERS

  return (
    <section id="filters" className="okc-section" style={{ background: 'var(--okc-bg-light)' }}>
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <Motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              {t('filters.eyebrow')}
            </Motion.div>
            <Motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('filters.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </Motion.h2>
          </div>
          <Motion.p className="okc-lead"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: 0.15, ease }}>
            {t('filters.lead_pre')} <strong>L2</strong> {t('filters.lead_ref')} <strong>L4</strong> {t('filters.lead_market')} <strong>2.0</strong> {t('filters.lead_suffix')} <strong>16.0</strong>{t('filters.lead_end')}
          </Motion.p>
        </div>

        <div className="okc-grid-12" onMouseDown={e => e.preventDefault()} style={{ gap: 24, alignItems: 'start', userSelect: 'none', WebkitUserSelect: 'none' }}>
          {/* Left: filter list */}
          <div className="col-6">
            <div style={{ borderTop: '1px solid var(--okc-border)' }}>
              {f.map((flt, i) => {
                const isActive = i === active
                return (
                  <Motion.div
                    key={flt.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.5, delay: i * 0.04, ease }}>
                    <button
                      onClick={() => setActive(i)}
                      className={`okc-filters-item ${isActive ? 'is-active' : ''}`}>
                      <span className="okc-mono okc-filters-code" style={{ color: isActive ? 'var(--okc-text-primary)' : 'var(--okc-text-muted)' }}>
                        {flt.id}
                      </span>
                      <span className="okc-filters-name">{flt.name}</span>
                      <span className="okc-mono okc-filters-weight" style={{ color: flt.critical ? 'var(--okc-fail)' : 'var(--okc-text-muted)' }}>
                        ×{flt.weight.toFixed(1)}
                      </span>
                      <span className="okc-filters-toggle">{isActive ? '–' : '+'}</span>
                    </button>

                    {isActive && (
                      <Motion.div
                        className="okc-mobile-only"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease }}>
                        <FilterDetail filter={flt} t={t} className="okc-filters-mobile-detail" showTitle={false} />
                      </Motion.div>
                    )}
                  </Motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: detail panel */}
          <div className="col-6 okc-sticky-panel okc-desktop-only">
            <Motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease }}>
              <FilterDetail filter={f[active]} t={t} />
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
