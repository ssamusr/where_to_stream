import React, { useState } from 'react'
import { siteContent } from '../constants/siteContent'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const { navbarLinks } = siteContent

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className='relative bg-transparent text-white'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10'>
        <div>
          <Link to='/' aria-label='Inicio'>
            <h1 className='relative z-30 text-lg md:text-xl lg:text-2xl'>
              WhereTo<span className='underline'>Stream</span>
            </h1>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className='z-30 block rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden'
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className='sr-only'>Abrir menú</span>
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            {menuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav
          className={`hidden space-x-8 lg:flex`}
          aria-label='Navegación principal'
        >
          {navbarLinks.map(({ id, text, url }) => (
            <Link
              key={id}
              to={url}
              className='hover:text-gray-300 focus:text-gray-300 focus:underline focus:outline-none lg:text-base xl:text-xl'
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className='absolute right-0 top-0 z-20 h-screen w-full bg-gray-950 text-white shadow-lg lg:hidden'
          aria-label='Navegación móvil'
        >
          <ul className='mt-16 flex flex-col items-center gap-8'>
            {navbarLinks.map(({ id, text, url }) => (
              <li key={id}>
                <Link
                  to={url}
                  className='block w-full rounded-md px-4 py-2 text-center text-xl hover:bg-gray-700 focus:bg-gray-700 focus:outline-none'
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
