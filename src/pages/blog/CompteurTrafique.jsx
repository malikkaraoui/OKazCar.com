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
        En France, entre 5 et 8 % des véhicules d'occasion mis en vente auraient un kilométrage falsifié. Ce n'est pas une rumeur de forum : c'est une estimation issue des contrôles techniques, du rapport Colomer de 2014 et des recoupements réalisés depuis par des organismes comme l'UFC-Que Choisir. Sur un marché de plus de 5 millions de transactions par an, cela représente plusieurs centaines de milliers de voitures dont le compteur a été retourné, parfois de 50 000 km, parfois de 200 000.
      </P>
      <P>
        La manipulation est aujourd'hui triviale techniquement. Un outil OBD branché sur la prise de diagnostic, un logiciel à 30 euros sur internet, et vous pouvez réécrire l'odomètre en moins de vingt minutes. Certains ateliers non déclarés le proposent encore comme prestation. Et contrairement à ce que beaucoup pensent, les voitures modernes ne sont pas mieux protégées — elles ont simplement des compteurs numériques plus faciles à reconfigurer que les anciens câbles mécaniques.
      </P>
      <P>
        C'est pourquoi OKazCar ne se contente pas d'afficher le kilométrage annoncé. Le filtre L3 du moteur d'analyse croise le kilométrage avec l'année de mise en circulation pour détecter les incohérences statistiques. Mais au-delà de l'outil, voici les 7 signaux concrets à vérifier vous-même avant de signer.
      </P>

      <Signal n={1} title="La cohérence kilométrage / âge">
        Un véhicule français moyen parcourt 13 000 à 15 000 km par an. Une berline de 8 ans affichée à 45 000 km est statistiquement aberrante — soit elle n'a quasiment jamais roulé (voiture de collection ? de seconde main rarement utilisée ?), soit le compteur a été revu. Interrogez le vendeur sur l'usage réel : trajets quotidiens, ville ou route ? Cohérence avec les équipements d'usure ?
      </Signal>

      <Signal n={2} title="L'usure des pédales et du volant">
        C'est le signal le plus difficile à falsifier. Un véhicule à 40 000 km doit avoir des pédales de frein et d'embrayage quasi neuves, un volant ferme, un levier de vitesse sans jeu. Si vous constatez une usure prononcée sur ces éléments pour un kilométrage annoncé faible, c'est une alerte rouge.
      </Signal>

      <Signal n={3} title="Les joints de portières et les traces de nettoyage">
        Les joints caoutchouc se craquellent et s'assèchent progressivement. On ne peut pas les remplacer sans laisser de traces. Un véhicule réellement peu kilométré les aura en parfait état. Regardez aussi l'état général du plancher côté conducteur : un tapis usé parle mieux qu'un compteur.
      </Signal>

      <Signal n={4} title="L'historique d'entretien">
        Carnet d'entretien complet avec tampons datés et kilométrages cohérents ? C'est votre meilleure arme. Chaque vidange renseignée avec le kilométrage constitue un jalon difficile à falsifier rétrospectivement. Exigez le carnet, et si possible les factures de contrôle technique. En France, chaque CT mentionne le kilométrage à la date du passage — c'est une trace légale qu'un vendeur malhonnête ne peut pas supprimer.
      </Signal>

      <Signal n={5} title="L'état des disques de frein">
        Les disques se strient et s'usent. Un véhicule de 60 000 km a généralement déjà changé son jeu de plaquettes au moins une fois, et les disques présentent une strie centrale légère. Un véhicule annoncé à 30 000 km avec des disques striés sur 2-3 mm doit alerter.
      </Signal>

      <Signal n={6} title="La vérification du VIN sur les bases officielles">
        HistoVec (gouvernement français, gratuit) permet de consulter les passages au contrôle technique d'un véhicule, avec les kilométrages associés. AutoDNA, Carfax Europe ou Cartell pour les véhicules importés offrent des données complémentaires. OKazCar intègre également la détection des imports via le filtre L8 — un véhicule importé d'Allemagne ou de Belgique présente un profil de kilométrage différent et mérite une vigilance accrue.
      </Signal>

      <Signal n={7} title="Le test thermique">
        Avant l'essai, arrivez tôt et demandez à voir le véhicule moteur froid, avant le démarrage. Un moteur chaud démarre toujours mieux — certains défauts (fumées bleues, bruits de chaîne, claquements) sont nettement plus audibles à froid. C'est une astuce simple mais efficace que peu d'acheteurs pensent à appliquer.
      </Signal>

      <Callout>
        La falsification de kilométrage est une fraude pénale (article 313-1 du Code pénal, jusqu'à 5 ans d'emprisonnement et 375 000 € d'amende). Mais la sanction n'efface pas les réparations que vous aurez à financer. Le meilleur moyen de s'en protéger reste le croisement systématique de ces 7 signaux — et l'analyse OKazCar avant chaque visite.
      </Callout>
    </>
  )
}
