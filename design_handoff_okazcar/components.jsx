/* ===== OKazCar — Shared UI components ===== */

const { useState, useEffect, useRef, useMemo } = React;

/* ----- Logo ----- */
function OKCLogo({ size = 24, color, accentColor }) {
  return (
    <span className="okc-logo" style={{ fontSize: size * 0.78 }}>
      <svg viewBox="0 0 128 128" style={{ width: size, height: size, color: color || 'currentColor' }}>
        <circle cx="64" cy="64" r="56" fill="none" stroke="currentColor" strokeWidth="12"/>
        <circle cx="64" cy="64" r="12" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="8" strokeLinecap="round">
          <line x1="64" y1="22" x2="64" y2="52"/>
          <line x1="64" y1="22" x2="64" y2="52" transform="rotate(72 64 64)"/>
          <line x1="64" y1="22" x2="64" y2="52" transform="rotate(144 64 64)"/>
          <line x1="64" y1="22" x2="64" y2="52" transform="rotate(216 64 64)"/>
          <line x1="64" y1="22" x2="64" y2="52" transform="rotate(288 64 64)"/>
        </g>
      </svg>
      <span>OKaz<span className="car" style={accentColor ? { color: accentColor } : null}>Car</span></span>
    </span>
  );
}

/* ----- Reveal hook ----- */
function useReveal(deps = []) {
  useEffect(() => {
    let raf;
    const setup = () => {
      const els = document.querySelectorAll('[data-animate]:not(.visible)');
      // Reveal anything already in viewport synchronously
      const vh = window.innerHeight;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          el.classList.add('visible');
        }
      });
      const remaining = document.querySelectorAll('[data-animate]:not(.visible)');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
      remaining.forEach((el) => io.observe(el));
      // Safety net
      const timer = setTimeout(() => {
        document.querySelectorAll('[data-animate]:not(.visible)').forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight) el.classList.add('visible');
        });
      }, 1200);
      return () => { io.disconnect(); clearTimeout(timer); };
    };
    raf = requestAnimationFrame(setup);
    return () => cancelAnimationFrame(raf);
  }, deps);
}

/* ----- Counter ----- */
function Counter({ to, duration = 1600, suffix = '', format = (v) => v.toLocaleString('fr-FR') }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let started = false;
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(to * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);
  return <span ref={ref}>{format(val)}{suffix}</span>;
}

