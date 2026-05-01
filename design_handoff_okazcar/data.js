/* ===== OKazCar — Data ===== */

window.OKC_FILTERS = [
  { id: 'L1', name: "Qualité d'extraction", weight: 1.0, role: "Vérifie que l'extension a bien extrait les champs critiques (prix, km, année, marque). Si données manquantes → chaîne bloquée.", critical: false },
  { id: 'L2', name: 'Référentiel véhicule', weight: 2.0, role: "Vérifie que la marque/modèle existe dans la base OKazCar (4 607 véhicules, 145 325 versions). Véhicule inconnu = signal fort.", critical: true },
  { id: 'L3', name: 'Cohérence données', weight: 1.5, role: "Croise année × km × prix × type vendeur. Détecte kilométrage aberrant, prix incohérent avec l'année, puissance fiscale ou DIN.", critical: false },
  { id: 'L4', name: 'Prix vs marché', weight: 2.0, role: "Compare le prix à l'argus géolocalisé (région + puissance DIN). Seuil dynamique selon puissance. Skip si pas de prix marché = pénalité.", critical: true },
  { id: 'L5', name: 'Analyse statistique', weight: 1.5, role: "Z-score NumPy sur les prix de référence filtrés par tranche hp_range. Détecte les outliers statistiques.", critical: false },
  { id: 'L6', name: 'Téléphone vendeur', weight: 0.6, role: "Détecte indicatifs étrangers / formats suspects. Multi-pays (FR, CH, DE…) via ad_data['country'].", critical: false },
  { id: 'L7', name: 'SIRET / UID entreprise', weight: 1.0, role: "Valide le SIRET via API recherche-entreprises.gouv.fr (FR) ou UID suisse (algorithme de contrôle). Vérifie que le pro est actif.", critical: false },
  { id: 'L8', name: 'Détection import', weight: 1.0, role: "Cumule signaux forts + faibles (×0.5) : compteur douteux, origine étrangère, mentions implicites. Seuil ≥ 1.0 = alert, ≥ 2.0 = fail.", critical: false },
  { id: 'L9', name: 'Évaluation globale', weight: 1.5, role: "Signaux transversaux : description détaillée, vendeur pro, photos, options payantes, téléphone visible, localisation précise. Ratio points_forts / total.", critical: false },
  { id: 'L10', name: 'Ancienneté annonce', weight: 1.0, role: "Durée de mise en vente + médiane marque/modèle en DB. Seuil dynamique selon prix du véhicule. Annonce stagnante = vendeur trop gourmand ou problème caché.", critical: false },
  { id: 'L11', name: 'Rappel constructeur', weight: 1.0, role: "Cherche les rappels officiels pour le véhicule. Status neutral si aucun rappel connu (non pénalisé), fail si rappel détecté non traité.", critical: false },
  { id: 'L12', name: 'Fiabilité moteur', weight: 1.0, role: "Pénalise les moteurs connus problématiques (BMW N47, VW EA189, Renault 1.5 dCi K9K post-2010…) et valorise les moteurs fiables.", critical: false },
];

window.OKC_PLATFORMS = [
  { name: 'LeBonCoin', domain: 'leboncoin.fr', country: 'France', flag: '🇫🇷' },
  { name: 'LaCentrale', domain: 'lacentrale.fr', country: 'France', flag: '🇫🇷' },
  { name: 'ParuVendu', domain: 'paruvendu.fr', country: 'France', flag: '🇫🇷' },
  { name: 'AutoScout24', domain: '.fr', country: 'France', flag: '🇫🇷' },
  { name: 'AutoScout24', domain: '.de', country: 'Allemagne', flag: '🇩🇪' },
  { name: 'AutoScout24', domain: '.ch', country: 'Suisse', flag: '🇨🇭' },
  { name: 'AutoScout24', domain: '.be', country: 'Belgique', flag: '🇧🇪' },
  { name: 'AutoScout24', domain: '.it', country: 'Italie', flag: '🇮🇹' },
  { name: 'AutoScout24', domain: '.nl', country: 'Pays-Bas', flag: '🇳🇱' },
  { name: 'AutoScout24', domain: '.at', country: 'Autriche', flag: '🇦🇹' },
  { name: 'AutoScout24', domain: '.es', country: 'Espagne', flag: '🇪🇸' },
  { name: 'AutoScout24', domain: '.pl', country: 'Pologne', flag: '🇵🇱' },
  { name: 'AutoScout24', domain: '.lu', country: 'Luxembourg', flag: '🇱🇺' },
  { name: 'AutoScout24', domain: '.se', country: 'Suède', flag: '🇸🇪' },
  { name: 'AutoScout24', domain: '.com', country: 'Europe', flag: '🇪🇺' },
];

window.OKC_STATS = [
  { value: 4607, label: 'Véhicules référencés', suffix: '' },
  { value: 145325, label: 'Versions en base', suffix: '' },
  { value: 14, label: 'Domaines couverts', suffix: '' },
  { value: 12, label: "Filtres d'analyse", suffix: '' },
];

window.OKC_FAQ = [
  { q: "C'est vraiment gratuit ?", a: "Oui, 100% gratuit. Pas de compte, pas d'abonnement, pas de données personnelles collectées. L'extension fonctionne entièrement en local sur votre navigateur." },
  { q: "Quels sites sont supportés ?", a: "4 plateformes et 15 domaines : leboncoin.fr, lacentrale.fr, paruvendu.fr, et AutoScout24 sur 11 pays (France, Allemagne, Suisse, Belgique, Italie, Pays-Bas, Autriche, Espagne, Pologne, Luxembourg, Suède) + le .com international." },
  { q: "Comment fonctionne le score ?", a: "12 filtres analysent l'annonce sur 16 points de poids cumulés. Chaque filtre a un poids selon sa criticité (L2 et L4 sont critiques avec 2.0 chacun). Le score final est une moyenne pondérée arrondie sur 100." },
  { q: "Mes données sont-elles collectées ?", a: "Non. L'extension analyse uniquement l'annonce que vous consultez. Aucune donnée personnelle n'est stockée ni transmise à un serveur tiers." },
  { q: "Sur quels navigateurs ça fonctionne ?", a: "Pour l'instant, OKazCar est disponible sur Google Chrome et les navigateurs compatibles Chromium (Brave, Edge, Opera, Arc)." },
  { q: "Comment le prix marché est-il calculé ?", a: "L4 compare le prix à un argus géolocalisé (région + puissance DIN), avec un seuil dynamique selon la puissance. L5 applique un Z-score NumPy sur les prix de référence filtrés par tranche hp_range pour détecter les outliers statistiques." },
];
