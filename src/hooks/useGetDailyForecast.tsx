import { getDailyForecast } from '@src/services/get-daily-forecast'
import { DayData } from '@src/types/daily-forecast'
import { getCurrentWeather } from '@src/services/get-current-weather'
import { CurrentWeather } from '@src/types/current-weather'

interface GetDailyForecastResponse {
  readonly currentWeather: CurrentWeather
  readonly nextDaysForecast: DayData[]
}

export const useGetDailyForecast = async (placeId: string): Promise<GetDailyForecastResponse | null> => {
  if (!placeId) {
    console.error(`Place ID is required`)
    return null
  }

  try {
    const currentWeather = await getCurrentWeather(placeId)
    const dailyForecast = await getDailyForecast(placeId)
    const nextDaysForecast = dailyForecast.daily.slice(1, 6)

    return {
      currentWeather: currentWeather?.[0] || null,
      nextDaysForecast
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
