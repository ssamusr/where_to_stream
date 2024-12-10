import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { CardShow, Header, SelectStreaming } from '../components'
import { useFetch } from '../hooks/useFetch'
import { getTopShows } from '../services/topShows'

import { ShowItem } from '../types/api/search'

export const TopShowsPage: React.FC = () => {
  const location = useLocation()

  const [selectedStreamingService, setSelectedStreamingService] = useState(
    location.state?.selectedStreaming || 'netflix',
  )

  const { data: topShowsData } = useFetch<ShowItem[]>({
    fetchFunction: getTopShows,
    params: selectedStreamingService,
  })

  const handleQueryChange = (newQuery: string) => {
    setSelectedStreamingService(newQuery)
  }

  return (
    <>
      <Header />
      <div className='mx-auto max-w-[1600px] px-4 pb-20 sm:px-6 lg:px-8 xl:px-12'>
        <h1 className='mb-2 text-center text-4xl font-bold md:text-6xl'>
          Lo más visto en:
        </h1>

        <SelectStreaming
          defaultStreamingService={selectedStreamingService}
          onQueryChange={handleQueryChange}
        />

        <div className='mx-auto grid max-w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
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
