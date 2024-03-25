import { Air, WaterDrop } from '@mui/icons-material'
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography, styled } from '@mui/material'
import { CurrentWeather } from '@src/types/current-weather'
import { getWeatherIconInfo } from '@src/utils/getWeatherInfo'
import Image from 'next/image'
import WeatherActions from './weather-actions'

const WeatherIconContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))
const WeatherIconMobileContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))
const WeatherActionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const WeatherDetailsInfo = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}))

interface Props {
  currentWeather: CurrentWeather
  toggleFavorite: (placeId: string) => void
  isPlaceFavorite: (placeId: string) => boolean
  isDetailPage?: boolean
}

const WeatherCard = ({ currentWeather, toggleFavorite, isPlaceFavorite, isDetailPage }: Props) => {
  if (!currentWeather) return null

  const { icon, summary } = getWeatherIconInfo(currentWeather.icon)

  return (
    <Paper sx={{ display: 'flex', gap: 4, p: 7 }} elevation={0}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h4" component="h2">
            {[currentWeather.name, currentWeather.admArea2].filter(Boolean).join(', ') ||
              currentWeather.placeId}
          </Typography>
          <Typography variant="body1" sx={{ color: 'primary.dark' }}>
            {[currentWeather.admArea1, currentWeather.country].filter(Boolean).join(', ')}
          </Typography>

          <WeatherDetailsInfo
            sx={{ display: 'flex', alignItems: 'center', my: 2, gap: '8px 16px', flexWrap: 'wrap' }}
          >
            <WeatherIconMobileContainer sx={{ width: 100, display: 'flex', flexDirection: 'column' }}>
              <Image src={icon} alt={summary} width={100} height={100} />
            </WeatherIconMobileContainer>
            <Typography variant="h5" component="p">
              {summary}
            </Typography>
            <List sx={{ p: 0, display: 'flex', gap: '8px 16px', flexWrap: 'wrap' }}>
              {currentWeather.humidity && (
                <ListItem sx={{ p: 0, gap: 2, width: 'auto' }}>
                  <ListItemIcon sx={{ minWidth: 'auto' }}>
                    <WaterDrop />
                  </ListItemIcon>
                  <ListItemText primary={`${currentWeather.humidity}%`} />
                </ListItem>
              )}
              {currentWeather.windSpeed && (
                <ListItem sx={{ p: 0, gap: 2, width: 'auto' }}>
                  <ListItemIcon sx={{ minWidth: 'auto' }}>
                    <Air />
                  </ListItemIcon>
                  <ListItemText primary={`${currentWeather.windSpeed} m/s`} />
                </ListItem>
              )}
            </List>
          </WeatherDetailsInfo>
        </Box>
        <Box sx={{ pt: 3, mt: 'auto', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h2" component="h3">
            {currentWeather.temperature} °C
          </Typography>

          <WeatherActionsContainer>
            <WeatherActions
              placeId={currentWeather.placeId}
              isPlaceFavorite={isPlaceFavorite}
              toggleFavorite={toggleFavorite}
              isDetailPage={isDetailPage}
            />
          </WeatherActionsContainer>
        </Box>
      </Box>
      <WeatherIconContainer sx={{ width: 150, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ ml: 'auto', mt: -2, mb: 3 }}>
          <WeatherActions
            placeId={currentWeather.placeId}
            isPlaceFavorite={isPlaceFavorite}
            toggleFavorite={toggleFavorite}
            isDetailPage={isDetailPage}
          />
        </Box>

        <Image src={icon} alt={summary} width={150} height={150} />
      </WeatherIconContainer>
    </Paper>
  )
}

export default WeatherCard
