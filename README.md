# OKazCar.com

Site web (landing) de l’extension Chrome **OKazCar**.

- Front: **React + Vite** (JavaScript)
- Hébergement: **Firebase Hosting**

## En bref

OKazCar est une extension Chrome gratuite qui analyse les annonces auto et affiche un verdict clair directement sur la page.

### Derniers chiffres intégrés au site

- **1 965** véhicules analysés
- **57** marques uniques
- **1 885** modèles uniques
- **21 942** fiches specs détaillées
- Couverture années : **1904 → 2025**
- **10 filtres** d’analyse
- **3 plateformes** couvertes : leboncoin, La Centrale, AutoScout24
- **14 domaines web** couverts au total
- **12 pays** couverts côté AutoScout24
- Installation annoncée en **10 secondes**

## Fonctionnalités mises en avant

- Analyse d’annonce auto en 1 clic
- Score de fiabilité et signaux d’alerte
- Comparaison prix marché
- Détection import / téléphone / vendeur / ancienneté
- Panneau OKazCar injecté directement dans l’annonce

## Démarrage local

1. Variables d’environnement

- Copie `/.env.example` vers `/.env`
- Renseigne les variables `VITE_FIREBASE_*`

> Le fichier `/.env` est **ignoré par git**.

1. Lancer le dev server

- `npm install`
- `npm run dev`

### Vérifications utiles

- `npm run build`
- `npm run lint`

## Firebase (client) : configuration via `.env`

L’initialisation Firebase est dans `src/lib/firebase.js` et utilise :

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID` (optionnel, Analytics)

## Firebase Hosting : déploiement manuel

> Si `https://okazcar-79ced.web.app` (ou `https://okazcar-79ced.firebaseapp.com`) renvoie **404**, c’est normal tant que :

> 1. **Hosting n’est pas activé** dans la console Firebase (Hosting → Get started)
> 2. aucun **déploiement “live”** n’a encore eu lieu.

Prérequis :

- `npm install -g firebase-tools`
- `firebase login`

Puis :

- `firebase deploy --only hosting`

Le projet Firebase ciblé est défini dans `/.firebaserc` (par défaut: `okazcar-79ced`).

## Déploiement automatique (GitHub Actions)

Un workflow est déjà présent : `.github/workflows/firebase-hosting-deploy.yml`.

### Secrets à créer dans GitHub

Dans ton repo GitHub :

### Chemin dans GitHub

`Settings → Secrets and variables → Actions → New repository secret`

Crée ces secrets (noms exacts) :

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

Et pour le déploiement Firebase Hosting (au choix, ici on utilise un service account) :

- `FIREBASE_SERVICE_ACCOUNT_OKAZCAR_79CED`

### Comment obtenir `FIREBASE_SERVICE_ACCOUNT_OKAZCAR_79CED`

1) Firebase Console → ton projet `okazcar-79ced`
2) Project settings → **Service accounts**
3) **Generate new private key** (JSON)
4) Copie **tout le JSON** et colle-le comme valeur du secret `FIREBASE_SERVICE_ACCOUNT_OKAZCAR_79CED`

### Note importante sur les “clés” Firebase

Pour une app web, la configuration Firebase est généralement **visible côté client** (car elle est embarquée dans le bundle). La mettre en secrets GitHub sert surtout à éviter de la committer dans le repo.

## Suite

- Quand tu me donnes ton fichier design `.md`, je remplace les sections/texte/structure.
- Ensuite on raccorde le domaine OVH (DNS) au site Firebase Hosting.
