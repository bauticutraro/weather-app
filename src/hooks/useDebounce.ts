import { useEffect, useState } from 'react'

function useDebounce<T extends string | number>(value: T, delay: number, defaultValue: T): [T, boolean] {
  const [debouncedValue, setDebouncedValue] = useState<T>(defaultValue)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!value) {
      setDebouncedValue(defaultValue)
      setIsLoading(false)
      return
    } else {
      setIsLoading(true)
    }

    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)
      setIsLoading(false)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value, delay])

  return [debouncedValue, isLoading]
}

export default useDebounce
