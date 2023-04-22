import { createTheme } from '@mui/material/styles'
import { type ThemeOptions } from '@mui/material/styles/createTheme'

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#042F3E'
    },
    secondary: {
      main: '#40B4E5',
      contrastText: '#fff'
    },
    background: {
      default: '#F1F3F4'
    },
    success: {
      main: '#047732'
    },
    warning: {
      main: '#ffc526'
    }
  }
}

export const theme = createTheme(themeOptions)
