export default function IlluMobile({ size = 480 }) {
  const w = size
  const h = size * 0.56
  const phoneW = w * 0.22
  const phoneH = h * 0.82
  const phoneX = (w - phoneW) / 2
  const phoneY = (h - phoneH) / 2
  const r = phoneW * 0.12
  const mono = 'var(--okc-font-mono)'

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <rect width={w} height={h} fill="#f4f4f0" />

      {/* Background glow */}
      <ellipse cx={w / 2} cy={h / 2} rx={w * 0.25} ry={h * 0.45} fill="rgba(37,99,235,0.06)" />

      {/* Phone outline */}
      <rect x={phoneX} y={phoneY} width={phoneW} height={phoneH} rx={r}
        fill="#0f1117" stroke="rgba(255,255,255,0.1)" strokeWidth={1.5} />
      {/* Screen area */}
      <rect x={phoneX + phoneW * 0.06} y={phoneY + phoneH * 0.06}
        width={phoneW * 0.88} height={phoneH * 0.85}
        rx={r * 0.6} fill="#1a1d27" />

      {/* OKazCar header inside phone */}
      <rect x={phoneX + phoneW * 0.06} y={phoneY + phoneH * 0.06}
        width={phoneW * 0.88} height={phoneH * 0.16}
        rx={r * 0.6} fill="url(#phoneHeader)" />
      <defs>
        <linearGradient id="phoneHeader" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1e3a5f" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <text x={w / 2} y={phoneY + phoneH * 0.115} textAnchor="middle" dominantBaseline="middle"
        fontSize={phoneW * 0.14} fontWeight="700" fontFamily="var(--okc-font)" fill="#fff">
        OKaz<tspan fill="#fbbf24">Car</tspan>
      </text>

      {/* Score circle */}
      <circle cx={w / 2} cy={phoneY + phoneH * 0.37} r={phoneW * 0.26}
        fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={phoneW * 0.06} />
      <circle cx={w / 2} cy={phoneY + phoneH * 0.37} r={phoneW * 0.26}
        fill="none" stroke="#15803d" strokeWidth={phoneW * 0.06}
        strokeDasharray={`${phoneW * 0.26 * 2 * Math.PI * 0.84} ${phoneW * 0.26 * 2 * Math.PI * 0.16}`}
        strokeDashoffset={phoneW * 0.26 * 2 * Math.PI * 0.25}
        strokeLinecap="round" />
      <text x={w / 2} y={phoneY + phoneH * 0.36} textAnchor="middle" dominantBaseline="middle"
        fontSize={phoneW * 0.28} fontWeight="500" fontFamily="var(--okc-font)" fill="#fff">91</text>
      <text x={w / 2} y={phoneY + phoneH * 0.43} textAnchor="middle"
        fontSize={phoneW * 0.1} fontFamily={mono} fill="#15803d">/100</text>

      {/* Mini pills */}
      {[['✓ km', '#dcfce7', '#15803d'], ['✓ prix', '#dcfce7', '#15803d'], ['✓ SIRET', '#dcfce7', '#15803d']].map(([label, bg, col], i) => {
        const px = phoneX + phoneW * 0.08 + i * (phoneW * 0.29)
        return (
          <g key={i}>
            <rect x={px} y={phoneY + phoneH * 0.54} width={phoneW * 0.24} height={phoneH * 0.06} rx={2} fill={bg} />
            <text x={px + phoneW * 0.12} y={phoneY + phoneH * 0.572} textAnchor="middle" dominantBaseline="middle"
              fontSize={phoneW * 0.09} fontFamily="var(--okc-font)" fill={col} fontWeight="600">{label}</text>
          </g>
        )
      })}

      {/* Date badge */}
      <rect x={w / 2 - phoneW * 0.3} y={phoneY + phoneH * 0.66} width={phoneW * 0.6} height={phoneH * 0.07} rx={2}
        fill="rgba(37,99,235,0.2)" />
      <text x={w / 2} y={phoneY + phoneH * 0.697} textAnchor="middle" dominantBaseline="middle"
        fontSize={phoneW * 0.1} fontFamily={mono} fill="rgba(37,99,235,0.9)">JUIN 2026</text>

      {/* Side labels */}
      <text x={phoneX - w * 0.04} y={h * 0.35} textAnchor="end"
        fontSize={size * 0.018} fontFamily={mono} fill="rgba(15,23,42,0.3)">iOS</text>
      <text x={phoneX + phoneW + w * 0.04} y={h * 0.35} textAnchor="start"
        fontSize={size * 0.018} fontFamily={mono} fill="rgba(15,23,42,0.3)">Android</text>
      <line x1={phoneX - w * 0.02} y1={h * 0.34} x2={phoneX + 2} y2={h * 0.34}
        stroke="rgba(15,23,42,0.15)" strokeWidth={1} />
      <line x1={phoneX + phoneW - 2} y1={h * 0.34} x2={phoneX + phoneW + w * 0.02} y2={h * 0.34}
        stroke="rgba(15,23,42,0.15)" strokeWidth={1} />
    </svg>
  )
}
