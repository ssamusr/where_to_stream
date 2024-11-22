import React from 'react'

interface Icon {
  id: number
  image: string
  name: string
  query: string
}

interface StreamingIconsProps {
  icons: Icon[]
  onClick: (query: string) => void
}

export const StreamingIcons: React.FC<StreamingIconsProps> = ({
  icons,
  onClick,
}) => {
  return (
    <div className='mt-10 flex w-full max-w-sm justify-between px-6 sm:max-w-md md:gap-6 lg:max-w-lg'>
      {icons.map(({ id, image, name, query }) => (
        <img
          key={id}
          src={image}
          alt={name}
          className='relative h-12 w-12 cursor-pointer rounded border-white/20 bg-white/20 p-1 shadow-[0_0_60px_-10px_rgba(255,255,255,0.2)] backdrop-blur-sm md:h-14 md:w-14 lg:h-16 lg:w-16'
          onClick={() => onClick(query)}
          aria-label={`Seleccionar lo más visto en ${name}`}
        />
      ))}
    </div>
  )
}
