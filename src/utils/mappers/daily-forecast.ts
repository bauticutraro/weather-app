import { ExternalAPI } from '@src/app/api/daily-forecast/[placeId]/types'
import { DailyForecast } from '@src/types/daily-forecast'

export const mapDailyForecast = (dailyForecast: ExternalAPI.DailyForecast): DailyForecast => {
  const { units, daily } = dailyForecast

  return {
    units: units,
    daily: daily.data.map(dayData => {
      const {
        day,
        icon,
        predictability,
        temperature,
        temperature_max,
        temperature_min,
        feels_like,
        feels_like_max,
        feels_like_min,
        wind,
        humidity
      } = dayData

      return {
        day,
        icon,
        predictability,
        temperature,
        temperatureMin: temperature_min,
        temperatureMax: temperature_max,
        feelsLike: feels_like,
        feelsLikeMin: feels_like_min,
        feelsLikeMax: feels_like_max,
        windSpeed: wind.speed,
        humidity: humidity
      }
    })
  }
}
