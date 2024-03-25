export interface DailyForecast {
  units: string
  daily: DayData[]
}

export interface DayData {
  day: Date
  icon: number
  predictability: number
  temperature: number
  temperatureMin: number
  temperatureMax: number
  feelsLike: number
  feelsLikeMin: number
  feelsLikeMax: number
  windSpeed: number
  humidity: number
}
