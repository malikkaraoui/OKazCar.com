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
        Quand vous cherchez le "juste prix" d'une voiture d'occasion, votre premier réflexe est probablement de consulter l'Argus. C'est logique : la cote Argus est la référence historique du marché français, utilisée depuis 1927, citée dans les contrats de financement, reconnue par les assureurs. Mais elle a un défaut structurel que peu d'acheteurs réalisent : elle calcule un prix national.
      </P>
      <P>
        Or le marché de l'occasion est profondément régional.
      </P>

      <H2>Le biais de la cote nationale</H2>
      <P>
        Une Clio IV 1.5 dCi 90ch Energy en bon état se vend en moyenne 8 500 € en Île-de-France, 7 200 € en Lorraine et 7 800 € en Bretagne. Ce n'est pas une anecdote — c'est une tendance structurelle liée à la densité démographique, au niveau de vie local, à la disponibilité de l'offre et à la demande relative. L'Argus calcule une moyenne nationale pondérée qui, dans ce cas, donnera quelque chose autour de 7 900 €, c'est-à-dire un prix que personne ne paie vraiment nulle part.
      </P>
      <P>
        Si vous êtes acheteur en Moselle et que vous négociez sur la base d'une cote nationale, vous surestimez probablement la valeur du véhicule. Si vous êtes vendeur en région parisienne, vous sous-évaluez peut-être le vôtre.
      </P>

      <H2>Ce que fait OKazCar différemment</H2>
      <P>
        Le moteur d'analyse intègre deux filtres dédiés à l'analyse de prix : L4 (position du prix dans la fourchette régionale) et L5 (cohérence avec les caractéristiques spécifiques du véhicule). Ces filtres ne consultent pas l'Argus — ils interrogent notre propre base de prix collectés en temps réel sur les annonces publiées en France.
      </P>
      <P>
        Le calcul utilise un z-score : pour chaque annonce analysée, on calcule combien d'écarts-types son prix se situe au-dessus ou en dessous de la médiane des annonces similaires dans la même région (ou dans un rayon de 150 km si l'échantillon régional est trop faible). Un z-score de 0 signifie que le prix est exactement dans la médiane. Un z-score de +1.5 signifie que la voiture est vendue 50 % plus cher que la médiane régionale.
      </P>

      <H2>Les trois niveaux de fiabilité de l'échantillon</H2>
      <P>
        Pour que la comparaison soit statistiquement significative, nous avons défini trois seuils selon la puissance du véhicule :
      </P>
      <div style={{ margin: '24px 0 32px' }}>
        <Threshold label="Standard" detail="Moins de 300 ch — 20 annonces minimum dans la fenêtre régionale." />
        <Threshold label="Niche" detail="300 à 420 ch — 10 annonces minimum. Les véhicules puissants sont moins courants, la fenêtre géographique s'élargit automatiquement." />
        <Threshold label="Ultra-niche" detail="Plus de 420 ch — 5 annonces minimum. Ce sont des cas comme les Porsche 911 Turbo, Ferrari ou Lamborghini d'occasion — le marché est national voire international." />
      </div>

      <Callout>
        Si l'échantillon est insuffisant, OKazCar ne génère pas de score de prix artificiel. Il l'indique explicitement, ce qui est honnêtement plus utile qu'un chiffre calculé sur 3 annonces.
      </Callout>

      <H2>Pourquoi la médiane et pas la moyenne ?</H2>
      <P>
        Parce que le marché de l'occasion comporte des outliers : une voiture accidentée vendue 30 % en dessous du marché, un passionné qui surestime son véhicule de 40 %. La moyenne est sensible à ces valeurs extrêmes. La médiane, elle, représente le prix auquel la moitié des véhicules similaires sont moins chers et l'autre moitié plus chers. C'est le vrai prix du marché.
      </P>
      <P>
        Concrètement : si OKazCar affiche "Prix légèrement au-dessus du marché régional (+12 %)", cela signifie que sur les annonces similaires récentes dans votre zone, 50 % sont 12 % moins chères. C'est une information que vous pouvez utiliser directement en négociation.
      </P>
      <P>
        La prochaine fois que vous consultez une annonce, avant d'aller sur l'Argus, lancez l'analyse OKazCar. La cote nationale est un point de départ — le marché local est la réalité.
      </P>
    </>
  )
}
