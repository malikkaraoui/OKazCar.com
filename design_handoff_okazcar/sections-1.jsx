/* ===== OKazCar — Sections part 1: Nav, Hero, Marquee, Showcase ===== */

const { useState: useS1, useEffect: useE1, useRef: useR1 } = React;

/* ---------- NAV ---------- */
function Nav() {
  const [hidden, setHidden] = useS1(false);
  useE1(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > last);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`okc-nav ${hidden ? 'hidden' : ''}`}>
      <div className="okc-nav-inner">
        <OKCLogo size={22} />
        <div className="okc-nav-links">
          <a href="#showcase">Extension</a>
          <a href="#filters">Filtres</a>
          <a href="#how">Méthode</a>
          <a href="#audience">Pour qui</a>
          <a href="#blog">Conseils</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#install" className="okc-btn okc-btn--primary">
          Installer — Gratuit
        </a>
      </div>
    </nav>
  );
}

/* ---------- HERO (Avant / Après) ---------- */
function Hero() {
  const [pos, setPos] = useS1(50);
  const ref = useR1();
  const dragging = useR1(false);

  const onMove = (clientX) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };
  useE1(() => {
    const mu = () => { dragging.current = false; };
    const mm = (e) => { if (dragging.current) onMove(e.clientX); };
    const tm = (e) => { if (dragging.current && e.touches[0]) onMove(e.touches[0].clientX); };
    window.addEventListener('mouseup', mu);
    window.addEventListener('mousemove', mm);
    window.addEventListener('touchmove', tm, { passive: true });
    window.addEventListener('touchend', mu);
    return () => {
      window.removeEventListener('mouseup', mu);
      window.removeEventListener('mousemove', mm);
      window.removeEventListener('touchmove', tm);
      window.removeEventListener('touchend', mu);
    };
  }, []);

  return (
    <section className="okc-section" style={{ paddingTop: 140, borderTop: 0 }}>
      <div className="okc-page">
        <div className="okc-grid-12" style={{ alignItems: 'end', marginBottom: 40 }}>
          <div style={{ gridColumn: 'span 7' }}>
            <div className="okc-eyebrow" data-animate="fade-up">Extension Chrome — Gratuite</div>
            <h1 className="okc-h1" style={{ marginTop: 24 }} data-animate="fade-up">
              Une annonce auto.<br/>
              Douze filtres.<br/>
              <span style={{ color: 'var(--okc-text-muted)' }}>Une décision rationnelle.</span>
            </h1>
          </div>
          <div style={{ gridColumn: 'span 5', paddingBottom: 8 }} data-animate="fade-up">
            <p className="okc-lead">
              OKazCar analyse en temps réel les annonces de leboncoin, La Centrale, ParuVendu et AutoScout24 sur 11 pays. Score sur 100, prix de marché géolocalisé, détection d'anomalies — directement dans votre navigateur.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <a href="#install" className="okc-btn okc-btn--primary okc-btn--lg">Ajouter à Chrome →</a>
              <a href="#showcase" className="okc-btn okc-btn--ghost okc-btn--lg">Voir la démo</a>
            </div>
            <div style={{ marginTop: 20, display: 'flex', gap: 16, fontSize: 12, color: 'var(--okc-text-muted)', fontFamily: 'var(--okc-font-mono)' }}>
              <span>v1.0 · 2026</span>
              <span style={{ opacity: 0.4 }}>—</span>
              <span>Aucun compte requis</span>
              <span style={{ opacity: 0.4 }}>—</span>
              <span>Analyse en {'<'}3s</span>
            </div>
          </div>
        </div>

        {/* Before / After slider */}
        <div data-animate="scale-up" ref={ref} style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: 8,
          overflow: 'hidden',
          border: '1px solid var(--okc-border)',
          background: 'var(--okc-bg-light)',
          userSelect: 'none',
        }}>
          {/* AFTER (with OKazCar) — full layer */}
          <BeforeAfterAfter />
          {/* BEFORE (raw listing) — clipped from left */}
          <div style={{
            position: 'absolute', inset: 0,
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
          }}>
            <BeforeAfterBefore />
          </div>
          {/* Slider handle */}
          <div
            onMouseDown={() => { dragging.current = true; }}
            onTouchStart={() => { dragging.current = true; }}
            style={{
              position: 'absolute', top: 0, bottom: 0,
              left: `${pos}%`,
              width: 2, background: '#fff',
              cursor: 'ew-resize', zIndex: 5,
              boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
            }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 44, height: 44, borderRadius: '50%',
              background: '#fff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              display: 'grid', placeItems: 'center',
              fontFamily: 'var(--okc-font-mono)', fontSize: 11,
              fontWeight: 600,
              border: '1px solid rgba(0,0,0,0.08)',
            }}>
              ‹ ›
            </div>
          </div>
          {/* Labels */}
          <div style={{ position: 'absolute', top: 16, left: 16, padding: '6px 10px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderRadius: 4, fontFamily: 'var(--okc-font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: '#0a0a0a' }}>
            Sans OKazCar
          </div>
          <div style={{ position: 'absolute', top: 16, right: 16, padding: '6px 10px', background: '#0a0a0a', color: '#fff', borderRadius: 4, fontFamily: 'var(--okc-font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>
            Avec OKazCar
          </div>
        </div>
      </div>
    </section>
  );
}

/* fake LBC listing — raw */
function BeforeAfterBefore() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#f4f4f0',
      padding: '40px 56px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 28,
      fontFamily: 'var(--okc-font)',
    }}>
      <div style={{
        background: '#d4d4d0',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(assets/leboncoin-c4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}>
        <div style={{ position: 'absolute', bottom: 12, left: 12, padding: '4px 8px', background: 'rgba(255,255,255,0.92)', fontFamily: 'var(--okc-font-mono)', fontSize: 10, color: '#525252', textTransform: 'uppercase', letterSpacing: 1, borderRadius: 2 }}>
          leboncoin.fr
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, color: '#737373', fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>leboncoin · 3 jours</div>
        <h3 style={{ fontSize: 22, fontWeight: 600, margin: 0, lineHeight: 1.2, letterSpacing: '-0.4px' }}>Citroën C4 1.2 Essence 130 CH SHINE BVM6 — 2022</h3>
        <div style={{ fontSize: 28, fontWeight: 500, margin: '16px 0 6px', letterSpacing: '-0.5px' }}>12 490 €</div>
        <div style={{ fontSize: 13, color: '#737373' }}>34 000 km · Essence · BVM6 · Particulier</div>
        <div style={{ marginTop: 22, padding: 16, background: '#fff', borderRadius: 4, border: '1px solid #e0e0d8' }}>
          <div style={{ fontSize: 12, color: '#a3a3a3', fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1 }}>Description</div>
          <div style={{ fontSize: 13, color: '#525252', marginTop: 8, lineHeight: 1.6 }}>
            Citroën C4 en très bon état, faible kilométrage, entretien à jour. Première main, non fumeur. Crit'air 1. Disponible immédiatement.
          </div>
        </div>
        <div style={{ marginTop: 16, fontSize: 11, fontFamily: 'var(--okc-font-mono)', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: 1 }}>
          ?? Bonne affaire ? Prix correct ? Vendeur fiable ?
        </div>
      </div>
    </div>
  );
}

