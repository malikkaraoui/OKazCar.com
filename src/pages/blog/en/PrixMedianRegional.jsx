function H2({ children }) {
  return <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.8px', marginTop: 56, marginBottom: 16, lineHeight: 1.15 }}>{children}</h2>
}
function P({ children }) {
  return <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--okc-text-secondary)', margin: '0 0 20px' }}>{children}</p>
}
function Callout({ children }) {
  return (
    <div style={{ background: 'var(--okc-bg-light)', border: '1px solid var(--okc-border)', borderLeft: '3px solid var(--okc-primary)', borderRadius: 4, padding: '18px 24px', margin: '32px 0' }}>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}
function Threshold({ label, detail }) {
  return (
    <div style={{ borderTop: '1px solid var(--okc-border)', paddingTop: 20, marginTop: 20, display: 'flex', gap: 20, alignItems: 'baseline' }}>
      <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--okc-text-primary)', minWidth: 90, flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--okc-text-secondary)' }}>{detail}</span>
    </div>
  )
}

export default function PrixMedianRegional() {
  return (
    <>
      <P>
        When you look for the "right price" on a used car, your first instinct is probably to check the official pricing guide (l'Argus). That makes sense: the Argus valuation is the historical benchmark of the French market, in use since 1927, cited in financing contracts, and recognised by insurers. But it has a structural flaw that few buyers notice: it calculates a national price.
      </P>
      <P>
        Yet the used-car market is deeply regional.
      </P>

      <H2>The national valuation bias</H2>
      <P>
        A Clio IV 1.5 dCi 90hp Energy in good condition sells for an average of €8,500 in Île-de-France, €7,200 in Lorraine, and €7,800 in Brittany. This is not an anecdote — it is a structural trend driven by population density, local purchasing power, supply availability, and relative demand. The Argus calculates a weighted national average which, in this case, comes out around €7,900 — a price that almost nobody actually pays anywhere.
      </P>
      <P>
        If you are a buyer in the Moselle département negotiating on the basis of a national valuation, you are probably overestimating the car's value. If you are a seller in the Paris region, you may be undervaluing your own vehicle.
      </P>

      <H2>What OKazCar does differently</H2>
      <P>
        The analysis engine includes two filters dedicated to price analysis: L4 (position of the price within the regional range) and L5 (consistency with the vehicle's specific characteristics). These filters do not consult the Argus — they query our own database of prices collected in real time from listings published in France.
      </P>
      <P>
        The calculation uses a z-score: for each listing analysed, we calculate how many standard deviations its price sits above or below the median of similar listings in the same region (or within a 150 km radius if the regional sample is too small). A z-score of 0 means the price is exactly at the median. A z-score of +1.5 means the car is being sold 50% above the regional median.
      </P>

      <H2>The three sample reliability levels</H2>
      <P>
        For the comparison to be statistically meaningful, we have defined three thresholds based on engine output:
      </P>
      <div style={{ margin: '24px 0 32px' }}>
        <Threshold label="Standard" detail="Under 300 hp — minimum 20 listings within the regional window." />
        <Threshold label="Niche" detail="300 to 420 hp — minimum 10 listings. High-powered vehicles are less common, so the geographic window expands automatically." />
        <Threshold label="Ultra-niche" detail="Over 420 hp — minimum 5 listings. These are cases like second-hand Porsche 911 Turbos, Ferraris, or Lamborghinis — the market is national or even international." />
      </div>

      <Callout>
        If the sample is insufficient, OKazCar does not generate an artificial price score. It states this explicitly — which is honestly more useful than a figure calculated from 3 listings.
      </Callout>

      <H2>Why the median and not the mean?</H2>
      <P>
        Because the used-car market contains outliers: a damaged car sold 30% below market, an enthusiast who overvalues their vehicle by 40%. The mean is sensitive to these extreme values. The median, by contrast, represents the price at which half of similar vehicles are cheaper and the other half more expensive. That is the true market price.
      </P>
      <P>
        In practice: if OKazCar shows "Price slightly above regional market (+12%)", it means that among recent similar listings in your area, 50% are 12% cheaper. That is information you can use directly in negotiation.
      </P>
      <P>
        Next time you look at a listing, before opening the Argus, run an OKazCar analysis. The national valuation is a starting point — the local market is the reality.
      </P>
    </>
  )
}
