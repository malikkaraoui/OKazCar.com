export const FILTERS = [
  { id: 'L1',  name: 'Infos bien lues',            weight: 1.0, critical: false, role: "On vérifie que le prix, le kilométrage, l'année et le modèle ont bien été reconnus." },
  { id: 'L2',  name: 'Modèle bien identifié',      weight: 2.0, critical: true,  role: "On vérifie que le véhicule correspond bien à un modèle connu. Si ce n'est pas clair, la note baisse fortement." },
  { id: 'L3',  name: 'Infos cohérentes',           weight: 1.5, critical: false, role: "On regarde si l'année, le kilométrage, le prix et le type de vendeur vont bien ensemble." },
  { id: 'L4',  name: 'Prix du marché',             weight: 2.0, critical: true,  role: "On compare le prix demandé avec des annonces proches et comparables." },
  { id: 'L5',  name: 'Prix crédible',              weight: 1.5, critical: false, role: "On repère les annonces vraiment trop chères ou anormalement basses." },
  { id: 'L6',  name: 'Numéro du vendeur',          weight: 0.6, critical: false, role: "On regarde si le numéro paraît cohérent avec la localisation annoncée." },
  { id: 'L7',  name: 'Vendeur pro vérifié',        weight: 1.0, critical: false, role: "On vérifie qu'un vendeur professionnel existe vraiment et inspire confiance." },
  { id: 'L8',  name: 'Origine du véhicule',        weight: 1.0, critical: false, role: "On cherche des indices qui peuvent montrer que le véhicule vient d'un autre pays." },
  { id: 'L9',  name: 'Annonce sérieuse',           weight: 1.5, critical: false, role: "On regarde si l'annonce est claire, complète et assez rassurante." },
  { id: 'L10', name: 'Annonce en ligne depuis longtemps', weight: 1.0, critical: false, role: "Une annonce qui reste longtemps en ligne peut cacher un prix trop haut ou un souci." },
  { id: 'L11', name: 'Rappel constructeur',        weight: 1.0, critical: false, role: "On vérifie si le modèle est concerné par un rappel important." },
  { id: 'L12', name: 'Moteur à surveiller',        weight: 1.0, critical: false, role: "On signale les moteurs connus pour avoir des problèmes coûteux." },
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
  { value: 4373,   label: 'Véhicules référencés', suffix: '' },
  { value: 151358, label: 'Versions en base',      suffix: '' },
  { value: 15,     label: 'Domaines couverts',     suffix: '' },
  { value: 12,     label: "Filtres d'analyse",     suffix: '' },
];

export const FAQ_ITEMS = [
  { q: "C'est vraiment gratuit ?", a: "Oui, 100% gratuit. Pas de compte, pas d'abonnement, pas de données personnelles collectées. L'extension fonctionne entièrement en local sur votre navigateur." },
  { q: "Quels sites sont supportés ?", a: "4 plateformes et 15 domaines : leboncoin.fr, lacentrale.fr, paruvendu.fr, et AutoScout24 sur 11 pays (France, Allemagne, Suisse, Belgique, Italie, Pays-Bas, Autriche, Espagne, Pologne, Luxembourg, Suède) + le .com international." },
  { q: "Comment fonctionne le score ?", a: "Le score résume plusieurs vérifications importantes comme le prix, le kilométrage, le vendeur ou le moteur. Plus un point est important, plus il compte dans la note finale." },
  { q: "Mes données sont-elles collectées ?", a: "Non. L'extension analyse uniquement l'annonce que vous consultez. Aucune donnée personnelle n'est stockée ni transmise à un serveur tiers." },
  { q: "Sur quels navigateurs ça fonctionne ?", a: "Pour l'instant, OKazCar est disponible sur Google Chrome et les navigateurs compatibles Chromium (Brave, Edge, Opera, Arc)." },
  { q: "Comment le prix marché est-il calculé ?", a: "OKazCar compare le prix affiché avec des annonces proches et comparables pour dire s'il semble raisonnable ou non." },
];

export const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/detail/okazcar-analyse-annonces/eakomgkenllkkmfccjjfoegealnchmmo';
