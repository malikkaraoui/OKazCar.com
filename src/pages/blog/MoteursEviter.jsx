function H2({ children }) {
  return <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.8px', marginTop: 56, marginBottom: 16, lineHeight: 1.15 }}>{children}</h2>
}
function P({ children }) {
  return <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--okc-text-secondary)', margin: '0 0 20px' }}>{children}</p>
}
function Callout({ children, type = 'info' }) {
  const color = type === 'warn' ? 'var(--okc-warning)' : type === 'fail' ? 'var(--okc-fail)' : 'var(--okc-primary)'
  return (
    <div style={{ background: 'var(--okc-bg-light)', border: '1px solid var(--okc-border)', borderLeft: `3px solid ${color}`, borderRadius: 4, padding: '18px 24px', margin: '32px 0' }}>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}
function Engine({ id, name, displacement, years, problem, risk }) {
  const riskColor = risk === 'élevé' ? 'var(--okc-fail)' : risk === 'modéré' ? 'var(--okc-warning)' : 'var(--okc-pass)'
  return (
    <div style={{ borderTop: '1px solid var(--okc-border)', paddingTop: 28, marginTop: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
        <div>
          <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>
            {id} — {displacement} — {years}
          </span>
          <h3 style={{ fontSize: 21, fontWeight: 500, letterSpacing: '-0.5px', margin: 0 }}>{name}</h3>
        </div>
        <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, padding: '4px 10px', borderRadius: 999, border: `1px solid ${riskColor}`, color: riskColor, textTransform: 'uppercase', letterSpacing: 1, flexShrink: 0, alignSelf: 'flex-start' }}>
          risque {risk}
        </span>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--okc-text-secondary)', margin: 0 }}>{problem}</p>
    </div>
  )
}

