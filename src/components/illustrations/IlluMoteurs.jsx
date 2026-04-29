const ENGINES = [
  { id: 'N47',   name: 'BMW N47 2.0d',        risk: 'fail',    pct: 92 },
  { id: 'PTC',   name: 'PSA PureTech 1.2',    risk: 'fail',    pct: 88 },
  { id: 'EA189', name: 'VW EA189 TDI',         risk: 'warning', pct: 64 },
  { id: 'K9K',   name: 'Renault K9K post-10', risk: 'warning', pct: 58 },
  { id: 'N20',   name: 'BMW N20 2.0i',         risk: 'warning', pct: 52 },
  { id: 'EB2',   name: 'Ford EcoBoost 1.0',   risk: 'warning', pct: 48 },
]

export default function IlluMoteurs({ size = 480 }) {
  const barH = 32
  const gap = 12
  const labelW = size * 0.28
  const barAreaW = size * 0.46
  const padX = size * 0.08
  const padY = size * 0.12

  const riskColor = (r) =>
    r === 'fail' ? 'var(--okc-fail)' : r === 'warning' ? 'var(--okc-warning)' : 'var(--okc-pass)'
  const riskBg = (r) =>
    r === 'fail' ? 'var(--okc-fail-bg)' : r === 'warning' ? 'var(--okc-warning-bg)' : 'var(--okc-pass-bg)'

  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <rect width={size} height={size} fill="var(--okc-bg-light)" />

      {/* Titre interne */}
      <text x={padX} y={padY - 8} fontSize={size * 0.022}
        fontFamily="var(--okc-font-mono)" fill="var(--okc-text-muted)"
        textTransform="uppercase" letterSpacing="1.5">
        INDICE DE RISQUE — FILTRE L12
      </text>
      <line x1={padX} y1={padY - 2} x2={size - padX} y2={padY - 2}
        stroke="var(--okc-border)" strokeWidth="1" />

      {ENGINES.map((e, i) => {
        const y = padY + i * (barH + gap) + 16
        const color = riskColor(e.risk)
        const bg = riskBg(e.risk)
        const barW = (e.pct / 100) * barAreaW

        return (
          <g key={e.id}>
            {/* ID mono */}
            <text x={padX} y={y + barH / 2} dominantBaseline="middle"
              fontSize={size * 0.022} fontFamily="var(--okc-font-mono)"
              fill="var(--okc-text-muted)" fontWeight="600">
              {e.id}
            </text>
            {/* Nom */}
            <text x={padX + size * 0.1} y={y + barH / 2} dominantBaseline="middle"
              fontSize={size * 0.024} fontFamily="var(--okc-font)"
              fill="var(--okc-text-primary)" fontWeight="500">
              {e.name}
            </text>
            {/* Barre fond */}
            <rect x={padX + labelW} y={y} width={barAreaW} height={barH}
              rx="2" fill="var(--okc-border)" fillOpacity="0.5" />
            {/* Barre remplie */}
            <rect x={padX + labelW} y={y} width={barW} height={barH}
              rx="2" fill={color} fillOpacity="0.18" />
            <rect x={padX + labelW} y={y} width={4} height={barH}
              rx="1" fill={color} />
            {/* Pct */}
            <text x={padX + labelW + barW + 8} y={y + barH / 2}
              dominantBaseline="middle" fontSize={size * 0.026}
              fontFamily="var(--okc-font-mono)" fill={color} fontWeight="700">
              {e.pct}%
            </text>
            {/* Badge risque */}
            <rect x={size - padX - 70} y={y + 4} width={70} height={barH - 8} rx="2"
              fill={bg} />
            <text x={size - padX - 35} y={y + barH / 2} textAnchor="middle"
              dominantBaseline="middle" fontSize={size * 0.019}
              fontFamily="var(--okc-font-mono)" fill={color} fontWeight="600" letterSpacing="0.5">
              {e.risk === 'fail' ? 'ÉLEVÉ' : 'MODÉRÉ'}
            </text>
          </g>
        )
      })}

      {/* Total */}
      <line x1={padX} y1={size * 0.84} x2={size - padX} y2={size * 0.84}
        stroke="var(--okc-border)" strokeWidth="1" />
      <text x={padX} y={size * 0.9} fontSize={size * 0.022}
        fontFamily="var(--okc-font-mono)" fill="var(--okc-text-muted)" letterSpacing="0.5">
        12 MOTORISATIONS EN BASE · MIS À JOUR v1.0.2026
      </text>
    </svg>
  )
}
