import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { searchShowByTitle } from '../services/searchShowByTitle'
import { CardShow, Header } from '../components'

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
  type: 'subscription' | 'buy' | 'rent' | 'addon'
  link: string
  videoLink: string
}

export const SearchResultsPage = () => {
  let { query } = useParams<{ query: string }>()
  const [results, setResults] = useState<Show[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return

      setIsLoading(true)
      setError(null)

      try {
        const data = await searchShowByTitle(query)
        setResults(data)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Error desconocido')
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [query])

  return (
    <>
      <Header />
      {/* <div className='mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-12'>
        <div className='mx-auto grid max-w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {results?.map((show) => (
            <article
              key={show.id}
              className='relative overflow-hidden rounded-2xl shadow-[0_15px_35px_rgba(255,255,255,0.1)]'
            >
              <Link to='/' className='group relative overflow-hidden'>
                <img
                  src={show.imageSet.verticalPoster.w720}
                  alt={`${show.originalTitle} Poster`}
                  className='h-full w-full transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:blur'
                />
                <div className='absolute bottom-0 left-0 h-full w-full translate-y-full bg-gradient-to-t from-black to-transparent transition-transform duration-500 ease-in-out group-hover:translate-y-0'></div>

                <div className='absolute bottom-0 left-0 z-10 w-full p-6 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'>
                  <h1 className='mb-2 text-2xl font-bold'>
                    {show.originalTitle}
                  </h1>
                  <div className='flex flex-wrap gap-1'>
                    {show.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className='rounded-md bg-gray-700 px-2 py-1 text-sm'
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>

                  <h2>Disponible en: </h2>
                  <div className='mt-2 flex gap-2'>
                    <ul>
                      {show.streamingOptions?.es?.length ? (
                        show.streamingOptions.es.map((platform, index) => (
                          <li
                            key={platform.service.id + index}
                            className='text-sm text-gray-400'
                          >
                            {platform.service.name}
                          </li>
                        ))
                      ) : (
                        <li className='text-sm text-gray-400'>No disponible</li>
                      )}
                    </ul>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div> */}

      <div className='mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-12'>
        <h1 className='mb-2 text-center text-4xl font-bold md:text-6xl'>
          Resultado de: {query}
        </h1>

        <div className='mx-auto grid max-w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {results?.map((show) => (
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

//TODO: isLoading, error state
