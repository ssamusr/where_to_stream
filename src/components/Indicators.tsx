interface IndicatorsProps {
  images: string[]
  currentIndex: number
}

export const Indicators = ({ images, currentIndex }: IndicatorsProps) => {
  return (
    <div className='mt-10 left-1/2 transform -translate-x-1/2 flex gap-4'>
      {images.map((_, index) => (
        <span
          key={index}
          className={`w-2 h-2 rounded-full ${
            index === currentIndex ? 'bg-white' : 'bg-gray-500'
          }`}
        ></span>
      ))}
    </div>
  )
}
