'use client'
import { Container, List, Typography } from '@mui/material'
import WeatherCard from '@src/app/_components/weather-card'
import { useFavorites } from '@src/hooks/useFavorites'
import { CurrentWeather } from '@src/types/current-weather'
import { useEffect, useState } from 'react'

const FavoritesList = () => {
  const [favorites, setFavorites] = useState<CurrentWeather[]>([])
  const { getFavorites, toggleFavorite, isPlaceFavorite, favoritesIds } = useFavorites()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFavorites()
      .then(favoritesList => setFavorites(favoritesList))
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const favoritesList = favorites.filter(
    favorite => favorite.placeId && favoritesIds.includes(favorite.placeId)
  )

  if (loading) {
    return (
      <Typography variant="body1" align="center" sx={{ mt: 30 }}>
        Loading...
      </Typography>
    )
  }

  if (!favoritesList.length) {
    return (
      <Typography variant="body1" align="center" sx={{ mt: 30 }}>
        No cities added to favorites
      </Typography>
    )
  }

  return (
    <Container maxWidth="sm">
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 6, mt: 10 }}>
        {favoritesList.map(favorite => {
          return (
            <li key={favorite.placeId}>
              <WeatherCard
                currentWeather={favorite}
                toggleFavorite={toggleFavorite}
                isPlaceFavorite={isPlaceFavorite}
              />
            </li>
          )
        })}
      </List>
    </Container>
  )
}

export default FavoritesList
