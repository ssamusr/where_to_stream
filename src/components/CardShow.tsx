import React from 'react'
import siteContent from '../assets/data/siteContent.json'

interface CardShowProps {
  id: string
  title: string
  image: string
  genres: Genres[]
  streamPlatforms: StreamPlatform[]
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

export const CardShow: React.FC<CardShowProps> = ({
  id,
  title,
  image,
  genres,
  streamPlatforms,
}) => {
  const subscriptionPlatforms = streamPlatforms.filter(
    (platform) => platform.type === 'subscription',
  )

  return (
    <article
      key={id}
      className='relative rounded-2xl shadow-[0_15px_35px_rgba(255,255,255,0.1)] overflow-hidden'
    >
      <a href='/top' className='group relative overflow-hidden'>
        <img
          src={image}
          alt={`${title} Poster`}
          className='w-full h-full transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:blur'
        />
        <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0'></div>

        <div className='absolute w-full bottom-0 left-0 z-10 p-6 text-white transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
          <h1 className='text-2xl font-bold mb-2'>{title}</h1>
          <div className='flex flex-wrap gap-1'>
            {genres.map((genre) => (
              <span
                key={genre.id}
                className='px-2 py-1 bg-gray-700 rounded-md text-sm'
              >
                {genre.name}
              </span>
            ))}
          </div>
          <h2>Disponible en: </h2>
          <div className='flex gap-2 mt-2'>
            {(() => {
              const renderedIds = new Set<string>() // Para almacenar los IDs renderizados

              return subscriptionPlatforms
                .filter((platform) => {
                  // Filtrar duplicados basado en `service.id`
                  if (renderedIds.has(platform.service.id)) {
                    return false
                  }
                  renderedIds.add(platform.service.id)
                  return true
                })
                .map((platform) => {
                  const matchingIcon = siteContent.streamingIcons.find(
                    (icon) => icon.name === platform.service.name,
                  )

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
                          className='w-12 h-12 md:w-12 md:h-12 p-1 rounded relative bg-white/20 backdrop-blur-sm border-white/20 shadow-[0_0_60px_-10px_rgba(255,255,255,0.2)] cursor-pointer'
                        />
                      ) : (
                        <span className='text-sm'>{platform.service.name}</span>
                      )}
                    </a>
                  )
                })
            })()}
          </div>
        </div>
      </a>
    </article>
  )
}

//TODO: refactorizar toda la lógica del renderizado
//TODO2: refactorizar todo el tipado de la API
//TODO3: Arreglar las cards. Hay que quitar el <a> de toda la card