/* ----- Score gauge (animated SVG) ----- */
function ScoreGauge({ score = 97, size = 220, strokeW = 12, label = 'Annonce fiable', subtle, animateInView = true }) {
  const r = (size - strokeW) / 2;
  const c = 2 * Math.PI * r;
  const [drawn, setDrawn] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let raf;
    const start = () => {
      const t0 = performance.now();
      const dur = 1400;
      const tick = (now) => {
        const t = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDrawn(score * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (!animateInView) { setDrawn(score); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { start(); io.disconnect(); }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [score, animateInView]);
  const color = drawn >= 80 ? 'var(--okc-pass)' : drawn >= 60 ? 'var(--okc-warning)' : 'var(--okc-fail)';
  const dash = c * (drawn / 100);
  return (
    <div ref={ref} style={{ position: 'relative', width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size, transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--okc-border)" strokeWidth={strokeW}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={strokeW}
                strokeDasharray={`${dash} ${c}`} strokeLinecap="round"
                style={{ transition: 'stroke 0.3s' }}/>
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center'
      }}>
        <div style={{ fontSize: size * 0.34, fontWeight: 500, lineHeight: 1, letterSpacing: '-2px' }}>
          {Math.round(drawn)}
        </div>
        <div style={{ fontSize: 11, fontFamily: 'var(--okc-font-mono)', color: 'var(--okc-text-muted)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '1px' }}>
          /100
        </div>
        {label && (
          <div style={{ fontSize: 13, color, marginTop: 8, fontWeight: 500 }}>
            {label}
          </div>
        )}
      </div>
    </div>
  );
}

/* ----- Price marker (animated) ----- */
function PriceBar({ marketMin = 11500, marketMax = 14800, ref_ = 13200, current = 12490, animateInView = true }) {
  const [progress, setProgress] = useState(0);
  const root = useRef();
  useEffect(() => {
    let raf;
    const run = () => {
      const t0 = performance.now();
      const dur = 1600;
      const tick = (now) => {
        const t = Math.min((now - t0) / dur, 1);
        setProgress(1 - Math.pow(1 - t, 3));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (!animateInView) { setProgress(1); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { run(); io.disconnect(); }
    }, { threshold: 0.4 });
    if (root.current) io.observe(root.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  const range = marketMax - marketMin;
  const refPct = ((ref_ - marketMin) / range) * 100;
  const curPct = ((current - marketMin) / range) * 100 * progress + (curPct => 0);
  const cur = ((current - marketMin) / range) * 100;
  const fmt = (n) => new Intl.NumberFormat('fr-FR').format(n) + ' €';
  return (
    <div ref={root} style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '1px' }}>
        <span>{fmt(marketMin)}</span>
        <span>Marché — {fmt(ref_)}</span>
        <span>{fmt(marketMax)}</span>
      </div>
      <div style={{ position: 'relative', height: 8, background: 'var(--okc-bg-light)', borderRadius: 99, border: '1px solid var(--okc-border)' }}>
        {/* market reference tick */}
        <div style={{ position: 'absolute', left: `${refPct}%`, top: -6, bottom: -6, width: 2, background: 'var(--okc-text-muted)', opacity: 0.5 }}/>
        {/* fill from min to current */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: `${cur * progress}%`,
          background: 'var(--okc-pass)',
          borderRadius: 99,
          transition: 'background 0.3s'
        }}/>
        {/* current marker */}
        <div style={{
          position: 'absolute', left: `${cur * progress}%`, top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 18, height: 18, borderRadius: '50%',
          background: 'var(--okc-text-primary)',
          border: '3px solid var(--okc-bg-white)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 16 }}>
        <div>
          <div style={{ fontSize: 11, fontFamily: 'var(--okc-font-mono)', color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Annonce</div>
          <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.5px', marginTop: 2 }}>{fmt(current)}</div>
        </div>
        <div className="okc-pill okc-pill--pass">
          ↓ {Math.round(((ref_ - current) / ref_) * 100)}% sous le marché
        </div>
      </div>
    </div>
  );
}

/* ----- Extension Panel (recreated faithfully from img-prix-analyse.png) ----- */
function ExtensionPanel({ score = 97, vehicle = 'Citroën C4 2022' }) {
  const filters = window.OKC_FILTERS;
  const states = ['pass','pass','warn','pass','pass','pass','pass','pass','pass','pass','pass','pass'];
  const scoresPct = [100,100,70,100,100,100,100,100,100,100,100,100];
  return (
    <div style={{
      width: '100%',
      background: 'var(--okc-bg-white)',
      borderRadius: 12,
      border: '1px solid var(--okc-border)',
      overflow: 'hidden',
      boxShadow: '0 30px 60px -20px rgba(15,23,42,0.18), 0 18px 30px -15px rgba(15,23,42,0.12)',
      fontFamily: 'var(--okc-font)',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a5f, #2563eb)',
        padding: '16px 20px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.2px' }}>
            OKaz<span style={{ color: '#fbbf24' }}>Car</span>
          </div>
          <div style={{ fontSize: 12, opacity: 0.75, marginTop: 2 }}>{vehicle}</div>
        </div>
        <div style={{ opacity: 0.5, fontSize: 18, cursor: 'pointer' }}>×</div>
      </div>
      {/* Filters list */}
      <div style={{ padding: '12px 20px', maxHeight: 320, overflow: 'auto', background: 'var(--okc-bg-white)', color: 'var(--okc-text-primary)' }}>
        {filters.slice(0, 9).map((f, i) => {
          const st = states[i];
          const pct = scoresPct[i];
          const icon = st === 'pass' ? '✓' : st === 'warn' ? '⚠' : '✕';
          const color = st === 'pass' ? 'var(--okc-pass)' : st === 'warn' ? 'var(--okc-warning)' : 'var(--okc-fail)';
          return (
            <div key={f.id} style={{ display: 'grid', gridTemplateColumns: '20px 36px 1fr auto', gap: 8, padding: '10px 0', borderBottom: i < 8 ? '1px solid var(--okc-bg-light)' : 'none', alignItems: 'baseline' }}>
              <span style={{ color, fontWeight: 700 }}>{icon}</span>
              <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)' }}>{f.id}</span>
              <span style={{ fontSize: 13, color: 'var(--okc-text-primary)' }}>{f.name}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color }}>{pct}%</span>
            </div>
          );
        })}
      </div>
      {/* Score footer */}
      <div style={{ padding: '20px', borderTop: '1px solid var(--okc-border)', textAlign: 'center', background: 'var(--okc-bg-subtle)' }}>
        <div style={{ fontSize: 12, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'var(--okc-font-mono)' }}>Score global</div>
        <div style={{ fontSize: 56, fontWeight: 500, color: 'var(--okc-pass)', letterSpacing: '-2px', lineHeight: 1, margin: '8px 0' }}>{score}</div>
        <div style={{ fontSize: 14, color: 'var(--okc-pass)', fontWeight: 500 }}>Annonce fiable</div>
        <button style={{
          marginTop: 16,
          background: 'var(--okc-primary)',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          border: 'none',
        }}>Voir l'analyse complète</button>
      </div>
    </div>
  );
}

window.OKCLogo = OKCLogo;
window.OKCUseReveal = useReveal;
window.OKCCounter = Counter;
window.OKCScoreGauge = ScoreGauge;
window.OKCPriceBar = PriceBar;
window.OKCExtensionPanel = ExtensionPanel;

/* ----- Radar Mini (12 axes, score au centre) ----- */
function RadarMini({ score = 97, size = 200, scores }) {
  // 12 axes — labels courts dans le sens horaire en partant du haut
  const axes = ['Données', 'Modèle', 'KM', 'Prix', 'Confiance', 'Téléphone', 'SIRET', 'Import', 'Scan', 'Ancienneté', 'Rappel', 'Moteur'];
  const vals = scores || [100, 100, 90, 100, 100, 100, 100, 100, 100, 0, 100, 100];
  const N = axes.length;
  const cx = size / 2;
  const cy = size / 2;
  const R = size * 0.36;
  const angle = (i) => (Math.PI * 2 * i) / N - Math.PI / 2;
  const point = (i, v) => {
    const r = R * (v / 100);
    return [cx + Math.cos(angle(i)) * r, cy + Math.sin(angle(i)) * r];
  };
  const ringPoints = (radius) => {
    return Array.from({ length: N }).map((_, i) => {
      const x = cx + Math.cos(angle(i)) * radius;
      const y = cy + Math.sin(angle(i)) * radius;
      return `${x},${y}`;
    }).join(' ');
  };
  const dataPoints = vals.map((v, i) => point(i, v).join(',')).join(' ');
  const color = score >= 80 ? '#15803d' : score >= 60 ? '#b45309' : '#b91c1c';

  return (
    <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size, overflow: 'visible' }}>
        {/* concentric rings */}
        {[0.25, 0.5, 0.75, 1].map((f, i) => (
          <polygon key={i} points={ringPoints(R * f)} fill="none" stroke="#e5e5e2" strokeWidth="1"/>
        ))}
        {/* axes */}
        {Array.from({ length: N }).map((_, i) => {
          const [x, y] = [cx + Math.cos(angle(i)) * R, cy + Math.sin(angle(i)) * R];
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#e5e5e2" strokeWidth="1"/>;
        })}
        {/* data polygon */}
        <polygon points={dataPoints} fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5"/>
        {/* data points */}
        {vals.map((v, i) => {
          const [x, y] = point(i, v);
          const dotColor = v < 30 ? '#b91c1c' : v < 80 ? '#b45309' : color;
          return <circle key={i} cx={x} cy={y} r="2.5" fill={dotColor}/>;
        })}
        {/* axis labels */}
        {axes.map((label, i) => {
          const r = R + 14;
          const x = cx + Math.cos(angle(i)) * r;
          const y = cy + Math.sin(angle(i)) * r;
          const v = vals[i];
          const labelColor = v < 30 ? '#b91c1c' : v < 80 ? '#b45309' : '#525252';
          return (
            <text key={i} x={x} y={y} fontSize="8" fill={labelColor}
              textAnchor="middle" dominantBaseline="middle"
              fontFamily="var(--okc-font)" fontWeight="500">
              {label}
            </text>
          );
        })}
      </svg>
      {/* score in center */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center', pointerEvents: 'none',
      }}>
        <div style={{ fontSize: size * 0.18, fontWeight: 500, lineHeight: 1, letterSpacing: '-1px', color }}>
          {score}
        </div>
        <div style={{ fontSize: 8, fontFamily: 'var(--okc-font-mono)', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: 1, marginTop: 2 }}>
          /100
        </div>
      </div>
    </div>
  );
}

window.RadarMini = RadarMini;
