export const getWeatherIconInfo = (weatherCode: number): { icon: string; summary: string } => {
  switch (weatherCode) {
    case 1:
      return { icon: '/static/icons/weather-1.svg', summary: 'Not available' }
    case 2:
      return { icon: '/static/icons/weather-2.svg', summary: 'Sunny' }
    case 3:
      return { icon: '/static/icons/weather-3.svg', summary: 'Mostly sunny' }
    case 4:
      return { icon: '/static/icons/weather-4.svg', summary: 'Partly sunny' }
    case 5:
      return { icon: '/static/icons/weather-5.svg', summary: 'Mostly cloudy' }
    case 6:
      return { icon: '/static/icons/weather-6.svg', summary: 'Cloudy' }
    case 7:
      return { icon: '/static/icons/weather-7.svg', summary: 'Overcast' }
    case 8:
      return { icon: '/static/icons/weather-8.svg', summary: 'Overcast with low clouds' }
    case 9:
      return { icon: '/static/icons/weather-9.svg', summary: 'Fog' }
    case 10:
      return { icon: '/static/icons/weather-10.svg', summary: 'Light rain' }
    case 11:
      return { icon: '/static/icons/weather-11.svg', summary: 'Rain' }
    case 12:
      return { icon: '/static/icons/weather-12.svg', summary: 'Possible rain' }
    case 13:
      return { icon: '/static/icons/weather-13.svg', summary: 'Rain shower' }
    case 14:
      return { icon: '/static/icons/weather-14.svg', summary: 'Thunderstorm' }
    case 15:
      return { icon: '/static/icons/weather-15.svg', summary: 'Local thunderstorms' }
    case 16:
      return { icon: '/static/icons/weather-16.svg', summary: 'Light snow' }
    case 17:
      return { icon: '/static/icons/weather-17.svg', summary: 'Snow' }
    case 18:
      return { icon: '/static/icons/weather-18.svg', summary: 'Possible snow' }
    case 19:
      return { icon: '/static/icons/weather-19.svg', summary: 'Snow shower' }
    case 20:
      return { icon: '/static/icons/weather-20.svg', summary: 'Rain and snow' }
    case 21:
      return { icon: '/static/icons/weather-21.svg', summary: 'Possible rain and snow' }
    case 22:
      return { icon: '/static/icons/weather-22.svg', summary: 'Rain and snow' }
    case 23:
      return { icon: '/static/icons/weather-23.svg', summary: 'Freezing rain' }
    case 24:
      return { icon: '/static/icons/weather-24.svg', summary: 'Possible freezing rain' }
    case 25:
      return { icon: '/static/icons/weather-25.svg', summary: 'Hail' }
    case 26:
      return { icon: '/static/icons/weather-26.svg', summary: 'Clear (night)' }
    case 27:
      return { icon: '/static/icons/weather-27.svg', summary: 'Mostly clear (night)' }
    case 28:
      return { icon: '/static/icons/weather-28.svg', summary: 'Partly clear (night)' }
    case 29:
      return { icon: '/static/icons/weather-29.svg', summary: 'Mostly cloudy (night)' }
    case 30:
      return { icon: '/static/icons/weather-30.svg', summary: 'Cloudy (night)' }
    case 31:
      return { icon: '/static/icons/weather-31.svg', summary: 'Overcast with low clouds (night)' }
    case 32:
      return { icon: '/static/icons/weather-32.svg', summary: 'Rain shower (night)' }
    case 33:
      return { icon: '/static/icons/weather-33.svg', summary: 'Local thunderstorms (night)' }
    case 34:
      return { icon: '/static/icons/weather-34.svg', summary: 'Snow shower (night)' }
    case 35:
      return { icon: '/static/icons/weather-35.svg', summary: 'Rain and snow (night)' }
    case 36:
      return { icon: '/static/icons/weather-36.svg', summary: 'Possible freezing rain (night)' }
    default:
      return { icon: '/static/icons/weather-1.svg', summary: 'Not available' }
  }
}
