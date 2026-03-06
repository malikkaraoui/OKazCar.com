import { useEffect, useState } from 'react'
import './App.css'

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/'

const navItems = [
  { id: 'features', label: 'Fonctionnalités' },
  { id: 'process', label: 'Comment ça marche' },
  { id: 'numbers', label: 'Chiffres' },
  { id: 'faq', label: 'FAQ' },
]

const showcaseHighlights = [
  { icon: '📊', label: 'Score global' },
  { icon: '🔍', label: '9 filtres IA' },
  { icon: '⚡', label: 'Analyse en 3 sec' },
]

const featureRows = [
  {
    id: 'score',
    icon: '◔',
    title: 'Un score de fiabilité clair et objectif',
    description:
      '9 filtres analysent l’annonce : cohérence km/année, prix vs marché, numéro de téléphone, vendeur pro, véhicule importé, historique de publication… Chaque signal est pondéré pour un score final sur 100.',
    visual: 'gauge',
  },
  {
    id: 'price',
    icon: '▁',
    title: 'Comparez le prix au marché en temps réel',
    description:
      'OKazCar collecte les prix d’annonces similaires sur leboncoin et AutoScout24 (12 pays européens). Vous voyez instantanément si le prix est dans la norme, une bonne affaire, ou suspect.',
    visual: 'price',
  },
  {
    id: 'alerts',
    icon: '🛡️',
    title: 'Les signaux que vous ne voyez pas',
    description:
      'Numéro étranger ? Véhicule importé ? Annonce republiée pour paraître récente ? Kilométrage incohérent ? OKazCar détecte les anomalies invisibles et vous alerte avant de contacter le vendeur.',
    visual: 'alerts',
  },
]

const processSteps = [
  {
    id: 'step-install',
    icon: '🧩',
    title: 'Installez l’extension',
    description:
      'Ajoutez OKazCar depuis le Chrome Web Store. C’est gratuit, sans compte, sans inscription.',
    visualLabel: 'Chrome Web Store',
    visualTitle: 'Installation en 10 secondes',
    visualCaption: 'Ajoutez OKazCar, épinglez-la et vous êtes prêt.',
  },
  {
    id: 'step-open',
    icon: '🔗',
    title: 'Ouvrez une annonce',
    description:
      'Naviguez sur leboncoin.fr ou autoscout24. L’extension se réveille automatiquement.',
    visualLabel: 'Annonce détectée',
    visualTitle: 'Une page auto devient intelligible',
    visualCaption: 'Le panel OKazCar s’injecte sans quitter votre navigation.',
  },
  {
    id: 'step-read',
    icon: '✨',
    title: 'Lisez le verdict',
    description:
      'Le panel OKazCar apparaît avec le score, les filtres détaillés et les alertes à surveiller.',
    visualLabel: 'Verdict',
    visualTitle: 'Le bon feeling, mais avec des preuves',
    visualCaption: 'Score, comparatif marché et alertes utiles, au même endroit.',
  },
]

const filterCards = [
  ['L1', 'Données complètes', 'Vérifie que toutes les infos essentielles sont renseignées.'],
  ['L2', 'Modèle reconnu', 'Identifie le véhicule dans notre référentiel de 70+ modèles.'],
  ['L3', 'Cohérence km/année', 'Détecte les kilométrages anormalement bas ou élevés.'],
  ['L4', 'Prix vs marché', 'Compare le prix aux annonces similaires en temps réel.'],
  ['L5', 'Indice de confiance', 'Score composite évaluant la crédibilité globale de l’annonce.'],
  ['L6', 'Analyse téléphone', 'Identifie numéros étrangers, fixes, ou à risque.'],
  ['L7', 'Profil vendeur', 'Vérifie SIRET, ancienneté, avis pour les professionnels.'],
  ['L8', 'Détection import', 'Repère les véhicules importés et signale les points d’attention.'],
  ['L9', 'Couverture annonce', 'Analyse les photos, options et signaux de qualité de l’annonce.'],
]

