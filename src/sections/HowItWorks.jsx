import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const STEPS = [
  { n: '01', t: 'Installation', d: 'Ajoutez OKazCar depuis le Chrome Web Store. Aucun compte, aucune permission excessive — uniquement les domaines des plateformes supportées.' },
  { n: '02', t: 'Détection', d: "Au chargement de l'annonce, l'extension détecte la plateforme (LBC, LC, PV, AS24), parse le DOM et extrait les champs critiques." },
  { n: '03', t: 'Pipeline', d: '12 filtres exécutés en parallèle (max 11 workers) : référentiel, prix marché géolocalisé, statistiques, vendeur, import, fiabilité moteur.' },
  { n: '04', t: 'Verdict', d: 'Score pondéré sur 100 affiché dans un panel injecté. Détails par filtre, sources, recommandations.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              05 — Comment ça marche
            </motion.div>
            <motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              Quatre étapes.<br />Trois secondes.
            </motion.h2>
          </div>
        </div>
        <div className="okc-grid-12">
          {STEPS.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              style={{ gridColumn: 'span 3', borderTop: '2px solid var(--okc-text-primary)', paddingTop: 24 }}>
              <span className="okc-mono" style={{ color: 'var(--okc-text-muted)' }}>{s.n}</span>
              <h3 className="okc-h3" style={{ marginTop: 14 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: 'var(--okc-text-secondary)', lineHeight: 1.6, marginTop: 12 }}>{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
