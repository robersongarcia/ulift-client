import { Grid } from '@mui/material'
import { NavBar } from '../components/NavBar'
import { type PropsWithChildren } from 'react'

export function PageWithNavBar ({ children }: PropsWithChildren): JSX.Element {
  return (
    <Grid
        container
        sx={{
          height: '100vh',
          width: '100vw'
        }}
        >
        <Grid
            sx={{
              height: '90vh'
            }}
            container>
            {children ?? <></>}
        </Grid>
        <NavBar/>
    </Grid>
  )
}
