const REGIONS = [
  { label: 'Île-de-France', delta: '+8%', color: '#dc2626' },
  { label: 'Auvergne-RA', delta: '+3%', color: '#f59e0b' },
  { label: 'Alsace', delta: '-11%', color: '#15803d' },
  { label: 'Bretagne', delta: '-4%', color: '#16a34a' },
  { label: 'PACA', delta: '+5%', color: '#f59e0b' },
  { label: "Nord", delta: '-2%', color: '#16a34a' },
]

export default function IlluApiPro({ size = 480 }) {
  const w = size
  const h = size * 0.56
  const mono = 'var(--okc-font-mono)'
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <rect width={w} height={h} fill="#0f1117" rx={0} />

      {/* Header bar */}
      <rect width={w} height={h * 0.14} fill="#1a1d27" />
      <text x={w * 0.04} y={h * 0.09} dominantBaseline="middle" fontSize={size * 0.022} fontFamily={mono} fill="rgba(255,255,255,0.5)" letterSpacing="1">
        OKazCar  <tspan fill="#fbbf24">PRO</tspan>  API  —  toyota yaris  /  &lt;8000€
      </text>

      {/* Region grid */}
      {REGIONS.map((r, i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const cx = w * 0.06 + col * (w * 0.31)
        const cy = h * 0.24 + row * (h * 0.32)
        const isHot = r.delta.startsWith('-')
        return (
          <g key={i}>
            <rect x={cx} y={cy} width={w * 0.27} height={h * 0.24}
              rx={3} fill={isHot ? 'rgba(21,128,61,0.12)' : 'rgba(255,255,255,0.04)'}
              stroke={isHot ? 'rgba(21,128,61,0.4)' : 'rgba(255,255,255,0.06)'} strokeWidth={1} />
            <text x={cx + w * 0.135} y={cy + h * 0.07} textAnchor="middle"
              fontSize={size * 0.017} fontFamily={mono} fill="rgba(255,255,255,0.35)">{r.label}</text>
            <text x={cx + w * 0.135} y={cy + h * 0.155} textAnchor="middle"
              fontSize={size * 0.044} fontWeight="500" fontFamily="var(--okc-font)"
              fill={r.color}>{r.delta}</text>
            {isHot && (
              <text x={cx + w * 0.135} y={cy + h * 0.215} textAnchor="middle"
                fontSize={size * 0.014} fontFamily={mono} fill="rgba(21,128,61,0.7)">vs votre marché</text>
            )}
          </g>
        )
      })}

      {/* Alert badge bottom right */}
      <rect x={w * 0.62} y={h * 0.74} width={w * 0.34} height={h * 0.2} rx={3}
        fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.4)" strokeWidth={1} />
      <text x={w * 0.79} y={h * 0.805} textAnchor="middle"
        fontSize={size * 0.014} fontFamily={mono} fill="rgba(255,255,255,0.4)">ALERTE ACTIVE</text>
      <text x={w * 0.79} y={h * 0.855} textAnchor="middle"
        fontSize={size * 0.02} fontFamily={mono} fill="rgba(255,255,255,0.8)">3 annonces &gt; 85/100</text>
      <text x={w * 0.79} y={h * 0.9} textAnchor="middle"
        fontSize={size * 0.016} fontFamily={mono} fill="rgba(37,99,235,0.9)">région Alsace</text>
    </svg>
  )
}
