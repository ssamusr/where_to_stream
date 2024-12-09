import { api } from './config'

export const searchShowByTitle = async (id: string) => {
  const { data } = await api.get(`shows/${id}`, {
    params: {
      country: 'es',
    },
  })
  return data
}
