import { en } from './en'
import { es } from './es'
import { ne } from './ne'
import { hi } from './hi'
import { ja } from './ja'
import { de } from './de'
import { zh } from './zh'
import { fr } from './fr'

export const translations = {
  en,
  es,
  ne,
  hi,
  ja,
  de,
  zh,
  fr
}

export const availableLanguages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ne', name: 'नेपाली', flag: '🇳🇵' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' }
]
