import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import RadarMini from '../components/RadarMini'
import { CHROME_WEB_STORE_URL } from '../data/index'

const ease = [0.22, 1, 0.36, 1]

function BeforeAfterBefore() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#f4f4f0',
      padding: '40px 48px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 24,
      fontFamily: 'var(--okc-font)',
    }}>
      <div style={{
        borderRadius: 4,
        overflow: 'hidden',
        backgroundImage: 'url(/leboncoin-c4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', bottom: 10, left: 10, padding: '4px 8px', background: 'rgba(255,255,255,0.92)', fontFamily: 'var(--okc-font-mono)', fontSize: 10, color: '#525252', textTransform: 'uppercase', letterSpacing: 1, borderRadius: 2 }}>
          leboncoin.fr
        </div>
      </div>
      <div>
        <div style={{ fontSize: 10, color: '#737373', fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>leboncoin · 3 jours</div>
        <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0, lineHeight: 1.2, letterSpacing: '-0.4px' }}>Citroën C4 1.2 Essence 130 CH SHINE — 2022</h3>
        <div style={{ fontSize: 24, fontWeight: 500, margin: '14px 0 6px', letterSpacing: '-0.5px' }}>12 490 €</div>
        <div style={{ fontSize: 12, color: '#737373' }}>34 000 km · Essence · BVM6 · Particulier</div>
        <div style={{ marginTop: 20, padding: 14, background: '#fff', borderRadius: 4, border: '1px solid #e0e0d8' }}>
          <div style={{ fontSize: 11, color: '#a3a3a3', fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1 }}>Description</div>
          <div style={{ fontSize: 12, color: '#525252', marginTop: 8, lineHeight: 1.6 }}>
            Citroën C4 en très bon état, faible kilométrage, entretien à jour. Première main, non fumeur.
          </div>
        </div>
        <div style={{ marginTop: 14, fontSize: 11, fontFamily: 'var(--okc-font-mono)', color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: 1 }}>
          ?? Bonne affaire ? Prix correct ? Vendeur fiable ?
        </div>
      </div>
    </div>
  )
}

