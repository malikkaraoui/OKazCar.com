export default function IlluPrix({ size = 480 }) {
  const pad = size * 0.12
  const w = size - pad * 2
  const h = size * 0.52
  const baseY = pad + h

  // Distribution gaussienne simulée — prix de 8 000 à 18 000 €
  const points = [
    [0, 0.02], [0.08, 0.06], [0.16, 0.14], [0.24, 0.26],
    [0.32, 0.44], [0.40, 0.62], [0.48, 0.78], [0.52, 0.85],
    [0.56, 0.92], [0.60, 0.96], [0.64, 0.98], [0.68, 0.94],
    [0.72, 0.84], [0.78, 0.68], [0.84, 0.48], [0.90, 0.28],
    [0.95, 0.12], [1.0, 0.03],
  ]

  const toX = (t) => pad + t * w
  const toY = (v) => baseY - v * h

  const pathD = points.map(([t, v], i) =>
    `${i === 0 ? 'M' : 'L'} ${toX(t)} ${toY(v)}`
  ).join(' ')

  const fillD = pathD + ` L ${toX(1)} ${baseY} L ${toX(0)} ${baseY} Z`

  // Médiane nationale à 60% de la plage
  const nationX = toX(0.6)
  // Médiane régionale à 45% (plus précise, plus basse)
  const regionX = toX(0.45)
  // Prix annonce à 38%
  const annonceX = toX(0.38)

  // Labels prix
  const priceAt = (t) => Math.round(8000 + t * 10000)

  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <rect width={size} height={size} fill="var(--okc-bg-light)" />

      {/* Aire de distribution */}
      <path d={fillD} fill="var(--okc-primary)" fillOpacity="0.07" />
      <path d={pathD} fill="none" stroke="var(--okc-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Zone entre médiane régionale et nationale (highlight) */}
      <rect x={regionX} y={pad} width={nationX - regionX} height={h}
        fill="var(--okc-warning)" fillOpacity="0.08" />

      {/* Médiane nationale — trait pointillé gris */}
      <line x1={nationX} y1={pad - 8} x2={nationX} y2={baseY + 24}
        stroke="var(--okc-text-muted)" strokeWidth="1.5" strokeDasharray="5,4" />
      <text x={nationX + 6} y={pad + 14} fontSize={size * 0.022}
        fontFamily="var(--okc-font-mono)" fill="var(--okc-text-muted)" letterSpacing="0.5">
        Argus national
      </text>
      <text x={nationX + 6} y={pad + 30} fontSize={size * 0.026}
        fontFamily="var(--okc-font-mono)" fill="var(--okc-text-muted)" fontWeight="600">
        {priceAt(0.6).toLocaleString('fr-FR')} €
      </text>

      {/* Médiane régionale — trait primary */}
      <line x1={regionX} y1={pad - 8} x2={regionX} y2={baseY + 24}
        stroke="var(--okc-primary)" strokeWidth="2" />
      <text x={regionX - 6} y={pad + 14} fontSize={size * 0.022}
        fontFamily="var(--okc-font-mono)" fill="var(--okc-primary)" letterSpacing="0.5" textAnchor="end">
        Médiane régionale
      </text>
      <text x={regionX - 6} y={pad + 30} fontSize={size * 0.026}
        fontFamily="var(--okc-font-mono)" fill="var(--okc-primary)" fontWeight="600" textAnchor="end">
        {priceAt(0.45).toLocaleString('fr-FR')} €
      </text>

      {/* Annonce — marqueur vert */}
      <line x1={annonceX} y1={pad - 8} x2={annonceX} y2={baseY + 24}
        stroke="var(--okc-pass)" strokeWidth="2.5" />
      <circle cx={annonceX} cy={toY(0.32)} r={6} fill="var(--okc-pass)" />
      <text x={annonceX - 8} y={toY(0.32) - 14} fontSize={size * 0.022}
        fontFamily="var(--okc-font-mono)" fill="var(--okc-pass)" fontWeight="600" textAnchor="end">
        Annonce
      </text>
      <text x={annonceX - 8} y={toY(0.32) + 2} fontSize={size * 0.026}
        fontFamily="var(--okc-font-mono)" fill="var(--okc-pass)" fontWeight="600" textAnchor="end">
        {priceAt(0.38).toLocaleString('fr-FR')} €
      </text>

      {/* Axe X */}
      <line x1={pad} y1={baseY} x2={pad + w} y2={baseY}
        stroke="var(--okc-border)" strokeWidth="1" />
      <text x={pad} y={baseY + 18} fontSize={size * 0.019}
        fontFamily="var(--okc-font-mono)" fill="var(--okc-text-muted)">
        8 000 €
      </text>
      <text x={pad + w} y={baseY + 18} fontSize={size * 0.019}
        fontFamily="var(--okc-font-mono)" fill="var(--okc-text-muted)" textAnchor="end">
        18 000 €
      </text>

      {/* Badge delta */}
      <rect x={size * 0.5} y={size * 0.76} width={size * 0.38} height={size * 0.1} rx="2"
        fill="var(--okc-pass-bg)" stroke="var(--okc-pass)" strokeWidth="1" />
      <text x={size * 0.5 + size * 0.19} y={size * 0.76 + size * 0.038}
        textAnchor="middle" dominantBaseline="middle"
        fontSize={size * 0.022} fontFamily="var(--okc-font-mono)" fill="var(--okc-pass)" fontWeight="600" letterSpacing="0.5">
        ↓ -{Math.round(((priceAt(0.45) - priceAt(0.38)) / priceAt(0.45)) * 100)}% vs marché régional
      </text>

      {/* Légende delta */}
      <text x={cx(size)} y={size * 0.92} textAnchor="middle"
        fontSize={size * 0.02} fontFamily="var(--okc-font-mono)"
        fill="var(--okc-text-muted)" letterSpacing="1">
        DISTRIBUTION DES PRIX — MÊME MODÈLE, RAYON 30KM
      </text>
    </svg>
  )
}

function cx(size) { return size / 2 }
