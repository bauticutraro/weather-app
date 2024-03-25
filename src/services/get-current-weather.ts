export const getCurrentWeather = async (placeIds: string | string[]) => {
  const placeIdsParam = Array.isArray(placeIds) ? placeIds.join('/') : placeIds

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/current-weather/${placeIdsParam}`
  ).then(res => res.json())

  return response
}
