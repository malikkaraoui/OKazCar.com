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
function Ul({ items }) {
  return (
    <ul style={{ margin: '0 0 20px', paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--okc-text-secondary)' }}>{item}</li>
      ))}
    </ul>
  )
}

export default function OrigineGeneve() {
  return (
    <>
      <P>
        OKazCar n'est pas né dans un incubateur ni lors d'un hackathon. Le projet a commencé de manière beaucoup plus simple, pendant une formation Python suivie à Genève, chez Nomades Technologie.
      </P>
      <P>
        À ce moment-là, l'objectif était clair : acquérir des bases solides en développement et en automatisation avec Python. Le programme couvrait notamment les requêtes HTTP, le parsing de données avec BeautifulSoup, et des frameworks web comme Flask. Comme souvent en fin de formation, il fallait un projet concret pour appliquer ces notions.
      </P>

      <H2>Un problème très concret</H2>
      <P>
        L'idée est partie d'un besoin personnel : analyser rapidement la pertinence d'une annonce de voiture d'occasion. Prix cohérent ou non, kilométrage crédible, historique flou… difficile de trancher sans passer du temps à comparer.
      </P>
      <P>
        Une mauvaise expérience lors d'un achat a servi de déclencheur : déplacement inutile, informations incomplètes, et au final aucune décision possible. Le premier prototype était un simple script Python. Il récupérait des annonces depuis Leboncoin, extrayait quelques données (prix, année, kilométrage) et calculait des tendances basiques sur un échantillon.
      </P>
      <P>
        Rien de sophistiqué, mais un constat rapide : pour un même modèle, à caractéristiques proches, les écarts de prix peuvent être significatifs. L'information est publique, mais peu exploitée.
      </P>

      <H2>Structurer l'analyse</H2>
      <P>Le script a ensuite évolué avec des règles simples :</P>
      <Ul items={[
        'Vérification de cohérence entre âge et kilométrage',
        'Détection de valeurs atypiques',
        'Mise en perspective des prix observés',
      ]} />
      <P>
        La règle des ~13 000 km par an est utilisée comme repère. Ce n'est pas une vérité absolue, mais une moyenne couramment admise pour le parc automobile particulier en France. L'objectif n'est pas de juger une annonce, mais de signaler des écarts qui méritent une attention.
      </P>

      <H2>Le sujet des rappels constructeurs</H2>
      <P>
        Un autre point s'est imposé : les rappels automobiles. Le cas des airbags Takata est documenté à grande échelle — des dizaines de millions de véhicules concernés à l'international. Ces informations sont publiques, mais rarement visibles dans les annonces.
      </P>
      <P>
        L'intégration de vérifications liées aux rappels est donc apparue comme une extension logique du projet. Sur ce point, il est important de préciser que l'accès systématique et fiable aux données VIN n'est pas toujours garanti selon les pays.
      </P>

      <Callout>
        À un moment, une question s'est posée : combien de personnes refont exactement ce travail manuellement avant d'acheter une voiture ? Comparer, vérifier, chercher des avis… cela peut facilement prendre plusieurs heures pour une seule annonce sérieuse. Et surtout : la majorité des acheteurs ne dispose pas d'outils automatisés pour le faire.
      </Callout>

      <H2>Du script à un outil utilisable</H2>
      <P>
        Le projet a progressivement évolué vers quelque chose de plus structuré. Aujourd'hui, OKazCar prend la forme d'un outil qui s'intègre directement aux sites d'annonces comme Leboncoin, La Centrale ou AutoScout24. L'idée reste la même : centraliser des données accessibles, les structurer, et proposer une lecture simplifiée.
      </P>
      <P>
        Les choix techniques peuvent évoluer, mais ils ne sont pas le cœur du sujet. Ce qui compte, c'est l'usage : réduire le temps d'analyse et apporter un minimum d'objectivité dans la lecture d'une annonce.
      </P>

      <H2>Ce que fait réellement OKazCar</H2>
      <P>Concrètement, l'outil :</P>
      <Ul items={[
        "agrège des informations visibles dans l'annonce",
        "applique des règles simples de cohérence",
        "met en évidence des écarts ou points d'attention",
        "synthétise le tout sous forme d'indicateurs",
      ]} />
      <P>Il ne remplace ni une inspection mécanique, ni une expertise professionnelle.</P>

      <H2>Et la suite</H2>
      <Ul items={[
        "Une application mobile pour analyser rapidement une annonce par simple scan ou partage",
        "La détection d'annonces dupliquées entre plusieurs plateformes",
        "Le suivi de l'évolution des prix dans le temps pour identifier des opportunités",
        "Une aide à la négociation basée sur des éléments factuels et vérifiables",
        "La conservation d'un historique des échanges et des annonces en cas de litige",
        "Une comparaison des prix à l'échelle européenne pour identifier des écarts de marché",
        "La possibilité d'intégrer un mandataire automobile dans le processus",
      ]} />
      <P>Ces fonctionnalités restent dépendantes des données réellement accessibles et exploitables.</P>

      {/* Photo portrait — bas d'article */}
      <div style={{ margin: '48px 0 0', borderRadius: 4, overflow: 'hidden', border: '1px solid var(--okc-border)' }}>
        <img
          src="/Nomades-16-03-26_64.jpg"
          alt="Malik Karaoui, Nüsanes Technologie, Genève"
          style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center 40%', maxHeight: 640 }}
        />
      </div>
    </>
  )
}
