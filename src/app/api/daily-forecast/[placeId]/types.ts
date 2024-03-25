export type PrecipitationType = 'none' | 'rain'
export interface Precipitation {
  total: number
  type: PrecipitationType
}

export interface Probability {
  precipitation: number
  storm: number
  freeze: number
}

export interface Wind {
  speed: number
  gusts: number
  dir: string
  angle: number
}

export interface Daily {
  data: DayData[]
}

export interface DayData {
  day: Date
  weather: string
  icon: number
  summary: string
  predictability: number
  temperature: number
  temperature_min: number
  temperature_max: number
  feels_like: number
  feels_like_min: number
  feels_like_max: number
  wind_chill: number
  wind_chill_min: number
  wind_chill_max: number
  dew_point: number
  dew_point_min: number
  dew_point_max: number
  wind: Wind
  cloud_cover: number
  pressure: number
  precipitation: Precipitation
  probability: Probability
  ozone: number
  humidity: number
  visibility: number
}

export namespace ExternalAPI {
  export interface DailyForecast {
    lat: string
    lon: string
    elevation: number
    units: string
    daily: Daily
  }
}
