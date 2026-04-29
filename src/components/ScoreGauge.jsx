import { useState, useEffect, useRef } from 'react'

export default function ScoreGauge({ score = 97, size = 220, strokeW = 12, label = 'Annonce fiable', animateInView = true }) {
  const [drawn, setDrawn] = useState(animateInView ? 0 : score)
  const ref = useRef()

  useEffect(() => {
    if (!animateInView) { setDrawn(score); return }
    let raf
    const start = () => {
      const t0 = performance.now()
      const dur = 1400
      const tick = (now) => {
        const t = Math.min((now - t0) / dur, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setDrawn(score * eased)
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { start(); io.disconnect() }
    }, { threshold: 0.4 })
    if (ref.current) io.observe(ref.current)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [score, animateInView])

  const r = (size - strokeW) / 2
  const c = 2 * Math.PI * r
  const color = drawn >= 80 ? 'var(--okc-pass)' : drawn >= 60 ? 'var(--okc-warning)' : 'var(--okc-fail)'
  const dash = c * (drawn / 100)

  return (
    <div ref={ref} style={{ position: 'relative', width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size, transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--okc-border)" strokeWidth={strokeW} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={strokeW}
          strokeDasharray={`${dash} ${c}`} strokeLinecap="round"
          style={{ transition: 'stroke 0.3s' }} />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      }}>
        <div style={{ fontSize: size * 0.34, fontWeight: 500, lineHeight: 1, letterSpacing: '-2px' }}>
          {Math.round(drawn)}
        </div>
        <div style={{ fontSize: 11, fontFamily: 'var(--okc-font-mono)', color: 'var(--okc-text-muted)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '1px' }}>
          /100
        </div>
        {label && (
          <div style={{ fontSize: 13, color, marginTop: 8, fontWeight: 500 }}>{label}</div>
        )}
      </div>
    </div>
  )
}
