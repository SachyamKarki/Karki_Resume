import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, availableLanguages } from './languages'

const I18nContext = createContext()

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export const I18nProvider = ({ children }) => {

  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('portfolio-language')
      return savedLanguage && translations[savedLanguage] ? savedLanguage : 'en'
    }
    return 'en'
  })

  const [translationsData, setTranslationsData] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('portfolio-language')
      return savedLanguage && translations[savedLanguage] ? translations[savedLanguage] : translations.en
    }
    return translations.en
  })

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage)
      setTranslationsData(translations[newLanguage])
      localStorage.setItem('portfolio-language', newLanguage)
    }
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translationsData
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key 
      }
    }
    return value
  }

  const value = {
    language,
    t,
    changeLanguage,
    availableLanguages
  }

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}
