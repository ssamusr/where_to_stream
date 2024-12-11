import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components'

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div className='flex min-h-screen flex-col items-center justify-center text-center'>
        <h1 className='mb-4 text-4xl font-bold text-gray-800'>
          404 - Not Found
        </h1>
        <p className='mb-6 text-lg text-gray-600'>
          Sorry, we could not find the page you were looking for.
        </p>
        <div className='space-x-4'>
          <button
            className='rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700'
            onClick={() => navigate(-1)}
          >
            Back to previous page
          </button>
          <button
            className='rounded border border-blue-600 px-4 py-2 font-medium text-blue-600 hover:bg-blue-100'
            onClick={() => navigate('/search')}
          >
            Perform a new search
          </button>
        </div>
      </div>
    </>
  )
}
