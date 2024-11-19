import React, { useState } from 'react'
import { CardShow, Header, SelectStreaming } from '../components'
import { useTranslation } from 'react-i18next'
import topShowsData from '../assets/data/TopShowsdata.json'
import { useLocation } from 'react-router-dom'

export const TopShowsPage: React.FC = () => {
  const { t } = useTranslation('global')
  const location = useLocation()

  const [selectedStreaming] = useState(location.state?.selectedStreaming || '')

  return (
    <>
      <Header />
      <div className='sm:px-6 lg:px-8 xl:px-12 px-4 max-w-[1600px] mx-auto'>
        <h1 className='text-4xl md:text-6xl font-bold mb-2 text-center'>
          {t('mainContent.topShows')}
        </h1>

        <SelectStreaming defaultStreaming={selectedStreaming} />

        <div
          className='grid gap-2 grid-cols-1 
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
          mx-auto max-w-full'
        >
          {topShowsData.map((show) => (
            <CardShow
              key={show.id}
              id={show.id}
              title={show.originalTitle}
              image={show.imageSet.verticalPoster.w720}
              genres={show.genres}
              streamPlatforms={show.streamingOptions.es}
            />
          ))}
        </div>
      </div>
    </>
  )
}

// TODO: arreglar el tipado de streamPlatforms
