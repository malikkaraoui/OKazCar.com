import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const ITEMS = [
  { t: 'Acheteur particulier', d: 'Évitez les arnaques, identifiez la bonne affaire, négociez avec des données objectives.', tag: 'Public principal' },
  { t: 'Vendeur particulier', d: 'Positionnez votre prix juste avant publication. Comparez votre annonce à la concurrence locale.', tag: 'À venir Q2 2026' },
  { t: 'Professionnel auto', d: 'Sourcing accéléré, audit de stock concurrent, alerte sur les rappels constructeur non traités.', tag: 'Mode pro' },
]

export default function Audience() {
  return (
    <section id="audience" className="okc-section" style={{ background: 'var(--okc-bg-light)' }}>
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              06 — Pour qui
            </motion.div>
            <motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              Trois usages.<br />Une seule extension.
            </motion.h2>
          </div>
        </div>
        <div className="okc-grid-12">
          {ITEMS.map((it, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              style={{
                gridColumn: 'span 4',
                background: 'var(--okc-bg-white)',
                border: '1px solid var(--okc-border)',
                padding: 32,
                minHeight: 260,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
              <div>
                <span className="okc-pill" style={{ background: 'transparent', border: '1px solid var(--okc-border)', color: 'var(--okc-text-muted)' }}>
                  {it.tag}
                </span>
                <h3 className="okc-h3" style={{ marginTop: 24, fontSize: 24 }}>{it.t}</h3>
                <p style={{ fontSize: 15, color: 'var(--okc-text-secondary)', lineHeight: 1.6, marginTop: 14 }}>{it.d}</p>
              </div>
              <a href="#install" style={{
                marginTop: 24, fontSize: 12, fontFamily: 'var(--okc-font-mono)',
                textTransform: 'uppercase', letterSpacing: 1,
                color: 'var(--okc-text-primary)',
                borderBottom: '1px solid var(--okc-text-primary)',
                alignSelf: 'flex-start', paddingBottom: 2,
              }}>
                En savoir plus →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
