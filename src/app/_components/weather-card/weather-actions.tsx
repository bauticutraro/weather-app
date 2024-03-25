'use client'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, IconButton, Typography, styled } from '@mui/material'
import Link from 'next/link'

const DetailsLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  borderBottom: `1px solid ${theme.palette.primary.dark}`,
  color: theme.palette.primary.dark,
  transition: 'color 0.1s',
  '&:hover': {
    color: theme.palette.text.primary
  }
}))

interface Props {
  placeId: string
  toggleFavorite: (placeId: string) => void
  isPlaceFavorite: (placeId: string) => boolean
  isDetailPage?: boolean
}

const WeatherActions = ({ placeId, toggleFavorite, isPlaceFavorite, isDetailPage }: Props) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      {!isDetailPage && (
        <DetailsLink href={`/weather-details/${placeId}`} passHref>
          <Typography variant="body2" sx={{ color: 'inherit' }}>
            More details
          </Typography>
        </DetailsLink>
      )}
      <IconButton onClick={() => toggleFavorite(placeId)}>
        {isPlaceFavorite(placeId) ? <Favorite color="error" /> : <FavoriteBorder color="error" />}
      </IconButton>
    </Box>
  )
}

export default WeatherActions
