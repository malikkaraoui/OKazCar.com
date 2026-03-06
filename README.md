# OKazCar.com

Site web (landing) de l’extension Chrome **OKazCar**.

- Front: **React + Vite** (JavaScript)
- Hébergement: **Firebase Hosting**

## Démarrage local

1) Variables d’environnement

- Copie `/.env.example` vers `/.env`
- Renseigne les variables `VITE_FIREBASE_*`

> Le fichier `/.env` est **ignoré par git**.

2) Lancer le dev server

- `npm install`
- `npm run dev`

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

**Settings → Secrets and variables → Actions → New repository secret**

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
