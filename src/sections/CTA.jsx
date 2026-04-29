import { motion } from 'framer-motion'
import OKCLogo from '../components/OKCLogo'
import { CHROME_WEB_STORE_URL } from '../data/index'

const ease = [0.22, 1, 0.36, 1]

export default function CTA() {
  return (
    <section id="install" className="okc-section" style={{ padding: '160px 0', textAlign: 'center', borderTop: '1px solid var(--okc-border)' }}>
      <div className="okc-page">
        <motion.div style={{ display: 'inline-block', marginBottom: 32 }}
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease }}>
          <OKCLogo size={56} />
        </motion.div>
        <motion.h2 className="okc-h1"
          style={{ maxWidth: '14ch', margin: '0 auto', fontSize: 'clamp(48px, 8vw, 112px)' }}
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: 0.1, ease }}>
          Prêt à acheter<br />rationnel ?
        </motion.h2>
        <motion.p className="okc-lead" style={{ margin: '32px auto 0', maxWidth: '52ch' }}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: 0.2, ease }}>
          Installation en 10 secondes. Aucun compte. Aucune donnée collectée. Votre prochain achat auto mérite mieux qu'un coup de cœur.
        </motion.p>
        <motion.div style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: 0.3, ease }}>
          <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noreferrer" className="okc-btn okc-btn--primary okc-btn--xl">
            Ajouter à Chrome — Gratuit →
          </a>
          <a href="#filters" className="okc-btn okc-btn--ghost okc-btn--xl">Voir la méthode</a>
        </motion.div>
        <motion.div style={{ marginTop: 24, fontFamily: 'var(--okc-font-mono)', fontSize: 12, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: 0.4, ease }}>
          Extension Chrome · v1.0 · Sans inscription
        </motion.div>
      </div>
    </section>
  )
}
