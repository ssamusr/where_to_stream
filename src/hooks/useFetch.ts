import { useEffect, useState } from 'react'

interface UseFetchProps<T> {
  fetchFunction: (params: string) => Promise<T>
  params?: string
}

export const useFetch = <T>({ fetchFunction, params }: UseFetchProps<T>) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const result = await fetchFunction(params || '')
        setData(result)
        setError(null)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Error desconocido')
      } finally {
        setIsLoading(false)
      }
    }

    if (params) fetchData()
  }, [fetchFunction, params])

  return {
    data,
    isLoading,
    error,
    fetchFunction,
  }
}
