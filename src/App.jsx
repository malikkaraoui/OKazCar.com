import './App.css'

function App() {
  const nav = [
    { id: 'hero', label: 'Accueil' },
    { id: 'features', label: 'Fonctionnalités' },
    { id: 'sources', label: 'Sources' },
    { id: 'how', label: 'Comment ça marche' },
    { id: 'privacy', label: 'Confidentialité' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar__inner">
          <a className="brand" href="#hero" aria-label="OKazCar">
            OKazCar
          </a>

          <nav className="nav" aria-label="Navigation principale">
            {nav.map((item) => (
              <a key={item.id} className="nav__link" href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--primary" href="#cta">
            Installer l’extension
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="section hero">
          <div className="container">
            <p className="eyebrow">Extension Chrome</p>
            <h1 className="title">
              Scanne tes annonces auto
              <br />
              en un clin d’œil.
            </h1>
            <p className="subtitle">
              OKazCar analyse les annonces (LeBonCoin, AutoScout24) et t’aide à repérer plus vite les bonnes opportunités.
            </p>

            <div className="hero__actions" id="cta">
              <a className="button button--primary" href="#how">
                Voir comment ça marche
              </a>
              <a className="button button--ghost" href="#features">
                Découvrir les fonctionnalités
              </a>
            </div>

            <div className="hero__card">
              <div className="kpi">
                <div className="kpi__label">Objectif</div>
                <div className="kpi__value">Gagner du temps</div>
              </div>
              <div className="kpi">
                <div className="kpi__label">Sources</div>
                <div className="kpi__value">LBC + AS24</div>
              </div>
              <div className="kpi">
                <div className="kpi__label">Focus</div>
                <div className="kpi__value">Clarté & fiabilité</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <h2 className="h2">Fonctionnalités</h2>
            <p className="lead">
              Une homepage simple aujourd’hui — le design final arrivera via ton fichier .md.
            </p>
            <div className="grid">
              <article className="card">
                <h3 className="h3">Scan rapide</h3>
                <p>Analyse d’éléments clés de l’annonce (prix, infos, cohérence, etc.).</p>
              </article>
              <article className="card">
                <h3 className="h3">Résumé lisible</h3>
                <p>Un rendu clair : ce qui est important, sans bla-bla.</p>
              </article>
              <article className="card">
                <h3 className="h3">Roadmap</h3>
                <p>Connexion au front de l’extension, puis domaine OVH (DNS) ensuite.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="sources" className="section section--alt">
          <div className="container">
            <h2 className="h2">Sources prises en charge</h2>
            <div className="pillrow">
              <span className="pill">LeBonCoin</span>
              <span className="pill">AutoScout24</span>
              <span className="pill pill--muted">(à venir) autres plateformes</span>
            </div>
          </div>
        </section>

        <section id="how" className="section">
          <div className="container">
            <h2 className="h2">Comment ça marche</h2>
            <ol className="steps">
              <li className="steps__item">
                <span className="steps__n">1</span>
                <div>
                  <h3 className="h3">Tu ouvres une annonce</h3>
                  <p>L’extension détecte la page et prépare l’analyse.</p>
                </div>
              </li>
              <li className="steps__item">
                <span className="steps__n">2</span>
                <div>
                  <h3 className="h3">OKazCar scanne</h3>
                  <p>Extraction + calcul d’indicateurs (sans t’encombrer).</p>
                </div>
              </li>
              <li className="steps__item">
                <span className="steps__n">3</span>
                <div>
                  <h3 className="h3">Tu décides plus vite</h3>
                  <p>Un résumé actionnable pour comparer et trier.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section id="privacy" className="section section--alt">
          <div className="container">
            <h2 className="h2">Confidentialité</h2>
            <p className="lead">
              Cette page est prête pour être hébergée sur Firebase Hosting. On ajoutera une page “Privacy Policy” complète quand tu me donneras le contenu.
            </p>
            <div className="grid">
              <article className="card">
                <h3 className="h3">Transparence</h3>
                <p>On documente clairement ce qui est collecté et pourquoi.</p>
              </article>
              <article className="card">
                <h3 className="h3">Contrôle</h3>
                <p>Possibilité d’ajuster le tracking (Analytics) si besoin.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <h2 className="h2">FAQ</h2>
            <div className="faq">
              <details className="faq__item">
                <summary>Les clés Firebase sont-elles secrètes ?</summary>
                <p>
                  Pour une app web, la config Firebase est généralement exposée au client. On peut néanmoins la gérer via secrets GitHub pour éviter de la committer.
                </p>
              </details>
              <details className="faq__item">
                <summary>Comment se fait le déploiement ?</summary>
                <p>
                  Via Firebase Hosting (manuel avec <code>firebase deploy</code>) ou automatique via GitHub Actions.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} OKazCar</span>
          <a className="footer__link" href="#hero">
            Retour en haut
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
