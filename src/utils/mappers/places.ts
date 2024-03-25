import { ExternalAPI } from '@src/app/api/find-places/[text]/types'
import { Places } from '@src/types/place'

export const mapPlaces = (places: ExternalAPI.Places): Places => {
  return places.map(place => {
    const { name, adm_area1, adm_area2, country } = place

    return {
      name,
      admArea1: adm_area1,
      admArea2: adm_area2,
      country,
      placeId: place.place_id
    }
  })
}
