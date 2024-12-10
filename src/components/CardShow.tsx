import React from 'react'
import { Genre, StreamPlatform } from '../types/api/search'
import {
  getSubscriptionPlatform,
  getPlatformIcon,
} from '../utils/cardShowHelpers'
import { Link } from 'react-router-dom'

interface CardShowProps {
  id: string
  title: string
  image: string
  genres: Genre[]
  streamPlatforms?: StreamPlatform[]
}

export const CardShow: React.FC<CardShowProps> = ({
  id,
  title,
  image,
  genres,
  streamPlatforms = [],
}) => {
  const subscriptionPlatforms = getSubscriptionPlatform(streamPlatforms)

  return (
    <article
      key={id}
      className='relative overflow-hidden rounded-2xl shadow-[0_15px_35px_rgba(255,255,255,0.1)]'
    >
      <div className='group relative h-full w-full overflow-hidden'>
        <img
          src={image}
          alt={`${title} Poster`}
          className='h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:blur'
        />
        <div className='absolute bottom-0 left-0 h-full w-full translate-y-full bg-gradient-to-t from-black to-transparent transition-transform duration-500 ease-in-out group-hover:translate-y-0'></div>

        <div className='absolute bottom-0 left-0 z-10 w-full p-6 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'>
          <h1 className='mb-2 text-2xl font-bold'>{title}</h1>
          <div className='flex flex-wrap gap-1'>
            {genres.map((genre) => (
              <span
                key={genre.id}
                className='rounded-md bg-gray-700 px-2 py-1 text-sm'
              >
                {genre.name}
              </span>
            ))}
          </div>
          <h2>You can watch on:</h2>
          <div className='mt-2 flex gap-2'>
            {subscriptionPlatforms.map((platform) => {
              const matchingIcon = getPlatformIcon(platform.service.name)

              return (
                <a
                  key={platform.service.id}
                  href={platform.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block'
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
        <Link
          to={`/show/${id}`}
          className='absolute inset-0 z-10 cursor-pointer'
        ></Link>
      </div>
    </article>
  )
}

//TODO: refactorizar toda la lógica del renderizado
//TODO2: refactorizar todo el tipado de la API
//TODO3: Arreglar las cards. Hay que quitar el <a> de toda la card
