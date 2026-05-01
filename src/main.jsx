import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import './i18n/index.js'
import App from './App.jsx'
import LangWrapper from './components/LangWrapper.jsx'
import { initFirebase } from './lib/firebase.js'

const BlogIndex = lazy(() => import('./pages/BlogIndex.jsx'))
const BlogPost  = lazy(() => import('./pages/BlogPost.jsx'))

void initFirebase()

function RootRedirect() {
  const saved = localStorage.getItem('i18nextLng')
  const nav = navigator.language.slice(0, 2)
  const supported = ['fr', 'en', 'es', 'it']
  const lang = supported.includes(saved) ? saved : supported.includes(nav) ? nav : 'fr'
  return <Navigate to={`/${lang}`} replace />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/:lang" element={<LangWrapper />}>
            <Route index element={<App />} />
            <Route path="blog" element={<BlogIndex />} />
            <Route path="blog/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
