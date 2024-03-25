import { getCurrentWeather } from '@src/services/get-current-weather'
import { useLocalStorage } from './useLocalStorage'
import { CurrentWeather } from '@src/types/current-weather'

export const useFavorites = (): {
  toggleFavorite: (placeId: string) => void
  isPlaceFavorite: (placeId: string) => boolean
  getFavorites: () => Promise<CurrentWeather[]>
  favoritesIds: string[]
} => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', [])

  const toggleFavorite = (placeId: string) => {
    const newFavorites = favorites.includes(placeId)
      ? favorites.filter(favorite => favorite !== placeId)
      : [...favorites, placeId]

    setFavorites(newFavorites)
  }

  const getFavorites = async (): Promise<CurrentWeather[]> => {
    try {
      if (!favorites.length) return []
      const favoritesCurrentWeather = await getCurrentWeather(favorites)

      return favoritesCurrentWeather
    } catch (error) {
      console.error('Error getting favorites', error)
      return []
    }
  }

  const isPlaceFavorite = (placeId: string) => favorites.includes(placeId)

  return { favoritesIds: favorites, isPlaceFavorite, toggleFavorite, getFavorites }
}
