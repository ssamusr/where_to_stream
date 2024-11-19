import { useEffect, useState } from 'react'

interface UseFetchProps {
  fetchFunction: (params?: string) => Promise<T>
  params?: string
}

export const useFetch = <T>({ fetchFunction, params }: UseFetchProps) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const result = await fetchFunction(params)
        console.log(params)
        setData(result)
        setError(null)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return {
    data,
    loading,
    error,
  }
}
