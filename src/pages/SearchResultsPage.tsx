import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchShowByTitle } from '../services/searchShowByTitle'
import { CardShow, Header, SearchInput } from '../components'
import { ShowItem } from '../types/api/search'

export const SearchResultsPage = () => {
  let { query } = useParams<{ query: string }>()
  const [results, setResults] = useState<ShowItem[] | null>(null)
  const [isoading, setIsLoading] = useState<boolean>(false)
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
      <div className='mx-auto max-w-[1600px] px-4 pb-20 sm:px-6 lg:px-8 xl:px-12'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='mb-2 text-center text-4xl font-bold md:text-6xl'>
            Result of: <span className='capitalize'>{query}</span>
          </h1>

          <SearchInput />
        </div>

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
