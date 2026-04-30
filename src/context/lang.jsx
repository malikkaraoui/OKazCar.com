import { createContext, useContext } from 'react'

export const LangContext = createContext({
  lang: 'fr',
  lp: (path) => `/fr${path}`,
})

export const useLang = () => useContext(LangContext)
