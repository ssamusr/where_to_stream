import { api } from './config'

export const getShowById = async (id: string) => {
  const { data } = await api.get(`shows/${id}`, {
    params: {
      country: 'es',
    },
  })
  return data
}
