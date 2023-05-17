// import { MapComponent } from '../../ui/components/MapComponent'
import { Grid, TextField as MuiTextField } from '@mui/material'
import MapGoogle from '../../ui/components/MapGoogle'
import { PageWithNavBar } from '../../ui/layout/PageWithNavBar'

export function LiftPage (): JSX.Element {
  return (
    <PageWithNavBar>
      {/* <MapComponent /> */}
      <Grid
        container
        direction='column'
        alignItems={'center'}
        sx={{ height: '100%', width: '100%' }}
      >
        <Grid
          container
        >
          <MapGoogle />
        </Grid>
        <Grid
          container
          direction='column'
          alignItems={'center'}
          sx={{ height: '100%', width: '100%' }}
        >
        <Grid
          item
          sx={{ zIndex: 2, mt: 3, width: '80%' }}

        >
          <MuiTextField
            label='Buscar lugar'
            variant='outlined'
            fullWidth
            sx= {
              {
                '& .MuiInputBase-root': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }
              }}
          />
        </Grid>
        </ Grid>
      </Grid>
    </PageWithNavBar>
  )
}
