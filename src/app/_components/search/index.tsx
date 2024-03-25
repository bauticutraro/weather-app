'use client'
import { useState } from 'react'
import { useGetPlacesOptions } from '@src/hooks/useGetPlacesOptions'
import { useCurrentWeather } from '@src/context/current-weather-context'
import { getCurrentWeather } from '@src/services/get-current-weather'
import AutocompleteTextField from './autocomplete-text-field'

interface Option {
  label: string
  value: string
}

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const { options, loading } = useGetPlacesOptions(inputValue)
  const { setCurrentWeather, setLoading: setCurrentWeatherLoading } = useCurrentWeather()

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue)
  }

  const handleSelectOption = async (option: Option) => {
    try {
      setCurrentWeatherLoading(true)
      const currentWeather = await getCurrentWeather(option.value)

      if (currentWeather[0]) setCurrentWeather({ ...currentWeather[0], placeId: option.value })
    } catch (error) {
      setCurrentWeather(undefined)
      console.error(error)
    } finally {
      setCurrentWeatherLoading(false)
    }
  }

  return (
    <AutocompleteTextField
      options={options}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onSelectOption={handleSelectOption}
      loading={loading}
      label="Search for a city..."
    />
  )
}

export default Search
