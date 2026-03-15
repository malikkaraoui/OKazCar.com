# OKazCar.com

Site web (landing) de l'extension Chrome **OKazCar**.

- Front: **React + Vite** (JavaScript)
- Hebergement: **Firebase Hosting**

## En bref

OKazCar est une extension Chrome gratuite qui analyse les annonces auto et affiche un verdict clair directement sur la page.

### Derniers chiffres integres au site

- **178** marques couvertes
- **1 389** generations en base
- **3 218** modeles en base
- **~546 000** versions referencees
- Couverture annees : **2000 - 2026** (maintenue a jour)
- **11 filtres** d'analyse
- **3 plateformes** couvertes : leboncoin, La Centrale, AutoScout24
- **12 pays** couverts cote AutoScout24
- **ParuVendu** bientot integre (114 645 annonces)

## Fonctionnalites mises en avant

- Score de fiabilite (11 filtres, score sur 100)
- Comparaison prix marche (4 sources en cascade)
- Detection import / telephone / vendeur / anciennete
- Dimensions de pneus automatiques + alertes Loi Montagne
- Rappels constructeur (Takata, etc.) avec lien officiel
- Email personnalise au vendeur genere par IA (Gemini)
- Panneau OKazCar injecte directement dans l'annonce

## Demarrage local

1. Variables d'environnement

- Copie `/.env.example` vers `/.env`
- Renseigne les variables `VITE_FIREBASE_*`

> Le fichier `/.env` est **ignore par git**.

1. Lancer le dev server

- `npm install`
- `npm run dev`

### Verifications utiles

- `npm run build`
- `npm run lint`

## Firebase (client) : configuration via `.env`

L'initialisation Firebase est dans `src/lib/firebase.js` et utilise :

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID` (optionnel, Analytics)

## Firebase Hosting : deploiement manuel

> Si `https://okazcar-79ced.web.app` (ou `https://okazcar-79ced.firebaseapp.com`) renvoie **404**, c'est normal tant que :

> 1. **Hosting n'est pas active** dans la console Firebase (Hosting -> Get started)
> 2. aucun **deploiement "live"** n'a encore eu lieu.

Prerequis :

- `npm install -g firebase-tools`
- `firebase login`

Puis :

- `firebase deploy --only hosting`

Le projet Firebase cible est defini dans `/.firebaserc` (par defaut: `okazcar-79ced`).

## Deploiement automatique (GitHub Actions)

Un workflow est deja present : `.github/workflows/firebase-hosting-deploy.yml`.

### Secrets a creer dans GitHub

Dans ton repo GitHub :

### Chemin dans GitHub

`Settings -> Secrets and variables -> Actions -> New repository secret`

Cree ces secrets (noms exacts) :

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

Et pour le deploiement Firebase Hosting (au choix, ici on utilise un service account) :

- `FIREBASE_SERVICE_ACCOUNT_OKAZCAR_79CED`

### Comment obtenir `FIREBASE_SERVICE_ACCOUNT_OKAZCAR_79CED`

1) Firebase Console -> ton projet `okazcar-79ced`
2) Project settings -> **Service accounts**
3) **Generate new private key** (JSON)
4) Copie **tout le JSON** et colle-le comme valeur du secret `FIREBASE_SERVICE_ACCOUNT_OKAZCAR_79CED`

### Note importante sur les "cles" Firebase

Pour une app web, la configuration Firebase est generalement **visible cote client** (car elle est embarquee dans le bundle). La mettre en secrets GitHub sert surtout a eviter de la committer dans le repo.
