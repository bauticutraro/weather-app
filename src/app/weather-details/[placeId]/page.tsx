import { useGetDailyForecast } from '@src/hooks/useGetDailyForecast'
import CurrentForecast from './_components/current-forecast'
import DailyForecast from './_components/daily-forecast'
import { Container } from '@mui/material'

export default async function WeatherDetailsPage({ params }: { params: { placeId: string } }) {
  const { placeId } = params
  const { currentWeather, nextDaysForecast } = (await useGetDailyForecast(placeId)) || {}

  return (
    <Container maxWidth="sm">
      {currentWeather && <CurrentForecast currentWeather={currentWeather} />}
      {Boolean(nextDaysForecast?.length) && <DailyForecast nextDaysForecast={nextDaysForecast} />}
    </Container>
  )
}
