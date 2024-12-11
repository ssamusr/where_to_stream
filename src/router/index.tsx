import { createBrowserRouter } from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFoundPage'
import { HomePage } from '../pages/HomePage'
import { TopShowsPage } from '../pages/TopShowsPage'
import { SearchResultsPage } from '../pages/SearchResultsPage'
import { ShowPage } from '../pages/ShowPage'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/*',
        element: <HomePage />,
      },
      {
        path: '/top',
        element: <TopShowsPage />,
      },
      {
        path: '/top/*',
        element: <TopShowsPage />,
      },
      {
        path: '/search',
        element: <SearchResultsPage />,
      },
      {
        path: '/search/:query',
        element: <SearchResultsPage />,
      },
      {
        path: '/show/:id',
        element: <ShowPage />,
      },
    ],
  },
])

// TODO: arreglar las advertencias del v7_ de la consola
