import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import OKCLogo from '../components/OKCLogo'
import { BLOG_POSTS } from '../data/blog'

const ease = [0.22, 1, 0.36, 1]

function Card({ post, featured = false }) {
  const Illu = post.illustration
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      style={{
        gridColumn: featured ? 'span 8' : 'span 4',
        display: 'flex', flexDirection: 'column',
      }}>
      <Link to={`/blog/${post.slug}`} style={{
        display: 'flex', flexDirection: 'column', flex: 1,
        borderTop: '2px solid var(--okc-text-primary)',
        paddingTop: 20, textDecoration: 'none',
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.72'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
        {/* Illustration */}
        <div style={{
          width: '100%',
          aspectRatio: featured ? '16/9' : '4/3',
          borderRadius: 4, overflow: 'hidden',
          border: '1px solid var(--okc-border)',
          marginBottom: 20, flexShrink: 0,
        }}>
          <Illu size={800} />
        </div>
        {/* Meta */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
            {post.tag}
          </span>
          <h2 style={{
            fontSize: featured ? 28 : 20,
            fontWeight: 500, margin: '10px 0 0',
            letterSpacing: '-0.5px', lineHeight: 1.2,
            color: 'var(--okc-text-primary)',
          }}>
            {post.title}
          </h2>
          {featured && (
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--okc-text-secondary)', marginTop: 14, maxWidth: '52ch' }}>
              {post.intro}
            </p>
          )}
          <div style={{ marginTop: 16, fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
            {post.date} · {post.read}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function BlogIndex() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [featured, ...rest] = BLOG_POSTS

  return (
    <div style={{ minHeight: '100vh', background: 'var(--okc-bg-white)' }}>
      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--okc-border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 56px', maxWidth: 1440, margin: '0 auto' }}>
          <Link to="/"><OKCLogo size={20} /></Link>
          <Link to="/#install" style={{ fontSize: 13, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, background: 'var(--okc-text-primary)', padding: '9px 18px', borderRadius: 2, color: '#fff' }}>
            Installer — Gratuit
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header style={{ padding: '80px 56px 64px', maxWidth: 1440, margin: '0 auto', borderBottom: '1px solid var(--okc-border)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1.4, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--okc-text-muted)' }} />
          Conseils achat
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 500, letterSpacing: '-2.5px', lineHeight: 0.98, margin: 0, maxWidth: '14ch' }}>
          La méthode<br />derrière le score.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--okc-text-secondary)', marginTop: 28, maxWidth: '52ch' }}>
          Articles techniques sur la détection d'anomalies, le marché de l'occasion, la fiabilité moteur. Sans bullshit, sans SEO bourré.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          style={{ marginTop: 16, fontFamily: 'var(--okc-font-mono)', fontSize: 12, color: 'var(--okc-text-muted)', display: 'flex', gap: 12 }}>
          <span>{BLOG_POSTS.length} articles</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Mise à jour avril 2026</span>
        </motion.div>
      </header>

      {/* Grille articles */}
      <main style={{ maxWidth: 1440, margin: '0 auto', padding: '64px 56px 120px' }}>
        {/* Featured + 2 colonnes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 32,
        }}>
          <Card post={featured} featured />
          {rest.map((p) => (
            <Card key={p.slug} post={p} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--okc-border)', padding: '40px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1440, margin: '0 auto' }}>
        <span style={{ fontSize: 13, color: 'var(--okc-text-muted)' }}>© 2026 OKazCar</span>
        <Link to="/" style={{ fontSize: 13, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--okc-text-primary)', borderBottom: '1px solid var(--okc-text-primary)', paddingBottom: 2 }}>
          ← Accueil
        </Link>
      </footer>
    </div>
  )
}
