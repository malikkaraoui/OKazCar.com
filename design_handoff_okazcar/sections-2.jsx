/* ===== OKazCar — Sections part 2: Filters grid, Demo, How, Audience, Price, Numbers ===== */

const { useState: useS2, useEffect: useE2, useRef: useR2 } = React;

/* ---------- 12 FILTERS GRID ---------- */
function FiltersGrid() {
  const [active, setActive] = useS2(0);
  const f = window.OKC_FILTERS;
  return (
    <section id="filters" className="okc-section" style={{ background: 'var(--okc-bg-light)' }}>
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <div className="okc-eyebrow" data-animate="fade-up">03 — Méthode d'analyse</div>
            <h2 className="okc-h2" data-animate="fade-up" style={{ marginTop: 20 }}>
              12 filtres.<br />16 points de poids.<br />Zéro angle mort.
            </h2>
          </div>
          <p className="okc-lead" data-animate="fade-up">
            Chaque filtre vérifie une dimension du véhicule ou de l'annonce, avec un poids selon sa criticité. <strong>L2</strong> (référentiel) et <strong>L4</strong> (prix marché) pèsent <strong>2.0</strong> chacun total des poids : <strong>16.0</strong>.
          </p>
        </div>

        <div className="okc-grid-12" style={{ gap: 24, alignItems: 'start' }}>
          {/* Left: list */}
          <div style={{ gridColumn: 'span 6' }}>
            <div style={{ borderTop: '1px solid var(--okc-border)' }}>
              {f.map((flt, i) => {
                const isActive = i === active;
                return (
                  <button key={flt.id} onClick={() => setActive(i)}
                  data-animate="fade-up"
                  style={{
                    display: 'grid', gridTemplateColumns: '50px 1fr 60px 36px',
                    gap: 16, alignItems: 'center',
                    width: '100%', padding: '20px 4px', textAlign: 'left',
                    borderBottom: '1px solid var(--okc-border)',
                    background: isActive ? 'var(--okc-bg-white)' : 'transparent',
                    transition: 'background 0.2s ease',
                    cursor: 'pointer'
                  }}>
                    <span className="okc-mono" style={{ color: isActive ? 'var(--okc-text-primary)' : 'var(--okc-text-muted)', fontWeight: 600 }}>
                      {flt.id}
                    </span>
                    <span style={{ fontSize: 17, fontWeight: 500, color: 'var(--okc-text-primary)', letterSpacing: '-0.2px' }}>
                      {flt.name}
                    </span>
                    <span className="okc-mono" style={{ color: flt.critical ? 'var(--okc-fail)' : 'var(--okc-text-muted)', textAlign: 'right' }}>
                      ×{flt.weight.toFixed(1)}
                    </span>
                    <span style={{ textAlign: 'right', color: 'var(--okc-text-muted)', fontFamily: 'var(--okc-font-mono)', fontSize: 14 }}>
                      {isActive ? '–' : '+'}
                    </span>
                  </button>);

              })}
            </div>
          </div>
          {/* Right: detail */}
          <div style={{ gridColumn: 'span 6', position: 'sticky', top: 100 }}>
            <div data-animate="fade-up" style={{
              background: 'var(--okc-bg-white)',
              border: '1px solid var(--okc-border)',
              padding: '36px 36px 32px',
              borderRadius: 4
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <span className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Filtre {f[active].id}
                </span>
                {f[active].critical &&
                <span className="okc-pill okc-pill--fail">Critique</span>
                }
              </div>
              <h3 style={{ fontSize: 32, fontWeight: 500, letterSpacing: '-1px', margin: 0, lineHeight: 1.1 }}>
                {f[active].name}
              </h3>
              <p style={{ fontSize: 15, color: 'var(--okc-text-secondary)', lineHeight: 1.65, marginTop: 20 }}>
                {f[active].role}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--okc-border)' }}>
                <div>
                  <div className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>Poids</div>
                  <div style={{ fontSize: 24, fontWeight: 500, marginTop: 4, letterSpacing: '-0.5px' }}>{f[active].weight.toFixed(1)} <span style={{ color: 'var(--okc-text-muted)', fontSize: 14 }}>/ 16.0</span></div>
                </div>
                <div>
                  <div className="okc-mono" style={{ color: 'var(--okc-text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>Statut typique</div>
                  <div style={{ fontSize: 24, fontWeight: 500, marginTop: 4, letterSpacing: '-0.5px' }}>
                    {f[active].critical ? 'Bloquant' : 'Pondéré'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- LIVE DEMO (URL → verdict) ---------- */
function LiveDemo() {
  const [url, setUrl] = useS2('https://www.leboncoin.fr/ad/voitures/3151844708');
  const [analyzing, setAnalyzing] = useS2(false);
  const [step, setStep] = useS2(-1);
  const steps = ['Extraction des données', 'Détection référentiel', 'Collecte prix marché', 'Analyse statistique', 'Vérification vendeur', 'Pondération finale'];
  const run = () => {
    if (analyzing) return;
    setAnalyzing(true);
    setStep(0);
    let i = 0;
    const t = setInterval(() => {
      i++;
      if (i >= steps.length) {clearInterval(t);setAnalyzing(false);return;}
      setStep(i);
    }, 320);
  };
  const done = !analyzing && step === steps.length - 1;
  return (
    <section id="demo" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <div className="okc-eyebrow" data-animate="fade-up">04 — Démo</div>
            <h2 className="okc-h2" data-animate="fade-up" style={{ marginTop: 20 }}>
              Collez une URL.<br />Voyez la chaîne tourner.
            </h2>
          </div>
          <p className="okc-lead" data-animate="fade-up">
            Simulation de la chaîne d'analyse en temps réel. Dans l'extension, tout cela tourne en moins de 3 secondes au moment où vous ouvrez l'annonce.
          </p>
        </div>

        <div className="okc-grid-12" style={{ alignItems: 'start' }}>
          <div style={{ gridColumn: 'span 7' }} data-animate="fade-up">
            <div style={{
              border: '1px solid var(--okc-border)',
              padding: 4, display: 'flex', gap: 4,
              background: 'var(--okc-bg-white)', borderRadius: 4
            }}>
              <input value={url} onChange={(e) => setUrl(e.target.value)}
              style={{
                flex: 1, padding: '14px 16px', border: 'none', outline: 'none',
                fontFamily: 'var(--okc-font-mono)', fontSize: 13,
                background: 'transparent', color: 'var(--okc-text-primary)'
              }} />
              <button onClick={run} className="okc-btn okc-btn--primary" disabled={analyzing}>
                {analyzing ? 'Analyse en cours…' : done ? 'Relancer' : 'Analyser →'}
              </button>
            </div>

            {/* Pipeline */}
            <div style={{ marginTop: 32 }}>
              {steps.map((s, i) => {
                const status = i < step ? 'done' : i === step ? 'running' : 'pending';
                return (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '32px 1fr auto', gap: 16,
                    padding: '16px 0', borderBottom: '1px solid var(--okc-border)',
                    alignItems: 'center',
                    opacity: status === 'pending' ? 0.4 : 1,
                    transition: 'opacity 0.3s'
                  }}>
                    <span className="okc-mono" style={{ color: 'var(--okc-text-muted)' }}>0{i + 1}</span>
                    <span style={{ fontSize: 15, fontWeight: 500 }}>{s}</span>
                    <span className="okc-mono" style={{ fontSize: 11, color: status === 'done' ? 'var(--okc-pass)' : status === 'running' ? 'var(--okc-warning)' : 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
                      {status === 'done' ? '✓ ok' : status === 'running' ? '○ run' : '— wait'}
                    </span>
                  </div>);

              })}
            </div>
          </div>

          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }} data-animate="scale-up">
            <ScoreGauge score={done ? 97 : analyzing ? Math.round(97 * ((step + 1) / steps.length)) : 0} size={240} animateInView={false} label={done ? 'Annonce fiable' : analyzing ? 'En cours…' : 'En attente'} />
            <div style={{ width: '100%' }}>
              <PriceBar marketMin={11500} marketMax={14800} ref_={13200} current={12490} animateInView={done} />
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
  { n: '01', t: 'Installation', d: 'Ajoutez OKazCar depuis le Chrome Web Store. Aucun compte, aucune permission excessive — uniquement les domaines des plateformes supportées.' },
  { n: '02', t: 'Détection', d: 'Au chargement de l\'annonce, l\'extension détecte la plateforme (LBC, LC, PV, AS24), parse le DOM et extrait les champs critiques.' },
  { n: '03', t: 'Pipeline', d: '12 filtres exécutés en parallèle (max 11 workers) : référentiel, prix marché géolocalisé, statistiques, vendeur, import, fiabilité moteur.' },
  { n: '04', t: 'Verdict', d: 'Score pondéré sur 100 affiché dans un panel injecté. Détails par filtre, sources, recommandations.' }];

  return (
    <section id="how" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <div className="okc-eyebrow" data-animate="fade-up">05 — Comment ça marche</div>
            <h2 className="okc-h2" data-animate="fade-up" style={{ marginTop: 20 }}>
              Quatre étapes.<br />Trois secondes.
            </h2>
          </div>
        </div>
        <div className="okc-grid-12">
          {steps.map((s, i) =>
          <div key={s.n} data-animate="fade-up" style={{ gridColumn: 'span 3', borderTop: '1px solid var(--okc-text-primary)', paddingTop: 24 }}>
              <span className="okc-mono" style={{ color: 'var(--okc-text-muted)' }}>{s.n}</span>
              <h3 className="okc-h3" style={{ marginTop: 12 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: 'var(--okc-text-secondary)', lineHeight: 1.6, marginTop: 12 }}>{s.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- AUDIENCE ---------- */
function Audience() {
  const items = [
  { t: 'Acheteur particulier', d: 'Évitez les arnaques, identifiez la bonne affaire, négociez avec des données objectives.', tag: 'Public principal' },
  { t: 'Vendeur particulier', d: 'Positionnez votre prix juste avant publication. Comparez votre annonce à la concurrence locale.', tag: 'À venir Q2 2026' },
  { t: 'Professionnel auto', d: 'Sourcing accéléré, audit de stock concurrent, alerte sur les rappels constructeur non traités.', tag: 'Mode pro' }];

  return (
    <section id="audience" className="okc-section" style={{ background: 'var(--okc-bg-light)' }}>
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <div className="okc-eyebrow" data-animate="fade-up">06 — Pour qui</div>
            <h2 className="okc-h2" data-animate="fade-up" style={{ marginTop: 20 }}>
              Trois usages.<br />Une seule extension.
            </h2>
          </div>
        </div>
        <div className="okc-grid-12">
          {items.map((it, i) =>
          <div key={i} data-animate="fade-up" style={{
            gridColumn: 'span 4',
            background: 'var(--okc-bg-white)',
            border: '1px solid var(--okc-border)',
            padding: 32,
            minHeight: 280,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
          }}>
              <div>
                <span className="okc-pill" style={{ background: 'transparent', border: '1px solid var(--okc-border)', color: 'var(--okc-text-muted)' }}>
                  {it.tag}
                </span>
                <h3 className="okc-h3" style={{ marginTop: 24, fontSize: 26 }}>{it.t}</h3>
                <p style={{ fontSize: 15, color: 'var(--okc-text-secondary)', lineHeight: 1.6, marginTop: 16 }}>{it.d}</p>
              </div>
              <a href="#install" style={{ marginTop: 24, fontSize: 13, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--okc-text-primary)', borderBottom: '1px solid var(--okc-text-primary)', alignSelf: 'flex-start', paddingBottom: 2 }}>
                En savoir plus →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- COVERAGE TABLE ---------- */
function Coverage() {
  const platforms = window.OKC_PLATFORMS;
  return (
    <section id="coverage" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <div className="okc-eyebrow" data-animate="fade-up">07 — Couverture</div>
            <h2 className="okc-h2" data-animate="fade-up" style={{ marginTop: 20 }}>
              4 plateformes.<br />15 domaines.<br />11 pays + .com.
            </h2>
          </div>
          <p className="okc-lead" data-animate="fade-up">
            La cascade prix marché interroge les 15 domaines selon la géolocalisation du véhicule. AutoScout24 = 12 domaines (11 pays nommés + .com international).
          </p>
        </div>
        <div data-animate="fade-up" style={{ border: '1px solid var(--okc-border)', borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 1fr', padding: '14px 24px', background: 'var(--okc-text-primary)', color: 'var(--okc-bg-white)', fontFamily: 'var(--okc-font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>
            <span>Plateforme</span>
            <span>Domaine</span>
            <span>Pays</span>
            <span style={{ textAlign: 'right' }}>Statut</span>
          </div>
          {platforms.map((p, i) =>
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 1fr',
            padding: '14px 24px',
            borderBottom: i < platforms.length - 1 ? '1px solid var(--okc-border)' : 'none',
            alignItems: 'center', fontSize: 14,
            background: 'var(--okc-bg-white)'
          }}>
              <span style={{ fontWeight: 500 }}>{p.name}</span>
              <span className="okc-mono" style={{ color: 'var(--okc-text-secondary)' }}>{p.domain}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>{p.flag}</span>{p.country}</span>
              <span style={{ textAlign: 'right' }}><span className="okc-pill okc-pill--pass">Actif</span></span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- NUMBERS ---------- */
function Numbers() {
  const stats = window.OKC_STATS;
  return (
    <section className="okc-section" style={{ background: 'var(--okc-text-primary)', color: 'var(--okc-bg-white)' }}>
      <div className="okc-page">
        <div className="okc-sec-head" style={{ marginBottom: 80 }}>
          <div>
            <div className="okc-eyebrow okc-eyebrow--white" data-animate="fade-up" style={{ color: 'rgba(255,255,255,0.5)' }}>08 — Chiffres</div>
            <h2 className="okc-h2" data-animate="fade-up" style={{ marginTop: 20, color: 'var(--okc-bg-white)' }}>
              Une base technique<br />conséquente.
            </h2>
          </div>
        </div>
        <div className="okc-grid-12">
          {stats.map((s, i) =>
          <div key={i} data-animate="fade-up" style={{ gridColumn: 'span 3', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 24 }}>
              <div style={{ fontSize: 'clamp(48px, 5vw, 88px)', fontWeight: 500, letterSpacing: '-2px', lineHeight: 1, color: 'var(--okc-bg-white)' }}>
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 13, marginTop: 16, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1 }}>
                {s.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

window.FiltersGrid = FiltersGrid;
window.LiveDemo = LiveDemo;
window.HowItWorks = HowItWorks;
window.Audience = Audience;
window.Coverage = Coverage;
window.Numbers = Numbers;