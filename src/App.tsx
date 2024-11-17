import { RouterProvider } from 'react-router-dom'
import { HomePage } from './pages'
import { router } from './router'

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <HomePage />
      </RouterProvider>
    </>
  )
}

export default App
