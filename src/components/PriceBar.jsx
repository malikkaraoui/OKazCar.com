import { useState, useEffect, useRef } from 'react'

const fmt = (n) => new Intl.NumberFormat('fr-FR').format(n) + ' €'

export default function PriceBar({
  marketMin = 11500, marketMax = 14800, ref_ = 13200, current = 12490, animateInView = true
}) {
  const [progress, setProgress] = useState(animateInView ? 0 : 1)
  const root = useRef()

  useEffect(() => {
    if (!animateInView) { setProgress(1); return }
    let raf
    const run = () => {
      const t0 = performance.now()
      const dur = 1600
      const tick = (now) => {
        const t = Math.min((now - t0) / dur, 1)
        setProgress(1 - Math.pow(1 - t, 3))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { run(); io.disconnect() }
    }, { threshold: 0.4 })
    if (root.current) io.observe(root.current)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [animateInView])

  const range = marketMax - marketMin
  const refPct = ((ref_ - marketMin) / range) * 100
  const curPct = ((current - marketMin) / range) * 100
  const discount = Math.round(((ref_ - current) / ref_) * 100)

  return (
    <div ref={root} style={{ width: '100%' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--okc-font-mono)', fontSize: 11,
        color: 'var(--okc-text-muted)', marginBottom: 12,
        textTransform: 'uppercase', letterSpacing: '1px',
      }}>
        <span>{fmt(marketMin)}</span>
        <span>Marché — {fmt(ref_)}</span>
        <span>{fmt(marketMax)}</span>
      </div>
      <div style={{ position: 'relative', height: 8, background: 'var(--okc-bg-light)', borderRadius: 99, border: '1px solid var(--okc-border)' }}>
        <div style={{ position: 'absolute', left: `${refPct}%`, top: -6, bottom: -6, width: 2, background: 'var(--okc-text-muted)', opacity: 0.5 }} />
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: `${curPct * progress}%`,
          background: 'var(--okc-pass)',
          borderRadius: 99,
          transition: 'background 0.3s',
        }} />
        <div style={{
          position: 'absolute', left: `${curPct * progress}%`, top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 18, height: 18, borderRadius: '50%',
          background: 'var(--okc-text-primary)',
          border: '3px solid var(--okc-bg-white)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 16 }}>
        <div>
          <div style={{ fontSize: 11, fontFamily: 'var(--okc-font-mono)', color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Annonce</div>
          <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.5px', marginTop: 2 }}>{fmt(current)}</div>
        </div>
        <span className="okc-pill okc-pill--pass">↓ {discount}% sous le marché</span>
      </div>
    </div>
  )
}
