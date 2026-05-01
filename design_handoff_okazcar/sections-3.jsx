/* ===== OKazCar — Sections part 3: Comparison, Blog, FAQ, CTA, Footer ===== */

const { useState: useS3 } = React;

/* ---------- COMPARISON ---------- */
function Comparison() {
  const rows = [
    { feat: 'Score de fiabilité sur 100', without: '—', with: '12 filtres pondérés' },
    { feat: 'Prix marché géolocalisé', without: 'Argus générique', with: 'Médiane temps réel régionale' },
    { feat: 'Détection véhicule importé', without: '—', with: 'Cumul de 12 signaux' },
    { feat: 'Vérification SIRET vendeur', without: 'Manuelle', with: 'API recherche-entreprises.gouv.fr' },
    { feat: 'Rappels constructeur', without: 'À chercher', with: 'Vérifié auto. (Takata, etc.)' },
    { feat: 'Fiabilité moteur connue', without: '—', with: 'Base BMW N47, VW EA189, K9K…' },
    { feat: 'Z-score statistique', without: '—', with: 'NumPy sur tranche hp_range' },
    { feat: 'Temps d\'analyse', without: 'Heures de recherche', with: 'Quelques secondes' },
  ];
  return (
    <section id="compare" className="okc-section" style={{ background: 'var(--okc-bg-light)' }}>
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <div className="okc-eyebrow" data-animate="fade-up">09 — Comparatif</div>
            <h2 className="okc-h2" data-animate="fade-up" style={{ marginTop: 20 }}>
              Avant. Après.<br/>La différence est mesurable.
            </h2>
          </div>
        </div>
        <div data-animate="fade-up" style={{ border: '1px solid var(--okc-border)', borderRadius: 4, overflow: 'hidden', background: 'var(--okc-bg-white)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr', padding: '20px 24px', borderBottom: '1px solid var(--okc-border)', alignItems: 'baseline' }}>
            <span className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>Critère</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--okc-text-muted)' }}>Sans OKazCar</span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>Avec OKazCar</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr',
              padding: '18px 24px',
              borderBottom: i < rows.length - 1 ? '1px solid var(--okc-border)' : 'none',
              alignItems: 'center', fontSize: 14,
            }}>
              <span style={{ fontWeight: 500 }}>{r.feat}</span>
              <span style={{ color: 'var(--okc-text-muted)' }}>{r.without}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--okc-pass)' }}/>
                {r.with}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BLOG ---------- */
