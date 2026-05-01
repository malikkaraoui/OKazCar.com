# Handoff — OKazCar (refonte landing page)

## Overview

Landing page complète pour **OKazCar**, une extension Chrome gratuite qui analyse les annonces auto en temps réel sur leboncoin, La Centrale, ParuVendu et AutoScout24 (15 domaines au total). L'extension exécute 12 filtres (cohérence kilométrage, prix vs marché géolocalisé, fiabilité moteur, vérification téléphone/SIRET, base véhicules importés, rappels constructeurs, scan certificats, etc.) et affiche un score de fiabilité 0–100 dans un panel latéral en quelques secondes.

La page raconte l'histoire en 11 sections : Nav → Hero (slider avant/après) → Marquee plateformes → Showcase d'annonce avec extension → Grille des 12 filtres → Démo live de la chaîne d'analyse → How it works → Audiences (4 personas) → Couverture (15 domaines × 4 plateformes) → Chiffres clés → Comparaison vs alternatives → Blog → FAQ → CTA install → Footer.

## ⚠️ À propos des fichiers fournis

Les fichiers de ce bundle sont **des références de design réalisées en HTML/React-via-Babel-CDN** — ce sont des prototypes qui montrent le rendu et le comportement attendus, **pas du code de production à copier tel quel**.

Votre tâche : **recréer ces designs dans l'environnement de la codebase cible** (Next.js, Astro, Remix, Nuxt, Vue, SvelteKit, ou autre) en utilisant ses patterns établis (système de design, composants UI, conventions de routing, fetching, etc.). Si la codebase n'existe pas encore, choisissez le framework le plus adapté pour une landing produit (recommandation : **Next.js + Tailwind + shadcn/ui**, ou **Astro + Tailwind** si statique pur).

