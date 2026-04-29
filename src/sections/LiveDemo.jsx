import { useState } from 'react'
import { motion } from 'framer-motion'
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
  const currentScore = done ? 97 : analyzing ? Math.round(97 * ((step + 1) / STEPS.length)) : 0
  const label = done ? 'Annonce fiable' : analyzing ? 'En cours…' : 'En attente'

  return (
    <section id="demo" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              04 — Démo
            </motion.div>
            <motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              Collez une URL.<br />Voyez la chaîne tourner.
            </motion.h2>
          </div>
          <motion.p className="okc-lead"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: 0.15, ease }}>
            Simulation de la chaîne d'analyse en temps réel. Dans l'extension, tout cela tourne en moins de 3 secondes au moment où vous ouvrez l'annonce.
          </motion.p>
        </div>

        <div className="okc-grid-12" style={{ alignItems: 'start' }}>
          <motion.div style={{ gridColumn: 'span 7' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
            {/* URL input */}
            <div style={{
              border: '1px solid var(--okc-border)',
              padding: 4, display: 'flex', gap: 4,
              background: 'var(--okc-bg-white)', borderRadius: 4,
            }}>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{
                  flex: 1, padding: '13px 16px', border: 'none', outline: 'none',
                  fontFamily: 'var(--okc-font-mono)', fontSize: 13,
                  background: 'transparent', color: 'var(--okc-text-primary)',
                }} />
              <button onClick={run} disabled={analyzing} className="okc-btn okc-btn--primary">
                {analyzing ? 'Analyse en cours…' : done ? 'Relancer' : 'Analyser →'}
              </button>
            </div>

            {/* Pipeline steps */}
            <div style={{ marginTop: 32 }}>
              {STEPS.map((s, i) => {
                const status = i < step ? 'done' : i === step ? 'running' : 'pending'
                return (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '32px 1fr auto',
                    gap: 16, padding: '16px 0',
                    borderBottom: '1px solid var(--okc-border)',
                    alignItems: 'center',
                    opacity: status === 'pending' ? 0.38 : 1,
                    transition: 'opacity 0.3s ease',
                  }}>
                    <span className="okc-mono" style={{ color: 'var(--okc-text-muted)' }}>0{i + 1}</span>
                    <span style={{ fontSize: 15, fontWeight: 500 }}>{s}</span>
                    <span className="okc-mono" style={{
                      fontSize: 11,
                      color: status === 'done' ? 'var(--okc-pass)' : status === 'running' ? 'var(--okc-warning)' : 'var(--okc-text-muted)',
                      textTransform: 'uppercase', letterSpacing: 1,
                    }}>
                      {status === 'done' ? '✓ ok' : status === 'running' ? '○ run' : '— wait'}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
            <ScoreGauge score={currentScore} size={240} animateInView={false} label={label} />
            <div style={{ width: '100%' }}>
              <PriceBar marketMin={11500} marketMax={14800} ref_={13200} current={12490} animateInView={done} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
