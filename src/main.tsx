import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import global_en from './translations/en/global.json'
import global_es from './translations/es/global.json'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
