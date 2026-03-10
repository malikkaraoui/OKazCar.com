# OKazCar.com — Guide de Construction du Site Web

> Ce document est un guide exhaustif pour construire le site vitrine one-page de **OKazCar.com**.
> Il doit etre suivi a la lettre : design system, structure, animations, contenu.

---

## 1. IDENTITE DE MARQUE

### Nom & Tagline
- **Nom** : OKaz**Car** (le "Car" est en jaune doré)
- **Tagline** : *Analyse annonce auto de A à Z*
- **Description courte** : Extension Chrome gratuite qui analyse les annonces auto en 1 clic. Score de fiabilité, comparaison de prix marché, détection d'anomalies. IA intégrée.

### Logo
Le logo est une **roue à 5 branches** (SVG) accompagnée du texte "OKazCar".

```svg
<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <circle cx="64" cy="64" r="56" fill="none" stroke="currentColor" stroke-width="12"/>
  <circle cx="64" cy="64" r="12" fill="currentColor"/>
  <g stroke="currentColor" stroke-width="8" stroke-linecap="round">
    <line x1="64" y1="22" x2="64" y2="52"/>
    <line x1="64" y1="22" x2="64" y2="52" transform="rotate(72 64 64)"/>
    <line x1="64" y1="22" x2="64" y2="52" transform="rotate(144 64 64)"/>
    <line x1="64" y1="22" x2="64" y2="52" transform="rotate(216 64 64)"/>
    <line x1="64" y1="22" x2="64" y2="52" transform="rotate(288 64 64)"/>
  </g>
</svg>
```

- **Sur fond clair** : roue en `#1e293b` (slate foncé)
- **Sur fond foncé / gradient** : roue en `rgba(255,255,255,0.85)` (blanc semi-transparent)
- Le logo texte : "OKaz" en blanc, "Car" en `#fbbf24` (jaune doré)

### Tonalité
- Confiance, expertise, simplicité
- Vocabulaire automobile accessible (pas de jargon technique)
- Franc, direct, sans bullshit — on parle à des acheteurs qui veulent éviter les arnaques

---

## 2. DESIGN SYSTEM COMPLET

### 2.1 Palette de couleurs

#### Couleurs principales
| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#2563eb` | Bleu principal, CTAs, liens |
| `--primary-hover` | `#1d4ed8` | Hover des boutons |
| `--primary-light` | `#0ea5e9` | Second bleu (gradient CTA) |
| `--accent` | `#fbbf24` | Jaune doré — "Car" du logo, highlights |
| `--accent-hover` | `#f59e0b` | Jaune hover |

#### Fonds & Surfaces
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-white` | `#ffffff` | Fond principal sections claires |
| `--bg-light` | `#f8fafc` | Fond alterné (léger gris-bleu) |
| `--bg-subtle` | `#f9fafb` | Cartes, zones secondaires |
| `--bg-dark` | `#0f172a` | Sections sombres (hero, footer) |
| `--bg-dark-mid` | `#1e293b` | Surfaces sombres secondaires |

#### Textes
| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#111827` | Texte principal (fond clair) |
| `--text-secondary` | `#6b7280` | Texte secondaire, descriptions |
| `--text-muted` | `#94a3b8` | Labels, footnotes |
| `--text-slate` | `#1e293b` | Texte emphase |
| `--text-white` | `#ffffff` | Texte sur fond sombre |
| `--text-white-muted` | `rgba(255,255,255,0.55)` | Texte secondaire sur fond sombre |

#### Statuts (pour les démos visuelles dans le site)
| Status | Couleur | BG léger |
|--------|---------|----------|
| Pass | `#22c55e` | `#f0fdf4` |
| Warning | `#f59e0b` | `#fff7ed` |
| Fail | `#ef4444` | `#fef2f2` |
| Skip | `#9ca3af` | `#f3f4f6` |

#### Marques partenaires (badges)
| Marque | Couleur |
|--------|---------|
| leboncoin | `#ff6e14` |
| AutoScout24 | `#0061c9` |

### 2.2 Gradients

