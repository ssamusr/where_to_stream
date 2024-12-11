import { api } from './config'

export const searchShowByTitle = async (query?: string) => {
  console.log('API Key:', import.meta.env.VITE_API_KEY)

  const { data } = await api.get('shows/search/title', {
    params: {
      country: 'es',
      title: query,
    },
  })
  return data
}
