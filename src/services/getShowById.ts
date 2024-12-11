import { api } from './config'

export const getShowById = async (id: string) => {
  console.log('API Key:', import.meta.env.VITE_API_KEY)
  const { data } = await api.get(`shows/${id}`, {
    params: {
      country: 'es',
    },
  })
  return data
}
