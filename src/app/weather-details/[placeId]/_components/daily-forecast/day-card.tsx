import { Box, Paper, Typography } from '@mui/material'
import { DayData } from '@src/types/daily-forecast'
import { getWeatherIconInfo } from '@src/utils/getWeatherInfo'
import Image from 'next/image'

interface Props {
  day: DayData
}

const DayCard = ({ day }: Props) => {
  const dateDay = new Date(day.day).toLocaleDateString('en-US', { weekday: 'short' })
  const { icon, summary } = getWeatherIconInfo(day.icon)

  return (
    <li>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 1,
          p: 4
        }}
        elevation={0}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          {dateDay}
        </Typography>
        <Image src={icon} alt={summary} width={50} height={50} />
        <Typography variant="body2" sx={{ mb: 2 }}>
          {summary}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography variant="body2">{day.temperatureMax}°C</Typography>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            {day.temperatureMin}°C
          </Typography>
        </Box>
      </Paper>
    </li>
  )
}

export default DayCard
