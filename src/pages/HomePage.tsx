import React from 'react'
import {
  AnimatedBackground,
  Header,
  SearchInput,
  StreamingIcons,
} from '../components'
import { useNavigate } from 'react-router-dom'
import { siteContent } from '../constants/siteContent'

export const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const { backgroundImages, streamingIcons } = siteContent

  const handleIconClick = (streamingName: string) => {
    navigate('/top', { state: { selectedStreaming: streamingName } })
  }

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <AnimatedBackground backgroundImages={backgroundImages} />

      <Header />
      <div className='relative z-10 flex h-full flex-col items-center justify-center text-center text-white'>
        <h1 className='mb-4 px-6 text-3xl font-bold md:mb-1 md:text-6xl'>
          Find Movies and TV Series
        </h1>
        <p className='mb-10 hidden text-gray-100 md:block md:text-lg lg:text-xl'>
          Discover where you can watch your favourite movies and TV series
        </p>

        <SearchInput />

        <StreamingIcons icons={streamingIcons} onClick={handleIconClick} />
      </div>
    </div>
  )
}