const stats = [
  { value: 70, suffix: '+', label: 'Véhicules référencés' },
  { value: 12, suffix: '', label: 'Pays couverts (AS24)' },
  { value: 9, suffix: '', label: 'Filtres d’analyse' },
  { value: 3, suffix: 's', prefix: '<', label: 'Temps d’analyse moyen' },
]

const faqItems = [
  {
    q: 'C’est vraiment gratuit ?',
    a: 'Oui, 100% gratuit. Pas de compte, pas d’abonnement, pas de données personnelles collectées.',
  },
  {
    q: 'Quels sites sont supportés ?',
    a: 'leboncoin.fr et AutoScout24 (France, Allemagne, Belgique, Suisse, Italie, Pays-Bas, Autriche, Espagne, Pologne, Luxembourg, Suède + .com).',
  },
  {
    q: 'Comment fonctionne le score ?',
    a: '9 filtres analysent différents aspects de l’annonce (prix, kilométrage, vendeur, téléphone…). Chaque filtre a un poids selon son importance. Le score final est une moyenne pondérée sur 100.',
  },
  {
    q: 'Mes données sont-elles collectées ?',
    a: 'Non. L’extension analyse l’annonce que vous consultez et c’est tout. Aucune donnée personnelle n’est stockée ni transmise.',
  },
  {
    q: 'Ça marche sur Firefox / Safari / Edge ?',
    a: 'Pour l’instant, OKazCar est disponible uniquement sur Google Chrome et les navigateurs compatibles Chromium comme Brave, Edge ou Opera.',
  },
  {
    q: 'Comment le prix marché est-il calculé ?',
    a: 'OKazCar collecte les prix d’annonces similaires (même modèle, même année, kilométrage proche) sur leboncoin et AutoScout24, puis calcule la médiane pour une estimation fiable.',
  },
]

function WheelIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="64" cy="64" r="56" fill="none" stroke="currentColor" strokeWidth="12" />
      <circle cx="64" cy="64" r="12" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="8" strokeLinecap="round">
        <line x1="64" y1="22" x2="64" y2="52" />
        <line x1="64" y1="22" x2="64" y2="52" transform="rotate(72 64 64)" />
        <line x1="64" y1="22" x2="64" y2="52" transform="rotate(144 64 64)" />
        <line x1="64" y1="22" x2="64" y2="52" transform="rotate(216 64 64)" />
        <line x1="64" y1="22" x2="64" y2="52" transform="rotate(288 64 64)" />
      </g>
    </svg>
  )
}

function Logo({ dark = false }) {
  return (
    <span className={`logo ${dark ? 'logo--dark' : ''}`}>
      <WheelIcon className="logo__wheel" />
      <span className="logo__text">
        <span>OKaz</span>
        <span className="logo__accent">Car</span>
      </span>
    </span>
  )
}

function GaugeVisual() {
  return (
    <div className="feature-visual gauge-card" data-animate="scale-up">
      <div className="gauge-shell">
        <svg viewBox="0 0 120 120" className="gauge-svg" aria-hidden="true">
          <circle className="gauge-svg__track" cx="60" cy="60" r="46" />
          <circle className="gauge-svg__value" cx="60" cy="60" r="46" />
        </svg>
        <div className="gauge-center">
          <strong>86</strong>
          <span>/100</span>
        </div>
      </div>
      <div className="radar-mini">
        <span>km/année</span>
        <span>prix</span>
        <span>vendeur</span>
      </div>
    </div>
  )
}

function PriceVisual() {
  return (
    <div className="feature-visual price-card" data-animate="scale-up">
      <div className="price-bar">
        <span className="price-bar__zone price-bar__zone--bad">Suspect</span>
        <span className="price-bar__zone price-bar__zone--ok">Marché</span>
        <span className="price-bar__zone price-bar__zone--great">Bonne affaire</span>
        <span className="price-bar__marker">OKazCar</span>
      </div>
      <div className="price-card__legend">
        <span>Référence marché</span>
        <strong>18 950 €</strong>
      </div>
    </div>
  )
}

