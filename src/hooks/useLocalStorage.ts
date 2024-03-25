import { useState } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const getInitialValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error getting ${key} from localStorage: ${error}`)
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState<T>(getInitialValue)

  const setValue = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (error) {
      console.error(`Error setting ${key} to localStorage: ${error}`)
    }
  }

  return [storedValue, setValue]
}