/* same listing — augmented with OKazCar overlay */
function BeforeAfterAfter() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#fafaf8',
      padding: '40px 56px',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 280px',
      gap: 28,
      fontFamily: 'var(--okc-font)',
    }}>
      <div style={{
        background: '#1e3a5f',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(assets/leboncoin-c4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}>
        <div style={{ position: 'absolute', bottom: 12, left: 12, padding: '4px 8px', background: 'rgba(255,255,255,0.92)', fontFamily: 'var(--okc-font-mono)', fontSize: 10, color: '#525252', textTransform: 'uppercase', letterSpacing: 1, borderRadius: 2 }}>
          leboncoin.fr
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, color: '#737373', fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>leboncoin · 3 jours</div>
        <h3 style={{ fontSize: 20, fontWeight: 600, margin: 0, lineHeight: 1.2, letterSpacing: '-0.4px', color: '#0a0a0a' }}>Citroën C4 1.2 Essence 130 CH SHINE BVM6 — 2022</h3>
        <div style={{ fontSize: 26, fontWeight: 500, margin: '14px 0 4px', letterSpacing: '-0.5px', color: '#0a0a0a' }}>12 490 €</div>
        <div style={{ fontSize: 13, color: '#737373' }}>34 000 km · Essence · BVM6 · Particulier</div>
        <div style={{ marginTop: 18, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <span className="okc-pill okc-pill--pass">✓ km cohérents</span>
          <span className="okc-pill okc-pill--pass">✓ tél FR vérifié</span>
          <span className="okc-pill okc-pill--pass">↓ -5% marché</span>
        </div>
      </div>
      {/* OKazCar panel mini with radar */}
      <div style={{
        background: '#fff', borderRadius: 8, border: '1px solid #e5e5e2',
        boxShadow: '0 12px 30px -10px rgba(15,23,42,0.18)',
        overflow: 'hidden',
      }}>
        <div style={{ padding: '10px 14px', background: 'linear-gradient(135deg, #1e3a5f, #2563eb)', color: '#fff' }}>
          <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.1 }}>OKaz<span style={{ color: '#fbbf24' }}>Car</span></div>
          <div style={{ fontSize: 10, opacity: 0.75, marginTop: 2 }}>Citroën C4 2022</div>
        </div>
        <div style={{ padding: '12px 12px 8px', textAlign: 'center', position: 'relative' }}>
          <window.RadarMini score={97}/>
          <div style={{ fontSize: 11, color: '#15803d', fontWeight: 500, marginTop: 4 }}>✓ Annonce fiable</div>
        </div>
        <div style={{ padding: '10px 14px', borderTop: '1px solid #f0f0ec', background: '#fafaf8' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <span style={{ fontSize: 10, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, color: '#525252' }}>Prix vs marché</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#15803d' }}>100%</span>
          </div>
          <div style={{ position: 'relative', height: 4, background: '#e5e5e2', borderRadius: 99 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '62%', background: '#15803d', borderRadius: 99 }}/>
            <div style={{ position: 'absolute', left: '78%', top: -3, bottom: -3, width: 1, background: '#737373' }}/>
          </div>
          <div style={{ marginTop: 6, fontSize: 10, color: '#525252' }}>
            12 490 € · <span style={{ color: '#15803d', fontWeight: 600 }}>-5% marché</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const items = ['leboncoin.fr', 'lacentrale.fr', 'paruvendu.fr', 'autoscout24.fr', 'autoscout24.de', 'autoscout24.ch', 'autoscout24.be', 'autoscout24.it', 'autoscout24.nl', 'autoscout24.at', 'autoscout24.es', 'autoscout24.pl', 'autoscout24.lu', 'autoscout24.se', 'autoscout24.com'];
  const doubled = [...items, ...items];
  return (
    <div className="okc-marquee">
      <div className="okc-marquee-track">
        {doubled.map((it, i) => (
          <span key={i}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--okc-text-primary)', display: 'inline-block' }}/>
            {it}
            <span className="sep">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Showcase ---------- */
function Showcase() {
  return (
    <section id="showcase" className="okc-section">
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <div className="okc-eyebrow" data-animate="fade-up">02 — L'extension</div>
            <h2 className="okc-h2" data-animate="fade-up" style={{ marginTop: 20 }}>
              Le panel OKazCar,<br/>injecté dans l'annonce.
            </h2>
          </div>
          <p className="okc-lead" data-animate="fade-up">
            Lorsque vous ouvrez une annonce sur l'une des 15 plateformes supportées, l'extension détecte le véhicule, lance la chaîne d'analyse, et affiche un panel latéral avec le verdict en quelques secondes.
          </p>
        </div>

        <div className="okc-grid-12" style={{ alignItems: 'start', gap: 32 }}>
          <div style={{ gridColumn: 'span 7' }} data-animate="slide-left">
            <BrowserMock />
          </div>
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 32 }}>
            <ShowcaseHighlight n="01" title="Extraction silencieuse" desc="DOM parsé, champs critiques (prix, km, année, marque, motorisation) capturés. Si extraction incomplète, la chaîne se bloque pas de score douteux."/>
            <ShowcaseHighlight n="02" title="Cascade prix marché" desc="Recherche multi-stratégies : géolocalisation (rayon 30km), élargissement régional, marché national. Médiane sur tranche de puissance."/>
            <ShowcaseHighlight n="03" title="Verdict pondéré" desc="Score sur 100 = somme pondérée des 12 filtres. L2 et L4 (référentiel + prix marché) pèsent 2.0 chacun, total des poids = 16.0."/>
          </div>
        </div>
      </div>
    </section>
  );
}
function ShowcaseHighlight({ n, title, desc }) {
  return (
    <div data-animate="fade-up" style={{ borderTop: '1px solid var(--okc-border)', paddingTop: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h3 className="okc-h3">{title}</h3>
        <span className="okc-mono" style={{ color: 'var(--okc-text-muted)' }}>{n}</span>
      </div>
      <p style={{ margin: '12px 0 0', color: 'var(--okc-text-secondary)', fontSize: 15, lineHeight: 1.55 }}>{desc}</p>
    </div>
  );
}

/* Browser mock with extension panel */
function BrowserMock() {
  return (
    <div style={{
      borderRadius: 8,
      border: '1px solid var(--okc-border)',
      overflow: 'hidden',
      boxShadow: '0 30px 80px -30px rgba(15,23,42,0.25), 0 12px 24px -12px rgba(15,23,42,0.12)',
      background: 'var(--okc-bg-white)',
    }}>
      {/* Chrome chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: 'var(--okc-bg-light)', borderBottom: '1px solid var(--okc-border)' }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#fc615d' }}/>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#fdbc40' }}/>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#34c84a' }}/>
        <div style={{ flex: 1, marginLeft: 16, height: 26, borderRadius: 6, background: 'var(--okc-bg-white)', border: '1px solid var(--okc-border)', display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 12, color: 'var(--okc-text-muted)', fontFamily: 'var(--okc-font-mono)' }}>
          leboncoin.fr/ad/voitures/3151844708
        </div>
      </div>
      {/* Content */}
      <div style={{ position: 'relative', minHeight: 420, background: 'linear-gradient(180deg, #f4f4f0 0%, #eaeae4 100%)' }}>
        {/* fake page */}
        <div style={{ padding: '24px 24px 24px 24px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16, height: '100%', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
              <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #b8b8b0, #8a8a82)', borderRadius: 4 }}/>
              <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #c0c0b8, #94948c)', borderRadius: 4 }}/>
            </div>
            <div style={{ height: 12, width: '60%', background: 'rgba(0,0,0,0.18)', borderRadius: 2, marginBottom: 8 }}/>
            <div style={{ height: 8, width: '85%', background: 'rgba(0,0,0,0.12)', borderRadius: 2, marginBottom: 6 }}/>
            <div style={{ height: 8, width: '75%', background: 'rgba(0,0,0,0.12)', borderRadius: 2 }}/>
          </div>
          <div/>
        </div>
        {/* OKazCar panel floating */}
        <div style={{
          position: 'absolute', top: 16, right: 16, width: 300,
        }}>
          <ExtensionPanelMini />
        </div>
      </div>
    </div>
  );
}

function ExtensionPanelMini() {
  return (
    <div style={{
      background: '#fff', borderRadius: 8, overflow: 'hidden',
      border: '1px solid var(--okc-border)',
      boxShadow: '0 20px 50px -15px rgba(15,23,42,0.3)',
    }}>
      <div style={{ padding: '12px 14px', background: 'linear-gradient(135deg, #1e3a5f, #2563eb)', color: '#fff' }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>OKaz<span style={{ color: '#fbbf24' }}>Car</span></div>
        <div style={{ fontSize: 11, opacity: 0.7 }}>Citroën C4 2022</div>
      </div>
      <div style={{ padding: '12px 14px', fontSize: 12 }}>
        {window.OKC_FILTERS.slice(0, 6).map((f, i) => {
          const ok = i !== 2;
          return (
            <div key={f.id} style={{ display: 'grid', gridTemplateColumns: '14px 24px 1fr auto', gap: 6, alignItems: 'center', padding: '6px 0', borderBottom: i < 5 ? '1px solid #f0f0ec' : 'none' }}>
              <span style={{ color: ok ? '#15803d' : '#b45309', fontSize: 11 }}>{ok ? '✓' : '⚠'}</span>
              <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 10, color: '#737373' }}>{f.id}</span>
              <span style={{ fontSize: 11, color: '#0a0a0a' }}>{f.name}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: ok ? '#15803d' : '#b45309' }}>{ok ? '100%' : '70%'}</span>
            </div>
          );
        })}
      </div>
      <div style={{ padding: 14, borderTop: '1px solid var(--okc-border)', background: '#fafaf8', textAlign: 'center' }}>
        <div style={{ fontSize: 36, fontWeight: 500, color: '#15803d', letterSpacing: '-1px', lineHeight: 1 }}>97</div>
        <div style={{ fontSize: 11, color: '#15803d', fontWeight: 500, marginTop: 2 }}>Annonce fiable</div>
      </div>
    </div>
  );
}

window.Nav = Nav;
window.Hero = Hero;
window.Marquee = Marquee;
window.Showcase = Showcase;
