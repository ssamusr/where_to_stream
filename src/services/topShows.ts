import { api } from './config'

export const getTopShows = async (platform: string = 'netflix') => {
  const { data } = await api.get('/shows/top', {
    params: {
      country: 'es',
      service: platform,
    },
  })
  return data
}
