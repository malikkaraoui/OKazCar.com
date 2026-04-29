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
function Stat({ value, label }) {
  return (
    <div style={{ textAlign: 'center', padding: '32px 24px', border: '1px solid var(--okc-border)', borderRadius: 4 }}>
      <div style={{ fontSize: 48, fontWeight: 500, letterSpacing: '-2px', lineHeight: 1, color: 'var(--okc-text-primary)' }}>{value}</div>
      <div style={{ fontSize: 12, fontFamily: 'var(--okc-font-mono)', color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginTop: 10 }}>{label}</div>
    </div>
  )
}

export default function PrixMedianRegional() {
  return (
    <>
      <P>
        L'Argus national, c'est comme demander le prix moyen d'un appartement en France pour estimer votre studio parisien. Techniquement correct. Pratiquement inutile. Voici pourquoi OKazCar utilise une médiane régionale calculée en temps réel — et pourquoi la différence peut représenter plusieurs milliers d'euros sur votre négociation.
      </P>

      <H2>Le problème de l'Argus national</H2>
      <P>
        L'Argus publie des cotes basées sur des transactions nationales agglomérées. Pour une Renault Clio 1.5 dCi 90 de 2018 à 80 000 km, il vous donnera un prix « marché » unique. Mais ce prix mélange des annonces de Paris où la demande est faible (tout le monde prend le métro), de Lyon où elle est moyenne, et de régions rurales où une diesel à bon prix part en 48h. Ce lissage efface exactement l'information dont vous avez besoin.
      </P>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, margin: '40px 0' }}>
        <Stat value="±18%" label="Écart prix Paris vs province" />
        <Stat value="±12%" label="Écart km équivalent rural vs urbain" />
        <Stat value="30 km" label="Rayon de recherche prioritaire OKazCar" />
      </div>

      <H2>La géographie des prix de l'occasion</H2>
      <P>
        Les prix varient significativement selon la région pour des raisons structurelles, pas conjoncturelles. En Île-de-France, les particuliers vendent souvent plus cher parce qu'ils peuvent attendre — ils n'ont pas besoin de leur voiture pour travailler. En zone rurale, le vendeur veut vendre vite et le parc disponible est plus limité, ce qui crée une pression à la baisse sur les prix pour les modèles courants. Les véhicules spécifiques (utilitaires, 4x4, camping-cars) obéissent à d'autres règles.
      </P>
      <P>
        S'ajoutent à ça les effets de motorisation : les diesels sont surreprésentées en province (longs trajets), sous-valorisées en ville (malus diesel, ZFE). Une même Peugeot 308 1.6 HDi vaut 800 à 1 500 € de moins à Paris qu'à Clermont-Ferrand — non pas parce que l'une est en meilleur état, mais parce que les acheteurs potentiels locaux sont différents.
      </P>

      <H2>Ce que fait OKazCar (filtre L4)</H2>
      <P>
        Le filtre L4 « Prix vs marché » implémente une cascade de recherche. D'abord, il collecte toutes les annonces similaires (même modèle, même génération, ±2 ans, motorisation et puissance DIN comparables) dans un rayon de 30 km autour de l'annonce analysée. Si l'échantillon est insuffisant (moins de 5 annonces), il élargit à la région administrative. Sinon au niveau national — mais en pondérant par la similarité géographique.
      </P>
      <P>
        Sur cet échantillon, OKazCar calcule la <strong>médiane</strong>, pas la moyenne. La différence est importante : la médiane est robuste aux outliers. Une annonce à 25 000 € pour un modèle qui vaut 12 000 € (erreur ou arnaque) ne décale pas la médiane — elle décalerait la moyenne. Le prix médian est donc une mesure plus fiable du « vrai » marché local.
      </P>

      <Callout>
        Le filtre L4 est l'un des deux filtres critiques (poids 2.0/16.0). Absence de données prix marché = pénalité automatique, pas neutralité. Un véhicule dont OKazCar ne peut pas trouver de références similaires est par définition plus risqué à pricer.
      </Callout>

      <H2>Le Z-score statistique (filtre L5)</H2>
      <P>
        Au-delà de la médiane, OKazCar applique un Z-score NumPy sur les prix de référence filtrés par tranche de puissance DIN (hp_range). Le Z-score mesure à quelle distance, en écarts-types, le prix annoncé se situe par rapport à la distribution des prix du marché. Un Z-score de -1.5 signifie que le prix est 1,5 écart-type sous la médiane — ce qui peut être une vraie bonne affaire, ou le signe d'un problème caché.
      </P>
      <P>
        Combinés, L4 et L5 donnent une image à deux niveaux : L4 dit « ce prix est X% au-dessus ou en dessous du marché local », L5 dit « cette déviation est statistiquement normale ou anormale dans la distribution ». Un prix à -8% peut être normal (deal correct), un prix à -22% avec un Z-score de -2.1 est un signal fort.
      </P>

      <H2>En pratique : combien pouvez-vous économiser ?</H2>
      <P>
        Sur les annonces où OKazCar détecte une surcote significative (L4 score dégradé, prix &gt;10% au-dessus du marché régional), les utilisateurs qui utilisent ce chiffre en négociation obtiennent en moyenne une réduction de 5 à 12 % sur le prix demandé. Sur un véhicule à 15 000 €, c'est 750 à 1 800 € récupérés — simplement en arrivant avec un chiffre objectif plutôt qu'une intuition.
      </P>
      <P>
        La formule de négociation qui fonctionne : « J'ai regardé les annonces similaires dans votre secteur, la médiane est à X €. Votre prix est Y % au-dessus. Je vous propose Z €. » C'est factuel, non-offensant, et difficilement contestable.
      </P>
    </>
  )
}
