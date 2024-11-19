import React, { useState } from 'react'
import siteContent from '../assets/data/siteContent.json'
import { getTopShows } from '../services/topShows'
import { useFetch } from '../hooks/useFetch'

interface SelectStreamingProps {
  defaultStreamingService: string
  onQueryChange: (platform: string) => void
}

export const SelectStreaming: React.FC<SelectStreamingProps> = ({
  defaultStreamingService,
  onQueryChange,
}) => {
  const [selectedStreamingService, setStreamingService] = useState<string>(
    defaultStreamingService,
  )
  const { data, loading, error } = useFetch({
    fetchFunction: getTopShows,
    params: selectedStreamingService,
  })

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const platform = event.target.value
    setStreamingService(platform)
    onQueryChange(platform)
  }

  console.log(data)

  return (
    <div className='w-full max-w-xs mx-auto mb-12'>
      <select
        id='streaming-platform'
        name='streaming-platform'
        className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700'
        aria-label='Select your streaming platform'
        value={selectedStreamingService}
        onChange={handleSelectChange}
      >
        {siteContent.streamingIcons.map((icon) => (
          <option key={icon.id} value={icon.query}>
            {icon.name}
          </option>
        ))}
      </select>
    </div>
  )
}
