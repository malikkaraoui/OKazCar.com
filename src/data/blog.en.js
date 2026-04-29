import CompteurTrafique from '../pages/blog/en/CompteurTrafique'
import PrixMedianRegional from '../pages/blog/en/PrixMedianRegional'
import MoteursEviter from '../pages/blog/en/MoteursEviter'
import OrigineGeneve from '../pages/blog/en/OrigineGeneve'
import IlluCompteur from '../components/illustrations/IlluCompteur'
import IlluPrix from '../components/illustrations/IlluPrix'
import IlluMoteurs from '../components/illustrations/IlluMoteurs'
import IlluGeneve from '../components/illustrations/IlluGeneve'

export const BLOG_POSTS_EN = [
  {
    slug: 'detecter-compteur-trafique',
    tag: 'Guide',
    title: 'Detecting a Tampered Odometer: 7 Signals to Cross-Reference',
    intro: 'In France, 5 to 8% of used cars have a falsified mileage. Modern tampering leaves no visible trace. Here are the 7 signals OKazCar cross-references systematically.',
    date: 'Apr. 2026',
    read: '8 min',
    component: CompteurTrafique,
    illustration: IlluCompteur,
  },
  {
    slug: 'prix-median-regional-vs-argus',
    tag: 'Method',
    title: 'Why the Regional Median Price Beats the National Pricing Guide',
    intro: "The national Argus valuation is like asking for the average apartment price in France to estimate your Parisian studio. Here's why the regional median is a radically more accurate measure.",
    date: 'Mar. 2026',
    read: '6 min',
    component: PrixMedianRegional,
    illustration: IlluPrix,
  },
  {
    slug: 'moteurs-eviter-occasion',
    tag: 'Engines',
    title: 'The 12 Engines to Avoid When Buying Used (and Why)',
    intro: 'BMW N47, VW EA189, PSA PureTech, Renault K9K… These engines have known, documented, reproducible problems. Here is the full list with critical mileage thresholds.',
    date: 'Mar. 2026',
    read: '12 min',
    component: MoteursEviter,
    illustration: IlluMoteurs,
  },
  {
    slug: 'origine-okazcar-geneve',
    tag: 'Story',
    title: 'An Idea Born During a Python Training in Geneva',
    intro: 'OKazCar started as a basic Python script during a training course at Nüsanes Technologie in Geneva. Here is how a web-scraping exercise became a Chrome extension running on 11 country domains.',
    date: 'Feb. 2026',
    read: '7 min',
    component: OrigineGeneve,
    illustration: IlluGeneve,
  },
]
