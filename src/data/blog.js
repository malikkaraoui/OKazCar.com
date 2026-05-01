import CompteurTrafique from '../pages/blog/CompteurTrafique'
import PrixMedianRegional from '../pages/blog/PrixMedianRegional'
import MoteursEviter from '../pages/blog/MoteursEviter'
import OrigineGeneve from '../pages/blog/OrigineGeneve'
import Carvertical from '../pages/blog/Carvertical'
import ApiPro from '../pages/blog/ApiPro'
import AppMobile from '../pages/blog/AppMobile'
import IlluCompteur from '../components/illustrations/IlluCompteur'
import IlluPrix from '../components/illustrations/IlluPrix'
import IlluMoteurs from '../components/illustrations/IlluMoteurs'
import IlluGeneve from '../components/illustrations/IlluGeneve'
import IlluCarvertical from '../components/illustrations/IlluCarvertical'
import IlluApiPro from '../components/illustrations/IlluApiPro'
import IlluMobile from '../components/illustrations/IlluMobile'

export const BLOG_POSTS = [
  {
    slug: 'application-mobile-okazcar',
    tag: 'Produit',
    title: "L'application mobile OKazCar arrive en juin 2026 📱",
    intro: "L'extension Chrome, repensée pour mobile. Analyse par URL partagée, scan de plaque, historique local, notifications de baisse de prix. iOS et Android — bêta fermée fin mai.",
    date: 'Mai 2026',
    read: '5 min',
    component: AppMobile,
    illustration: IlluMobile,
  },
  {
    slug: 'api-okazcar-professionnels',
    tag: 'Pro',
    title: 'API OKazCar Pro : sourcing inter-régional et alertes marché pour les professionnels',
    intro: "Les négociants achat-revente, mandataires et plateformes d'enchères ont des besoins différents de l'acheteur particulier. Les API OKazCar Pro, prochainement disponibles, leur donnent accès à la donnée en masse.",
    date: 'Mai 2026',
    read: '6 min',
    component: ApiPro,
    illustration: IlluApiPro,
  },
  {
    slug: 'carvertical-vs-okazcar',
    tag: 'Comparatif',
    title: "Carvertical regarde dans le rétroviseur. OKazCar est dans l'habitacle.",
    intro: "Carvertical consulte l'historique du véhicule. OKazCar analyse l'annonce, le vendeur et le marché en temps réel. Deux lectures complémentaires d'une même réalité — pas des concurrents.",
    date: 'Mai 2026',
    read: '7 min',
    component: Carvertical,
    illustration: IlluCarvertical,
  },
  {
    slug: 'detecter-compteur-trafique',
    tag: 'Guide',
    title: 'Détecter un compteur trafiqué : 7 signaux à croiser',
    intro: "En France, 5 à 8 % des voitures d'occasion présentent un kilométrage falsifié. Le traficotage moderne ne laisse aucune trace visible. Voici les 7 signaux que OKazCar croise systématiquement.",
    date: 'Avr. 2026',
    read: '8 min',
    component: CompteurTrafique,
    illustration: IlluCompteur,
  },
  {
    slug: 'prix-median-regional-vs-argus',
    tag: 'Méthode',
    title: "Pourquoi le prix médian régional bat l'argus national",
    intro: "L'Argus national, c'est comme demander le prix moyen d'un appartement en France pour estimer votre studio parisien. Voici pourquoi la médiane régionale est une mesure radicalement plus précise.",
    date: 'Mar. 2026',
    read: '6 min',
    component: PrixMedianRegional,
    illustration: IlluPrix,
  },
  {
    slug: 'moteurs-eviter-occasion',
    tag: 'Moteurs',
    title: 'Les 12 moteurs à éviter en occasion (et pourquoi)',
    intro: "BMW N47, VW EA189, PSA PureTech, Renault K9K… Ces motorisations ont des problèmes connus, documentés, reproductibles. Voici la liste complète avec les seuils kilométriques critiques.",
    date: 'Mar. 2026',
    read: '12 min',
    component: MoteursEviter,
    illustration: IlluMoteurs,
  },
  {
    slug: 'origine-okazcar-geneve',
    tag: 'Histoire',
    title: 'Une idée née pendant une formation Python à Genève 🇨🇭',
    intro: "OKazCar a commencé comme un script Python basique pendant une formation chez Nomades Technologie à Genève. Voici comment un exercice de web scraping est devenu une extension Chrome sur 15 domaines.",
    date: 'Fév. 2026',
    read: '7 min',
    component: OrigineGeneve,
    illustration: IlluGeneve,
  },
]