```css
/* Header / Hero principal */
--gradient-hero: linear-gradient(135deg, #1e3a5f 0%, #1e40af 50%, #2563eb 100%);

/* CTA bouton principal */
--gradient-cta: linear-gradient(135deg, #2563eb, #0ea5e9);
--gradient-cta-hover: linear-gradient(135deg, #1d4ed8, #0284c7);

/* Premium / Accent */
--gradient-premium: linear-gradient(135deg, #2563eb, #7c3aed);

/* Glow radial (décoration hero) */
--gradient-glow: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
```

### 2.3 Typographie

**Font principale** : `'DM Sans'` (Google Fonts)
```
https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap
```

**Fallback** : `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

#### Echelle typographique (desktop → mobile)

| Role | Taille desktop | Taille mobile | Poids | Line-height |
|------|---------------|---------------|-------|-------------|
| Hero titre | 72px | 40px | 800 | 1.05 |
| Hero sous-titre | 24px | 18px | 400 | 1.5 |
| Section titre | 48px | 32px | 700 | 1.1 |
| Section sous-titre | 20px | 16px | 400 | 1.6 |
| Feature titre | 28px | 22px | 700 | 1.2 |
| Feature description | 18px | 16px | 400 | 1.6 |
| Body | 16px | 15px | 400 | 1.6 |
| Label uppercase | 12px | 11px | 700 | 1.0 |
| Small / Caption | 14px | 13px | 500 | 1.4 |

**Letter-spacing** :
- Titres hero : `-0.3px` (tighter)
- Labels uppercase : `0.8px` à `1px`
- Corps : `0` (défaut)

### 2.4 Ombres & Elevations

```css
/* Carte standard */
--shadow-card: 0 4px 24px rgba(0, 0, 0, 0.08);

/* Carte hover */
--shadow-card-hover: 0 8px 40px rgba(0, 0, 0, 0.12);

/* CTA bouton */
--shadow-cta: 0 4px 14px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255,255,255,0.15);
--shadow-cta-hover: 0 6px 20px rgba(37, 99, 235, 0.45), inset 0 1px 0 rgba(255,255,255,0.15);

/* Popup / Modal showcase */
--shadow-popup: 0 25px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05);

/* Glass morphism */
--shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.08);
```

### 2.5 Border-radius

| Element | Radius |
|---------|--------|
| Gros containers / Hero card | `20px` |
| Boutons, cartes | `12px` |
| Badges, inputs | `8px` - `10px` |
| Progress bars | `4px` |
| Cercles (dots, avatars) | `50%` |

### 2.6 Spacing (rhythm de 8px)
- `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `56px`, `64px`, `80px`, `96px`, `120px`
- Sections verticales : `120px` à `160px` de padding top/bottom
- Container max-width : `1200px` centré
- Content max-width pour le texte : `680px` centré

---

## 3. ANIMATIONS — STYLE APPLE

### 3.1 Philosophie
Les animations doivent etre **subtiles, elegantes et performantes**. Elles servent a **guider le regard** et **reveler le contenu progressivement** au scroll. Jamais gratuites, jamais excessives.

**Regle d'or** : si l'utilisateur ne remarque pas consciemment l'animation mais que la page "se sent bien", c'est reussi.

### 3.2 Technique : Intersection Observer + CSS

Utiliser l'**Intersection Observer API** (pas de librairie externe) pour declencher les animations au scroll.

