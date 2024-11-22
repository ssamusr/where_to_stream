import { api } from './config'

export const searchShowByTitle = async (query?: string) => {
  const { data } = await api.get('shows/search/title', {
    params: {
      country: 'es',
      title: query,
    },
  })
  return data
}
