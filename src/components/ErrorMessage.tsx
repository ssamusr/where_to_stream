import React from 'react'

interface ErrorMessageProps {
  message: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className='mb-20 flex flex-col items-center justify-center gap-4 rounded-md border border-red-500 p-4 text-white'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.918-.816 1.995-1.85L21 18.061V5.939c0-1.054-.816-1.918-1.85-1.995L18.061 3H5.939C4.884 3 4.02 3.816 3.943 4.85L3 5.939v12.122c0 1.054.816 1.918 1.85 1.995L5.939 21z'
        />
      </svg>
      <p className='text-center text-lg font-medium'>{message}</p>
    </div>
  )
}
