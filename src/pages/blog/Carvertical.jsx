function H2({ children }) {
  return <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.8px', marginTop: 56, marginBottom: 16, lineHeight: 1.15 }}>{children}</h2>
}
function P({ children }) {
  return <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--okc-text-secondary)', margin: '0 0 20px' }}>{children}</p>
}
function Callout({ children }) {
  return (
    <div style={{ background: 'var(--okc-bg-light)', border: '1px solid var(--okc-border)', borderLeft: '3px solid var(--okc-primary)', borderRadius: 4, padding: '18px 24px', margin: '32px 0' }}>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}

const ROWS = [
  { feature: "Historique des propriétaires", cv: "✓", okc: "—" },
  { feature: "Kilométrage passé (contrôle technique)", cv: "✓", okc: "—" },
  { feature: "Accidents déclarés / sinistres", cv: "✓", okc: "—" },
  { feature: "Pays d'immatriculation antérieurs", cv: "✓", okc: "Partiel" },
  { feature: "Prix vs médiane régionale", cv: "—", okc: "✓" },
  { feature: "Cohérence km/an (annonce actuelle)", cv: "—", okc: "✓" },
  { feature: "Vérification vendeur (SIRET, téléphone)", cv: "—", okc: "✓" },
  { feature: "Rappels constructeurs actifs", cv: "Partiel", okc: "✓" },
  { feature: "Fiabilité moteur documentée", cv: "—", okc: "✓" },
  { feature: "Signaux d'import", cv: "Partiel", okc: "✓" },
  { feature: "Analyse en temps réel dans l'annonce", cv: "—", okc: "✓" },
]

function cellColor(val) {
  if (val === '✓') return 'var(--okc-pass)'
  if (val === '—') return 'var(--okc-text-muted)'
  return 'var(--okc-warning)'
}

export default function Carvertical() {
  return (
    <>
      <P>
        Carvertical consulte les archives : contrôles techniques successifs, historique kilométrique enregistré à chaque passage, pays d'immatriculation passés, sinistres déclarés. C'est un outil pour comprendre ce qu'il s'est passé avant que l'annonce soit publiée — un rétroviseur, au sens propre.
      </P>
      <P>
        OKazCar se place au moment de la décision, dans l'habitacle : l'annonce est ouverte devant vous, le vendeur est de l'autre côté du téléphone. L'extension analyse l'environnement immédiat — prix, vendeur, cohérence, état du marché — sans accéder à l'historique du véhicule.
      </P>

      <H2>Ce que fait Carvertical</H2>
      <P>
        Carvertical et ses équivalents (Histovec en France, Autobiz, Autocheck) accèdent à des bases de données historiques. Un véhicule qui affiche 45 000 km en 2026 mais dont le rapport montre 72 000 km lors du contrôle technique de 2023 a un compteur trafiqué que rien dans l'annonce ne laisse voir. Carvertical le détecte.
      </P>
      <P>
        Ce qu'il ne fait pas : analyser si le prix demandé est cohérent avec le marché aujourd'hui, si le vendeur est un professionnel dissimulé, si le moteur est connu pour tomber en panne à 150 000 km.
      </P>

      <H2>Ce qu'OKazCar analyse</H2>
      <P>
        OKazCar ne consulte pas les archives. Il analyse ce qui est visible et vérifiable dans l'instant : le prix vs la médiane régionale des annonces similaires, la cohérence du kilométrage affiché avec l'âge du véhicule, le numéro de téléphone du vendeur (préfixe étranger ?), son SIRET s'il se présente comme particulier, les rappels constructeurs actifs sur le modèle, la fiabilité documentée de la motorisation, et jusqu'à 8 signaux d'import combinés.
      </P>
      <P>
        Ce qu'il ne fait pas : remonter l'historique du véhicule. Il travaille sur l'annonce, pas sur le passé.
      </P>

      <H2>Comparatif</H2>
      <div style={{ overflowX: 'auto', margin: '32px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--okc-text-primary)' }}>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, fontSize: 11, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1 }}>Critère</th>
              <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1 }}>Carvertical</th>
              <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, fontFamily: 'var(--okc-font-mono)', textTransform: 'uppercase', letterSpacing: 1 }}>OKazCar</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--okc-bg-subtle)' }}>
                <td style={{ padding: '12px 16px', fontSize: 14, color: 'var(--okc-text-secondary)', borderBottom: '1px solid var(--okc-border)' }}>{row.feature}</td>
                <td style={{ padding: '12px 16px', fontSize: 15, textAlign: 'center', borderBottom: '1px solid var(--okc-border)', color: cellColor(row.cv), fontWeight: row.cv === '✓' ? 600 : 400 }}>{row.cv}</td>
                <td style={{ padding: '12px 16px', fontSize: 15, textAlign: 'center', borderBottom: '1px solid var(--okc-border)', color: cellColor(row.okc), fontWeight: row.okc === '✓' ? 600 : 400 }}>{row.okc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>Complémentaires, pas concurrents</H2>
      <P>
        La séquence rationnelle : OKazCar en premier, pour filtrer rapidement. Si l'annonce passe — prix cohérent, vendeur propre, moteur fiable — et que vous êtes prêt à vous déplacer, ajoutez un rapport Carvertical pour valider l'historique. Vous éliminez 80 % des annonces problématiques gratuitement, et investissez le rapport historique uniquement sur les candidats sérieux.
      </P>

      <Callout>
        Recommandation pratique : OKazCar pour le premier filtre (gratuit, en quelques secondes, sans quitter l'annonce). Carvertical pour la due diligence finale avant déplacement ou remise d'arrhes. Les deux outils se lisent le même véhicule depuis des angles opposés — c'est précisément pour ça qu'ils sont complémentaires.
      </Callout>
    </>
  )
}
