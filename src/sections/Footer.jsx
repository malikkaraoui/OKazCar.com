import OKCLogo from '../components/OKCLogo'

export default function Footer() {
  return (
    <footer className="okc-footer">
      <div className="okc-page">
        <div className="okc-footer-grid">
          <div>
            <OKCLogo size={22} />
            <p style={{ marginTop: 16, maxWidth: '32ch', color: 'var(--okc-text-secondary)', fontSize: 14, lineHeight: 1.6 }}>
              Analyse en temps réel des annonces auto. 4 plateformes, 14 domaines, 12 filtres.
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
  )
}
