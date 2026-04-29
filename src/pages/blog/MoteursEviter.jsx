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
function Engine({ n, name, score, children }) {
  const s = parseFloat(score)
  const color = s <= 2 ? 'var(--okc-fail)' : s <= 3.5 ? 'var(--okc-warning)' : 'var(--okc-pass)'
  const bg = s <= 2 ? 'var(--okc-fail-bg)' : s <= 3.5 ? 'var(--okc-warning-bg)' : 'var(--okc-pass-bg)'
  return (
    <div style={{ borderTop: '1px solid var(--okc-border)', paddingTop: 28, marginTop: 28 }}>
      <div style={{ display: 'flex', gap: 14, alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 12 }}>
        <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>{n}.</span>
        <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.4px', margin: 0, flex: 1 }}>{name}</h3>
        <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 12, fontWeight: 700, color, background: bg, padding: '3px 10px', borderRadius: 2, flexShrink: 0 }}>
          {score}/5
        </span>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}

export default function MoteursEviter() {
  return (
    <>
      <P>
        Tous les moteurs ne vieillissent pas de la même façon. Entre un 1.9 TDI Volkswagen qui dépasse allègrement les 500 000 km et un 1.2 PureTech PSA qui rend l'âme à 80 000 km avec une courroie de distribution bouffée par l'huile, la différence peut coûter plusieurs milliers d'euros à l'acheteur qui n'était pas informé.
      </P>
      <P>
        Le filtre L11 d'OKazCar analyse la motorisation de chaque annonce et la croise avec notre base de fiabilité moteur, construite à partir de l'agrégation de 12 sources indépendantes (forums spécialisés, rapports de contrôle technique, bases de données de réparateurs, statistiques d'associations de consommateurs). Voici les motorisations qui obtiennent les notes les plus basses — et surtout, pourquoi.
      </P>

      <H2>Les diesels à éviter</H2>

      <Engine n="1" name="BMW 2.0d N47 (2006-2014)" score="1.5">
        C'est probablement le défaut de conception le plus documenté de l'industrie automobile européenne des années 2000. La chaîne de distribution du N47 est positionnée côté boîte de vitesses (et non côté courroie comme sur la plupart des moteurs), ce qui la rend inaccessible sans déposer le moteur. Elle se détend entre 100 000 et 150 000 km, et quand elle cède, elle le fait brutalement — sans avertissement sonore préalable suffisant — entraînant la destruction complète du moteur. Le coût de réparation dépasse régulièrement 3 000 à 4 000 €. BMW a reconnu le défaut mais n'a jamais émis de rappel officiel. À éviter absolument, sauf si vous pouvez prouver que la chaîne a déjà été remplacée. Modèles concernés : BMW Série 1, 3, 5, X1, X3 avec moteur 2.0d entre 2006 et 2014.
      </Engine>

      <Engine n="2" name="Volkswagen 2.0 TDI EA189 (2008-2015)" score="1.5">
        Le moteur du Dieselgate. En septembre 2015, Volkswagen a reconnu avoir équipé 11 millions de véhicules dans le monde d'un logiciel détectant les cycles de test d'homologation et activant temporairement les filtres antipollution — en conditions réelles, les émissions de NOx étaient multipliées par 40. Le rappel constructeur, obligatoire en France, a fragilisé la vanne EGR sur de nombreux exemplaires. La valeur de revente de ces véhicules reste durablement dépréciée. Codes moteur concernés : CJAA, CBAB, CBDA, CFGB, CLCA. Sur Golf VI, Jetta, Passat B7, Tiguan, Seat Leon/Ibiza, Skoda Octavia/Yeti entre 2008 et 2015.
      </Engine>

      <Engine n="3" name="Fiat Multijet / JTD (2005-2012)" score="3.0">
        Les injecteurs common rail sont le point faible historique de cette famille de moteurs. Le remplacement d'un jeu d'injecteurs dépasse fréquemment 1 500 à 2 000 €. La courroie de distribution doit être respectée scrupuleusement — une casse à 90 000 km sur un Multijet génère une facture qui dépasse souvent la valeur du véhicule. À envisager uniquement avec un historique d'entretien complet.
      </Engine>

      <H2>Les essences à éviter</H2>

      <Engine n="4" name="BMW 2.0 N20 (2011-2016)" score="2.0">
        Double problème : la chaîne de distribution et la pompe à eau électrique. Cette pompe défaille typiquement autour de 100 000 km, parfois avant. Une surchauffe non détectée à temps peut provoquer une casse de la culasse. Le coût de remplacement de la pompe seule est de 400 à 800 € pièce chez BMW. Le B48 qui lui succède à partir de 2016 corrige ces défauts — si vous voulez un BMW essence 4 cylindres, choisissez post-2016. Modèles : BMW 320i, 328i, 420i, 520i, 528i, X1, X3 avec moteur N20 entre 2011 et 2016.
      </Engine>

      <Engine n="5" name="PSA 1.2 PureTech 3 cylindres (2012-2019)" score="1.5">
        Le problème est structurel : la courroie de distribution baigne dans l'huile moteur, une conception qui accélère son usure. Des casses ont été signalées bien avant l'échéance théorique de remplacement (140 000 km selon le constructeur), parfois dès 50 000-60 000 km. Peugeot et Citroën ont étendu les garanties sur les véhicules récents, mais les exemplaires de première génération restent risqués. Concerné : Peugeot 208, 308, 2008, 3008, Citroën C3, C4, DS3, DS5, Opel Crossland.
      </Engine>

      <Engine n="6" name="Renault 0.9 TCe 3 cylindres" score="3.5">
        Fiabilité acceptable mais point faible récurrent : les fuites d'eau au niveau du boîtier thermostat. Ce n'est pas une panne catastrophique en soi, mais c'est une intervention systématique sur les hauts kilométrages qui peut en cacher d'autres si elle est ignorée trop longtemps. Vérifiez le niveau de liquide de refroidissement et sa couleur avant tout achat.
      </Engine>

      <Engine n="7" name="Ford 1.0 EcoBoost 100-125ch (avant 2018)" score="4.0">
        Noté 4/5 global, mais le problème est réel sur les premières versions : fuites d'eau fréquentes, notamment au niveau de la culasse. Ford a modifié le joint de culasse sur les versions post-2018. Si vous visez un EcoBoost antérieur à 2018, exigez la preuve que le joint a été remplacé ou vérifiez la couleur du liquide de refroidissement (coloration noire = contamination à l'huile, alarme rouge).
      </Engine>

      <Engine n="8" name="Volkswagen 1.4 TSI EA111 (avant 2012)" score="4.5">
        L'EA211 (2012+) est excellent. L'EA111 (avant 2012) souffre d'une chaîne de distribution fragile et d'une pompe à eau défaillante. Si vous achetez un Golf VI, Polo, ou Seat Ibiza avec un 1.4 TSI et une date de fabrication antérieure à 2012, vérifiez le code moteur dans la carte grise.
      </Engine>

      <Engine n="9" name="Honda 1.6 iDTEC (diesel)" score="3.0">
        La chaîne de distribution nécessite un contrôle régulier, et la vanne EGR s'encrasse en usage urbain comme sur beaucoup de diesels. Ce n'est pas un mauvais moteur, mais il demande un entretien rigoureux et des trajets à dominante autoroute pour se maintenir en forme.
      </Engine>

      <Engine n="10" name="Opel 1.7 CDTI Z17DTH" score="3.0">
        La boîte de vitesses est le point faible de cette combinaison, pas le moteur lui-même. Testez les passages de vitesses lors de l'essai — un crabotage difficile en 1ère ou marche arrière à froid est un signal d'alerte. La courroie de distribution doit être changée à 120 000 km.
      </Engine>

      <Engine n="11" name="Hyundai-Kia CRDi (avant 2010)" score="3.5">
        Les générations antérieures à 2010 sont nettement moins fiables que les versions récentes. L'entrée Hyundai dans la qualité premium remonte à 2012-2014. Si vous visez un CRDi, ciblez les véhicules post-2012 — la fiabilité n'a rien à voir avec les premières générations.
      </Engine>

      <Engine n="12" name="Mazda SkyActiv-D (usage urbain)" score="3.0">
        Techniquement bien conçu, mais le FAP (filtre à particules) se colmate rapidement en usage 100 % urbain. Ce moteur a besoin de régénérations régulières — au moins un trajet de 30 minutes à régime soutenu toutes les deux semaines. Si vous roulez exclusivement en ville, évitez-le. Il est fait pour la route.
      </Engine>

      <H2>Ce que fait OKazCar avec ces données</H2>
      <P>
        Le filtre L11 compare automatiquement la motorisation de chaque annonce à cette base. Quand un N47, un EA189 ou un 1.2 PureTech est détecté, le score global de l'annonce est ajusté et l'alerte est explicitement mentionnée dans le rapport. Ce n'est pas un blocage — c'est une information. Certains de ces véhicules se vendent à des prix très bas qui intègrent déjà le risque. Encore faut-il savoir ce qu'on achète.
      </P>
    </>
  )
}
