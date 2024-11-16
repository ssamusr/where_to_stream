import { useEffect, useState } from 'react'

interface AnimatedBackgroundProps {
  images: string[]
}

export const AnimatedBackground = ({ images }: AnimatedBackgroundProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [images.length])

  return (
    <div className='absolute inset-0 h-full w-full'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-[2000ms] ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        </div>
      ))}
    </div>
  )
}
