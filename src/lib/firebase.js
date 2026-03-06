import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

const REQUIRED_VITE_KEYS = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_APP_ID',
]

function getMissingKeys() {
  return REQUIRED_VITE_KEYS.filter((k) => !import.meta.env[k])
}

export function getFirebaseConfig() {
  const missing = getMissingKeys()
  if (missing.length > 0) {
    // Ne bloque pas le site (utile tant que tu n'as pas encore configuré les secrets)
    console.warn(
      `[Firebase] Config incomplète. Variables manquantes: ${missing.join(', ')}. ` +
        'Copie .env.example -> .env et renseigne les valeurs.'
    )
    return null
  }

  return {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  }
}

let _app = null

export function getFirebaseApp() {
  if (_app) return _app

  const config = getFirebaseConfig()
  if (!config) return null

  _app = initializeApp(config)
  return _app
}

export async function initFirebase() {
  const app = getFirebaseApp()
  if (!app) return { app: null, analytics: null }

  // Analytics est optionnel, et pas toujours supporté (SSR, certains navigateurs, etc.)
  const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  if (!measurementId) return { app, analytics: null }

  try {
    const supported = await isSupported()
    if (!supported) return { app, analytics: null }
    return { app, analytics: getAnalytics(app) }
  } catch {
    return { app, analytics: null }
  }
}
