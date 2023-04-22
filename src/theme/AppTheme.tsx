import { ThemeProvider } from '@mui/material/styles'
import { theme } from './DefaultTheme'
import { CssBaseline } from '@mui/material'
import { type PropsWithChildren } from 'react'

export function AppTheme ({ children }: PropsWithChildren): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider >
  )
}
