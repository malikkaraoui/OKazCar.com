import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CHROME_WEB_STORE_URL } from '../data/index'

const BEFORE_URL = "/screen-before.png"
const AFTER_URL  = "/screen-after.png"

const ease = [0.22, 1, 0.36, 1]

function BeforeAfterBefore() {
  return (
    <img src={BEFORE_URL} alt="Sans OKazCar"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }} />
  )
}

function BeforeAfterAfter() {
  return (
    <img src={AFTER_URL} alt="Avec OKazCar"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }} />
  )
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export default function Hero() {
  const { t } = useTranslation()
  const [pos, setPos] = useState(50)
  const [interacted, setInteracted] = useState(false)
  const sliderRef = useRef()
  const dragging = useRef(false)
  const interactedRef = useRef(false)
  const animRef = useRef(null)

  const onMove = (clientX) => {
    if (!sliderRef.current) return
    const r = sliderRef.current.getBoundingClientRect()
    const p = ((clientX - r.left) / r.width) * 100
    setPos(Math.max(2, Math.min(98, p)))
  }

  const startDragging = () => {
    dragging.current = true
    if (!interactedRef.current) {
      interactedRef.current = true
      setInteracted(true)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }

  // Auto-hint animation on mount
  useEffect(() => {
    const DELAY = 1200
    const steps = [
      { target: 22, duration: 850 },
      { target: 97, duration: 1400 },
      { target: 97, duration: 900 },
      { target: 50, duration: 900 },
    ]

    const timer = setTimeout(() => {
      if (interactedRef.current) return
      let stepIndex = 0
      let startPos = 50
      let startTime = null

      function tick(timestamp) {
        if (interactedRef.current) return
        if (!startTime) startTime = timestamp
        const step = steps[stepIndex]
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / step.duration, 1)
        const newPos = startPos + (step.target - startPos) * easeInOut(progress)
        setPos(newPos)
        if (progress < 1) {
          animRef.current = requestAnimationFrame(tick)
        } else if (stepIndex < steps.length - 1) {
          stepIndex++
          startPos = step.target
          startTime = timestamp
          animRef.current = requestAnimationFrame(tick)
        }
      }
      animRef.current = requestAnimationFrame(tick)
    }, DELAY)

    return () => {
      clearTimeout(timer)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

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
              <a href="#demo" className="okc-btn okc-btn--ghost okc-btn--lg">{t('hero.cta_ghost')}</a>
            </motion.div>
            <motion.div onMouseDown={e => e.preventDefault()} style={{ marginTop: 20, display: 'flex', gap: 16, fontSize: 12, color: 'var(--okc-text-muted)', fontFamily: 'var(--okc-font-mono)', userSelect: 'none', WebkitUserSelect: 'none' }}
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
          onMouseDown={e => e.preventDefault()}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 8',
            borderRadius: 6,
            overflow: 'hidden',
            border: '1px solid var(--okc-border)',
            background: 'var(--okc-bg-light)',
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}>
          {/* AFTER — full layer (base) */}
          <BeforeAfterAfter />
          {/* BEFORE — clipped from left */}
          <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <BeforeAfterBefore />
          </div>
          {/* Slider handle */}
          <div
            onMouseDown={startDragging}
            onTouchStart={startDragging}
            style={{
              position: 'absolute', top: 0, bottom: 0,
              left: `${pos}%`,
              width: 3,
              background: 'rgba(255,255,255,0.95)',
              cursor: 'ew-resize', zIndex: 5,
              boxShadow: '0 0 12px rgba(255,255,255,0.6), 0 0 0 1px rgba(0,0,0,0.08)',
            }}>
            {/* Pulse ring — visible until user interacts */}
            {!interacted && (
              <motion.div
                animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.2 }}
                style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(37, 99, 235, 0.35)',
                  pointerEvents: 'none',
                }}
              />
            )}
            {/* Handle circle */}
            <motion.div
              animate={!interacted ? { scale: [1, 1.1, 1] } : { scale: 1 }}
              transition={!interacted ? { duration: 1.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 } : {}}
              style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 52, height: 52, borderRadius: '50%',
                background: '#fff',
                boxShadow: '0 4px 20px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3,
                border: '1.5px solid rgba(37, 99, 235, 0.18)',
                cursor: 'ew-resize',
              }}>
              <span style={{ fontSize: 14, color: '#2563eb', lineHeight: 1 }}>←</span>
              <span style={{ fontSize: 14, color: '#2563eb', lineHeight: 1 }}>→</span>
            </motion.div>
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
