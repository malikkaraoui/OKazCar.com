import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initFirebase } from './lib/firebase.js'

// Initialisation non-bloquante (le site doit rester utilisable même si la config env n'est pas encore en place)
void initFirebase()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
