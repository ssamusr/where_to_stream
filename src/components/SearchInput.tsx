import React, { ChangeEvent, FormEvent, useState } from 'react'
import { searchShowByTitle } from '../services/searchShowByTitle'

export const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const [searchResults, setSearchResults] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsLoading(true)
    setError(null)

    try {
      const data = await searchShowByTitle(query)
      setSearchResults(data)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error desconocido')
    } finally {
      setIsLoading(false)
      setQuery('')
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  if (searchResults) {
    console.log(searchResults)
  }

  return (
    <form
      action=''
      onSubmit={handleSubmit}
      className='w-full max-w-sm px-6 sm:max-w-md lg:max-w-lg'
    >
      <input
        type='text'
        placeholder='Buscar película o series...'
        className='w-full rounded-lg border border-white bg-transparent px-4 py-2 text-lg text-white outline-none focus:ring-2 focus:ring-white'
        value={query}
        onChange={(event) => handleInputChange(event)}
      />
    </form>
  )
}

// TODO: tipar los resultados de la data de la API
