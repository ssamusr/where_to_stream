import React, { useState } from 'react'
import siteContent from '../assets/data/siteContent.json'

interface SelectStreamingProps {
  defaultStreaming?: string
}

export const SelectStreaming: React.FC<SelectStreamingProps> = ({
  defaultStreaming = '',
}) => {
  const [selectedStreaming, setSelectedStreaming] = useState(defaultStreaming)

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStreaming(event.target.value)
  }

  return (
    <div className='w-full max-w-xs mx-auto mb-12'>
      <select
        id='streaming-platform'
        name='streaming-platform'
        className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700'
        aria-label='Select your streaming platform'
        value={selectedStreaming}
        onChange={handleSelectChange}
      >
        {siteContent.streamingIcons.map((icon) => (
          <option key={icon.id} value={icon.name}>
            {icon.name}
          </option>
        ))}
      </select>
    </div>
  )
}
