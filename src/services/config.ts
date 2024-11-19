import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://streaming-availability.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
  },
})
