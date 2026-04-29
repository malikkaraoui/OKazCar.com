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

export default function OrigineGeneve() {
  return (
    <>
      <P>
        L'idée d'OKazCar n'est pas née dans un hackathon ni dans un incubateur. Elle est née un soir de semaine, dans un appartement de Genève, devant un terminal ouvert sur une annonce LeBonCoin.
      </P>
      <P>
        À l'époque, je suivais une formation Python intensive chez Nüsanes Technologie, à Genève. L'objectif était de prendre en main l'écosystème Python pour le développement web et l'automatisation. On avait les bases — Flask, les requêtes HTTP, BeautifulSoup pour le parsing. Et comme tout le monde en fin de module, on cherchait un projet concret pour pratiquer.
      </P>
      <P>
        Le problème que je voulais résoudre était personnel, prosaïque, et à ce moment-là sans solution satisfaisante : comment savoir, en regardant une annonce de voiture d'occasion, si le prix est justifié, si le kilométrage est cohérent, si le véhicule n'est pas en rappel constructeur ? Je venais de rater un achat — une voiture annoncée à bon prix qui s'est révélée être un import allemand avec un historique d'entretien lacunaire. La visite m'avait coûté du temps et le manque d'information m'avait coûté une opportunité.
      </P>
      <P>
        Le premier script s'appelait, sans originalité, <code style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 15, background: 'var(--okc-bg-light)', padding: '1px 6px', borderRadius: 2 }}>leboncoin_scraper.py</code>. Il récupérait les annonces d'une recherche donnée, extrayait les prix, les kilométrages et les années, et calculait une médiane sur l'échantillon. Rien d'extraordinaire. Mais c'était suffisant pour se rendre compte que la dispersion des prix sur LeBonCoin était massive — parfois 40 % d'écart entre deux véhicules identiques à la même date, dans la même ville. L'information existait, elle était accessible, mais elle n'était pas traitée.
      </P>

      <H2>Du script au filtre</H2>
      <P>
        L'étape suivante a été d'ajouter la cohérence kilométrage / âge. Un 2015 à 12 000 km, ça mérite une vérification. Un 2010 à 400 000 km, ça en mérite une autre. La règle de 13 000 km par an est une approximation, mais c'est une approximation statistiquement solide sur le parc français. On n'invente rien — on signale une anomalie.
      </P>
      <P>
        Puis sont venus les rappels Takata. La crise des airbags Takata est l'un des plus grands rappels de l'histoire automobile mondiale : plus de 100 millions de véhicules concernés, des décès documentés liés à des airbags qui se fragmentent à la place de gonfler. En France, des centaines de milliers de véhicules sont concernés, et pourtant, les annonces ne le mentionnent jamais. Ajouter une vérification automatique sur le VIN était logique — et la liste officielle des rappels NHTSA/RAPEX est publique.
      </P>

      <H2>La question qui a tout changé</H2>
      <P>
        À un moment de ce développement amateur, je me suis posé une question : combien de personnes font exactement la même chose que moi manuellement avant chaque achat ? Consultent l'Argus, vérifient les forums, cherchent les rappels, comparent les prix — en passant 2 à 3 heures par annonce sérieuse ?
      </P>
      <P>
        La réponse évidente était : beaucoup. Et la réponse complémentaire était : la plupart d'entre eux n'ont pas les compétences techniques pour automatiser ce travail. Ils font confiance à leur intuition, au vendeur, parfois à un mécanicien ami. Mais ils n'ont pas d'outil structuré.
      </P>

      <H2>De Genève à la production</H2>
      <P>
        Aujourd'hui OKazCar tourne sur Google Cloud Run, avec une base PostgreSQL Neon, un moteur d'analyse à 12 filtres pondérés, et une extension Chrome qui s'intègre directement dans LeBonCoin, LaCentrale et AutoScout24 (France, Allemagne, Suisse, Italie, Belgique, Pays-Bas, Autriche, Espagne, Pologne, Luxembourg, Suède). Le script du soir de formation est devenu quelque chose d'utilisable par n'importe qui — sans connaissance technique, sans abonnement.
      </P>
      <P>
        Mais l'intuition de départ n'a pas changé : l'information qui permet de ne pas se faire avoir est disponible. Elle est dispersée, bruyante, difficile à interpréter seul. L'outil la centralise et la traduit en score. C'est tout — et c'est suffisant.
      </P>

      <Callout>
        La prochaine version ajoutera la détection des annonces en doublon inter-sites (même véhicule vendu simultanément sur plusieurs plateformes à des prix différents), le suivi d'historique de prix pour une même annonce, et un module de négociation argumentée basé sur les défauts détectés.
      </Callout>

      <P>
        Pour l'instant : chargez l'extension, ouvrez une annonce, et laissez l'outil faire le travail ingrat. Le reste, c'est votre intuition.
      </P>
    </>
  )
}
