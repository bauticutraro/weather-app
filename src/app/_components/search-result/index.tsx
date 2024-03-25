'use client'
import { Box, Typography } from '@mui/material'
import { useCurrentWeather } from '@src/context/current-weather-context'
import { useFavorites } from '@src/hooks/useFavorites'
import WeatherCard from '../weather-card'

const SearchResult = () => {
  const { currentWeather, loading } = useCurrentWeather()
  const { toggleFavorite, isPlaceFavorite } = useFavorites()

  if (loading)
    return (
      <Typography variant="body1" align="center" sx={{ mt: 30 }}>
        Loading...
      </Typography>
    )
  if (!currentWeather) return null

  return (
    <Box sx={{ mt: 10 }}>
      <WeatherCard
        currentWeather={currentWeather}
        toggleFavorite={toggleFavorite}
        isPlaceFavorite={isPlaceFavorite}
      />
    </Box>
  )
}

export default SearchResult
