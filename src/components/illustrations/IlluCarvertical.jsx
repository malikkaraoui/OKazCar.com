export default function IlluCarvertical({ size = 480 }) {
  const w = size
  const h = size * 0.56
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {/* Left half — dark, rétroviseur */}
      <rect width={w / 2} height={h} fill="#0f1117" />
      {/* Right half — light, OKazCar */}
      <rect x={w / 2} width={w / 2} height={h} fill="#f4f4f0" />
      {/* Divider */}
      <line x1={w / 2} y1={0} x2={w / 2} y2={h} stroke="rgba(255,255,255,0.15)" strokeWidth={1} />

      {/* LEFT — Rétroviseur label */}
      <text x={w * 0.04} y={h * 0.12} fontSize={size * 0.018} fontFamily="var(--okc-font-mono)" fill="rgba(255,255,255,0.3)" textTransform="uppercase" letterSpacing="2">
        HISTORIQUE
      </text>
      {/* Oval mirror shape */}
      <ellipse cx={w * 0.25} cy={h * 0.52} rx={w * 0.16} ry={h * 0.3} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={1.5} />
      {/* Timeline inside mirror */}
      {[0.3, 0.45, 0.6, 0.75].map((y, i) => (
        <g key={i}>
          <circle cx={w * 0.22} cy={h * y} r={size * 0.012} fill={i === 3 ? 'rgba(251,191,36,0.8)' : 'rgba(255,255,255,0.25)'} />
          <line x1={w * 0.234} y1={h * y} x2={w * 0.31} y2={h * y} stroke="rgba(255,255,255,0.15)" strokeWidth={1} />
        </g>
      ))}
      <text x={w * 0.22} y={h * 0.87} textAnchor="middle" fontSize={size * 0.022} fontFamily="var(--okc-font-mono)" fill="rgba(251,191,36,0.7)">!</text>

      {/* RIGHT — OKazCar label */}
      <text x={w * 0.54} y={h * 0.12} fontSize={size * 0.018} fontFamily="var(--okc-font-mono)" fill="rgba(15,23,42,0.35)" letterSpacing="2">
        ANNONCE EN COURS
      </text>
      {/* Mini score circle */}
      <circle cx={w * 0.75} cy={h * 0.46} r={h * 0.25} fill="#fff" stroke="rgba(0,0,0,0.08)" strokeWidth={1} />
      <circle cx={w * 0.75} cy={h * 0.46} r={h * 0.25} fill="none" stroke="#15803d" strokeWidth={3}
        strokeDasharray={`${h * 0.25 * 2 * Math.PI * 0.88} ${h * 0.25 * 2 * Math.PI * 0.12}`}
        strokeDashoffset={h * 0.25 * 2 * Math.PI * 0.25}
        strokeLinecap="round"
      />
      <text x={w * 0.75} y={h * 0.44} textAnchor="middle" dominantBaseline="middle" fontSize={size * 0.06} fontWeight="500" fontFamily="var(--okc-font)" fill="#0a0a0a">82</text>
      <text x={w * 0.75} y={h * 0.6} textAnchor="middle" fontSize={size * 0.018} fontFamily="var(--okc-font-mono)" fill="#15803d">/100</text>

      {/* Pills row */}
      {[['✓ prix OK', '#dcfce7', '#15803d'], ['✓ km OK', '#dcfce7', '#15803d'], ['⚠ import', '#fef9c3', '#854d0e']].map(([label, bg, col], i) => {
        const px = w * 0.54 + i * (w * 0.14)
        return (
          <g key={i}>
            <rect x={px} y={h * 0.78} width={w * 0.12} height={h * 0.1} rx={3} fill={bg} />
            <text x={px + w * 0.06} y={h * 0.835} textAnchor="middle" dominantBaseline="middle" fontSize={size * 0.016} fontFamily="var(--okc-font)" fill={col} fontWeight="500">{label}</text>
          </g>
        )
      })}
    </svg>
  )
}
