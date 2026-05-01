const DOMAINS = [
  'leboncoin.fr', 'lacentrale.fr', 'paruvendu.fr',
  'autoscout24.fr', 'autoscout24.com', 'autoscout24.ch',
  'autoscout24.be', 'autoscout24.it', 'autoscout24.nl',
  'autoscout24.at', 'autoscout24.es', 'autoscout24.pl',
  'autoscout24.lu', 'autoscout24.de', 'autoscout24.se',
]

export default function Marquee() {
  const items = [...DOMAINS, ...DOMAINS]
  return (
    <div className="okc-marquee" onMouseDown={e => e.preventDefault()} style={{ borderTop: '1px solid var(--okc-border)', borderBottom: '1px solid var(--okc-border)', padding: '16px 0', userSelect: 'none', WebkitUserSelect: 'none' }}>
      <div className="okc-marquee-track">
        {items.map((domain, i) => (
          <span key={i}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--okc-text-primary)', display: 'inline-block', flexShrink: 0 }} />
            {domain}
            <span style={{ opacity: 0.35 }}>/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
