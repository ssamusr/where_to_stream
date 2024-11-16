import {
  AnimatedBackground,
  Header,
  Indicators,
  SearchInput,
} from '../components'
import { useTranslation } from 'react-i18next'

export const HomePage = () => {
  const { t } = useTranslation('global')

  const images = [
    'src/assets/images/peaky-blinders.jpg',
    'src/assets/images/breaking-bad.jpg',
    'src/assets/images/game-of-thrones.jpg',
  ]

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <AnimatedBackground images={images} />

      <Header />

      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-1'>
          {t('mainContent.title')}
        </h1>
        <p className='text-xl md:text-lg text-gray-100 mb-10'>
          {t('mainContent.description')}
        </p>

        <SearchInput />

        <Indicators images={images} currentIndex={0} />

        {/* Icons */}
        <div className='flex justify-center gap-6 mt-10'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg'
            alt='Netflix'
            className='w-12 h-12 md:w-16 md:h-16'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg'
            alt='HBO'
            className='w-12 h-12 md:w-16 md:h-16'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg'
            alt='Prime Video'
            className='w-12 h-12 md:w-16 md:h-16'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg'
            alt='Disney+'
            className='w-12 h-12 md:w-16 md:h-16'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_TV_Plus_Logo.svg'
            alt='Apple TV'
            className='w-12 h-12 md:w-16 md:h-16'
          />
        </div>
      </div>
    </div>
  )
}
