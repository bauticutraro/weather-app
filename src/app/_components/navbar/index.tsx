'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { Container } from '@mui/material'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Favorites', href: '/favorites' }
]

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      position="static"
      sx={{
        backgroundColor: 'secondary.main',
        color: 'primary.light',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          <Box>
            {NAV_LINKS.map(({ name, href }) => (
              <Link key={href} href={href} passHref>
                <Button
                  sx={{
                    '&:hover': {
                      backgroundColor: 'secondary.dark'
                    }
                  }}
                >
                  {name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
