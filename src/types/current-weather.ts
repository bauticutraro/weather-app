import { Place } from './place'

export interface CurrentWeather extends Partial<Place> {
  timezone: string
  units: string
  icon: number
  summary: string
  temperature: number
  feelsLike: number
  windSpeed: number
  pressure: number
  humidity?: number
  visibility: number
}
