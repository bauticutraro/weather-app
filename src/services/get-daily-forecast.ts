export const getDailyForecast = async (placeId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/daily-forecast/${placeId}`).then(
    res => res.json()
  )

  return response
}
