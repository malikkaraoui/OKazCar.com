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
        <Link to="/blog" style={{ fontSize: 13, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid var(--okc-text-primary)', paddingBottom: 2 }}>
          ← Conseils achat
        </Link>
      </div>
    )
  }

  const Content = post.component
  const Illu = post.illustration

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
          <Link to="/blog" style={{ fontSize: 13, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--okc-text-muted)' }}>
            ← Conseils achat
          </Link>
        </div>
      </nav>

      {/* Header article */}
      <header style={{ borderBottom: '1px solid var(--okc-border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '64px 56px 0' }}>
          {/* Meta */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 28 }}>
            <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>{post.tag}</span>
            <span style={{ color: 'var(--okc-border)' }}>—</span>
            <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)' }}>{post.date} · {post.read}</span>
          </div>

          {/* Layout 2 colonnes : titre + illustration */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-1.5px', margin: '0 0 24px' }}>
                {post.title}
              </h1>
              {post.intro && (
                <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--okc-text-secondary)', margin: 0, maxWidth: '52ch' }}>
                  {post.intro}
                </p>
              )}
            </div>
            {/* Illustration */}
            {Illu && (
              <div style={{
                borderRadius: 4, overflow: 'hidden',
                border: '1px solid var(--okc-border)',
                aspectRatio: '4/3',
                alignSelf: 'end',
              }}>
                <Illu size={800} />
              </div>
            )}
          </div>
        </div>

        {/* Illustration pleine largeur sur mobile / petits écrans */}
      </header>

      {/* Corps article */}
      <article style={{ maxWidth: 720, margin: '0 auto', padding: '64px 56px 120px' }}>
        <Content />
      </article>

      {/* Autres articles */}
      <RelatedPosts current={post.slug} />

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--okc-border)', padding: '40px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1440, margin: '0 auto' }}>
        <span style={{ fontSize: 13, color: 'var(--okc-text-muted)' }}>© 2026 OKazCar</span>
        <Link to="/#install" style={{ fontSize: 13, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--okc-text-primary)', borderBottom: '1px solid var(--okc-text-primary)', paddingBottom: 2 }}>
          Installer l'extension →
        </Link>
      </footer>
    </div>
  )
}

function RelatedPosts({ current }) {
  const others = BLOG_POSTS.filter((p) => p.slug !== current).slice(0, 2)
  if (others.length === 0) return null
  return (
    <section style={{ borderTop: '1px solid var(--okc-border)', background: 'var(--okc-bg-light)', padding: '64px 56px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1.4, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--okc-text-muted)' }} />
          À lire aussi
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {others.map((p) => {
            const Illu = p.illustration
            return (
              <Link key={p.slug} to={`/blog/${p.slug}`} style={{
                borderTop: '1px solid var(--okc-text-primary)', paddingTop: 20,
                textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 16,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.72'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                {Illu && (
                  <div style={{ borderRadius: 4, overflow: 'hidden', border: '1px solid var(--okc-border)', aspectRatio: '16/9' }}>
                    <Illu size={600} />
                  </div>
                )}
                <div>
                  <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>{p.tag}</span>
                  <h3 style={{ fontSize: 20, fontWeight: 500, margin: '8px 0 0', letterSpacing: '-0.4px', lineHeight: 1.2, color: 'var(--okc-text-primary)' }}>{p.title}</h3>
                  <div style={{ marginTop: 12, fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
                    {p.date} · {p.read}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
