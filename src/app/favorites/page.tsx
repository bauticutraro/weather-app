import { Box, Typography } from '@mui/material'
import FavoritesList from './_components/favorites-list'

export default function FavoritesPage() {
  return (
    <Box>
      <Typography variant="h1" sx={{ mt: 10 }} align="center">
        Favorites
      </Typography>
      <FavoritesList />
    </Box>
  )
}
