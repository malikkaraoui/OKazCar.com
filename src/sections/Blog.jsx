import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blog'

const ease = [0.22, 1, 0.36, 1]

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
          {BLOG_POSTS.map((p, i) => (
            <motion.div key={p.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              style={{ gridColumn: i === 0 ? 'span 6' : 'span 3' }}>
              <Link to={`/blog/${p.slug}`} style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                borderTop: '1px solid var(--okc-text-primary)',
                paddingTop: 20,
                minHeight: i === 0 ? 320 : 220,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.72'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                {/* Illustration placeholder */}
                <div style={{
                  aspectRatio: i === 0 ? '16/9' : '4/3',
                  background: 'var(--okc-bg-light)',
                  borderRadius: 4, marginBottom: 16,
                  position: 'relative', overflow: 'hidden',
                  border: '1px solid var(--okc-border)',
                }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 8px, rgba(0,0,0,0.04) 8px 9px)' }} />
                  <div style={{ position: 'absolute', bottom: 12, left: 12, fontFamily: 'var(--okc-font-mono)', fontSize: 10, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
                    [ {p.tag.toLowerCase()} ]
                  </div>
                </div>
                {/* Meta */}
                <div>
                  <span className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>{p.tag}</span>
                  <h3 style={{ fontSize: i === 0 ? 24 : 17, fontWeight: 500, marginTop: 8, letterSpacing: '-0.4px', lineHeight: 1.2, color: 'var(--okc-text-primary)' }}>
                    {p.title}
                  </h3>
                  <div style={{ marginTop: 14, fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
                    {p.date} · {p.read}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
