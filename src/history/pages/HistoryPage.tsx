
import { Grid, Typography } from '@mui/material'
import { PageWithNavBar } from '../../ui/layout/PageWithNavBar'

export function HistoryPage (): JSX.Element {
  return (
    <PageWithNavBar>
      <Grid container
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '12%'
        }}
      >
        <Grid item sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '16px',
          paddingBottom: '16px'
        }}>
          <Typography variant='h4'>Historial</Typography>
        </Grid>
      </Grid>
    </PageWithNavBar>
  )
}
