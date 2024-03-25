import { Box, List, Typography } from '@mui/material'
import { DayData } from '@src/types/daily-forecast'
import DayCard from './day-card'

interface Props {
  nextDaysForecast?: DayData[]
}

const DailyForecast = ({ nextDaysForecast }: Props) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Next days forecast
      </Typography>
      <List
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: 4
        }}
      >
        {nextDaysForecast?.map(day => <DayCard key={new Date(day.day).toISOString()} day={day} />)}
      </List>
    </Box>
  )
}

export default DailyForecast