function Blog() {
  const posts = [
    { tag: 'Guide', title: 'Détecter un compteur trafiqué : 7 signaux à croiser', date: 'Avr. 2026', read: '8 min' },
    { tag: 'Méthode', title: 'Pourquoi le prix médian régional bat l\'argus national', date: 'Mar. 2026', read: '6 min' },
    { tag: 'Moteurs', title: 'Les 12 moteurs à éviter en occasion (et pourquoi)', date: 'Mar. 2026', read: '12 min' },
    { tag: 'Légal', title: 'Vendeur pro déguisé en particulier : que dit la loi', date: 'Fév. 2026', read: '5 min' },
  ];
  return (
    <section id="blog" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <div className="okc-eyebrow" data-animate="fade-up">10 — Conseils achat</div>
            <h2 className="okc-h2" data-animate="fade-up" style={{ marginTop: 20 }}>
              La méthode<br/>derrière le score.
            </h2>
          </div>
          <p className="okc-lead" data-animate="fade-up">
            Articles techniques sur la détection d'anomalies, le marché de l'occasion, la fiabilité moteur. Sans bullshit, sans SEO bourré, juste les faits.
          </p>
        </div>
        <div className="okc-grid-12">
          {posts.map((p, i) => (
            <a key={i} href="#" data-animate="fade-up" style={{
              gridColumn: i === 0 ? 'span 6' : 'span 3',
              borderTop: '1px solid var(--okc-text-primary)',
              paddingTop: 20,
              minHeight: i === 0 ? 320 : 220,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              transition: 'opacity 0.2s',
            }}>
              <div style={{ aspectRatio: i === 0 ? '16/9' : '4/3', background: 'var(--okc-bg-light)', borderRadius: 4, marginBottom: 16, position: 'relative', overflow: 'hidden', border: '1px solid var(--okc-border)' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 8px, rgba(0,0,0,0.04) 8px 9px)' }}/>
                <div style={{ position: 'absolute', bottom: 12, left: 12, fontFamily: 'var(--okc-font-mono)', fontSize: 10, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
                  [ illustration {p.tag.toLowerCase()} ]
                </div>
              </div>
              <div>
                <span className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>{p.tag}</span>
                <h3 style={{ fontSize: i === 0 ? 26 : 18, fontWeight: 500, marginTop: 8, letterSpacing: '-0.4px', lineHeight: 1.2 }}>{p.title}</h3>
                <div style={{ marginTop: 14, fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
                  {p.date} · {p.read}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const [open, setOpen] = useS3(0);
  const faqs = window.OKC_FAQ;
  return (
    <section id="faq" className="okc-section" style={{ background: 'var(--okc-bg-light)' }}>
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <div className="okc-eyebrow" data-animate="fade-up">11 — FAQ</div>
            <h2 className="okc-h2" data-animate="fade-up" style={{ marginTop: 20 }}>
              Questions<br/>fréquentes.
            </h2>
          </div>
        </div>
        <div className="okc-grid-12">
          <div style={{ gridColumn: '3 / span 8' }}>
            {faqs.map((f, i) => {
              const isOpen = i === open;
              return (
                <div key={i} data-animate="fade-up" style={{
                  borderTop: '1px solid var(--okc-border)',
                  borderBottom: i === faqs.length - 1 ? '1px solid var(--okc-border)' : 'none',
                }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '24px 4px', textAlign: 'left',
                    fontSize: 18, fontWeight: 500, letterSpacing: '-0.3px',
                  }}>
                    <span>{f.q}</span>
                    <span style={{
                      width: 28, height: 28, borderRadius: '50%',
                      border: '1px solid var(--okc-border)',
                      display: 'grid', placeItems: 'center',
                      fontSize: 16, transition: 'transform 0.2s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    }}>+</span>
                  </button>
                  <div style={{
                    maxHeight: isOpen ? 240 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), padding 0.35s',
                    padding: isOpen ? '0 4px 24px' : '0 4px',
                  }}>
                    <p style={{ margin: 0, color: 'var(--okc-text-secondary)', fontSize: 15, lineHeight: 1.65, maxWidth: '60ch' }}>
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="install" className="okc-section" style={{ padding: '160px 0', textAlign: 'center' }}>
      <div className="okc-page">
        <div data-animate="fade-up" style={{ display: 'inline-block', marginBottom: 32 }}>
          <OKCLogo size={64}/>
        </div>
        <h2 data-animate="fade-up" className="okc-h1" style={{ maxWidth: '14ch', margin: '0 auto', fontSize: 'clamp(48px, 8vw, 120px)' }}>
          Prêt à acheter<br/>rationnel ?
        </h2>
        <p data-animate="fade-up" className="okc-lead" style={{ margin: '32px auto 0', maxWidth: '52ch' }}>
          Installation en 10 secondes. Aucun compte. Aucune donnée collectée. Votre prochain achat auto mérite mieux qu'un coup de cœur.
        </p>
        <div data-animate="fade-up" style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" className="okc-btn okc-btn--primary okc-btn--xl">Ajouter à Chrome — Gratuit →</a>
          <a href="#filters" className="okc-btn okc-btn--ghost okc-btn--xl">Voir la méthode</a>
        </div>
        <div data-animate="fade-up" style={{ marginTop: 24, fontFamily: 'var(--okc-font-mono)', fontSize: 12, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
          Extension Chrome · v1.0 · Sans inscription
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="okc-footer">
      <div className="okc-page">
        <div className="okc-footer-grid">
          <div>
            <OKCLogo size={22}/>
            <p style={{ marginTop: 16, maxWidth: '32ch', color: 'var(--okc-text-secondary)', fontSize: 14 }}>
              Analyse en temps réel des annonces auto. 4 plateformes, 15 domaines, 12 filtres.
            </p>
          </div>
          <div>
            <h4>Produit</h4>
            <ul>
              <li><a href="#showcase">Extension</a></li>
              <li><a href="#filters">12 filtres</a></li>
              <li><a href="#coverage">Couverture</a></li>
              <li><a href="#install">Installer</a></li>
            </ul>
          </div>
          <div>
            <h4>Ressources</h4>
            <ul>
              <li><a href="#blog">Conseils achat</a></li>
              <li><a href="#how">Méthode</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4>Légal</h4>
            <ul>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="okc-footer-bottom">
          <span>© 2026 OKazCar</span>
          <span className="okc-mono">v1.0 · build 2026.04</span>
        </div>
      </div>
    </footer>
  );
}

window.Comparison = Comparison;
window.Blog = Blog;
window.FAQ = FAQ;
window.CTA = CTA;
window.Footer = Footer;