export default function MoteursEviter() {
  return (
    <>
      <P>
        Le filtre L12 « Fiabilité moteur » est le dernier ajouté à la chaîne d'analyse OKazCar. Il est né d'une observation simple : certains moteurs ont des problèmes mécaniques connus, documentés, reproductibles — et pourtant leurs annonces ne contiennent aucun signal d'alerte visible. Voici les 12 motorisations qui déclenchent systématiquement une pénalité dans notre base.
      </P>

      <Callout type="info">
        Cette liste est basée sur les données de fiabilité issues des rapports constructeurs, des forums spécialisés (Auto Expertise, caradisiac, mécanique-online), et des retours d'expérience des garagistes indépendants partenaires. Elle est mise à jour à chaque nouvelle version de l'extension.
      </Callout>

      <H2>Les diesels à chaîne de distribution fragile</H2>

      <Engine
        id="L12-01" name="BMW N47 2.0d (116d, 118d, 120d, 318d, 320d, X1...)"
        displacement="2.0L diesel" years="2007–2015" risk="élevé"
        problem="Chaîne de distribution placée côté boîte de vitesses (accès impossible sans déposer le groupe motopropulseur). Claquements caractéristiques dès le démarrage à froid. Casse typique entre 80 000 et 150 000 km. Réparation : 2 500 à 4 500 €. À fuir impérativement sans facture de remplacement de chaîne datant de moins de 50 000 km."
      />

      <Engine
        id="L12-02" name="PSA/Ford 2.0 HDi / TDCi (C5, 508, Mondeo, S-Max...)"
        displacement="2.0L diesel" years="2004–2011" risk="élevé"
        problem="Vanne EGR encrassée chroniquement avec risque de rentrée de carbone dans les cylindres (swirl flaps). Rupture possible des volets d'admission en aluminium. Réparation en cascade : EGR + collecteur + distribution = 1 500 à 3 000 €. Évitez sans historique d'entretien complet avec remplacement EGR documenté."
      />

      <Engine
        id="L12-03" name="Renault 1.5 dCi K9K post-2010 (haut kilométrage)"
        displacement="1.5L diesel" years="2010–2019" risk="modéré"
        problem="Moteur globalement fiable jusqu'à 150 000 km mais très sensible à la qualité de l'huile et des intervalles d'entretien. Problèmes de joint de culasse récurrents sur les versions 110 ch post-2013. Injecteurs piezo fragiles à partir de 120 000 km (2 000 à 3 500 € de réparation). Exigez impérativement les factures d'entretien."
      />

      <H2>Les diesels à injection haute pression problématique</H2>

      <Engine
        id="L12-04" name="VW EA189 1.6 TDI / 2.0 TDI (Golf VI, Passat, Tiguan, Audi A3/A4...)"
        displacement="1.6 et 2.0L diesel" years="2008–2015" risk="modéré"
        problem="Le moteur du Dieselgate. Au-delà du scandale environnemental, les mises à jour logicielles imposées post-2015 ont dégradé les performances et augmenté la consommation de carburant. Certains véhicules mis à jour présentent des problèmes de DPF accélérés. Vérifiez que la mise à jour a bien été effectuée (certificat constructeur) — un véhicule non mis à jour est invendable en ZFE."
      />

      <Engine
        id="L12-05" name="Opel/Vauxhall 2.0 CDTI Z20DMH (Vectra, Signum, Zafira)"
        displacement="2.0L diesel" years="2003–2008" risk="élevé"
        problem="Problèmes de durabilité des pistons et des segments à partir de 150 000 km. Consommation d'huile excessive annonçant une casse imminente. Module de pompe HP fragile. Ces véhicules sont souvent proposés à bas prix pour cette raison exacte. Le coût de réparation dépasse souvent la valeur résiduelle."
      />

      <H2>Les essences à turbos fragiles</H2>

      <Engine
        id="L12-06" name="PSA 1.2 PureTech EB2 (208, 2008, C3, DS3, Mokka X...)"
        displacement="1.2L essence turbo" years="2012–2019" risk="élevé"
        problem="Courroie de distribution à bain d'huile avec durée de vie aléatoire. Des casses ont été constatées dès 50 000 km sur les versions préséries. La courroie imbibée d'huile moteur peut casser sans prévenir, entraînant la destruction complète du moteur (moteur interférent). Réparation préventive recommandée tous les 60 000 km — exigez la facture. PSA a reconnu le problème mais le rappel officiel ne couvre que certaines versions."
      />

      <Engine
        id="L12-07" name="Ford EcoBoost 1.0 (Fiesta, Focus, B-Max, C-Max...)"
        displacement="1.0L essence turbo" years="2012–2017" risk="modéré"
        problem="Joint de culasse fragile sur les premières versions. En cas de surchauffe même légère (panne de liquide de refroidissement), la culasse est déformée. Le système de refroidissement utilise le liquide de refroidissement pour lubrifier le turbo — une fuite minime peut devenir catastrophique. Versions post-2017 largement améliorées."
      />

      <Engine
        id="L12-08" name="Volkswagen/Audi 1.8 TFSI / 2.0 TFSI EA888 Gen 1 & 2"
        displacement="1.8 et 2.0L essence turbo" years="2008–2012" risk="modéré"
        problem="Consommation d'huile anormalement élevée (parfois 1L tous les 3 000 km) due à des segments de piston défectueux. Encrassement de la vanne EGR et des injecteurs par recirculation des gaz. VW a renforcé les segments en Gen 3 — à partir de 2013, le problème est largement résolu. Évitez les Gen 1 et 2 sans test de consommation d'huile sur route."
      />

      <H2>Les boîtes de vitesses et transmissions à risque</H2>

      <Engine
        id="L12-09" name="Volkswagen DSG7 DQ200 (boîte à double embrayage sèche)"
        displacement="N/A — transmission" years="2008–2015" risk="modéré"
        problem="La DSG7 à embrayage sec (sur les moteurs jusqu'à 250 Nm) est différente de la DSG6 à bain d'huile, plus fiable. La DQ200 présente des à-coups caractéristiques à basse vitesse et en manœuvre, et des problèmes de mechatronique (module de commande) pouvant atteindre 2 000 € de réparation. Versions post-2014 améliorées avec update software."
      />

      <Engine
        id="L12-10" name="BMW N20 2.0i (320i, 420i, 520i, X1, X3...)"
        displacement="2.0L essence turbo" years="2011–2015" risk="modéré"
        problem="Chaîne de distribution côté distribution (positif vs N47 diesel) mais avec un tensionneur de chaîne fragile. Claquements au démarrage à froid à partir de 80 000–100 000 km. Pompe à huile intégrée à la chaîne : une casse entraîne une perte de pression huile instantanée. Réparation : 1 800 à 2 800 €."
      />

      <H2>Les groupes motopropulseurs hybrides à surveiller</H2>

      <Engine
        id="L12-11" name="Toyota/Lexus Hybrid Gen 1 & 2 (haute kilométrage)"
        displacement="Hybride 1.5–2.5L" years="2001–2010" risk="modéré"
        problem="Moteur électrique fiable, moteur thermique fiable — mais la batterie haute tension est la variable critique. Une batterie HV dégradée entraîne une surconsommation du thermique et peut invalider l'homologation hybride. Remplacement batterie : 2 000 à 4 000 € (reconditionné) à 6 000 € (neuve Toyota). Demandez toujours un test de santé batterie chez un spécialiste hybride avant achat."
      />

      <Engine
        id="L12-12" name="Renault Zoe batterie location (Gen 1)"
        displacement="Électrique — batterie NMC" years="2013–2017" risk="élevé"
        problem="Cas particulier : la Zoe Gen 1 en location de batterie présente une dégradation de capacité accélérée sur les modèles très chargés (recharge rapide fréquente). La capacité réelle peut être 25–35 % inférieure à la capacité d'origine après 100 000 km. L'achat d'une Zoe doit systématiquement inclure un diagnostic SOH (State of Health) de la batterie — exigible gratuitement chez tout concessionnaire Renault."
      />

      <H2>Comment OKazCar utilise cette liste</H2>
      <P>
        Le filtre L12 croise la marque, le modèle, la motorisation, et la puissance DIN extraits automatiquement de l'annonce avec notre base de motorisations à risque. Si une correspondance est trouvée, le filtre applique une pénalité proportionnelle au niveau de risque (élevé = -1.0 pt, modéré = -0.5 pt) et affiche un message explicatif dans le panel. Ce n'est pas une disqualification automatique — c'est une invitation à approfondir la vérification.
      </P>

      <Callout type="warn">
        Cette liste n'est pas exhaustive et un moteur absent ne signifie pas fiable. L12 est un signal parmi 12 — un BMW N47 bien entretenu avec chaîne remplacée peut être un excellent achat. Contextualisez toujours avec les filtres L1–L11.
      </Callout>
    </>
  )
}
