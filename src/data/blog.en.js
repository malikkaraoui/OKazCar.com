import CompteurTrafique from '../pages/blog/en/CompteurTrafique'
import PrixMedianRegional from '../pages/blog/en/PrixMedianRegional'
import MoteursEviter from '../pages/blog/en/MoteursEviter'
import OrigineGeneve from '../pages/blog/en/OrigineGeneve'
import AppMobile from '../pages/blog/AppMobile'
import ApiPro from '../pages/blog/ApiPro'
import Carvertical from '../pages/blog/Carvertical'
import IlluCompteur from '../components/illustrations/IlluCompteur'
import IlluPrix from '../components/illustrations/IlluPrix'
import IlluMoteurs from '../components/illustrations/IlluMoteurs'
import IlluGeneve from '../components/illustrations/IlluGeneve'
import IlluMobile from '../components/illustrations/IlluMobile'
import IlluApiPro from '../components/illustrations/IlluApiPro'
import IlluCarvertical from '../components/illustrations/IlluCarvertical'

export const BLOG_POSTS_EN = [
  {
    slug: 'application-mobile-okazcar',
    tag: 'Product',
    title: 'The OKazCar Mobile App Is Coming in June 2026 📱',
    intro: "The Chrome extension, reimagined for mobile. Analysis via shared URL, plate scanning, local history, price drop notifications. iOS and Android — closed beta late May.",
    date: 'May 2026',
    read: '5 min',
    component: AppMobile,
    illustration: IlluMobile,
  },
  {
    slug: 'api-okazcar-professionnels',
    tag: 'Pro',
    title: 'OKazCar Pro API: Cross-Regional Sourcing and Market Alerts for Professionals',
    intro: "Car dealers, brokers and auction platforms have different needs than private buyers. The OKazCar Pro API, coming soon, gives them structured bulk access to the data.",
    date: 'May 2026',
    read: '6 min',
    component: ApiPro,
    illustration: IlluApiPro,
  },
  {
    slug: 'carvertical-vs-okazcar',
    tag: 'Comparison',
    title: "Carvertical Looks in the Rearview Mirror. OKazCar Is in the Cabin.",
    intro: "Carvertical checks vehicle history. OKazCar analyses the listing, seller and market in real time. Two complementary reads of the same reality — not competitors.",
    date: 'May 2026',
    read: '7 min',
    component: Carvertical,
    illustration: IlluCarvertical,
  },
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
    title: 'An Idea Born During a Python Training in Geneva 🇨🇭',
    intro: 'OKazCar started as a basic Python script during a training course at Nomades Technologie in Geneva. Here is how a web-scraping exercise became a Chrome extension running on 14 domains.',
    date: 'Feb. 2026',
    read: '7 min',
    component: OrigineGeneve,
    illustration: IlluGeneve,
  },
]
