import { NextResponse } from 'next/server'
import { ExternalAPI } from './types'
import { DailyForecast } from '@src/types/daily-forecast'
import { mapDailyForecast } from '@src/utils/mappers/daily-forecast'

type Params = {
  placeId: string
}

export async function GET(
  request: Request,
  context: { params: Params }
): Promise<NextResponse<DailyForecast>> {
  const placeId = context.params.placeId
  const apiKey = process.env.WEATHER_API_KEY

  if (!placeId) {
    throw new Error('Missing Place Id')
  }
  if (!apiKey) {
    throw new Error('Missing Api Key')
  }

  const url = `${process.env.WEATHER_API}/daily?place_id=${placeId}&language=en&units=metric`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  }

  try {
    const result: ExternalAPI.DailyForecast = await fetch(url, options).then(response => response.json())
    return NextResponse.json(mapDailyForecast(result))
  } catch (error) {
    throw error
  }
}
