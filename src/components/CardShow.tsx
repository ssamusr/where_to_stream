import React from 'react'

interface CardShowProps {
  id: string
  title: string
  image: string
}

export const CardShow: React.FC<CardShowProps> = ({ id, title, image }) => {
  return (
    <a
      key={id}
      className='flex flex-col items-center text-center'
      href={`./show/${id}`}
    >
      <img
        src={image}
        alt={`${title} Poster`}
        className='mb-4 max-w-full h-auto'
      />
    </a>
  )
}

// TODO: Añadir animacion
