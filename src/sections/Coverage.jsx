import { motion } from 'framer-motion'
import { PLATFORMS } from '../data/index'

const ease = [0.22, 1, 0.36, 1]

export default function Coverage() {
  return (
    <section id="coverage" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              07 — Couverture
            </motion.div>
            <motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              4 plateformes.<br />14 domaines.<br />11 pays + .com.
            </motion.h2>
          </div>
          <motion.p className="okc-lead"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: 0.15, ease }}>
            La cascade prix marché interroge les 14 domaines selon la géolocalisation du véhicule. AutoScout24 = 12 domaines (11 pays nommés + .com international).
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}
          style={{ border: '1px solid var(--okc-border)', borderRadius: 4, overflow: 'hidden' }}>
          {/* Header row */}
          <div style={{
            display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 1fr',
            padding: '14px 24px',
            background: 'var(--okc-text-primary)', color: 'var(--okc-bg-white)',
            fontFamily: 'var(--okc-font-mono)', fontSize: 11,
            textTransform: 'uppercase', letterSpacing: 1,
          }}>
            <span>Plateforme</span>
            <span>Domaine</span>
            <span>Pays</span>
            <span style={{ textAlign: 'right' }}>Statut</span>
          </div>
          {PLATFORMS.map((p, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 1fr',
              padding: '13px 24px',
              borderBottom: i < PLATFORMS.length - 1 ? '1px solid var(--okc-border)' : 'none',
              alignItems: 'center', fontSize: 14,
              background: 'var(--okc-bg-white)',
            }}>
              <span style={{ fontWeight: 500 }}>{p.name}</span>
              <span className="okc-mono" style={{ color: 'var(--okc-text-secondary)', fontSize: 13 }}>{p.domain}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 17 }}>{p.flag}</span>
                {p.country}
              </span>
              <span style={{ textAlign: 'right' }}>
                <span className="okc-pill okc-pill--pass">Actif</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
