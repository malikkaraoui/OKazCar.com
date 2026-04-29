function H2({ children }) {
  return <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.8px', marginTop: 56, marginBottom: 16, lineHeight: 1.15 }}>{children}</h2>
}
function P({ children }) {
  return <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--okc-text-secondary)', margin: '0 0 20px' }}>{children}</p>
}
function Signal({ n, title, children }) {
  return (
    <div style={{ borderTop: '1px solid var(--okc-border)', paddingTop: 28, marginTop: 28 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'baseline', marginBottom: 10 }}>
        <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>Signal 0{n}</span>
        <h3 style={{ fontSize: 21, fontWeight: 500, letterSpacing: '-0.5px', margin: 0 }}>{title}</h3>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}
function Callout({ children }) {
  return (
    <div style={{ background: 'var(--okc-bg-light)', border: '1px solid var(--okc-border)', borderLeft: '3px solid var(--okc-primary)', borderRadius: 4, padding: '18px 24px', margin: '32px 0' }}>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}

export default function CompteurTrafique() {
  return (
    <>
      <P>
        En France, on estime qu'entre 5 et 8 % des voitures d'occasion vendues entre particuliers présentent un kilométrage falsifié. Sur leboncoin seul, ça représente des dizaines de milliers d'annonces par an. Le problème est que le traficotage moderne — avec un OBD2 ou un cable CAN — ne laisse aucune trace visible à l'œil nu. Voici les 7 signaux que OKazCar croise systématiquement.
      </P>

      <H2>Pourquoi c'est si difficile à détecter</H2>
      <P>
        Les anciens trafiqueurs utilisaient des perceuses sur le compteur mécanique — on voyait les traces. Aujourd'hui, n'importe qui peut acheter un boîtier OBD2 à 40 € sur AliExpress et remettre le compteur à zéro en 10 minutes, sans laisser de trace dans l'ECU de certains modèles. Les véhicules les plus touchés : ceux dont le kilométrage est stocké dans un seul module (souvent le compteur lui-même) sans redondance entre l'ECU moteur, la boîte, et l'ABS.
      </P>

      <Callout>
        OKazCar combine ces 7 signaux dans le filtre L3 (Cohérence données, poids 1.5). Aucun signal n'est suffisant seul — c'est leur accumulation qui déclenche l'alerte.
      </Callout>

      <Signal n={1} title="L'incohérence km/année">
        C'est le signal le plus basique mais aussi le plus fiable statistiquement. En France, un véhicule particulier roule en moyenne 13 000 à 15 000 km/an. Une voiture de 8 ans affichant 40 000 km est suspect. Attention aux cas légitimes : véhicule de résidence secondaire, voiture de collection, retraité peu roulant. OKazCar croise l'usage déclaré (particulier vs professionnel) pour pondérer ce signal.
      </Signal>

      <Signal n={2} title="L'usure physique incompatible">
        Un véhicule à 30 000 km annoncés avec des pédales de caoutchouc lisses, un volant brillant sur les zones de contact, ou des seuils de portes rayés est incohérent. OKazCar ne peut pas analyser les photos automatiquement (pas encore), mais ce signal est dans notre liste de vérification manuelle recommandée. Règle simple : si le véhicule « fait » 150 000 km physiquement, il les a probablement faits.
      </Signal>

      <Signal n={3} title="La dissonance entre prix et kilométrage">
        Un véhicule sous-coté par rapport au marché régional EST un signal d'alerte, pas une bonne affaire. OKazCar compare automatiquement le prix annoncé à la médiane des annonces similaires (même modèle, tranche d'année, motorisation) dans un rayon de 30 km puis élargi régionalement. Un prix 20 % sous le marché sans explication explicite dans l'annonce mérite investigation.
      </Signal>

      <Signal n={4} title="L'historique de mise en vente répété">
        Un véhicule qui reparaît régulièrement sur leboncoin — même sous différents comptes — indique soit un invendu chronique (souvent un problème caché), soit une revente rapide après achat. Le filtre L10 (Ancienneté annonce) croise la durée de publication actuelle avec la médiane statistique pour ce modèle/tranche de prix. Durée anormalement longue = suspect.
      </Signal>

      <Signal n={5} title="La motorisation à risque avec kilométrage bas">
        Certains moteurs ont des problèmes connus qui n'apparaissent qu'à partir d'un certain kilométrage. Un BMW N47 2.0d à 60 000 km « sans problème » mérite scepticisme : la chaîne de distribution de ce moteur lâche typiquement entre 80 000 et 150 000 km. Un vendeur qui revend pile avant ce seuil peut avoir eu connaissance du problème. OKazCar signale ces moteurs via le filtre L12.
      </Signal>

      <Signal n={6} title="Le téléphone étranger ou le compte récent">
        Le traficotage de compteur est souvent organisé. Les annonces postées depuis des numéros étrangers (indicatifs +32, +49, +41 avec voiture présentée comme française) ou via des comptes leboncoin créés dans les 30 derniers jours sont surreprésentées dans les cas de fraude. OKazCar analyse l'indicatif téléphonique (filtre L6) et la date de création du compte vendeur quand cette information est disponible dans le DOM.
      </Signal>

      <Signal n={7} title="L'absence de carnet d'entretien ou de factures">
        Un véhicule honnêtement entretenu avec 80 000 km a généralement au moins 4 à 6 passages en révision documentés. L'absence totale de justificatifs n'est pas rédhibitoire seule, mais combinée aux autres signaux, elle renforce le faisceau de présomption. Demandez systématiquement les factures Contrôle Technique — elles indiquent le kilométrage à chaque passage et sont difficiles à falsifier a posteriori.
      </Signal>

      <H2>Ce qu'OKazCar détecte automatiquement</H2>
      <P>
        OKazCar croise automatiquement les signaux 1, 3, 4, 5 et 6. Les signaux 2 et 7 nécessitent une inspection physique ou la communication de documents par le vendeur — l'extension vous les rappelle dans le panel de recommandations. Un score L3 dégradé avec un signal L10 élevé est notre combinaison la plus prédictive d'un compteur suspect.
      </P>

      <Callout>
        La règle d'or : demandez systématiquement le rapport Histovec (gratuit, officiel, gouvernemental) avant toute rencontre. Il indique les kilométrages relevés lors de chaque Contrôle Technique — et ça, ça ne se trafique pas.
      </Callout>
    </>
  )
}
