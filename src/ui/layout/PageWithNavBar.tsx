import { Grid } from '@mui/material'
import { NavBar } from '../components/NavBar'
import { type PropsWithChildren } from 'react'

export function PageWithNavBar ({ children }: PropsWithChildren): JSX.Element {
  return (
    <Grid
        container
        sx={{
          height: '100vh',
          width: '100vw',
          position: 'relative',
          top: 0,
          left: 0
        }}
        >
        <Grid
            sx={{
              height: '91%',
              width: '100vw',
              position: 'relative',
              top: 0,
              left: 0,
              overflow: 'auto'
            }}
            container>
            {children ?? <></>}
        </Grid>
        <NavBar/>
    </Grid>
  )
}