Concrètement :
- Convertissez les `<script type="text/babel">` en composants React/Vue/Svelte natifs avec build-step (Vite, Next, Astro…).
- Remplacez les variables CSS `--okc-*` par des tokens Tailwind ou un fichier `theme.ts`.
- Utilisez la lib d'icônes du projet (lucide-react, heroicons…) là où le HTML utilise des emojis ou caractères Unicode (✓, →, ×, ↓).
- Implémentez les animations au scroll avec une lib appropriée (Framer Motion, GSAP, ou IntersectionObserver natif comme c'est fait ici).

## Fidelity

**High-fidelity (hifi)** — Pixel-perfect. Couleurs, typographie, espacements, layouts grille, animations et interactions sont finaux. Les recréer fidèlement dans la stack cible.

Les sections respectent rigoureusement :
- Une grille 12 colonnes 56px de padding latéral, gap 24px (`var(--okc-page-pad)` / `var(--okc-grid-gap)`)
- Un système typographique Swiss/minimal (Inter Tight + DM Sans + JetBrains Mono pour les labels metadata)
- Des radius très légers (2–4px) cohérents avec une esthétique Swiss/éditoriale
- Des animations d'apparition douces (`fade-up`, `fade-in`, `scale-in`) déclenchées au scroll via IntersectionObserver

## Stack actuelle (prototype)

| Élément | Implémentation |
|---|---|
| Render | React 18.3.1 via UMD CDN |
| Build | Babel Standalone 7.29 (compilation in-browser) |
| Styles | CSS vanilla + variables CSS custom |
| Polices | Google Fonts (Inter Tight, DM Sans, JetBrains Mono) |
| Animations | IntersectionObserver + classes CSS (`.visible`, `[data-animate]`) |
| State global | Aucun — chaque section est autonome |
| Data | `data.js` global (constantes filtres, plateformes, FAQ, blog, audiences) |

À reconstruire avec un vrai bundler : Vite + React + TypeScript, ou Next.js si SEO/SSR nécessaires (recommandé pour une landing).

## Structure du fichier source

```
OKazCar Refonte.html       ← entrée (head + scripts CDN + Babel)
styles.css                 ← TOUS les styles (412 lignes, tokens + composants)
data.js                    ← Toutes les données statiques (filtres, plateformes, blog, faq)
tweaks-panel.jsx           ← Système de tweaks (à NE PAS porter en prod, c'est interne au prototype)
components.jsx             ← Briques réutilisables : Logo, Counter, ScoreGauge, PriceBar,
                             ExtensionPanel (le panel latéral OKazCar), RadarMini (graphe 12 axes)
sections-1.jsx             ← Nav, Hero, Showcase, Marquee, FiltersGrid
sections-2.jsx             ← LiveDemo, HowItWorks, Audience, Coverage
sections-3.jsx             ← Numbers, Comparison, Blog, FAQ, CTA, Footer
app.jsx                    ← Composition finale + tweaks (peut être ignoré en prod)
assets/leboncoin-c4.png    ← Capture d'écran utilisée dans le slider Hero
public/favicon.svg         ← Favicon
```

---

## Design tokens

### Couleurs

#### Brand
```css
--okc-primary:        #2563eb   /* bleu primaire (CTA, liens, score moyen) */
--okc-primary-hover:  #1d4ed8
--okc-primary-light:  #0ea5e9
--okc-accent:         #fbbf24   /* jaune accent (le "Car" du logo, highlights) */
--okc-accent-hover:   #f59e0b
```

#### Surfaces (thème Swiss par défaut)
```css
--okc-bg-white:    #ffffff
--okc-bg-light:    #f7f7f5
--okc-bg-subtle:   #fafaf8   /* fond page principal */
--okc-bg-dark:     #0a0a0a   /* sections sombres (Coverage, CTA) */
--okc-bg-dark-mid: #1a1a1a
```

#### Borders & Text
```css
--okc-border:         #e5e5e2
--okc-border-strong:  #1a1a1a
--okc-text-primary:   #0a0a0a
--okc-text-secondary: #525252
--okc-text-muted:     #737373
--okc-text-white:     #ffffff
--okc-text-white-muted: rgba(255,255,255,0.65)
```

#### Status (sémantique filtres / scores)
```css
--okc-pass:    #15803d   /* vert — filtre OK, prix bon, score >= 80 */
--okc-pass-bg: #f0fdf4
--okc-warning: #b45309   /* ambre — alerte modérée, score 60–79 */
--okc-warning-bg: #fffbeb
--okc-fail:    #b91c1c   /* rouge — anomalie, score < 60 */
--okc-fail-bg: #fef2f2
--okc-neutral: #a3a3a3   /* gris — donnée absente */
```

#### Partenaires (logos plateformes dans Coverage)
```css
--okc-lbc:  #ff6e14   /* leboncoin */
--okc-as24: #0061c9   /* AutoScout24 */
```

### Typographie

**Familles**
- **Sans (UI)** : `'Inter Tight', 'DM Sans', -apple-system, sans-serif`
- **Mono (labels metadata, numéros techniques)** : `'JetBrains Mono', ui-monospace, Menlo, monospace`

**Échelle**

| Usage | Taille | Weight | Letter-spacing | Notes |
|---|---|---|---|---|
| Hero H1 | 88px (clamp 56–88) | 600 | -3px | Sur 2–3 lignes, line-height 0.98 |
| Section H2 | 56px (clamp 40–56) | 600 | -1.5px | line-height 1.05 |
| Sub-section | 32–36px | 600 | -0.6px | |
| Card title | 18–22px | 600 | -0.4px | line-height 1.2 |
| Body / Lead | 18px | 400 | normal | line-height 1.55 |
| UI / petits labels | 13–14px | 400/500 | normal | |
| **Mono eyebrow** | 11px | 500 | 1px (uppercase) | Avant les H2, ex: `[ 02 / Live demo ]` |
| Score gigantesque (Hero, Numbers) | 72–120px | 500 | -3 à -6px | Letter-spacing TRÈS négatif |

**Font features**
```css
font-feature-settings: "ss01", "cv11";
```
Sur tout le body (variantes typographiques Inter Tight pour le `a`/`g` plus géométriques).

### Espacement / Grille

- Page padding latéral : **56px** (`--okc-page-pad`) → réduit à 24px <768px
- Grid gap : **24px** (`--okc-grid-gap`)
- Grille 12 colonnes : `display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px`
- Section padding vertical : **120px** top/bottom sur desktop, 80px <1024px, 56px <768px
- Card padding intérieur : **24–32px** selon densité

### Radius (Swiss = sharper)

```css
--okc-r-lg: 4px    /* cards principales */
--okc-r-md: 2px    /* boutons, pills */
--okc-r-sm: 2px    /* inputs, mini éléments */
```

### Shadows

Très peu utilisées (esthétique Swiss = flat). Quand présentes :
```css
/* Card élevée (ex: panel OKazCar dans Hero) */
box-shadow: 0 12px 30px -10px rgba(15, 23, 42, 0.18);

/* Bouton primaire focus */
box-shadow: 0 4px 14px -2px rgba(37, 99, 235, 0.4);
```

### Animations

```css
/* Reveal au scroll */
[data-animate] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
[data-animate].visible {
  opacity: 1;
  transform: none;
}
[data-animate="fade-in"] { transform: none; }
[data-animate="scale-in"] { transform: scale(0.96); }

/* Stagger : ajouter style="transition-delay: 80ms" sur chaque enfant */
```

L'easing `cubic-bezier(0.22, 1, 0.36, 1)` est utilisé partout (équivalent à `ease-out-expo` léger).

---

## Sections — détails de spec

### 1. Nav (`<window.Nav/>`)
- Sticky top, fond `rgba(250,250,248,0.85)` + `backdrop-filter: blur(12px)`, border-bottom 1px `--okc-border`
- Hauteur 64px, padding latéral 56px
- Gauche : Logo OKazCar (le "Car" en jaune `--okc-accent`)
- Centre : 4 liens (Fonctionnalités, Comment ça marche, Couverture, FAQ) — 13px, weight 500, gap 32px
- Droite : Bouton primaire "Installer l'extension" (fond `--okc-text-primary` noir, texte blanc, 13px, padding 10×18, radius 2px)

### 2. Hero (`<window.Hero/>`)
- Padding vertical : 80px top, 120px bottom
- Eyebrow mono : `[ EXTENSION CHROME · GRATUITE · 15 DOMAINES ]`
- H1 sur 3 lignes : "**Acheter une voiture d'occasion** sans se faire avoir. **En quelques secondes.**" (les 2e et 4e fragments en italic ou poids différent au choix)
- Sub-paragraph 18px, max-width 640px
- 2 boutons : primaire "Installer sur Chrome" + secondaire "Voir la démo ↓"
- **Slider avant/après comparatif** (composant clé) :
  - 2 panneaux superposés en absolute, séparés par un curseur draggable vertical
  - Côté gauche (avant) : capture leboncoin pure (`assets/leboncoin-c4.png`) + carte annonce avec pills neutres "✓ km cohérents", etc.
  - Côté droit (après) : même capture + **panel mini OKazCar** avec :
    - Header gradient `linear-gradient(135deg, #1e3a5f, #2563eb)`, logo OKazCar
    - **RadarMini** : SVG 12 axes (Données, Modèle, KM, Prix, Confiance, Téléphone, SIRET, Import, Scan, Ancienneté, Rappel, Moteur), 4 anneaux concentriques, polygone de scores rempli à 12% d'opacité, score 97 au centre en 36px weight 500
    - Label "✓ Annonce fiable" en vert
    - Bloc "Prix vs marché" : barre 4px height, fill vert à 62%, marqueur vertical à 78% (médiane marché), label "12 490 € · -5% marché"
- Curseur du slider : 2 lignes verticales `width: 1px, background: white, border: 2px solid #0a0a0a`, poignée ronde 40px au centre

### 3. Marquee (`<window.Marquee/>`)
- Bandeau plein largeur, fond noir `--okc-bg-dark`, hauteur 56px
- Defile horizontalement (CSS animation `marquee 40s linear infinite`)
- 15 domaines listés : `leboncoin.fr / lacentrale.fr / paruvendu.fr / autoscout24.fr / .de / .ch / .be / .it / .nl / .at / .es / .pl / .lu / .se`
- Séparateurs : petite pastille ronde 8px blanche entre chaque + slash mono

### 4. Showcase (`<window.Showcase/>`)
- Section pleine page sur fond `--okc-bg-subtle`, padding 120px vertical
- Eyebrow `[ 01 / SHOWCASE ]`, H2 "L'extension affiche un panel sur chaque annonce."
- Layout 3 colonnes (`1.2fr 1fr 280px`) :
  1. Capture annonce avec extension (image leboncoin + bandeau "leboncoin.fr" overlay)
  2. Détails de l'annonce + pills de filtres OK
  3. Panel mini OKazCar (RadarMini + Prix vs marché — voir Hero)

### 5. FiltersGrid (`<window.FiltersGrid/>`)
- Eyebrow `[ 02 / 12 FILTRES ]`, H2 "Une chaîne d'analyse en 12 étapes."
- Grille 4 colonnes × 3 lignes de 12 cards
- Chaque card :
  - Numéro mono 11px gris (01, 02, …, 12)
  - Titre 18px weight 600
  - Description 14px secondary, 3 lignes max
  - Hover : border passe à `--okc-text-primary` noir, transition 200ms
- Liste des 12 filtres dans `data.js` (constante `FILTERS`).

### 6. LiveDemo (`<window.LiveDemo/>`)
- Section sombre `--okc-bg-dark`, texte clair
- Affiche la chaîne d'analyse pas-à-pas, animée au scroll
- À gauche : URL d'annonce + log temps réel (style terminal mono, fond `#161616`)
- À droite : `<ExtensionPanel/>` qui se remplit progressivement au scroll
- Sub-text : "Simulation de la chaîne d'analyse en temps réel. Dans l'extension, tout cela tourne **en quelques secondes** au moment où vous ouvrez l'annonce."

### 7. HowItWorks (`<window.HowItWorks/>`)
- 3 étapes alignées horizontalement, séparées par une flèche `→`
- Chaque étape : numéro géant 72px outline, titre, description courte
  1. **Vous installez** l'extension Chrome (gratuit, 30s)
  2. **Vous ouvrez** une annonce sur une des 15 plateformes
  3. **OKazCar analyse** et affiche le verdict en quelques secondes

### 8. Audience (`<window.Audience/>`)
- 4 personas en grille 2×2 :
  - **Particuliers** — premier achat, peur de se faire avoir
  - **Acheteurs récurrents** — flippers, exporteurs
  - **Mandataires** — sourcing pour clients
  - **Pros de l'occasion** — concessions indépendantes
- Card : icône/illustration (placeholder), titre 22px, description 14px, badge mono volume usage

### 9. Coverage (`<window.Coverage/>`)
- Section sombre, eyebrow `[ COUVERTURE ]`, H2 "4 plateformes. 15 domaines. 7 pays."
- Carte d'Europe stylisée + liste des domaines avec leur logo coloré (utilise `--okc-lbc`, `--okc-as24`)

### 10. Numbers (`<window.Numbers/>`)
- 4 chiffres clés en grosse typo (Counter component, anime de 0 → valeur au scroll)
  - **12** filtres
  - **14** domaines supportés
  - **<3s** temps d'analyse moyen
  - **0€** prix
- Chaque chiffre 96–120px weight 500, label mono 11px en dessous

### 11. Comparison (`<window.Comparison/>`)
- Tableau 3 colonnes : `Sans outil / Concurrents / OKazCar`
- ~10 lignes : prix, vitesse, nombre de filtres, géolocalisation marché, base véhicules importés, fiabilité moteur, etc.
- Coches vertes sur OKazCar, croix rouges sur "Sans outil", neutres ou partielles sur concurrents

### 12. Blog (`<window.Blog/>`)
- 3 articles en card horizontale : image placeholder + titre + extrait + date
- Sujets : "Comment détecter un compteur trafiqué", "Importer une voiture d'Allemagne en 2026", "Les 5 anomalies qu'on voit chaque jour"

### 13. FAQ (`<window.FAQ/>`)
- ~8 questions accordion (border-bottom only, pas de card)
- Click sur une ligne déplie la réponse, transition height 300ms

### 14. CTA (`<window.CTA/>`)
- Section sombre pleine largeur, padding 160px
- H2 56px "Prêt à ne plus vous faire avoir ?"
- Bouton primaire jumbo "Installer sur Chrome — gratuit"
- Mention petite : "Aucune carte requise · Aucune donnée vendue"

### 15. Footer (`<window.Footer/>`)
- Fond `--okc-bg-dark`, 4 colonnes : Produit / Ressources / Légal / Contact
- Logo + baseline en bas
- Copyright + liens RGPD/CGU

---

## Composants réutilisables (`components.jsx`)

### `<OKCLogo />`
Logo wordmark : "OKaz" + "Car" (le "Car" toujours en `--okc-accent` jaune). Tailles via prop `size`.

### `useReveal(deps)`
Hook custom qui pose un `IntersectionObserver` sur tous les `[data-animate]` et leur ajoute la classe `.visible` quand ils entrent dans le viewport. À recoder avec Framer Motion `whileInView` ou GSAP ScrollTrigger en production.

### `<Counter from={0} to={12} duration={1500}/>`
Compteur animé qui démarre quand visible. Anime avec `requestAnimationFrame`, easing custom `easeOutCubic`.

### `<ScoreGauge score={97} />`
Cercle SVG avec arc proportionnel au score, couleur dérivée (vert/orange/rouge selon seuils 80/60).

### `<PriceBar value={62} marketMedian={78} />`
Barre horizontale de prix vs marché avec marqueur de médiane.

### `<ExtensionPanel />`
**Le panel latéral OKazCar tel qu'affiché dans le browser** — version complète avec header gradient, score gauge, liste des 12 filtres avec leur état (✓ pass / ⚠ warn / ✗ fail), bouton "Voir l'analyse complète". Utilisé dans LiveDemo. ~290 lignes — c'est le composant le plus complexe.

### `<RadarMini score={97} size={200} scores={[...]} />`
Radar chart SVG 12 axes utilisé dans Hero et Showcase. 4 anneaux concentriques, axes radiaux, polygone de données rempli, points par axe colorés selon la valeur, score numérique au centre. Labels de chaque axe placés en dehors du dernier anneau.

---

## Données (`data.js`)

Toutes les données statiques sont dans `data.js` au scope global :

```js
window.FILTERS         // [{num, title, desc, ...}] × 12
window.PLATFORMS       // [{name, domain, color, country}] × 14
window.AUDIENCES       // [{name, headline, desc, volume}] × 4
window.NUMBERS         // [{value, label}] × 4
window.COMPARISON_ROWS // [{feat, without, competitor, with}] × ~10
window.BLOG_POSTS      // [{title, excerpt, date, slug}] × 3
window.FAQ_ITEMS       // [{q, a}] × ~8
```

À porter en JSON ou MDX selon votre stack — ces contenus changent rarement.

---

## Interactions & Behavior

| Élément | Trigger | Effet |
|---|---|---|
| Tous les `[data-animate]` | IntersectionObserver (threshold 0.15) | Ajout classe `.visible` → fade-up 700ms |
| Slider avant/après (Hero) | mousedown/touchstart sur poignée + mousemove | Change `clip-path: inset(0 0 0 X%)` du panneau "après" |
| Cards filtres | hover | Border `--okc-text-primary`, lift -2px |
| FAQ | click ligne | Toggle `aria-expanded`, anime `max-height` |
| Counter | enter viewport | requestAnimationFrame de 0 → valeur, 1500ms |
| ExtensionPanel | scroll dans LiveDemo | Filtres se remplissent un par un (stagger 200ms) |
| Marquee | infinite | `@keyframes marquee` linéaire 40s, `animation-play-state: paused` au hover |
| Nav links | click sur ancre | `scroll-behavior: smooth` natif |

---

## Responsive

Breakpoints utilisés :
- `< 1024px` : grilles passent de 4→3 ou 3→2 colonnes, page padding 40px, sections padding 80px vertical
- `< 768px` : grilles passent à 2 ou 1 colonne, page padding 24px, sections padding 56px vertical, H1 56px, H2 40px
- `< 480px` : Marquee plus courte, slider hero passe en mode "tap to toggle" plutôt que drag

Le site est conçu **desktop-first** (l'extension Chrome ciblée est un produit desktop). Mobile = présentation marketing seulement, pas d'usage produit.

---

## Themes (Tweaks)

Le prototype expose 3 thèmes pour exploration via le panneau Tweaks (à NE PAS porter en prod, c'est une aide de design) :

- `swiss` (par défaut) — minimal Swiss avec fond crème, type Inter Tight, accents bleus/jaunes
- `premium` — sombre élégant, fond `#0a0a0a`, accents adoucis
- `editorial` — typo bold, contraste fort, fond `#f5f3ed`, primary noir

Switch via `document.documentElement.dataset.theme = 'premium' | 'editorial' | ''`. Les variables CSS sont surchargées dans `[data-theme="..."]`. **Choisir UN thème** pour la prod (recommandation : `swiss`).

---

## Polices & Assets

### Polices à embarquer (self-hosted recommandé en prod)
- **Inter Tight** — 400, 500, 600, 700
- **DM Sans** — 400, 500, 600, 700, 800 (fallback si Inter Tight non dispo)
- **JetBrains Mono** — 400, 500, 600

URL Google Fonts actuelle :
```
https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap
```

### Images
- `assets/leboncoin-c4.png` — Capture d'écran réelle d'une annonce leboncoin (Citroën C4 1.2 Essence 130 SHINE, 12 490 €). Utilisée comme fond du slider Hero des deux côtés et dans Showcase. **À remplacer par une vraie image marketing si vous voulez éviter d'utiliser une capture du site d'un tiers.**
- `public/favicon.svg` — Favicon (cercle + rayons style boussole)

### Icônes
Le prototype n'utilise **pas** de lib d'icônes — seulement des caractères Unicode (✓ ✗ ⚠ → ↓ × ·) et quelques SVG inline. **En prod, remplacer par lucide-react ou heroicons** pour la cohérence visuelle.

---

## Étapes recommandées d'implémentation

1. **Setup** : `pnpm create next-app okazcar-www --typescript --tailwind --app` (ou Astro)
2. **Tokens** : copier les variables CSS de `:root` dans `tailwind.config.ts` (theme.extend.colors, fontFamily, spacing)
3. **Polices** : `next/font` avec Inter Tight et JetBrains Mono (hébergés via next-font)
4. **Composants atomiques** : `<Logo>`, `<Eyebrow>`, `<Pill variant="pass|warn|fail">`, `<Button variant="primary|secondary|jumbo">`
5. **Composants moléculaires** : `<RadarMini>`, `<ExtensionPanel>`, `<ScoreGauge>`, `<PriceBar>`, `<Counter>`, `<BeforeAfterSlider>`
6. **Sections** : 1 fichier par section dans `app/_sections/`, composer dans `app/page.tsx`
7. **Data** : déplacer `data.js` vers `app/_data/*.ts` typés
8. **Animations** : Framer Motion `whileInView` pour remplacer `useReveal` + IntersectionObserver
9. **SEO** : metadata, OpenGraph, structured data (Software Application)
10. **Perf** : `next/image` sur `leboncoin-c4.png`, lazy-load les sections après le fold

---

## Questions probables du dev

- **Faut-il garder les 3 thèmes ?** Non, c'est juste une exploration design. Choisir `swiss`.
- **Le panel `tweaks-panel.jsx` doit-il être porté ?** Non, à supprimer en prod. C'est une aide de design interne au prototype.
- **L'animation du slider avant/après est-elle finale ?** Oui, mais l'implémentation peut utiliser un drag handler propre (react-use-gesture ou natif pointer events) plutôt que les event listeners hand-rolled.
- **Les domaines AutoScout24 sont-ils tous couverts en vrai ?** À confirmer côté produit — la marquee liste 11 domaines AS24 mais certains pays peuvent ne pas être lancés. Charger depuis l'API plutôt qu'en dur.
- **Le score 97 dans le Hero est-il un cas réel ou marketing ?** Marketing — utiliser une vraie analyse anonymisée si possible.

---

## Fichiers inclus dans ce bundle

```
design_handoff_okazcar/
├── README.md                  ← ce fichier
├── OKazCar Refonte.html       ← entrée du prototype, ouvrir dans un navigateur pour voir
├── styles.css
├── data.js
├── tweaks-panel.jsx           ← (à ignorer en prod)
├── components.jsx
├── sections-1.jsx
├── sections-2.jsx
├── sections-3.jsx
├── app.jsx
├── assets/
│   └── leboncoin-c4.png
└── public/
    └── favicon.svg
```

Pour ouvrir le prototype localement :
```bash
cd design_handoff_okazcar
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/OKazCar%20Refonte.html
```

(ou n'importe quel serveur statique — `npx serve`, etc.)
