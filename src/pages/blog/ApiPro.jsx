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
function ExampleBox({ label, title, children }) {
  return (
    <div style={{ background: 'var(--okc-bg-subtle)', border: '1px solid var(--okc-border)', borderRadius: 4, padding: '20px 24px', margin: '24px 0' }}>
      <div style={{ fontSize: 10, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--okc-text-muted)', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 10, color: 'var(--okc-text-primary)' }}>{title}</div>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}

export default function ApiPro() {
  return (
    <>
      <P>
        L'extension OKazCar est pensée pour l'acheteur particulier : une annonce à la fois, en temps réel, dans le navigateur. Mais les données que nous structurons ont une valeur différente pour les professionnels de l'automobile — négociants achat-revente, mandataires, gestionnaires de flotte, plateformes d'enchères.
      </P>
      <P>
        Les API OKazCar Pro, prévues dans les prochains mois, ouvriront cet accès de manière structurée.
      </P>

      <H2>Le problème du professionnel</H2>
      <P>
        Un négociant achat-revente travaille sur des marges serrées. Son avantage tient à sa capacité à identifier, avant les autres, des véhicules sous-évalués — parce que le vendeur n'a pas calibré son prix au marché local, ou parce que ce marché local est différent du sien.
      </P>
      <P>
        Aujourd'hui, ce sourcing inter-régional se fait manuellement : surveiller plusieurs plateformes, comparer des prix entre régions, se déplacer pour des véhicules qui ne méritent parfois pas le voyage. C'est inefficace, et c'est un avantage concurrentiel difficile à systématiser.
      </P>

      <H2>Sourcing inter-régional automatisé</H2>
      <P>
        Les API OKazCar permettront de configurer des alertes sur des critères précis — modèle, tranche kilométrique, âge, puissance — avec une variable décisive : l'écart de prix entre la région de l'annonce et le marché de référence du professionnel.
      </P>
      <ExampleBox label="Exemple d'usage — sourcing" title="Un négociant lyonnais identifie une opportunité à Strasbourg">
        La Toyota Yaris 2020 sous 8 000 € se vend 11% moins cher sur le marché alsacien qu'en région Auvergne-Rhône-Alpes. L'API détecte automatiquement l'écart et alerte le négociant, avec le score de fiabilité de chaque annonce éligible — sans qu'il ait à surveiller manuellement les plateformes.
      </ExampleBox>

      <H2>Intelligence marché en temps réel</H2>
      <P>
        Au-delà du sourcing individuel, les API exposeront des données agrégées sur les tendances de marché par région : quels modèles sont les plus scrutés, quelles catégories présentent les meilleurs rapports qualité-prix, quels segments affichent une tension de demande.
      </P>
      <ExampleBox label="Exemple d'usage — tendances" title="Alerte de tendance régionale personnalisée">
        En ce moment, la citadine la plus analysée sous 5 000 € dans votre région est la Renault Clio IV 1.5 dCi — score moyen de 72/100 sur les 30 dernières annonces scrutées. 3 annonces affichent un score supérieur à 85/100 aujourd'hui.
      </ExampleBox>

      <H2>Analyse en masse</H2>
      <P>
        Pour les plateformes d'enchères et les gestionnaires de stock, les API permettront d'analyser par lot : soumettre une liste d'annonces et recevoir pour chacune un score de fiabilité, un positionnement prix relatif, et les signaux d'alerte prioritaires. Le même moteur d'analyse que l'extension, exposé sous forme d'API REST.
      </P>

      <H2>Modèle d'accès</H2>
      <P>
        L'accès sera proposé par abonnement mensuel, avec des tiers adaptés au volume d'appels. Une phase bêta fermée est prévue avant l'ouverture publique — pour calibrer les quotas, les formats de réponse, et intégrer les retours des premiers utilisateurs professionnels.
      </P>

      <Callout>
        Les API OKazCar Pro sont en cours de développement. Si vous êtes professionnel de l'automobile et souhaitez être notifié dès leur disponibilité ou participer à la bêta, contactez-nous via la page de contact.
      </Callout>
    </>
  )
}
