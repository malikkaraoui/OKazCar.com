import { useEffect } from 'react'
import { useParams, Outlet, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LangContext } from '../context/lang'

const SUPPORTED = ['fr', 'en', 'es', 'it', 'de']

export default function LangWrapper() {
  const { lang } = useParams()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (SUPPORTED.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang, i18n])

  if (!SUPPORTED.includes(lang)) {
    return <Navigate to="/fr" replace />
  }

  const lp = (path) => `/${lang}${path === '/' ? '' : path}`

  return (
    <LangContext.Provider value={{ lang, lp }}>
      <Outlet />
    </LangContext.Provider>
  )
}
