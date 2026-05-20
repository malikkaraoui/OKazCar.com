import { Navigate } from 'react-router-dom'

export default function RootRedirect() {
  const saved = localStorage.getItem('i18nextLng')
  const supported = ['fr', 'en', 'es', 'it', 'de']
  const lang = supported.includes(saved) ? saved : 'fr'

  return <Navigate to={`/${lang}`} replace />
}
