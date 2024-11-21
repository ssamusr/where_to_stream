import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CardShow, Header, SelectStreaming } from '../components'
import { useFetch } from '../hooks/useFetch'
import { getTopShows } from '../services/topShows'

interface Show {
  id: string
  originalTitle: string
  imageSet: {
    verticalPoster: {
      w720: string
    }
    verticalBackdrop: {
      w720: string
    }
  }
  genres: Genres[]
  streamingOptions: {
    es: StreamPlatform[]
  }
}

interface Genres {
  id: string
  name: string
}

interface StreamPlatform {
  service: {
    id: string
    name: 'Netflix' | 'Max' | 'Prime Video' | 'Disney+' | 'Apple TV'
  }
  type: 'subscription' | 'buy'
  link: string
  videoLink: string
}

export const TopShowsPage: React.FC = () => {
  const { t } = useTranslation('global')
  const location = useLocation()

  const [selectedStreamingService, setSelectedStreamingService] = useState(
    location.state?.selectedStreaming,
  )

  const { data: topShowsData } = useFetch<Show[]>({
    fetchFunction: getTopShows,
    params: selectedStreamingService,
  })

  const handleQueryChange = (newQuery: string) => {
    setSelectedStreamingService(newQuery)
  }

  return (
    <>
      <Header />
      <div className='sm:px-6 lg:px-8 xl:px-12 px-4 max-w-[1600px] mx-auto'>
        <h1 className='text-4xl md:text-6xl font-bold mb-2 text-center'>
          {t('mainContent.topShows')}
        </h1>

        <SelectStreaming
          defaultStreamingService={selectedStreamingService}
          onQueryChange={handleQueryChange}
        />

        <div
          className='grid gap-2 grid-cols-1 
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
          mx-auto max-w-full'
        >
          {topShowsData?.map((show) => (
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

//TODO: refactorizar todo el tipado de la API