function BeforeAfterAfter() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#fafaf8',
      padding: '40px 48px',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 260px',
      gap: 24,
      fontFamily: 'var(--okc-font)',
    }}>
      <div style={{
        borderRadius: 4,
        overflow: 'hidden',
        backgroundImage: 'url(/leboncoin-c4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', bottom: 10, left: 10, padding: '4px 8px', background: 'rgba(255,255,255,0.92)', fontFamily: 'var(--okc-font-mono)', fontSize: 10, color: '#525252', textTransform: 'uppercase', letterSpacing: 1, borderRadius: 2 }}>
          leboncoin.fr
        </div>
      </div>
      <div>
        <div style={{ fontSize: 10, color: '#737373', fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>leboncoin · 3 jours</div>
        <h3 style={{ fontSize: 17, fontWeight: 600, margin: 0, lineHeight: 1.2, letterSpacing: '-0.4px', color: '#0a0a0a' }}>Citroën C4 1.2 Essence 130 CH SHINE — 2022</h3>
        <div style={{ fontSize: 22, fontWeight: 500, margin: '12px 0 4px', letterSpacing: '-0.5px', color: '#0a0a0a' }}>12 490 €</div>
        <div style={{ fontSize: 12, color: '#737373' }}>34 000 km · Essence · BVM6 · Particulier</div>
        <div style={{ marginTop: 16, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <span className="okc-pill okc-pill--pass">✓ km cohérents</span>
          <span className="okc-pill okc-pill--pass">✓ tél FR vérifié</span>
          <span className="okc-pill okc-pill--pass">↓ -5% marché</span>
        </div>
      </div>
      {/* OKazCar mini panel */}
      <div style={{
        background: '#fff', borderRadius: 6, border: '1px solid #e5e5e2',
        boxShadow: '0 12px 30px -10px rgba(15,23,42,0.18)',
        overflow: 'hidden',
      }}>
        <div style={{ padding: '10px 14px', background: 'linear-gradient(135deg, #1e3a5f, #2563eb)', color: '#fff' }}>
          <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.1 }}>OKaz<span style={{ color: '#fbbf24' }}>Car</span></div>
          <div style={{ fontSize: 10, opacity: 0.75, marginTop: 2 }}>Citroën C4 2022</div>
        </div>
        <div style={{ padding: '12px 10px 8px', textAlign: 'center' }}>
          <RadarMini score={97} size={140} />
          <div style={{ fontSize: 11, color: '#15803d', fontWeight: 500, marginTop: 4 }}>✓ Annonce fiable</div>
        </div>
        <div style={{ padding: '10px 12px', borderTop: '1px solid #f0f0ec', background: '#fafaf8' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <span style={{ fontSize: 10, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1, color: '#525252' }}>Prix vs marché</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#15803d' }}>-5%</span>
          </div>
          <div style={{ position: 'relative', height: 4, background: '#e5e5e2', borderRadius: 99 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '62%', background: '#15803d', borderRadius: 99 }} />
            <div style={{ position: 'absolute', left: '78%', top: -3, bottom: -3, width: 1, background: '#737373' }} />
          </div>
          <div style={{ marginTop: 6, fontSize: 10, color: '#525252' }}>
            12 490 € · <span style={{ color: '#15803d', fontWeight: 600 }}>-5% marché</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const [pos, setPos] = useState(50)
  const sliderRef = useRef()
  const dragging = useRef(false)

  const onMove = (clientX) => {
    if (!sliderRef.current) return
    const r = sliderRef.current.getBoundingClientRect()
    const p = ((clientX - r.left) / r.width) * 100
    setPos(Math.max(2, Math.min(98, p)))
  }

  useEffect(() => {
    const mu = () => { dragging.current = false }
    const mm = (e) => { if (dragging.current) onMove(e.clientX) }
    const tm = (e) => { if (dragging.current && e.touches[0]) onMove(e.touches[0].clientX) }
    window.addEventListener('mouseup', mu)
    window.addEventListener('mousemove', mm)
    window.addEventListener('touchmove', tm, { passive: true })
    window.addEventListener('touchend', mu)
    return () => {
      window.removeEventListener('mouseup', mu)
      window.removeEventListener('mousemove', mm)
      window.removeEventListener('touchmove', tm)
      window.removeEventListener('touchend', mu)
    }
  }, [])

  return (
    <section className="okc-section" style={{ paddingTop: 140, borderTop: 0 }}>
      <div className="okc-page">
        {/* Header 2-col */}
        <div className="okc-grid-12" style={{ alignItems: 'end', marginBottom: 40 }}>
          <div style={{ gridColumn: 'span 7' }}>
            <motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}>
              {t('hero.eyebrow')}
            </motion.div>
            <motion.h1 className="okc-h1" style={{ marginTop: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('hero.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
              <span style={{ color: 'var(--okc-text-muted)' }}>{t('hero.titleMuted')}</span>
            </motion.h1>
          </div>
          <div style={{ gridColumn: 'span 5', paddingBottom: 8 }}>
            <motion.p className="okc-lead"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}>
              {t('hero.lead')}
            </motion.p>
            <motion.div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}>
              <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer" className="okc-btn okc-btn--primary okc-btn--lg">
                {t('hero.cta_primary')}
              </a>
              <a href="#showcase" className="okc-btn okc-btn--ghost okc-btn--lg">{t('hero.cta_ghost')}</a>
            </motion.div>
            <motion.div style={{ marginTop: 20, display: 'flex', gap: 16, fontSize: 12, color: 'var(--okc-text-muted)', fontFamily: 'var(--okc-font-mono)' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}>
              <span>{t('hero.badge_version')}</span>
              <span style={{ opacity: 0.4 }}>—</span>
              <span>{t('hero.badge_no_account')}</span>
              <span style={{ opacity: 0.4 }}>—</span>
              <span>{t('hero.badge_speed')}</span>
            </motion.div>
          </div>
        </div>

        {/* Before / After slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          ref={sliderRef}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 8',
            borderRadius: 6,
            overflow: 'hidden',
            border: '1px solid var(--okc-border)',
            background: 'var(--okc-bg-light)',
            userSelect: 'none',
          }}>
          {/* AFTER — full layer (base) */}
          <BeforeAfterAfter />
          {/* BEFORE — clipped from left */}
          <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <BeforeAfterBefore />
          </div>
          {/* Slider handle */}
          <div
            onMouseDown={() => { dragging.current = true }}
            onTouchStart={() => { dragging.current = true }}
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
              width: 40, height: 40, borderRadius: '50%',
              background: '#fff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              display: 'grid', placeItems: 'center',
              fontFamily: 'var(--okc-font-mono)', fontSize: 12, fontWeight: 600,
              border: '1px solid rgba(0,0,0,0.08)',
              cursor: 'ew-resize',
            }}>
              ‹ ›
            </div>
          </div>
          {/* Labels */}
          <div style={{ position: 'absolute', top: 14, left: 14, padding: '5px 9px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderRadius: 3, fontFamily: 'var(--okc-font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, color: '#0a0a0a', zIndex: 4 }}>
            {t('hero.label_before')}
          </div>
          <div style={{ position: 'absolute', top: 14, right: 14, padding: '5px 9px', background: '#0a0a0a', color: '#fff', borderRadius: 3, fontFamily: 'var(--okc-font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, zIndex: 4 }}>
            {t('hero.label_after')}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
