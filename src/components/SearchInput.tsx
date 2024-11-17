import { ChangeEvent, FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const SearchInput = () => {
  const { t } = useTranslation('global')
  const [query, setQuery] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery('')
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <form action='' onSubmit={handleSubmit} className='w-1/3'>
      <input
        type='text'
        placeholder={t('searchInput.placeholder')}
        className='w-full border border-white bg-transparent text-white py-2 px-4 rounded-lg outline-none focus:ring-2 focus:ring-white'
        value={query}
        onChange={(event) => handleInputChange(event)}
      />
    </form>
  )
}
