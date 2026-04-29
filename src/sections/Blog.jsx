import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const POSTS = [
  { tag: 'Guide',   title: 'Détecter un compteur trafiqué : 7 signaux à croiser', date: 'Avr. 2026', read: '8 min' },
  { tag: 'Méthode', title: "Pourquoi le prix médian régional bat l'argus national", date: 'Mar. 2026', read: '6 min' },
  { tag: 'Moteurs', title: 'Les 12 moteurs à éviter en occasion (et pourquoi)',    date: 'Mar. 2026', read: '12 min' },
  { tag: 'Légal',   title: 'Vendeur pro déguisé en particulier : que dit la loi',  date: 'Fév. 2026', read: '5 min' },
]

export default function Blog() {
  return (
    <section id="blog" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              10 — Conseils achat
            </motion.div>
            <motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              La méthode<br />derrière le score.
            </motion.h2>
          </div>
          <motion.p className="okc-lead"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: 0.15, ease }}>
            Articles techniques sur la détection d'anomalies, le marché de l'occasion, la fiabilité moteur. Sans bullshit, sans SEO bourré, juste les faits.
          </motion.p>
        </div>

        <div className="okc-grid-12">
          {POSTS.map((p, i) => (
            <motion.a key={i} href="#"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              style={{
                gridColumn: i === 0 ? 'span 6' : 'span 3',
                borderTop: '1px solid var(--okc-text-primary)',
                paddingTop: 20,
                minHeight: i === 0 ? 320 : 220,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                textDecoration: 'none',
              }}
              whileHover={{ opacity: 0.75 }}>
              <div style={{
                aspectRatio: i === 0 ? '16/9' : '4/3',
                background: 'var(--okc-bg-light)',
                borderRadius: 4, marginBottom: 16,
                position: 'relative', overflow: 'hidden',
                border: '1px solid var(--okc-border)',
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 8px, rgba(0,0,0,0.04) 8px 9px)' }} />
                <div style={{ position: 'absolute', bottom: 12, left: 12, fontFamily: 'var(--okc-font-mono)', fontSize: 10, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
                  [ illustration {p.tag.toLowerCase()} ]
                </div>
              </div>
              <div>
                <span className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>{p.tag}</span>
                <h3 style={{ fontSize: i === 0 ? 24 : 17, fontWeight: 500, marginTop: 8, letterSpacing: '-0.4px', lineHeight: 1.2 }}>{p.title}</h3>
                <div style={{ marginTop: 14, fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
                  {p.date} · {p.read}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
