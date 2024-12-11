import { createBrowserRouter } from 'react-router-dom'
import {
  HomePage,
  NotFoundPage,
  SearchResultsPage,
  ShowPage,
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
