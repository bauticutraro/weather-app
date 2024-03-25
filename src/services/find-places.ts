import { Places } from '@src/types/place'

export const findPlaces = async (inputValue: string) => {
  const response: Places = await fetch(`/api/find-places/${inputValue}`).then(res => res.json())

  return response.map(({ name, admArea2, admArea1, country, placeId }) => ({
    label: [name, admArea2, admArea1, country].filter(Boolean).join(', '),
    value: placeId
  }))
}
