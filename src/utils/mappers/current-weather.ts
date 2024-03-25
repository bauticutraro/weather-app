import { ExternalAPI } from '@api/current-weather/[...placeIds]/types'
import { CurrentWeather } from '@src/types/current-weather'
import { Place } from '@src/types/place'

export const mapCurrentWeather = (
  currentWeather: ExternalAPI.CurrentWeather & Partial<Place>,
  placeId: string
): CurrentWeather => {
  const { timezone, units, current, name, admArea1, admArea2, country } = currentWeather
  const { icon_num, summary, temperature, feels_like, wind, pressure, humidity, visibility } = current

  return {
    name,
    admArea1,
    admArea2,
    country,
    placeId,
    timezone,
    units,
    icon: icon_num,
    summary,
    temperature,
    feelsLike: feels_like,
    windSpeed: wind.speed,
    pressure,
    humidity,
    visibility
  }
}
