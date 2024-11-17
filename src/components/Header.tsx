import { useTranslation } from 'react-i18next'
import { navbar } from '../assets/data/data.json'
import { useState } from 'react'

const languages = Object.keys(
  import.meta.glob('/src/translations/*/global.json'),
).map((path) => path.split('/')[3])

/* 
    EXPLICACIÓN languages
    1. Object.keys --> retonar un array de string de paths
    2. path.split('/')[3] --> separa cada array por / y nos quedamos con la tercera posición del array
    3. languages = ['es', 'en']
*/

export const Header = () => {
  const { t, i18n } = useTranslation('global')
  const [lang, setLang] = useState(languages[1])

  const links = t('navbar.links', { returnObjects: true }) as {
    id: number
    text: string
    url: string
  }[]

  const handleChangeLanguage = () => {
    const currentLangIndex = languages.indexOf(lang)
    const nextLangIndex = (currentLangIndex + 1) % languages.length
    const newLang = languages[nextLangIndex]

    i18n.changeLanguage(newLang)
    setLang(newLang)
  }

  return (
    <header className='relative w-full h-16 z-10 grid items-center'>
      <nav className='flex flex-row justify-between items-center px-10'>
        <div>
          <a href='/'>WhereToStream</a>
        </div>
        <ul className='flex flex-row items-center gap-4'>
          {links.map((link) => (
            <li key={link.id} className='text-white'>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
          <button
            className='border-2 border-white p-1 rounded'
            onClick={() => handleChangeLanguage()}
          >
            {lang}
          </button>
        </ul>
      </nav>
    </header>
  )
}
