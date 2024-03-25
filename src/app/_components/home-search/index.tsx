'use client'
import { CurrentWeatherProvider } from '@src/context/current-weather-context'
import Search from '../search'
import SearchResult from '../search-result'

const HomeSearch = () => {
  return (
    <CurrentWeatherProvider>
      <Search />
      <SearchResult />
    </CurrentWeatherProvider>
  )
}

export default HomeSearch
