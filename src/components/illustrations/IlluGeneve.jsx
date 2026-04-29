const LINES = [
  { t: 'comment',  text: '# leboncoin scraper — Noamdes Tech, Genève', color: 'var(--okc-text-muted)' },
  { t: 'import',   text: 'import requests, re, statistics', color: '#7dd3fc' },
  { t: 'blank',    text: '' },
  { t: 'comment',  text: '# L1 — Extraction', color: 'var(--okc-text-muted)' },
  { t: 'code',     text: 'km   = extract_km(soup)', color: 'var(--okc-text-white)' },
  { t: 'code',     text: 'year = extract_year(soup)', color: 'var(--okc-text-white)' },
  { t: 'code',     text: 'price = extract_price(soup)', color: 'var(--okc-text-white)' },
  { t: 'blank',    text: '' },
  { t: 'comment',  text: '# L3 — Cohérence km/an', color: 'var(--okc-text-muted)' },
  { t: 'code',     text: 'avg = km / (2024 - year)', color: 'var(--okc-text-white)' },
  { t: 'check',    text: 'if avg < 3000 or avg > 35000:', color: '#fbbf24' },
  { t: 'result',   text: '    flag("SUSPECT")', color: 'var(--okc-fail)' },
  { t: 'blank',    text: '' },
  { t: 'comment',  text: '# L4 — Prix vs marché local', color: 'var(--okc-text-muted)' },
  { t: 'code',     text: 'refs = fetch_similar(model, region)', color: 'var(--okc-text-white)' },
  { t: 'code',     text: 'median = statistics.median(refs)', color: 'var(--okc-text-white)' },
  { t: 'check',    text: 'delta = (price - median) / median', color: '#7dd3fc' },
  { t: 'output',   text: '>>> delta = -0.052  ✓ Bonne affaire', color: 'var(--okc-pass)' },
]

export default function IlluGeneve({ size = 480 }) {
  const lineH = size * 0.042
  const padX = size * 0.06
  const padY = size * 0.08
  const fontSize = size * 0.026

  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {/* Terminal bg */}
      <rect width={size} height={size} fill="#0f1117" rx="0" />

      {/* Window bar */}
      <rect width={size} height={size * 0.1} fill="#1a1d27" />
      <circle cx={size * 0.06} cy={size * 0.05} r={size * 0.018} fill="#fc615d" />
      <circle cx={size * 0.11} cy={size * 0.05} r={size * 0.018} fill="#fdbc40" />
      <circle cx={size * 0.16} cy={size * 0.05} r={size * 0.018} fill="#34c84a" />
      <text x={size * 0.5} y={size * 0.05} textAnchor="middle" dominantBaseline="middle"
        fontSize={fontSize * 0.85} fontFamily="var(--okc-font-mono)" fill="rgba(255,255,255,0.4)">
        okazcar_proto.py — Python 3.11 — Noamdes Technologie, Genève
      </text>

      {/* Lignes de code */}
      {LINES.map((line, i) => {
        const y = padY + size * 0.1 + i * lineH + lineH / 2
        if (y > size - padY) return null
        return (
          <g key={i}>
            {/* Numéro de ligne */}
            <text x={padX} y={y} dominantBaseline="middle"
              fontSize={fontSize * 0.8} fontFamily="var(--okc-font-mono)"
              fill="rgba(255,255,255,0.2)" textAnchor="end">
              {i + 1}
            </text>
            {/* Code */}
            <text x={padX + size * 0.02} y={y} dominantBaseline="middle"
              fontSize={fontSize} fontFamily="var(--okc-font-mono)"
              fill={line.color || 'rgba(255,255,255,0.85)'}>
              {line.text}
            </text>
          </g>
        )
      })}

      {/* Curseur clignotant */}
      <rect
        x={padX + size * 0.02 + fontSize * 8.4 * 0.62}
        y={padY + size * 0.1 + LINES.length * lineH}
        width={fontSize * 0.55}
        height={fontSize * 1.15}
        fill="rgba(255,255,255,0.75)"
      />
    </svg>
  )
}
