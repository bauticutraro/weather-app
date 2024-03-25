import { CurrentWeather } from '@src/types/current-weather'
import { createContext, useContext, useState, ReactNode } from 'react'

interface Weather extends CurrentWeather {
  placeId: string
}

interface WeatherContextType {
  currentWeather?: Weather
  setCurrentWeather: (weather: Weather | undefined) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined)

export const CurrentWeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<Weather | undefined>()
  const [loading, setLoading] = useState(false)

  return (
    <WeatherContext.Provider value={{ currentWeather, setCurrentWeather, loading, setLoading }}>
      {children}
    </WeatherContext.Provider>
  )
}

export const useCurrentWeather = () => {
  const context = useContext(WeatherContext)
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider')
  }
  return context
}
