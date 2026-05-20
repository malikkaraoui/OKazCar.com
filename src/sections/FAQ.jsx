import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const ease = [0.22, 1, 0.36, 1]

export default function FAQ() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(0)
  const items = t('faq.items', { returnObjects: true })

  return (
    <section id="faq" className="okc-section" style={{ background: 'var(--okc-bg-light)' }}>
      <div className="okc-page">
        <div className="okc-sec-head">
          <div>
            <motion.div className="okc-eyebrow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
              {t('faq.eyebrow')}
            </motion.div>
            <motion.h2 className="okc-h2" style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              {t('faq.title').split('<br/>').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </motion.h2>
          </div>
        </div>
        <div className="okc-grid-12">
          <div className="col-3-8">
            {items.map((f, i) => {
              const isOpen = i === open
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease }}
                  style={{
                    borderTop: '1px solid var(--okc-border)',
                    borderBottom: i === items.length - 1 ? '1px solid var(--okc-border)' : 'none',
                  }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', padding: '22px 4px', textAlign: 'left',
                      fontSize: 18, fontWeight: 500, letterSpacing: '-0.3px',
                    }}>
                    <span>{f.q}</span>
                    <span style={{
                      width: 28, height: 28, borderRadius: '50%',
                      border: '1px solid var(--okc-border)',
                      display: 'grid', placeItems: 'center',
                      fontSize: 18, flexShrink: 0, marginLeft: 16,
                      transition: 'transform 0.2s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    }}>+</span>
                  </button>
                  <div style={{
                    maxHeight: isOpen ? 240 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    padding: isOpen ? '0 4px 22px' : '0 4px',
                  }}>
                    <p style={{ margin: 0, color: 'var(--okc-text-secondary)', fontSize: 15, lineHeight: 1.65, maxWidth: '60ch' }}>
                      {f.a}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
