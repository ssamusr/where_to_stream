import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components'
import { useFetch } from '../hooks/useFetch'
import { getShowById } from '../services/getShowById'
import {
  getPlatformIcon,
  getSubscriptionPlatform,
} from '../utils/cardShowHelpers'
import { ShowItem } from '../types/api/search'

export const ShowPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data: show } = useFetch<ShowItem>({
    fetchFunction: getShowById,
    params: id || '',
  })

  if (!show || !show.streamingOptions?.es) {
    return <div>Cargando...</div>
  }

  const subscriptionPlatforms = getSubscriptionPlatform(
    show.streamingOptions.es,
  )

  const backgroundUrl =
    show.imageSet.horizontalBackdrop?.w1440 ||
    show.imageSet.horizontalPoster?.w1440 ||
    ''

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <div
        className='absolute inset-0 h-full w-full bg-cover bg-center'
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: 'cover',
        }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-70'></div>
      </div>

      <Header />
      <section className='relative z-10 flex h-full max-w-[1600px] flex-col items-start justify-center px-4 text-center text-white sm:px-6 lg:px-8 xl:px-12'>
        <div>
          <h1 className='mb-5 w-full max-w-[650px] text-pretty text-start text-4xl font-bold md:mb-1 md:text-6xl'>
            {show?.title}
          </h1>
          <div className='my-4 flex flex-wrap gap-1 md:my-5 md:gap-2 lg:gap-4'>
            {show?.genres.map((genre) => (
              <span
                key={genre.id}
                className='rounded-md bg-gray-700 px-2 py-1 text-sm lg:text-base'
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className='w-full max-w-96 text-pretty text-start text-base text-gray-100 md:block lg:max-w-[650px] lg:text-xl'>
            {show?.overview ? show.overview : show?.title}
          </p>

          <h2 className='my-4 text-start text-base lg:text-lg'>
            You can watch on:
          </h2>
          <div className='mt-2 flex gap-2'>
            {subscriptionPlatforms.map((platform) => {
              const matchingIcon = getPlatformIcon(platform.service.name)

              return (
                <a
                  key={platform.service.id}
                  href={platform.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block md:hover:scale-110'
                >
                  {matchingIcon ? (
                    <img
                      src={matchingIcon.image}
                      alt={matchingIcon.alt}
                      className='relative h-12 w-12 cursor-pointer rounded border-white/20 bg-white/20 p-1 shadow-[0_0_60px_-10px_rgba(255,255,255,0.2)] backdrop-blur-sm md:h-12 md:w-12'
                    />
                  ) : (
                    <span className='text-sm'>{platform.service.name}</span>
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

//TODO: Añadir loading o fallback
