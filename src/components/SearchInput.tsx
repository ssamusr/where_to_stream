import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchInput: React.FC = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState<string>('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (query.trim().length < 2) return

    navigate(`/search/${query}`)
    setQuery('')
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mb-6 w-full max-w-sm px-6 sm:max-w-md lg:max-w-lg'
    >
      <label htmlFor='search' className='sr-only'>
        Search movie or TV serie
      </label>
      <div className='relative flex items-center'>
        <img
          src='./assets/icons/search.png'
          alt='Buscar'
          className='absolute left-3 h-5 w-5'
        />
        <input
          type='text'
          placeholder='Search movie or TV serie...'
          className='w-full rounded-lg border border-white bg-transparent py-2 pl-12 pr-4 text-lg text-white outline-none focus:ring-2 focus:ring-white'
          value={query}
          onChange={(event) => handleInputChange(event)}
        />
      </div>
    </form>
  )
}
