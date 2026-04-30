import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLang } from '../context/lang'
import { BLOG_POSTS } from '../data/blog'
import { BLOG_POSTS_EN } from '../data/blog.en'
import OKCLogo from '../components/OKCLogo'

const mono = {
  fontFamily: 'var(--okc-font-mono)',
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: 1,
  color: 'var(--okc-text-muted)',
}

export default function BlogPost() {
  const { slug } = useParams()
  const { lang, lp } = useLang()
  const { i18n } = useTranslation()
  const posts = lang === 'en' ? BLOG_POSTS_EN : BLOG_POSTS
  const post = posts.find((p) => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  const labels = lang === 'en'
    ? { back: '← Buying tips', install: 'Install →' }
    : { back: '← Conseils achat', install: 'Installer l\'extension →' }

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, fontFamily: 'var(--okc-font)' }}>
        <span style={{ ...mono }}>404</span>
        <h1 style={{ fontSize: 32, fontWeight: 500, margin: 0, letterSpacing: '-1px' }}>
          {lang === 'en' ? 'Article not found' : 'Article introuvable'}
        </h1>
        <Link to={lp('/blog')} style={{ ...mono, borderBottom: '1px solid var(--okc-text-muted)', paddingBottom: 2 }}>
          {labels.back}
        </Link>
      </div>
    )
  }

  const Content = post.component
  const Illu = post.illustration

  return (
    <div style={{ minHeight: '100vh', background: 'var(--okc-bg-white)' }}>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--okc-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 56px', maxWidth: 1440, margin: '0 auto' }}>
          <Link to={lp('/')}><OKCLogo size={20} /></Link>
          <Link to={lp('/blog')} style={{ ...mono }}>{labels.back}</Link>
        </div>
      </nav>

      {/* Header */}
      <header style={{ maxWidth: 1440, margin: '0 auto', padding: '72px 56px 0' }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 32 }}>
          <span style={{ ...mono }}>{post.tag}</span>
          <span style={{ color: 'var(--okc-border)' }}>—</span>
          <span style={{ ...mono }}>{post.date} · {post.read}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-2px', margin: '0 0 24px', maxWidth: '20ch' }}>
          {post.title}
        </h1>
        {post.intro && (
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--okc-text-secondary)', margin: '0 0 48px', maxWidth: '60ch' }}>
            {post.intro}
          </p>
        )}
        {Illu && (
          <div style={{ width: '100%', aspectRatio: '21/9', overflow: 'hidden', borderRadius: 4, border: '1px solid var(--okc-border)' }}>
            <Illu size={1200} />
          </div>
        )}
      </header>

      <div style={{ borderBottom: '1px solid var(--okc-border)', marginTop: 56 }} />

      {/* Corps article */}
      <article style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 120px' }}>
        <Content />
      </article>

      {/* Autres articles */}
      <RelatedPosts current={post.slug} posts={posts} lang={lang} lp={lp} />

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--okc-border)', padding: '40px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1440, margin: '0 auto' }}>
        <span style={{ fontSize: 13, color: 'var(--okc-text-muted)' }}>© 2026 OKazCar</span>
        <Link to={lp('/#install')} style={{ ...mono, borderBottom: '1px solid var(--okc-text-primary)', paddingBottom: 2, color: 'var(--okc-text-primary)' }}>
          {labels.install}
        </Link>
      </footer>
    </div>
  )
}

function RelatedPosts({ current, posts, lang, lp }) {
  const label = lang === 'en' ? 'Read next' : 'À lire aussi'
  const others = posts.filter((p) => p.slug !== current).slice(0, 2)
  if (others.length === 0) return null
  return (
    <section style={{ borderTop: '1px solid var(--okc-border)', background: 'var(--okc-bg-light)', padding: '64px 56px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1.4, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--okc-text-muted)' }} />
          {label}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {others.map((p) => {
            const Illu = p.illustration
            return (
              <Link key={p.slug} to={lp(`/blog/${p.slug}`)} style={{
                borderTop: '2px solid var(--okc-text-primary)', paddingTop: 20,
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
                  <div style={{ marginTop: 10, fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
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
