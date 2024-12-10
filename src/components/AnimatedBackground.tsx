import React, { useEffect, useState } from 'react'

interface AnimatedBackgroundProps {
  id: number
  image: string
}

interface Props {
  backgroundImages: AnimatedBackgroundProps[]
}

export const AnimatedBackground: React.FC<Props> = ({
  backgroundImages,
}: {
  backgroundImages: AnimatedBackgroundProps[]
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    backgroundImages[0].id,
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        return nextIndex > backgroundImages.length
          ? backgroundImages[0].id
          : nextIndex
      })
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [backgroundImages])

  return (
    <div className='absolute inset-0 h-full w-full'>
      {backgroundImages.map(({ id, image }) => (
        <div
          key={id}
          className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-[2000ms] ${
            id === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        </div>
      ))}
    </div>
  )
}
