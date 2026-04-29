const AXES = ['Données', 'Modèle', 'KM', 'Prix', 'Confiance', 'Téléphone', 'SIRET', 'Import', 'Scan', 'Ancienneté', 'Rappel', 'Moteur']
const DEFAULT_SCORES = [100, 100, 90, 100, 100, 100, 100, 100, 100, 0, 100, 100]

export default function RadarMini({ score = 97, size = 200, scores }) {
  const vals = scores || DEFAULT_SCORES
  const N = AXES.length
  const cx = size / 2
  const cy = size / 2
  const R = size * 0.36
  const angle = (i) => (Math.PI * 2 * i) / N - Math.PI / 2
  const pt = (i, v) => {
    const r = R * (v / 100)
    return [cx + Math.cos(angle(i)) * r, cy + Math.sin(angle(i)) * r]
  }
  const ringPts = (radius) =>
    Array.from({ length: N })
      .map((_, i) => `${cx + Math.cos(angle(i)) * radius},${cy + Math.sin(angle(i)) * radius}`)
      .join(' ')

  const dataPts = vals.map((v, i) => pt(i, v).join(',')).join(' ')
  const color = score >= 80 ? 'var(--okc-pass)' : score >= 60 ? 'var(--okc-warning)' : 'var(--okc-fail)'

  return (
    <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size, overflow: 'visible' }}>
        {[0.25, 0.5, 0.75, 1].map((f, i) => (
          <polygon key={i} points={ringPts(R * f)} fill="none" stroke="var(--okc-border)" strokeWidth="1" />
        ))}
        {Array.from({ length: N }).map((_, i) => {
          const x = cx + Math.cos(angle(i)) * R
          const y = cy + Math.sin(angle(i)) * R
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--okc-border)" strokeWidth="1" />
        })}
        <polygon points={dataPts} fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
        {vals.map((v, i) => {
          const [x, y] = pt(i, v)
          const dotColor = v < 30 ? 'var(--okc-fail)' : v < 80 ? 'var(--okc-warning)' : color
          return <circle key={i} cx={x} cy={y} r="2.5" fill={dotColor} />
        })}
        {AXES.map((label, i) => {
          const r = R + 14
          const x = cx + Math.cos(angle(i)) * r
          const y = cy + Math.sin(angle(i)) * r
          const v = vals[i]
          const lc = v < 30 ? 'var(--okc-fail)' : v < 80 ? 'var(--okc-warning)' : 'var(--okc-text-secondary)'
          return (
            <text key={i} x={x} y={y} fontSize="8" fill={lc}
              textAnchor="middle" dominantBaseline="middle"
              fontFamily="var(--okc-font)" fontWeight="500">
              {label}
            </text>
          )
        })}
      </svg>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center', pointerEvents: 'none',
      }}>
        <div style={{ fontSize: size * 0.18, fontWeight: 500, lineHeight: 1, letterSpacing: '-1px', color }}>
          {score}
        </div>
        <div style={{ fontSize: 8, fontFamily: 'var(--okc-font-mono)', color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginTop: 2 }}>
          /100
        </div>
      </div>
    </div>
  )
}
