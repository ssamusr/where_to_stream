import React from 'react'
import {
  AnimatedBackground,
  Header,
  Indicators,
  SearchInput,
} from '../components'
import { useTranslation } from 'react-i18next'
import siteContent from '../assets/data/siteContent.json'
import { useNavigate } from 'react-router-dom'

export const HomePage: React.FC = () => {
  const { t } = useTranslation('global')
  const navigate = useNavigate()
  const { streamingIcons, backgroundImages } = siteContent

  const handleIconClick = (streamingName: string) => {
    navigate('/top', { state: { selectedStreaming: streamingName } })
  }

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <AnimatedBackground images={backgroundImages} />

      <Header />

      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-1'>
          {t('mainContent.title')}
        </h1>
        <p className='text-xl md:text-lg text-gray-100 mb-10'>
          {t('mainContent.description')}
        </p>

        <SearchInput />

        {/* <Indicators images={backgroundImages} currentIndex={0} /> */}

        <div className='flex justify-center gap-6 mt-10'>
          {streamingIcons.map(({ id, image, name }) => (
            <img
              key={id}
              src={image}
              alt={name}
              className='w-14 h-14 md:w-12 md:h-12 p-1 rounded relative bg-white/20 backdrop-blur-sm border-white/20 shadow-[0_0_60px_-10px_rgba(255,255,255,0.2)] cursor-pointer'
              onClick={() => handleIconClick(name)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
