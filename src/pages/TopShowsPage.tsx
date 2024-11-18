import { useTranslation } from 'react-i18next'
import topShowsData from '../assets/data/TopShowsdata.json'
import { Header } from '../components'

export const TopShowsPage = () => {
  const { t } = useTranslation('global')

  return (
    <>
      <Header />
      <div className='sm:px-6 lg:px-8 xl:px-12 px-4 max-w-[1600px] mx-auto'>
        <h1 className='text-4xl md:text-6xl font-bold mb-8 text-center'>
          {t('mainContent.topShows')}
        </h1>

        <div
          className='grid gap-1 grid-cols-1 
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
          mx-auto max-w-full'
        >
          {topShowsData.map((show) => (
            <a
              key={show.id}
              className='flex flex-col items-center text-center'
              href={`./show/${show.id}`}
            >
              <img
                src={show.imageSet.verticalPoster.w240}
                alt={`${show.originalTitle} Poster`}
                className='mb-4 max-w-full h-auto'
              />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
