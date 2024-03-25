import { NextResponse } from 'next/server'
import { ExternalAPI } from './types'
import { Places } from '@src/types/place'
import { mapPlaces } from '@src/utils/mappers/places'

type Params = {
  text: string
}

export async function GET(request: Request, context: { params: Params }): Promise<NextResponse<Places>> {
  const text = context.params.text
  const apiKey = process.env.WEATHER_API_KEY

  if (!text) {
    throw new Error('Text')
  }
  if (!apiKey) {
    throw new Error('Missing Api Key')
  }

  const url = `${process.env.WEATHER_API}/find_places?text=${text}&language=en`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  }

  try {
    const result: ExternalAPI.Places = await fetch(url, options).then(response => response.json())
    return NextResponse.json(mapPlaces(result))
  } catch (error) {
    throw error
  }
}
