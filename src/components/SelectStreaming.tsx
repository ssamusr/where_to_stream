import React from 'react'
import siteContent from '../assets/data/siteContent.json'

interface SelectStreamingProps {
  defaultStreamingService: string
  onQueryChange: (platform: string) => void
}

export const SelectStreaming: React.FC<SelectStreamingProps> = ({
  defaultStreamingService,
  onQueryChange,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const platform = event.target.value
    onQueryChange(platform)
  }

  return (
    <div className='w-full max-w-xs mx-auto mb-12'>
      <select
        id='streaming-platform'
        name='streaming-platform'
        className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700'
        aria-label='Select your streaming platform'
        value={defaultStreamingService}
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
