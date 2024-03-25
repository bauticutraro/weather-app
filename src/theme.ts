'use client'
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const palette = {
  primary: {
    main: '#f5f5f5',
    light: '#fafafa',
    dark: '#c2c2c2'
  },
  secondary: {
    main: '#5a86aa',
    light: '#8ab6d6',
    dark: '#2e5a7d'
  },
  error: {
    main: '#d32f2f',
    light: '#ff6659',
    dark: '#9a0007'
  },
  warning: {
    main: '#ffa000',
    light: '#ffd149',
    dark: '#c67100'
  },
  info: {
    main: '#1976d2',
    light: '#63a4ff',
    dark: '#004ba0'
  },
  success: {
    main: '#388e3c',
    light: '#6abf69',
    dark: '#00600f'
  },
  text: {
    primary: '#424242',
    secondary: '#555',
    disabled: '#9d9d9d'
  },
  background: {
    default: '#f2f2f2',
    paper: '#fff'
  }
}

const typography = {
  fontFamily: roboto.style.fontFamily,
  h1: {
    fontSize: '2.5rem',
    fontWeight: 600
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 500
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 500
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 500
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 500
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 500
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 400
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400
  }
}

const spacing = 4

const shape = {
  borderRadius: 8
}

const breakpoints = {
  values: {
    xs: 0,
    sm: 720,
    md: 960,
    lg: 1280,
    xl: 1920
  }
}

const theme = createTheme({
  palette,
  typography,
  spacing,
  shape,
  breakpoints,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.background.default
        }
      }
    }
  }
})

export default theme
