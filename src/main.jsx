import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import './i18n/index.js'
import App from './App.jsx'
import LangWrapper from './components/LangWrapper.jsx'
import RootRedirect from './components/RootRedirect.jsx'
import { initFirebase } from './lib/firebase.js'

const BlogIndex = lazy(() => import('./pages/BlogIndex.jsx'))
const BlogPost  = lazy(() => import('./pages/BlogPost.jsx'))
const StaticPage = lazy(() => import('./pages/StaticPage.jsx'))

void initFirebase()

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
            <Route path="legal" element={<StaticPage pageKey="legal" />} />
            <Route path="privacy" element={<StaticPage pageKey="privacy" />} />
            <Route path="changelog" element={<StaticPage pageKey="changelog" />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
