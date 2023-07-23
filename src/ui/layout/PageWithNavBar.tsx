import { Grid } from '@mui/material'
import { NavBar } from '../components/NavBar'
import { type PropsWithChildren } from 'react'

export function PageWithNavBar ({ children }: PropsWithChildren): JSX.Element {
  return (
    <Grid
        container
        sx={{
          height: '100%',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden scroll'
        }}
        >
        <Grid
            sx={{
              width: '100%',
              height: '93%'
            }} >
            {children ?? <></>}
        </Grid>
        <NavBar/>
    </Grid>
  )
}
