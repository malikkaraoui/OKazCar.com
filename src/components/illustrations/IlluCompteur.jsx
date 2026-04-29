export default function IlluCompteur({ size = 480 }) {
  const cx = size / 2
  const cy = size * 0.52
  const R = size * 0.34
  // Arc de fond (180°)
  const arcPath = (r, startDeg, endDeg) => {
    const s = (startDeg * Math.PI) / 180
    const e = (endDeg * Math.PI) / 180
    const x1 = cx + r * Math.cos(s)
    const y1 = cy + r * Math.sin(s)
    const x2 = cx + r * Math.cos(e)
    const y2 = cy + r * Math.sin(e)
    return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`
  }
  // Aiguille suspecte pointant vers un km très bas (angle ~-160°)
  const needleAngle = -155
  const needleRad = (needleAngle * Math.PI) / 180
  const nx = cx + R * 0.78 * Math.cos(needleRad)
  const ny = cy + R * 0.78 * Math.sin(needleRad)

  // Marques de graduation
  const ticks = Array.from({ length: 7 }, (_, i) => {
    const deg = -180 + i * 30
    const rad = (deg * Math.PI) / 180
    const inner = R * 0.88
    const outer = R
    return {
      x1: cx + inner * Math.cos(rad), y1: cy + inner * Math.sin(rad),
      x2: cx + outer * Math.cos(rad), y2: cy + outer * Math.sin(rad),
      label: i * 50,
      lx: cx + (R + 22) * Math.cos(rad),
      ly: cy + (R + 22) * Math.sin(rad),
    }
  })

  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {/* Fond */}
      <rect width={size} height={size} fill="var(--okc-bg-light)" />

      {/* Arc piste principale */}
      <path d={arcPath(R, -180, 0)} fill="none" stroke="var(--okc-border)" strokeWidth="2" />

      {/* Zone "suspect" rouge (0–50 km pour un vieux véhicule) */}
      <path d={arcPath(R * 0.94, -180, -150)} fill="none" stroke="var(--okc-fail)" strokeWidth="8" strokeLinecap="round" opacity="0.7" />

      {/* Graduation */}
      {ticks.map((t, i) => (
        <g key={i}>
          <line x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="var(--okc-text-primary)" strokeWidth="1.5" />
          <text x={t.lx} y={t.ly} textAnchor="middle" dominantBaseline="middle"
            fontSize={size * 0.022} fill="var(--okc-text-muted)"
            fontFamily="var(--okc-font-mono)" fontWeight="500">
            {t.label}
          </text>
        </g>
      ))}

      {/* Aiguille */}
      <line x1={cx} y1={cy} x2={nx} y2={ny}
        stroke="var(--okc-fail)" strokeWidth="3" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={size * 0.02} fill="var(--okc-text-primary)" />

      {/* Valeur affichée (trafiquée) */}
      <text x={cx} y={cy + R * 0.45} textAnchor="middle"
        fontSize={size * 0.055} fontWeight="500" letterSpacing="-2"
        fontFamily="var(--okc-font-mono)" fill="var(--okc-text-primary)">
        24 000
      </text>
      <text x={cx} y={cy + R * 0.6} textAnchor="middle"
        fontSize={size * 0.022} fill="var(--okc-text-muted)"
        fontFamily="var(--okc-font-mono)" textTransform="uppercase" letterSpacing="2">
        KM
      </text>

      {/* Étiquette suspect */}
      <rect x={cx - 52} y={cy - R * 0.08} width={104} height={28} rx="2"
        fill="var(--okc-fail-bg)" stroke="var(--okc-fail)" strokeWidth="1" />
      <text x={cx} y={cy - R * 0.08 + 14} textAnchor="middle" dominantBaseline="middle"
        fontSize={size * 0.022} fill="var(--okc-fail)"
        fontFamily="var(--okc-font-mono)" fontWeight="600" letterSpacing="1">
        SUSPECT
      </text>

      {/* Trait déco bas */}
      <line x1={size * 0.1} y1={size * 0.88} x2={size * 0.9} y2={size * 0.88}
        stroke="var(--okc-border)" strokeWidth="1" />
      <text x={cx} y={size * 0.93} textAnchor="middle"
        fontSize={size * 0.02} fill="var(--okc-text-muted)"
        fontFamily="var(--okc-font-mono)" letterSpacing="1.5">
        VÉHICULE 8 ANS — COHÉRENCE KM/AN : FAIL
      </text>
    </svg>
  )
}
