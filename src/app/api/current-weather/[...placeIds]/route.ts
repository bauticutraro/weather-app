import { mapCurrentWeather } from '@utils/mappers/current-weather'
import { CurrentWeather } from '@src/types/current-weather'
import { NextResponse } from 'next/server'
import { ExternalAPI } from './types'
import { ExternalAPI as FindPlacesExternalAPI } from '../../find-places/[text]/types'
import { mapPlaces } from '../../../../utils/mappers/places'
import { Place } from '@src/types/place'
import { LANG, UNITS } from '@src/constants/weather-params'

type Params = {
  placeIds: string[]
}

const getCurrentWeather = async (placeId: string, apiKey: string): Promise<NextResponse<CurrentWeather>> => {
  try {
    const url = `${process.env.WEATHER_API}/current?place_id=${placeId}&language=${LANG}&units=${UNITS}`
    const findPlaceUrl = `${process.env.WEATHER_API}/find_places?text=${placeId}&language=${LANG}`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
      }
    }

    const placesResult: FindPlacesExternalAPI.Places = await fetch(findPlaceUrl, options).then(response =>
      response.json()
    )

    if (!placesResult.length) {
      throw new Error('Place not found')
    }

    const placeData = placesResult.find(place => place.place_id === placeId)
    const mappedPlaceData: Partial<Place> = placeData ? mapPlaces([placeData])[0] : {}

    const result: ExternalAPI.CurrentWeather = await fetch(url, options).then(response => response.json())

    if (!result?.current) {
      throw new Error('Current weather not found')
    }

    return NextResponse.json(mapCurrentWeather({ ...result, ...mappedPlaceData }, placeId))
  } catch (error) {
    throw error
  }
}

export async function GET(
  request: Request,
  context: { params: Params }
): Promise<NextResponse<CurrentWeather[]>> {
  const placeIds = context.params.placeIds || []

  const apiKey = process.env.WEATHER_API_KEY
  try {
    if (!placeIds.length) {
      throw new Error('Missing Place Id')
    }
    if (!apiKey) {
      throw new Error('Missing Api Key')
    }

    const currentWeathers = await Promise.all(
      placeIds.map(async placeId => {
        const response = await getCurrentWeather(placeId, apiKey)
        return response.json()
      })
    )

    return NextResponse.json(currentWeathers.filter(Boolean))
  } catch (error) {
    throw error
  }
}
