import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { BLOG_POSTS } from '../data/blog'
import OKCLogo from '../components/OKCLogo'

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, fontFamily: 'var(--okc-font)' }}>
        <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--okc-text-muted)' }}>404</span>
        <h1 style={{ fontSize: 32, fontWeight: 500, margin: 0, letterSpacing: '-1px' }}>Article introuvable</h1>
        <Link to="/" style={{ fontSize: 13, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid var(--okc-text-primary)', paddingBottom: 2 }}>
          ← Retour à l'accueil
        </Link>
      </div>
    )
  }

  const Content = post.component

  return (
    <div style={{ minHeight: '100vh', background: 'var(--okc-bg-white)' }}>
      {/* Nav simple */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--okc-border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 56px', maxWidth: 1440, margin: '0 auto' }}>
          <Link to="/"><OKCLogo size={20} /></Link>
          <Link to="/#blog" style={{ fontSize: 13, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--okc-text-muted)' }}>
            ← Conseils achat
          </Link>
        </div>
      </nav>

      {/* Header article */}
      <header style={{ borderBottom: '1px solid var(--okc-border)', padding: '80px 56px 64px', maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 32 }}>
            <span className="okc-mono" style={{ color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>{post.tag}</span>
            <span style={{ color: 'var(--okc-border)' }}>—</span>
            <span className="okc-mono" style={{ color: 'var(--okc-text-muted)' }}>{post.date} · {post.read}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-1.5px', margin: 0 }}>
            {post.title}
          </h1>
          {post.intro && (
            <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--okc-text-secondary)', marginTop: 24, maxWidth: '56ch' }}>
              {post.intro}
            </p>
          )}
        </div>
      </header>

      {/* Corps article */}
      <article style={{ maxWidth: 720, margin: '0 auto', padding: '64px 56px 120px' }}>
        <Content />
      </article>

      {/* Footer minimal */}
      <footer style={{ borderTop: '1px solid var(--okc-border)', padding: '40px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1440, margin: '0 auto' }}>
        <span style={{ fontSize: 13, color: 'var(--okc-text-muted)' }}>© 2026 OKazCar</span>
        <Link to="/#install" style={{ fontSize: 13, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--okc-text-primary)', borderBottom: '1px solid var(--okc-text-primary)', paddingBottom: 2 }}>
          Installer l'extension →
        </Link>
      </footer>
    </div>
  )
}
