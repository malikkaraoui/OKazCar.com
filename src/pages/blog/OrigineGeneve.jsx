function H2({ children }) {
  return <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.8px', marginTop: 56, marginBottom: 16, lineHeight: 1.15 }}>{children}</h2>
}
function P({ children }) {
  return <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--okc-text-secondary)', margin: '0 0 20px' }}>{children}</p>
}
function Pull({ children }) {
  return (
    <blockquote style={{ borderLeft: '2px solid var(--okc-text-primary)', paddingLeft: 28, margin: '40px 0', fontStyle: 'italic' }}>
      <p style={{ fontSize: 22, lineHeight: 1.5, letterSpacing: '-0.3px', color: 'var(--okc-text-primary)', fontWeight: 400, margin: 0 }}>{children}</p>
    </blockquote>
  )
}
function Meta({ label, value }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', paddingTop: 14, borderTop: '1px solid var(--okc-border)' }}>
      <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1, flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: 15, color: 'var(--okc-text-secondary)' }}>{value}</span>
    </div>
  )
}

export default function OrigineGeneve() {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, border: '1px solid var(--okc-border)', borderRadius: 4, overflow: 'hidden', marginBottom: 56 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '24px 28px', background: 'var(--okc-bg-light)' }}>
          <Meta label="Lieu" value="Noamdes Technologie, Genève 🇨🇭" />
          <Meta label="Contexte" value="Formation Python intensive" />
          <Meta label="Date" value="Automne 2024" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '24px 28px', background: 'var(--okc-bg-light)', borderLeft: '1px solid var(--okc-border)' }}>
          <Meta label="Problème initial" value="Trouver une voiture fiable sans se faire avoir" />
          <Meta label="Premier prototype" value="Script Python · 3 filtres · leboncoin seulement" />
          <Meta label="Aujourd'hui" value="12 filtres · 4 plateformes · 14 domaines" />
        </div>
      </div>

      <P>
        OKazCar n'a pas démarré comme une startup. Il n'y a pas eu de pitch deck, pas de levée de fonds, pas de brainstorming dans un open space avec des post-its. Il a commencé par un problème concret, un écran de formation Python à Genève, et l'intuition qu'on pouvait faire mieux.
      </P>

      <H2>La formation Python chez Noamdes Technologie</H2>
      <P>
        Noamdes Technologie est un centre de formation informatique à Genève, spécialisé dans les formations pratiques pour professionnels. Python, data, DevOps — des formations courtes, denses, orientées application immédiate plutôt que théorie académique. Le genre d'environnement où on apprend en faisant, pas en écoutant.
      </P>
      <P>
        Pendant cette formation, entre deux exercices sur les bibliothèques pandas et requests, j'avais ouvert leboncoin sur un autre onglet. Je cherchais une voiture. Pas n'importe comment — j'avais passé des heures à comparer des annonces, noter les kilométrages, chercher les cotes Argus, googler les problèmes connus des modèles qui m'intéressaient. Un processus long, manuel, et franchement épuisant pour quelqu'un qui n'est pas mécanicien.
      </P>

      <Pull>
        J'ai demandé au formateur si on pouvait faire du web scraping comme exercice. Il a dit oui. J'ai commencé à scraper leboncoin.
      </Pull>

      <H2>Le premier script — 3 filtres, 1 plateforme</H2>
      <P>
        Le premier script Python était rudimentaire. Il récupérait une URL leboncoin, parsait le DOM avec BeautifulSoup, et vérifiait trois choses : le kilométrage était-il cohérent avec l'année, le prix était-il dans une fourchette raisonnable par rapport aux annonces similaires récupérées par une seconde requête, et l'annonce était-elle récente. Rien de plus.
      </P>
      <P>
        Mais ce script basique m'a immédiatement montré des choses que je n'avais pas vues à la main. Sur 30 annonces que j'avais considérées « intéressantes », 8 avaient un kilométrage statistiquement suspect par rapport à leur année. 5 étaient significativement au-dessus du marché local. Je n'avais rien vu de tout ça en naviguant normalement.
      </P>
      <P>
        J'ai montré le script à quelqu'un d'autre dans la formation. Il a demandé à l'utiliser. Puis à un ami. Puis l'ami a demandé si ça marchait sur AutoScout24 aussi parce qu'il cherchait en Suisse. C'est là que j'ai compris que le problème n'était pas personnel — il était universel.
      </P>

      <H2>Pourquoi une extension Chrome, pas une app web</H2>
      <P>
        La première version était un script en ligne de commande. Pratique pour moi, inutilisable pour quiconque d'autre. J'ai ensuite construit une interface web basique — on colle une URL, on clique Analyser, on voit le résultat. Ça marchait, mais ça créait une friction : il fallait quitter leboncoin, aller sur l'outil, copier l'URL, revenir. Personne ne fait ça systématiquement.
      </P>
      <P>
        L'insight clé est venu d'une conversation avec un ami qui teste des voitures à la journée : « Ce qu'il me faudrait, c'est que l'analyse apparaisse directement sur la page de l'annonce, sans que j'aie à faire quoi que ce soit. » Une extension Chrome était la réponse évidente. L'analyse se lance automatiquement à l'ouverture de l'annonce, le panel apparaît dans la page. Zéro friction.
      </P>

      <H2>De Python à JavaScript — la transition technique</H2>
      <P>
        Passer d'un script Python backend à une extension Chrome implique de réécrire l'essentiel en JavaScript. Les extensions Chrome s'exécutent dans le navigateur — pas de serveur, pas de backend, pas de données envoyées à l'extérieur. Cette contrainte, qui pouvait sembler un inconvénient, est devenue un argument de confiance fort : OKazCar n'a aucun serveur qui reçoit vos données de navigation. Tout tourne en local.
      </P>
      <P>
        La partie la plus complexe à porter en JS était l'analyse statistique — le Z-score, la médiane pondérée, les seuils dynamiques par tranche de puissance. NumPy n'existe pas en JavaScript natif. J'ai réimplémenté les algorithmes nécessaires manuellement, en m'assurant d'obtenir des résultats identiques à ceux du script Python d'origine sur les mêmes données de test.
      </P>

      <H2>Ce que Genève a changé</H2>
      <P>
        Il y a quelque chose de particulier à développer un outil en Suisse. Le marché de l'occasion suisse est différent du français : les prix sont plus élevés, les acheteurs plus exigeants, et AutoScout24 y est dominant là où leboncoin domine en France. Cette dualité — développer l'outil depuis la Suisse pour un usage initialement français — a forcé une réflexion multi-marchés dès le début. Ça explique pourquoi OKazCar supporte 14 domaines aujourd'hui plutôt que de rester franco-centré.
      </P>
      <P>
        La rigueur suisse sur la précision et la transparence a aussi influencé le design du produit. Chaque score est expliqué. Chaque filtre est documenté avec son poids exact. Il n'y a pas de score « magique » sorti d'un algorithme opaque — tout est traçable, reproductible, compréhensible par n'importe qui qui lit la documentation.
      </P>

      <Pull>
        Un bon outil ne devrait pas être une boîte noire. Si vous ne pouvez pas comprendre pourquoi il dit ce qu'il dit, vous ne pouvez pas lui faire confiance.
      </Pull>

      <H2>La suite</H2>
      <P>
        OKazCar reste gratuit, sans compte, et sans collecte de données. L'objectif n'a pas changé depuis le script Python de Genève : donner à n'importe qui les mêmes outils qu'un acheteur professionnel ou un mécanicien expérimenté, sans avoir à payer un expert ou passer des heures à rechercher manuellement. L'extension est en amélioration continue — la prochaine étape majeure est l'analyse automatique des photos pour détecter les incohérences visuelles. Ça aussi, ça a commencé comme une idée pendant une formation.
      </P>
    </>
  )
}