```javascript
// Pattern de base
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // une seule fois
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

### 3.3 Types d'animations

#### Fade Up (defaut — le plus utilise)
```css
[data-animate="fade-up"] {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
[data-animate="fade-up"].visible {
  opacity: 1;
  transform: translateY(0);
}
```

#### Fade In (sans mouvement)
```css
[data-animate="fade-in"] {
  opacity: 0;
  transition: opacity 1s ease;
}
[data-animate="fade-in"].visible {
  opacity: 1;
}
```

#### Scale Up (pour images/mockups)
```css
[data-animate="scale-up"] {
  opacity: 0;
  transform: scale(0.92);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
[data-animate="scale-up"].visible {
  opacity: 1;
  transform: scale(1);
}
```

#### Slide In Left / Right (pour colonnes alternees)
```css
[data-animate="slide-left"] {
  opacity: 0;
  transform: translateX(-60px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
[data-animate="slide-left"].visible {
  opacity: 1;
  transform: translateX(0);
}

[data-animate="slide-right"] {
  opacity: 0;
  transform: translateX(60px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
[data-animate="slide-right"].visible {
  opacity: 1;
  transform: translateX(0);
}
```

#### Stagger (delai progressif pour listes/grilles)
```css
[data-animate-stagger] > [data-animate] {
  transition-delay: calc(var(--stagger-index, 0) * 0.12s);
}
```
Appliquer `--stagger-index: 0`, `1`, `2`, etc. en JS ou en inline style.

#### Counter Animation (pour les chiffres)
Animer les chiffres de 0 a leur valeur finale avec `requestAnimationFrame` sur ~1.5s, easing ease-out. Se declenche quand la section entre dans le viewport.

### 3.4 Scroll-triggered Sticky Section (section hero feature)
Une section "sticky" ou le texte change pendant que l'image reste fixe :

```css
.sticky-section {
  position: relative;
  min-height: 300vh; /* 3 "ecrans" de scroll */
}
.sticky-visual {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  /* L'image reste centree verticalement */
}
.sticky-steps .step {
  min-height: 100vh;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.6s ease;
}
.sticky-steps .step.active {
  opacity: 1;
}
```
Utiliser Intersection Observer pour activer/desactiver les `.step`.

### 3.5 Navbar hide/show au scroll
```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  transform: translateY(0);
  transition: transform 0.3s ease, background 0.3s ease;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  z-index: 1000;
}
.navbar.hidden {
  transform: translateY(-100%);
}
.navbar.scrolled {
  box-shadow: 0 1px 0 rgba(0,0,0,0.08);
}
```

### 3.6 Parallax leger (hero background)
```css
.hero-bg {
  transform: translateY(calc(var(--scroll-y, 0) * 0.3));
  will-change: transform;
}
```
Mettre a jour `--scroll-y` via JS avec `requestAnimationFrame` pour une parallax fluide a ~0.3x du scroll.

### 3.7 Performance
- Utiliser **uniquement** `transform` et `opacity` pour les animations (GPU-accelerated)
- `will-change: transform` sur les elements animes
- `prefers-reduced-motion: reduce` → desactiver toutes les animations
```css
@media (prefers-reduced-motion: reduce) {
  [data-animate] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

---

## 4. STRUCTURE DE LA PAGE (One-Page Scroll)

La page est composee de **9 sections** qui se deroulent verticalement.

### Navigation (fixe en haut)
- Logo OKazCar (roue + texte) a gauche
- Liens : Fonctionnalites · Comment ca marche · Chiffres · FAQ
- CTA bouton : "Installer gratuitement" → lien Chrome Web Store
- Glass morphism : fond semi-transparent + blur (style Apple)
- Se cache au scroll down, reapparait au scroll up

---

### SECTION 1 — HERO (fond sombre, gradient)

**Layout** : Plein ecran (100vh), centré, fond `--gradient-hero` avec particules/glow decoratifs

**Contenu** :
```
[Label uppercase avec dot pulsant]
EXTENSION CHROME GRATUITE

[Titre hero — 72px, bold, blanc]
Ne vous faites plus
avoir sur leboncoin.

[Sous-titre — 24px, blanc muted]
OKazCar analyse chaque annonce auto en 1 clic.
Score de fiabilité, prix marché, détection d'anomalies.

[2 boutons cote a cote]
[🔵 CTA principal] Installer sur Chrome — C'est gratuit
[⚪ CTA secondaire outline] Voir la démo ↓

[Badges sites supportes]
● leboncoin.fr   ● AutoScout24 (12 pays)

[Indicateur scroll — fleche animee vers le bas]
```

**Animations** :
- Le titre fade-up avec un leger delay (0.2s)
- Le sous-titre fade-up delay 0.4s
- Les boutons fade-up delay 0.6s
- Les badges fade-in delay 0.8s
- L'indicateur de scroll pulse doucement (translateY oscillant)
- Glow radial decoratif qui se deplace lentement (CSS animation sur background-position)

---

### SECTION 2 — SHOWCASE EXTENSION (fond clair)

**Layout** : Large mockup central de l'extension en action

**Contenu** :
```
[Label uppercase]
L'EXTENSION EN ACTION

[Titre section — 48px]
Tout ce que vous devez savoir.
En un coup d'oeil.

[Grand mockup/screenshot]
→ Capture de l'extension OKazCar injectee dans une page leboncoin
→ Le panel lateral avec le score circulaire, le radar, les filtres
→ Fond avec une vraie annonce LBC floutee derriere

[3 mini-highlights sous le mockup]
📊 Score global     🔍 9 filtres IA     ⚡ Analyse en 3 sec
```

**Animations** :
- Le mockup : `scale-up` (part de 0.92 → 1.0) avec une ombre qui s'intensifie
- L'ombre du mockup s'anime aussi : part de `shadow-card` vers `shadow-popup`
- Les 3 highlights arrivent en stagger (0.12s d'ecart)

**Note** : Le mockup doit etre un vrai screenshot de l'extension ou une recreation HTML/CSS fidele du panel OKazCar. Si c'est un screenshot, l'encadrer dans un cadre de navigateur Chrome stylise.

---

### SECTION 3 — FONCTIONNALITES (fond alterné gris-bleu clair)

**Layout** : 3 rangees feature, alternant image gauche / texte droite, puis inverse

**Contenu** — 3 features majeures :

#### Feature 1 : Score de fiabilite
```
[Icone] Jauge circulaire (reprendre le SVG gauge de l'extension)
[Titre] Un score de fiabilité clair et objectif
[Description]
9 filtres analysent l'annonce : coherence km/annee,
prix vs marché, numéro de téléphone, vendeur pro,
véhicule importé, historique de publication...
Chaque signal est pondere pour un score final sur 100.
[Visual] → Reproduire la jauge circulaire SVG animee (le cercle se remplit au scroll)
          + mini radar chart en dessous
```

#### Feature 2 : Prix marché temps reel
```
[Icone] Barre de prix avec marqueur
[Titre] Comparez le prix au marché en temps réel
[Description]
OKazCar collecte les prix d'annonces similaires
sur leboncoin et AutoScout24 (12 pays européens).
Vous voyez instantanement si le prix est dans la norme,
une bonne affaire, ou suspect.
[Visual] → Reproduire la barre de prix L4 animee
          avec le marqueur voiture et la ligne de reference marche
```

#### Feature 3 : Détection d'anomalies
```
[Icone] Bouclier / alerte
[Titre] Les signaux que vous ne voyez pas
[Description]
Numéro étranger ? Véhicule importé ? Annonce republiée
pour paraître récente ? Kilométrage incohérent ?
OKazCar détecte les anomalies invisibles
et vous alerte avant de contacter le vendeur.
[Visual] → Liste de 4-5 alertes stylisees
          (badge fail/warning + texte court)
          Ex: "⚠ Numéro étranger (+32 Belgique)"
              "🔴 Kilométrage suspect (180k km pour 3 ans)"
              "✅ Vendeur particulier vérifié"
```

**Animations** :
- Chaque rangee : texte `slide-left` ou `slide-right` (alternance), image `scale-up`
- La jauge circulaire SVG : le `stroke-dasharray` s'anime quand visible (de 0 a la valeur finale)
- La barre de prix : le marqueur glisse de gauche a sa position finale
- Les alertes : stagger fade-up

---

### SECTION 4 — COMMENT CA MARCHE (fond blanc)

**Layout** : 3 etapes horizontales sur desktop, verticales sur mobile. Style "sticky scroll" si possible (a la Apple : le visuel reste fixe, les etapes scrollent).

**Contenu** :
```
[Label uppercase]
SIMPLE COMME BONJOUR

[Titre section]
3 étapes. 3 secondes.

[Etape 1]
Icone: 🧩 (puzzle piece → extension)
Titre: Installez l'extension
Description: Ajoutez OKazCar depuis le Chrome Web Store.
C'est gratuit, sans compte, sans inscription.

[Etape 2]
Icone: 🔗 (lien → annonce)
Titre: Ouvrez une annonce
Description: Naviguez sur leboncoin.fr ou autoscout24.
L'extension se réveille automatiquement.

[Etape 3]
Icone: ✨ (etincelle → magie)
Titre: Lisez le verdict
Description: Le panel OKazCar apparaît avec le score,
les filtres détaillés et les alertes à surveiller.
```

**Animations** :
- Mode sticky : le visuel (mockup de chaque etape) reste fixe au centre droit, le texte des etapes scroll a gauche. L'image cross-fade entre chaque etape.
- Chaque etape : fade-up en stagger
- Les numeros (1, 2, 3) : counter animation ou apparition avec un cercle qui se dessine (SVG stroke animation)

---

### SECTION 5 — LES 9 FILTRES (fond sombre `#0f172a`)

**Layout** : Grille de 9 cartes sur fond sombre. Style "feature grid" Apple.

**Contenu** :
```
[Label uppercase — blanc muted]
ANALYSE COMPLETE

[Titre section — blanc]
9 filtres. Zéro angle mort.

[Grille 3x3]

L1 — Données complètes
Vérifie que toutes les infos essentielles sont renseignées.

L2 — Modèle reconnu
Identifie le véhicule dans notre référentiel de 70+ modèles.

L3 — Cohérence km/année
Détecte les kilométrages anormalement bas ou élevés.

L4 — Prix vs marché
Compare le prix aux annonces similaires en temps réel.

L5 — Indice de confiance
Score composite évaluant la crédibilité globale de l'annonce.

L6 — Analyse téléphone
Identifie numéros étrangers, fixes, ou à risque.

L7 — Profil vendeur
Vérifie SIRET, ancienneté, avis pour les professionnels.

L8 — Détection import
Repère les véhicules importés et signale les points d'attention.

L9 — Couverture annonce
Analyse les photos, options et signaux de qualité de l'annonce.
```

**Animations** :
- Les cartes : fond `#1e293b` avec bordure subtle `rgba(255,255,255,0.06)`
- Stagger d'apparition : chaque carte fade-up avec un delay de `index * 0.08s`
- Au hover : la carte se souleve legerement (`translateY(-4px)`) et le border brille (`rgba(255,255,255,0.12)`)
- Optionnel : chaque carte a une petite icone/emoji animee

---

### SECTION 6 — CHIFFRES CLES (fond clair)

**Layout** : Large section avec 4 gros chiffres animes

**Contenu** :
```
[Label uppercase]
EN CHIFFRES

[Titre section]
Conçu pour les acheteurs exigeants.

[4 stats en ligne]

70+          12           9            <3s
Véhicules    Pays         Filtres      Temps
référencés   couverts     d'analyse    d'analyse
             (AS24)       par annonce  moyen
```

**Animations** :
- Chaque chiffre : **counter animation** de 0 a la valeur finale (1.5s, ease-out)
- Se declenche quand la section entre dans le viewport
- Les labels en dessous : fade-in avec un leger delay apres le compteur
- Separateur entre chaque stat : ligne verticale fine `rgba(0,0,0,0.08)` qui fade-in

---

### SECTION 7 — FAQ (fond blanc)

**Layout** : Accordeon centre (max-width 720px)

**Contenu** :
```
[Titre section]
Questions fréquentes

Q: C'est vraiment gratuit ?
R: Oui, 100% gratuit. Pas de compte, pas d'abonnement, pas de données personnelles collectées.

Q: Quels sites sont supportés ?
R: leboncoin.fr et AutoScout24 (France, Allemagne, Belgique, Suisse, Italie, Pays-Bas, Autriche, Espagne, Pologne, Luxembourg, Suède + .com).

Q: Comment fonctionne le score ?
R: 9 filtres analysent différents aspects de l'annonce (prix, kilométrage, vendeur, téléphone...). Chaque filtre a un poids selon son importance. Le score final est une moyenne pondérée sur 100.

Q: Mes données sont-elles collectées ?
R: Non. L'extension analyse l'annonce que vous consultez et c'est tout. Aucune donnée personnelle n'est stockée ni transmise. Consultez notre politique de confidentialité.

Q: Ça marche sur Firefox / Safari / Edge ?
R: Pour l'instant, OKazCar est disponible uniquement sur Google Chrome (et les navigateurs compatibles Chromium comme Brave, Edge, Opera).

Q: Comment le prix marché est-il calculé ?
R: OKazCar collecte les prix d'annonces similaires (même modèle, même année, kilométrage proche) sur leboncoin et AutoScout24, puis calcule la médiane pour une estimation fiable.
```

**Animations** :
- Chaque question : fade-up en stagger
- L'ouverture de la reponse : `max-height` transition + `opacity` fade-in (0.3s ease)
- Icone chevron qui tourne à 180deg a l'ouverture
- Style : fond blanc, border `1px solid #e5e7eb`, border-radius `12px`, padding `20px 24px`

---

### SECTION 8 — CTA FINAL (fond gradient hero)

**Layout** : Section centree, fond gradient identique au hero. Le "closing statement".

**Contenu** :
```
[Icone roue logo — grande, 80px, blanche, rotation lente infinie]

[Titre — 48px, blanc]
Prêt à acheter malin ?

[Sous-titre — blanc muted]
Installez OKazCar en 10 secondes.
Votre prochain achat auto mérite mieux qu'un feeling.

[CTA bouton — grand, blanc sur fond bleu clair]
Ajouter à Chrome — Gratuit

[Note sous le bouton — 13px, blanc muted]
Extension Chrome · Gratuit · Sans inscription
```

**Animations** :
- La roue : rotation lente continue (`animation: spin 20s linear infinite`)
- Le titre et le sous-titre : fade-up
- Le bouton : fade-up avec delay, puis leger "pulse" subtil de l'ombre en boucle

---

### SECTION 9 — FOOTER (fond sombre `#0f172a`)

**Layout** : Simple, elegant

**Contenu** :
```
[Logo OKazCar — petit, blanc]

[Liens]
Politique de confidentialité · Chrome Web Store · Contact

[Copyright]
© 2026 OKazCar. Tous droits réservés.

[Mention]
Fait avec ❤️ pour les acheteurs auto exigeants.
```

---

## 5. RESPONSIVE DESIGN

### Breakpoints
| Nom | Largeur | Usage |
|-----|---------|-------|
| Mobile | `< 640px` | 1 colonne, tailles reduites |
| Tablet | `640px - 1024px` | 2 colonnes grille, tailles intermediaires |
| Desktop | `> 1024px` | Layout complet, 3 colonnes grille |

### Regles mobiles
- Hero : titre 40px, sous-titre 18px, boutons empiles verticalement
- Features (section 3) : image au-dessus, texte en dessous (plus d'alternance gauche/droite)
- Grille 9 filtres : passer en 1 colonne (mobile) ou 2 colonnes (tablet)
- Stats : 2x2 sur mobile au lieu de 4 en ligne
- FAQ : pleine largeur avec padding 16px
- Navigation : burger menu sur mobile avec drawer lateral

---

## 6. SPECIFICATIONS TECHNIQUES

### Stack recommandee
- **HTML/CSS/JS vanille** (pas de framework — la page est statique)
- Ou **Astro / Next.js static export** si le dev prefere un framework
- **Aucune dependance d'animation** (pas de GSAP, AOS, etc.) — tout en CSS + Intersection Observer
- **Google Fonts** : DM Sans (400, 500, 600, 700, 800)

### Performance
- Lighthouse score cible : **95+** sur les 4 metriques
- Images : format **WebP** avec fallback, `loading="lazy"` sauf hero
- Fonts : `display=swap` + preconnect
- CSS : inline critical CSS pour le hero
- JS : defer, pas de render-blocking

### SEO
- `<title>` : OKazCar — Analysez vos annonces auto en 1 clic
- `<meta description>` : Extension Chrome gratuite. Score de fiabilité, prix marché, détection d'anomalies. Compatible leboncoin et AutoScout24.
- Open Graph tags pour le partage social
- Schema.org : `SoftwareApplication` pour l'extension

### Accessibilite
- Contraste WCAG AA minimum sur tous les textes
- `prefers-reduced-motion` respecte (cf. section animations)
- Focus visible sur tous les elements interactifs
- Alt text sur toutes les images
- Semantique HTML5 : `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`

---

## 7. ASSETS NECESSAIRES

| Asset | Format | Usage |
|-------|--------|-------|
| Logo SVG (roue) | SVG inline | Hero, nav, footer, CTA |
| Screenshot extension (panel complet) | PNG/WebP 2x | Section 2 showcase |
| Screenshot extension (etape 1 - install) | PNG/WebP 2x | Section 4 |
| Screenshot extension (etape 2 - annonce) | PNG/WebP 2x | Section 4 |
| Screenshot extension (etape 3 - resultat) | PNG/WebP 2x | Section 4 |
| Favicon | SVG + ICO | Browser tab |
| OG Image (1200x630) | PNG | Partage social |

> **Alternative aux screenshots** : recreer les composants de l'extension directement en HTML/CSS dans la page (jauge, radar, barre de prix, alertes). C'est plus elegant et responsive qu'un screenshot statique.

---

## 8. COULEURS CSS VARIABLES (copier-coller)

```css
:root {
  /* Brand */
  --okazcar-primary: #2563eb;
  --okazcar-primary-hover: #1d4ed8;
  --okazcar-primary-light: #0ea5e9;
  --okazcar-accent: #fbbf24;
  --okazcar-accent-hover: #f59e0b;

  /* Backgrounds */
  --okazcar-bg-white: #ffffff;
  --okazcar-bg-light: #f8fafc;
  --okazcar-bg-subtle: #f9fafb;
  --okazcar-bg-dark: #0f172a;
  --okazcar-bg-dark-mid: #1e293b;

  /* Text */
  --okazcar-text-primary: #111827;
  --okazcar-text-secondary: #6b7280;
  --okazcar-text-muted: #94a3b8;
  --okazcar-text-slate: #1e293b;
  --okazcar-text-white: #ffffff;
  --okazcar-text-white-muted: rgba(255, 255, 255, 0.55);

  /* Gradients */
  --okazcar-gradient-hero: linear-gradient(135deg, #1e3a5f 0%, #1e40af 50%, #2563eb 100%);
  --okazcar-gradient-cta: linear-gradient(135deg, #2563eb, #0ea5e9);
  --okazcar-gradient-cta-hover: linear-gradient(135deg, #1d4ed8, #0284c7);

  /* Status */
  --okazcar-pass: #22c55e;
  --okazcar-warning: #f59e0b;
  --okazcar-fail: #ef4444;
  --okazcar-neutral: #9ca3af;

  /* Brands */
  --okazcar-lbc: #ff6e14;
  --okazcar-as24: #0061c9;

  /* Shadows */
  --okazcar-shadow-card: 0 4px 24px rgba(0, 0, 0, 0.08);
  --okazcar-shadow-card-hover: 0 8px 40px rgba(0, 0, 0, 0.12);
  --okazcar-shadow-cta: 0 4px 14px rgba(37, 99, 235, 0.35);
  --okazcar-shadow-popup: 0 25px 60px rgba(0, 0, 0, 0.2);

  /* Misc */
  --okazcar-radius-lg: 20px;
  --okazcar-radius-md: 12px;
  --okazcar-radius-sm: 8px;
  --okazcar-font: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

---

## 9. CHECKLIST AVANT LIVRAISON

- [ ] Le site charge en moins de 2 secondes
- [ ] Les animations sont fluides (60fps) et respectent `prefers-reduced-motion`
- [ ] Le site est entierement responsive (mobile, tablet, desktop)
- [ ] Le lien CTA pointe vers le Chrome Web Store
- [ ] La politique de confidentialite est accessible
- [ ] Le contraste texte est WCAG AA
- [ ] Les meta OG sont presentes pour le partage social
- [ ] Favicon en place
- [ ] Aucune dependance JS externe pour les animations
- [ ] Le site fonctionne sans JavaScript (contenu lisible, juste sans animations)
- [ ] Le logo reprend exactement le SVG roue + texte OKaz(jaune)Car de l'extension
- [ ] Les couleurs matchent exactement le design system ci-dessus
- [ ] La font DM Sans est chargee correctement

---

*Ce guide est la source de verite pour le design du site OKazCar.com. Toute decision non couverte ici doit s'aligner avec le design system de l'extension Chrome.*
