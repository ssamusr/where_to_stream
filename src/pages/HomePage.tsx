import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const HomePage = () => {
  const { t, i18n } = useTranslation('global')

  const images = [
    'src/assets/images/peaky-blinders.jpg',
    'src/assets/images/breaking-bad.jpg',
    'src/assets/images/game-of-thrones.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      {/* Fondo animado */}
      <div className='absolute inset-0 h-full w-full'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-[2000ms] ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className='absolute inset-0 bg-black bg-opacity-50'></div>
          </div>
        ))}
      </div>

      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center'>
        {/* Title */}
        <h1 className='text-4xl md:text-6xl font-bold mb-1'>
          {t('mainContent.title')}
        </h1>
        <p className='text-xl md:text-lg text-gray-100 mb-10'>
          {t('mainContent.description')}
        </p>

        <button onClick={() => handleChangeLanguage('en')}>EN</button>
        <button onClick={() => handleChangeLanguage('es')}>ES</button>

        {/* Input */}
        <input
          type='text'
          placeholder='Search...'
          className='w-1/3 border border-white bg-transparent text-white py-2 px-4 rounded-lg outline-none focus:ring-2 focus:ring-white'
        />

        {/* Indicadores */}
        <div className='mt-10 left-1/2 transform -translate-x-1/2 flex gap-4'>
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
            ></span>
          ))}
        </div>

        {/* Icons */}
        <div className='flex justify-center gap-6 mt-10'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/1/19/Netflix.png'
            alt='Netflix'
            className='w-12 h-12 md:w-16 md:h-16'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/e/e4/HBO_logo.svg'
            alt='HBO'
            className='w-12 h-12 md:w-16 md:h-16'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Prime_Video.png'
            alt='Prime Video'
            className='w-12 h-12 md:w-16 md:h-16'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/67/Disney_Plus_logo.svg'
            alt='Disney+'
            className='w-12 h-12 md:w-16 md:h-16'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Apple_TV_Logo.svg'
            alt='Apple TV'
            className='w-12 h-12 md:w-16 md:h-16'
          />
        </div>
      </div>
    </div>
  )
}
