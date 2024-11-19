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

  console.log(subscriptionPlatforms)

  return (
    <article
      key={id}
      className='relative rounded-2xl shadow-[0_15px_35px_rgba(255,255,255,0.1)] overflow-hidden'
    >
      <a href={`./show/${id}`} className='group relative overflow-hidden'>
        <img
          src={image}
          alt={`${title} Poster`}
          className='w-full h-full transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:blur-sm'
        />
        <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0'></div>

        <div className='absolute w-full bottom-0 left-0 z-10 p-4 text-white transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
          <h1 className='text-lg font-bold'>{title}</h1>
          <div className='flex flex-wrap gap-2'>
            {genres.map((genre) => (
              <span key={genre.id} className='px-2 py-1 bg-gray-800 rounded-md'>
                {genre.name}
              </span>
            ))}
          </div>

          <div className='flex gap-2 mt-2'>
            {subscriptionPlatforms.map((platform) => {
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
                      className='w-12 h-12 md:w-8 md:h-8 p-1 rounded relative bg-white/20 backdrop-blur-sm border-white/20 shadow-[0_0_60px_-10px_rgba(255,255,255,0.2)] cursor-pointer'
                    />
                  ) : (
                    <span className='text-sm'>{platform.service.name}</span>
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </a>
    </article>
  )
}
