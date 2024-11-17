import { createBrowserRouter } from 'react-router-dom'
import {
  AboutPage,
  HomePage,
  NotFoundPage,
  SearchResultsPage,
  TopShowsPage,
} from '../pages'

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
        path: '/top',
        element: <TopShowsPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/search/:query',
        element: <SearchResultsPage />,
      },
    ],
  },
])

// TODO: arreglar las advertencias del v7_ de la consola
