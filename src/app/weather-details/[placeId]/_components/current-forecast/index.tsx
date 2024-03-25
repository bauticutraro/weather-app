'use client'
import { Box } from '@mui/material'
import WeatherCard from '@src/app/_components/weather-card'
import { useFavorites } from '@src/hooks/useFavorites'
import { CurrentWeather } from '@src/types/current-weather'

interface Props {
  currentWeather: CurrentWeather
}

const CurrentForecast = ({ currentWeather }: Props) => {
  const { toggleFavorite, isPlaceFavorite } = useFavorites()

  if (!currentWeather) return null

  return (
    <Box sx={{ mt: 10 }}>
      <WeatherCard
        currentWeather={currentWeather}
        toggleFavorite={toggleFavorite}
        isPlaceFavorite={isPlaceFavorite}
        isDetailPage
      />
    </Box>
  )
}

export default CurrentForecast
