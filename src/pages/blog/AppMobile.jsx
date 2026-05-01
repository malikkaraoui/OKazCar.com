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
function Feature({ title, children }) {
  return (
    <div style={{ borderTop: '1px solid var(--okc-border)', paddingTop: 20, marginTop: 20 }}>
      <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6, color: 'var(--okc-text-primary)' }}>{title}</div>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}

export default function AppMobile() {
  return (
    <>
      <P>
        L'extension Chrome est le point d'entrée d'OKazCar. Elle fonctionne là où les annonces existent — dans le navigateur, sur ordinateur. Mais l'achat d'une voiture d'occasion ne se passe pas toujours devant un écran.
      </P>
      <P>
        On visite un véhicule. On reçoit une photo par WhatsApp. On voit une annonce en passant sur le parking d'un concessionnaire. L'application mobile OKazCar, prévue pour juin 2026, répond à ces situations — en reprenant toute la puissance de l'extension et en l'adaptant à la mobilité.
      </P>

      <H2>Ce que l'application reprend de l'extension</H2>
      <P>
        Le moteur d'analyse est le même : 12 filtres pondérés, score sur 100, prix vs médiane régionale, vérification vendeur, rappels constructeurs, fiabilité moteur. Tout ce qui fonctionne dans le navigateur sera disponible dans l'application, avec la même précision.
      </P>
      <P>
        La différence : l'interface est repensée pour une lecture rapide sur mobile. Score immédiat, signaux d'alerte en premier plan, détails accessibles d'un swipe.
      </P>

      <H2>Fonctionnalités exclusives mobile</H2>
      <div style={{ marginTop: 8 }}>
        <Feature title="Analyse par URL partagée">
          Quelqu'un vous envoie un lien d'annonce par SMS ou WhatsApp. Un tap suffit pour lancer l'analyse — sans copier-coller, sans changer d'application.
        </Feature>
        <Feature title="Scan QR code ou plaque d'immatriculation">
          Sur place, devant le véhicule : scannez la plaque ou le QR d'un document pour lancer une vérification immédiate. Disponible selon les bases accessibles par pays.
        </Feature>
        <Feature title="Historique local des annonces analysées">
          Toutes les annonces analysées sont conservées localement. Comparez facilement plusieurs véhicules, retrouvez une analyse passée, suivez l'évolution d'une annonce que vous surveillez.
        </Feature>
        <Feature title="Notifications de baisse de prix">
          Épinglez une annonce et recevez une notification si le prix baisse. Ou si l'annonce disparaît — signal d'intérêt concurrent sur le véhicule.
        </Feature>
        <Feature title="Mode offline partiel">
          Les analyses récentes sont mises en cache. Pas de réseau ? L'historique reste accessible. Utile lors d'une visite dans une zone mal couverte.
        </Feature>
      </div>

      <H2>Calendrier</H2>
      <P>
        La bêta fermée est prévue pour fin mai 2026, avec un accès limité aux utilisateurs inscrits sur liste d'attente. La version publique est attendue en juin 2026, sur iOS et Android simultanément.
      </P>
      <P>
        L'application sera gratuite dans sa version de base, en continuité avec l'extension. Des fonctionnalités avancées (historique étendu, notifications multi-annonces, accès prioritaire aux données API) feront partie d'une offre complémentaire.
      </P>

      <Callout>
        L'application mobile OKazCar est prévue pour juin 2026, sur iOS et Android. Pour rejoindre la liste d'attente bêta et tester en avant-première, contactez-nous via la page de contact.
      </Callout>
    </>
  )
}
