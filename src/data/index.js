export const FILTERS = [
  { id: 'L1',  name: "Qualité d'extraction",  weight: 1.0, critical: false, role: "Vérifie que l'extension a bien extrait les champs critiques (prix, km, année, marque). Si données manquantes → chaîne bloquée." },
  { id: 'L2',  name: 'Référentiel véhicule',  weight: 2.0, critical: true,  role: "Vérifie que la marque/modèle existe dans la base OKazCar (4 607 véhicules, 145 325 versions). Véhicule inconnu = signal fort." },
  { id: 'L3',  name: 'Cohérence données',      weight: 1.5, critical: false, role: "Croise année × km × prix × type vendeur. Détecte kilométrage aberrant, prix incohérent avec l'année, puissance fiscale ou DIN." },
  { id: 'L4',  name: 'Prix vs marché',         weight: 2.0, critical: true,  role: "Compare le prix annoncé aux annonces similaires récentes dans la même zone géographique. Si aucun marché local disponible, le filtre pénalise par défaut." },
  { id: 'L5',  name: 'Analyse statistique',    weight: 1.5, critical: false, role: "Calcul scientifique pour identifier les prix exagérés ou anormalement bas par rapport à des véhicules comparables. Filtre les cas atypiques." },
  { id: 'L6',  name: 'Téléphone vendeur',      weight: 0.6, critical: false, role: "Détecte les indicatifs téléphoniques étrangers ou les formats suspects. Un vendeur présenté comme local avec un numéro étranger est un signal." },
  { id: 'L7',  name: 'SIRET / UID entreprise', weight: 1.0, critical: false, role: "Vérifie l'existence et l'activité du vendeur professionnel. Prend en compte les avis clients (★ /5 et nombre d'évaluations) pour évaluer la réputation du vendeur." },
  { id: 'L8',  name: 'Détection import',       weight: 1.0, critical: false, role: "Croise plusieurs signaux (compteur suspect, origine géographique, mentions dans la description) pour évaluer si le véhicule a été importé." },
  { id: 'L9',  name: 'Évaluation globale',     weight: 1.5, critical: false, role: "Signaux transversaux : description détaillée, vendeur pro, photos, options payantes, téléphone visible, localisation précise." },
  { id: 'L10', name: 'Ancienneté annonce',      weight: 1.0, critical: false, role: "Une annonce qui reste trop longtemps en ligne par rapport aux véhicules similaires est souvent surévaluée. Ce filtre le détecte." },
  { id: 'L11', name: 'Rappel constructeur',    weight: 1.0, critical: false, role: "Cherche les rappels officiels pour le véhicule. Neutral si aucun rappel connu (non pénalisé), fail si rappel détecté non traité." },
  { id: 'L12', name: 'Fiabilité moteur',        weight: 1.0, critical: false, role: "Pénalise les moteurs connus problématiques (BMW N47, VW EA189, Renault 1.5 dCi K9K post-2010…) et valorise les moteurs fiables." },
];

export const PLATFORMS = [
  { name: 'LeBonCoin',  domain: 'leboncoin.fr', country: 'France',     flag: '🇫🇷' },
  { name: 'LaCentrale', domain: 'lacentrale.fr', country: 'France',     flag: '🇫🇷' },
  { name: 'ParuVendu',  domain: 'paruvendu.fr',  country: 'France',     flag: '🇫🇷' },
  { name: 'AutoScout24', domain: '.fr',           country: 'France',     flag: '🇫🇷' },
  { name: 'AutoScout24', domain: '.de',           country: 'Allemagne',  flag: '🇩🇪' },
  { name: 'AutoScout24', domain: '.ch',           country: 'Suisse',     flag: '🇨🇭' },
  { name: 'AutoScout24', domain: '.be',           country: 'Belgique',   flag: '🇧🇪' },
  { name: 'AutoScout24', domain: '.it',           country: 'Italie',     flag: '🇮🇹' },
  { name: 'AutoScout24', domain: '.nl',           country: 'Pays-Bas',   flag: '🇳🇱' },
  { name: 'AutoScout24', domain: '.at',           country: 'Autriche',   flag: '🇦🇹' },
  { name: 'AutoScout24', domain: '.es',           country: 'Espagne',    flag: '🇪🇸' },
  { name: 'AutoScout24', domain: '.pl',           country: 'Pologne',    flag: '🇵🇱' },
  { name: 'AutoScout24', domain: '.lu',           country: 'Luxembourg', flag: '🇱🇺' },
  { name: 'AutoScout24', domain: '.se',           country: 'Suède',      flag: '🇸🇪' },
  { name: 'AutoScout24', domain: '.com',          country: 'Europe',     flag: '🇪🇺' },

];

export const STATS = [
  { value: 4607,   label: 'Véhicules référencés', suffix: '' },
  { value: 145325, label: 'Versions en base',      suffix: '' },
  { value: 14,     label: 'Domaines couverts',     suffix: '' },
  { value: 12,     label: "Filtres d'analyse",     suffix: '' },
];

export const FAQ_ITEMS = [
  { q: "C'est vraiment gratuit ?", a: "Oui, 100% gratuit. Pas de compte, pas d'abonnement, pas de données personnelles collectées. L'extension fonctionne entièrement en local sur votre navigateur." },
  { q: "Quels sites sont supportés ?", a: "4 plateformes et 15 domaines : leboncoin.fr, lacentrale.fr, paruvendu.fr, et AutoScout24 sur 11 pays (France, Allemagne, Suisse, Belgique, Italie, Pays-Bas, Autriche, Espagne, Pologne, Luxembourg, Suède) + le .com international." },
  { q: "Comment fonctionne le score ?", a: "12 filtres analysent l'annonce en parallèle. Chaque filtre a un poids selon sa criticité — les plus déterminants (cohérence des données, positionnement prix) comptent davantage. Le score final est une moyenne pondérée arrondie sur 100." },
  { q: "Mes données sont-elles collectées ?", a: "Non. L'extension analyse uniquement l'annonce que vous consultez. Aucune donnée personnelle n'est stockée ni transmise à un serveur tiers." },
  { q: "Sur quels navigateurs ça fonctionne ?", a: "Pour l'instant, OKazCar est disponible sur Google Chrome et les navigateurs compatibles Chromium (Brave, Edge, Opera, Arc)." },
  { q: "Comment le prix marché est-il calculé ?", a: "OKazCar compare le prix annoncé aux annonces similaires récentes dans la même zone géographique. Le modèle, la motorisation et la puissance sont pris en compte pour que la comparaison soit pertinente. Si le marché local est trop peu fourni, l'analyse élargit automatiquement son périmètre." },
];

export const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/detail/okazcar-analyse-annonces/eakomgkenllkkmfccjjfoegealnchmmo';
