import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import ScoreGauge from '../components/ScoreGauge'
import PriceBar from '../components/PriceBar'

const ease = [0.22, 1, 0.36, 1]

const STEPS = [
  'Extraction des données',
  'Détection référentiel',
  'Collecte prix marché',
  'Analyse statistique',
  'Vérification vendeur',
  'Pondération finale',
]

const FINAL_SCORE = 34

const ALERTS = [
  {
    code: 'L3',
    title: 'Kilométrage défavorable',
    detail: '147 000 km pour un positionnement prix déjà haut.',
    tone: 'fail',
  },
  {
    code: 'L10',
    title: 'Annonce trop ancienne',
    detail: 'Annonce en ligne depuis 73 jours sans baisse notable.',
    tone: 'warn',
  },
  {
    code: 'L12',
    title: 'Moteur à surveiller',
    detail: 'Motorisation signalée dans la base de fiabilité.',
    tone: 'fail',
  },
  {
    code: 'L11',
    title: 'Rappel constructeur',
    detail: 'Campagne à vérifier avant achat.',
    tone: 'warn',
  },
]

export default function LiveDemo() {
  const [url, setUrl] = useState('https://www.leboncoin.fr/ad/voitures/3151844708')
  const [analyzing, setAnalyzing] = useState(false)
  const [step, setStep] = useState(-1)

  const run = () => {
    if (analyzing) return
    setAnalyzing(true)
    setStep(0)
    let i = 0
    const t = setInterval(() => {
      i++
      if (i >= STEPS.length) { clearInterval(t); setAnalyzing(false); return }
      setStep(i)
    }, 320)
  }

  const done = !analyzing && step === STEPS.length - 1
  const currentScore = done ? FINAL_SCORE : analyzing ? Math.round(FINAL_SCORE * ((step + 1) / STEPS.length)) : 0
  const label = done ? 'Annonce à risque' : analyzing ? 'Scan en cours…' : 'En attente'
  const buttonLabel = analyzing ? 'Analyse en cours…' : done ? 'Relancer' : 'Analyser →'
  const visibleAlerts = done ? ALERTS : analyzing ? ALERTS.slice(0, Math.max(0, step)) : []

  return (
    <section id="demo" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head" onMouseDown={e => e.preventDefault()} style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
          <div>
            <Motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              04 — Démo
            </Motion.div>
            <Motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              Collez une URL.<br />Voyez la chaîne tourner.
            </Motion.h2>
          </div>
          <Motion.p className="okc-lead"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: 0.15, ease }}>
            Simulation de la chaîne d'analyse en temps réel. Dans l'extension, tout cela tourne en moins de 3 secondes au moment où vous ouvrez l'annonce.
          </Motion.p>
        </div>

        <div className="okc-grid-12" style={{ alignItems: 'start' }}>
          <Motion.div className="col-7"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
            {/* URL input */}
            <div className="okc-live-demo-input-shell">
              <input
                className="okc-live-demo-input"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button onClick={run} disabled={analyzing} className="okc-btn okc-btn--primary okc-desktop-only" style={{ background: '#16a34a', borderColor: '#16a34a' }}>
                {buttonLabel}
              </button>
            </div>

            {/* Pipeline steps */}
            <div className="okc-desktop-only" onMouseDown={e => e.preventDefault()} style={{ marginTop: 32, userSelect: 'none', WebkitUserSelect: 'none' }}>
              {STEPS.map((s, i) => {
                const status = i < step ? 'done' : i === step ? 'running' : 'pending'
                return (
                  <div key={i} className="okc-live-demo-step" style={{ opacity: status === 'pending' ? 0.38 : 1 }}>
                    <span className="okc-mono" style={{ color: 'var(--okc-text-muted)' }}>0{i + 1}</span>
                    <span style={{ fontSize: 15, fontWeight: 500 }}>{s}</span>
                    <span className="okc-mono okc-live-demo-step-status" style={{
                      color: status === 'done' ? 'var(--okc-pass)' : status === 'running' ? 'var(--okc-warning)' : 'var(--okc-text-muted)',
                    }}>
                      {status === 'done' ? '✓ ok' : status === 'running' ? '○ run' : '— wait'}
                    </span>
                  </div>
                )
              })}
            </div>
          </Motion.div>

          <Motion.div
            onMouseDown={e => e.preventDefault()}
            className="col-5 okc-live-demo-visual" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, userSelect: 'none', WebkitUserSelect: 'none' }}
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
            <div className="okc-live-demo-visual-card">
              <div className="okc-live-demo-gauge-wrap">
                <ScoreGauge
                  score={currentScore}
                  size={210}
                  strokeW={10}
                  animateInView={false}
                  label={label}
                  valueScale={0.29}
                  unitFontSize={10}
                  labelFontSize={12}
                  letterSpacing="-1.5px"
                />
              </div>
              <div style={{ width: '100%', marginTop: 20 }}>
                <PriceBar marketMin={10900} marketMax={14200} ref_={12800} current={14990} animateInView={done} />
              </div>
              <div className="okc-live-demo-alerts">
                <div className="okc-live-demo-alerts-head">
                  <span className="okc-mono">Filtres déclenchés</span>
                  <span className="okc-mono" style={{ color: 'var(--okc-fail)' }}>{visibleAlerts.length || 0} alerte{visibleAlerts.length > 1 ? 's' : ''}</span>
                </div>
                <div className="okc-live-demo-alert-list">
                  {ALERTS.map((alert, index) => {
                    const isVisible = index < visibleAlerts.length
                    return (
                      <div key={alert.code} className={`okc-live-demo-alert okc-live-demo-alert--${alert.tone}${isVisible ? ' is-visible' : ''}`}>
                        <div className="okc-live-demo-alert-code">{alert.code}</div>
                        <div className="okc-live-demo-alert-copy">
                          <strong>{alert.title}</strong>
                          <span>{alert.detail}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="okc-mobile-only" style={{ marginTop: 20 }}>
                <button onClick={run} disabled={analyzing} className="okc-btn okc-btn--primary" style={{ width: '100%', background: '#16a34a', borderColor: '#16a34a' }}>
                  {buttonLabel}
                </button>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
