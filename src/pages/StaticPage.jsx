import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import OKCLogo from '../components/OKCLogo'
import { useLang } from '../context/lang'
import { getStaticPageContent } from '../data/staticPages'

const mono = {
  fontFamily: 'var(--okc-font-mono)',
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: 1,
  color: 'var(--okc-text-muted)',
}

export default function StaticPage({ pageKey }) {
  const { lang, lp } = useLang()
  const content = getStaticPageContent(lang, pageKey)
  const page = content[pageKey]

  useEffect(() => { window.scrollTo(0, 0) }, [pageKey, lang])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--okc-bg-white)' }}>
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--okc-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 56px', maxWidth: 1440, margin: '0 auto' }}>
          <Link to={lp('/')}><OKCLogo size={20} /></Link>
          <Link to={lp('/#install')} style={{ fontSize: 13, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, background: 'var(--okc-text-primary)', padding: '9px 18px', borderRadius: 2, color: '#fff' }}>
            {content.common.install}
          </Link>
        </div>
      </nav>

      <header style={{ padding: '80px 56px 40px', maxWidth: 1440, margin: '0 auto', borderBottom: '1px solid var(--okc-border)' }}>
        <div style={{ ...mono, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--okc-text-muted)' }} />
          {page.eyebrow}
        </div>
        <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 500, letterSpacing: '-2.2px', lineHeight: 0.98, margin: 0, maxWidth: '14ch' }}>
          {page.title}
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--okc-text-secondary)', marginTop: 24, maxWidth: '62ch' }}>
          {page.intro}
        </p>
        <div style={{ ...mono, marginTop: 16 }}>
          {content.common.updated} · {page.updated}
        </div>
      </header>

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '56px 24px 100px' }}>
        {page.sections.map((section) => (
          <section key={section.title} style={{ paddingBottom: 36, marginBottom: 36, borderBottom: '1px solid var(--okc-border)' }}>
            <h2 style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.8px', margin: 0 }}>
              {section.title}
            </h2>
            <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
              {section.body.map((paragraph, index) => (
                <p key={`${section.title}-${index}`} style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: 'var(--okc-text-secondary)' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer style={{ borderTop: '1px solid var(--okc-border)', padding: '32px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1440, margin: '0 auto', gap: 20, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, color: 'var(--okc-text-muted)' }}>© 2026 OKazCar</span>
        <Link to={lp('/')} style={{ ...mono, borderBottom: '1px solid var(--okc-text-primary)', paddingBottom: 2, color: 'var(--okc-text-primary)' }}>
          {content.common.home}
        </Link>
      </footer>
    </div>
  )
}
