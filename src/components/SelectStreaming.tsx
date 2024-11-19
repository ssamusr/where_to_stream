import siteContent from '../assets/data/siteContent.json'

export const SelectStreaming = () => {
  return (
    <div className='w-full max-w-xs mx-auto mb-12'>
      <select
        id='streaming-platform'
        name='streaming-platform'
        className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700'
        aria-label='Select your streaming platform'
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
