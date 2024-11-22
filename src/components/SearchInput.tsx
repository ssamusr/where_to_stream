import { ChangeEvent, FormEvent, useState } from 'react'

export const SearchInput = () => {
  const [query, setQuery] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery('')
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
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
