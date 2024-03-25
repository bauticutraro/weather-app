import { findPlaces } from '@src/services/find-places'
import useDebounce from './useDebounce'
import { useEffect, useState } from 'react'
import { useSnackbar } from '@src/context/snackbar-context'

interface Option {
  label: string
  value: string
}

export const useGetPlacesOptions = (inputValue: string) => {
  const [options, setOptions] = useState<Option[]>([])
  const [loading, setLoading] = useState(false)
  const [debouncedInputValue, isDebounceLoading] = useDebounce(inputValue, 800, '')
  const { showSnackbar } = useSnackbar()

  const fetchOptions = async (inputValue: string) => {
    if (!inputValue) return []

    try {
      const response = await findPlaces(inputValue)
      return response
    } catch (error) {
      console.error(error)
      showSnackbar('Error fetching places')
      return []
    }
  }

  useEffect(() => {
    const setNewOptions = async (inputValue: string) => {
      setLoading(true)
      const newOptions = await fetchOptions(inputValue)
      setOptions(newOptions)
      setLoading(false)
    }

    if (debouncedInputValue) setNewOptions(debouncedInputValue)
    else setOptions([])
  }, [debouncedInputValue])

  return {
    options,
    loading: loading || isDebounceLoading
  }
}