function AlertsVisual() {
  const alerts = [
    ['warning', '⚠ Numéro étranger (+32 Belgique)'],
    ['fail', '🔴 Kilométrage suspect (180k km pour 3 ans)'],
    ['pass', '✅ Vendeur particulier vérifié'],
    ['warning', '⚠ Annonce republiée récemment'],
  ]

  return (
    <div className="feature-visual alerts-card" data-animate-stagger>
      {alerts.map(([tone, text], index) => (
        <div key={text} className={`alert-row alert-row--${tone}`} data-animate="fade-up" style={{ '--stagger-index': index }}>
          {text}
        </div>
      ))}
    </div>
  )
}

function FeatureVisual({ type }) {
  if (type === 'gauge') return <GaugeVisual />
  if (type === 'price') return <PriceVisual />
  return <AlertsVisual />
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navHidden, setNavHidden] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      document.querySelectorAll('[data-animate]').forEach((el) => el.classList.add('visible'))
      return undefined
    }

    const animated = document.querySelectorAll('[data-animate]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    animated.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const counters = document.querySelectorAll('[data-count-to]')
    if (reduceMotion) {
      counters.forEach((counter) => {
        const prefix = counter.getAttribute('data-prefix') ?? ''
        const suffix = counter.getAttribute('data-suffix') ?? ''
        counter.textContent = `${prefix}${counter.getAttribute('data-count-to')}${suffix}`
      })
      return undefined
    }

    const animateCounter = (el) => {
      const target = Number(el.getAttribute('data-count-to'))
      const prefix = el.getAttribute('data-prefix') ?? ''
      const suffix = el.getAttribute('data-suffix') ?? ''
      const duration = 1500
      const start = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - (1 - progress) ** 3
        const value = Math.round(target * eased)
        el.textContent = `${prefix}${value}${suffix}`
        if (progress < 1) window.requestAnimationFrame(tick)
      }

      window.requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.45 },
    )

    counters.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      setNavScrolled(currentY > 16)

      if (currentY > lastY + 12 && currentY > 120) {
        setNavHidden(true)
        setMenuOpen(false)
      } else if (currentY < lastY - 12) {
        setNavHidden(false)
      }

      lastY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const steps = document.querySelectorAll('[data-process-index]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(Number(entry.target.getAttribute('data-process-index')))
          }
        })
      },
      { threshold: 0.6 },
    )

    steps.forEach((step) => observer.observe(step))
    return () => observer.disconnect()
  }, [])

  const activeProcess = processSteps[activeStep]

  return (
    <div className="page-shell">
      <header className={`navbar ${navScrolled ? 'scrolled' : ''} ${navHidden ? 'hidden' : ''}`}>
        <div className="container navbar__inner">
          <a className="navbar__brand" href="#hero" aria-label="Retour en haut">
            <Logo dark />
          </a>

          <button
            className={`navbar__burger ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`navbar__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigation principale">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="navbar__link" onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              className="button button--primary button--compact"
              href={CHROME_WEB_STORE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Installer gratuitement
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-bg hero-bg--one" />
          <div className="hero-bg hero-bg--two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-label" data-animate="fade-up">
                <span className="hero-label__dot" />
                EXTENSION CHROME GRATUITE
              </div>

              <h1 className="hero-title" data-animate="fade-up">
                Ne vous faites plus
                <br />
                avoir sur leboncoin.
              </h1>

              <p className="hero-subtitle" data-animate="fade-up">
                OKazCar analyse chaque annonce auto en 1 clic. Score de fiabilité, prix marché, détection d’anomalies. IA intégrée.
              </p>

              <div className="hero-actions" data-animate="fade-up">
                <a className="button button--primary button--large" href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
                  Installer sur Chrome — C’est gratuit
                </a>
                <a className="button button--ghost-light button--large" href="#showcase">
                  Voir la démo ↓
                </a>
              </div>

              <div className="support-badges" data-animate="fade-in">
                <span className="support-pill support-pill--lbc">● leboncoin.fr</span>
                <span className="support-pill support-pill--as24">● AutoScout24 (12 pays)</span>
              </div>
            </div>

            <div className="hero-visual" data-animate="scale-up">
              <div className="hero-visual__browser">
                <div className="browser-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="listing-preview">
                  <div className="listing-preview__media" />
                  <div className="listing-preview__body">
                    <span className="listing-preview__badge">BMW Série 3 · 2021</span>
                    <h2>318d Touring M Sport · 42 000 km</h2>
                    <p>19 990 € · Particulier · Lyon</p>
                    <div className="listing-preview__blurred" />
                  </div>
                </div>
                <div className="extension-panel">
                  <div className="extension-panel__header">
                    <Logo />
                    <span className="panel-chip">IA intégrée</span>
                  </div>
                  <div className="extension-panel__score">
                    <GaugeVisual />
                  </div>
                  <div className="extension-panel__mini-grid">
                    <div>
                      <span>Prix marché</span>
                      <strong>Bon alignement</strong>
                    </div>
                    <div>
                      <span>Téléphone</span>
                      <strong>Vérifié</strong>
                    </div>
                    <div>
                      <span>Historique</span>
                      <strong>Stable</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#showcase" aria-label="Descendre vers la section suivante">
            <span />
          </a>
        </section>

        <section id="showcase" className="section section--showcase">
          <div className="container section-head section-head--center">
            <p className="eyebrow eyebrow--blue" data-animate="fade-up">L’EXTENSION EN ACTION</p>
            <h2 className="section-title" data-animate="fade-up">
              Tout ce que vous devez savoir.
              <br />
              En un coup d’œil.
            </h2>
          </div>

          <div className="container showcase-shell" data-animate="scale-up">
            <div className="showcase-browser">
              <div className="browser-bar browser-bar--light">
                <span />
                <span />
                <span />
              </div>
              <div className="showcase-content">
                <div className="showcase-listing">
                  <div className="showcase-listing__image" />
                  <div className="showcase-listing__info">
                    <span className="showcase-listing__site">leboncoin.fr</span>
                    <h3>Peugeot 3008 GT Line · 2019</h3>
                    <p>Diesel · 89 000 km · 20 480 €</p>
                    <div className="showcase-listing__cards">
                      <span>Historique propre</span>
                      <span>Prix marché cohérent</span>
                      <span>Vendeur identifié</span>
                    </div>
                  </div>
                </div>
                <div className="showcase-panel">
                  <div className="showcase-panel__score">
                    <span className="showcase-panel__label">Score global</span>
                    <strong>86/100</strong>
                  </div>
                  <div className="showcase-panel__rows">
                    <div><span>L4 Prix vs marché</span><strong>OK</strong></div>
                    <div><span>L6 Analyse téléphone</span><strong>RAS</strong></div>
                    <div><span>L8 Détection import</span><strong>À surveiller</strong></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-highlights" data-animate-stagger>
              {showcaseHighlights.map((item, index) => (
                <div key={item.label} className="showcase-highlight" data-animate="fade-up" style={{ '--stagger-index': index }}>
                  <span>{item.icon}</span>
                  <strong>{item.label}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="section section--light">
          <div className="container section-head">
            <p className="eyebrow" data-animate="fade-up">FONCTIONNALITÉS</p>
            <h2 className="section-title" data-animate="fade-up">3 blocs qui évitent les mauvaises surprises.</h2>
          </div>

          <div className="container feature-stack">
            {featureRows.map((feature, index) => (
              <article key={feature.id} className={`feature-row ${index % 2 === 1 ? 'feature-row--reverse' : ''}`}>
                <div className="feature-copy" data-animate={index % 2 === 0 ? 'slide-left' : 'slide-right'}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <div className="feature-visual-wrap">
                  <FeatureVisual type={feature.visual} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="section section--process">
          <div className="container section-head">
            <p className="eyebrow" data-animate="fade-up">SIMPLE COMME BONJOUR</p>
            <h2 className="section-title" data-animate="fade-up">3 étapes. 3 secondes.</h2>
          </div>

          <div className="container process-layout">
            <div className="process-steps" data-animate-stagger>
              {processSteps.map((step, index) => (
                <article
                  key={step.id}
                  className={`process-step ${activeStep === index ? 'is-active' : ''}`}
                  data-process-index={index}
                  data-animate="fade-up"
                  style={{ '--stagger-index': index }}
                >
                  <div className="process-step__number">{index + 1}</div>
                  <div>
                    <p className="process-step__icon">{step.icon}</p>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="process-visual sticky-visual" data-animate="scale-up">
              <div className="process-mockup">
                <span className="process-mockup__label">{activeProcess.visualLabel}</span>
                <h3>{activeProcess.visualTitle}</h3>
                <p>{activeProcess.visualCaption}</p>
                <div className="process-mockup__screen">
                  <div className="process-mockup__sidebar">
                    <span className="process-pill">Score</span>
                    <span className="process-pill">Prix</span>
                    <span className="process-pill">Alertes</span>
                  </div>
                  <div className="process-mockup__content">
                    <div className="process-card process-card--wide" />
                    <div className="process-card-grid">
                      <div className="process-card" />
                      <div className="process-card" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark">
          <div className="container section-head section-head--center">
            <p className="eyebrow eyebrow--dark" data-animate="fade-up">ANALYSE COMPLÈTE</p>
            <h2 className="section-title section-title--dark" data-animate="fade-up">9 filtres. Zéro angle mort.</h2>
          </div>

          <div className="container filter-grid" data-animate-stagger>
            {filterCards.map(([code, title, description], index) => (
              <article key={code} className="filter-card" data-animate="fade-up" style={{ '--stagger-index': index }}>
                <span className="filter-card__code">{code}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="numbers" className="section section--numbers">
          <div className="container section-head section-head--center">
            <p className="eyebrow" data-animate="fade-up">EN CHIFFRES</p>
            <h2 className="section-title" data-animate="fade-up">Conçu pour les acheteurs exigeants.</h2>
          </div>

          <div className="container stats-grid" data-animate-stagger>
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-card" data-animate="fade-up" style={{ '--stagger-index': index }}>
                <strong data-count-to={stat.value} data-prefix={stat.prefix ?? ''} data-suffix={stat.suffix ?? ''}>
                  {stat.prefix ?? ''}0{stat.suffix ?? ''}
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="section section--faq">
          <div className="container section-head section-head--center section-head--narrow">
            <h2 className="section-title" data-animate="fade-up">Questions fréquentes</h2>
          </div>

          <div className="container faq-list" data-animate-stagger>
            {faqItems.map((item, index) => (
              <details key={item.q} className="faq-item" data-animate="fade-up" style={{ '--stagger-index': index }}>
                <summary>
                  <span>{item.q}</span>
                  <span className="faq-item__chevron">⌄</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div className="container cta-shell" data-animate="fade-up">
            <WheelIcon className="cta-wheel" />
            <h2>Prêt à acheter malin ?</h2>
            <p>
              Installez OKazCar en 10 secondes. Votre prochain achat auto mérite mieux qu’un feeling.
            </p>
            <a className="button button--light button--xl" href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
              Ajouter à Chrome — Gratuit
            </a>
            <span className="cta-note">Extension Chrome · Gratuit · Sans inscription</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__brand">
            <Logo dark />
            <p>Fait avec ❤️ pour les acheteurs auto exigeants.</p>
          </div>
          <div className="site-footer__links">
            <a href="#faq">Politique de confidentialité</a>
            <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer">
              Chrome Web Store
            </a>
            <a href="mailto:contact@okazcar.com">Contact</a>
          </div>
          <p className="site-footer__copy">© 2026 OKazCar. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
