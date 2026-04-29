import CompteurTrafique from '../pages/blog/CompteurTrafique'
import PrixMedianRegional from '../pages/blog/PrixMedianRegional'
import MoteursEviter from '../pages/blog/MoteursEviter'
import OrigineGeneve from '../pages/blog/OrigineGeneve'

export const BLOG_POSTS = [
  {
    slug: 'detecter-compteur-trafique',
    tag: 'Guide',
    title: 'Détecter un compteur trafiqué : 7 signaux à croiser',
    intro: "En France, 5 à 8 % des voitures d'occasion présentent un kilométrage falsifié. Le traficotage moderne ne laisse aucune trace visible. Voici les 7 signaux que OKazCar croise systématiquement.",
    date: 'Avr. 2026',
    read: '8 min',
    component: CompteurTrafique,
  },
  {
    slug: 'prix-median-regional-vs-argus',
    tag: 'Méthode',
    title: "Pourquoi le prix médian régional bat l'argus national",
    intro: "L'Argus national, c'est comme demander le prix moyen d'un appartement en France pour estimer votre studio parisien. Voici pourquoi la médiane régionale est une mesure radicalement plus précise.",
    date: 'Mar. 2026',
    read: '6 min',
    component: PrixMedianRegional,
  },
  {
    slug: 'moteurs-eviter-occasion',
    tag: 'Moteurs',
    title: 'Les 12 moteurs à éviter en occasion (et pourquoi)',
    intro: "BMW N47, VW EA189, PSA PureTech, Renault K9K… Ces motorisations ont des problèmes connus, documentés, reproductibles. Voici la liste complète avec les seuils kilométriques critiques.",
    date: 'Mar. 2026',
    read: '12 min',
    component: MoteursEviter,
  },
  {
    slug: 'origine-okazcar-geneve',
    tag: 'Histoire',
    title: 'Une idée née pendant une formation Python à Genève',
    intro: "OKazCar a commencé comme un script Python basique pendant une formation chez Noamdes Technologie à Genève. Voici comment un exercice de web scraping est devenu une extension Chrome utilisée sur 14 domaines.",
    date: 'Fév. 2026',
    read: '7 min',
    component: OrigineGeneve,
  },
]
