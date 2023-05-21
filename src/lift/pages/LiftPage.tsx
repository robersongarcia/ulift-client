import { Grid } from '@mui/material'
import { PageWithNavBar } from '../../ui/layout/PageWithNavBar'
import { SearchBar } from '../components/SearchBar'
import ToggleUserType from '../components/ToggleUserType'
import { useAppSelector } from '../../store/hooks'
import { PassengerView } from '../views/PassengerView'
import { DriverView } from '../views/DriverView'

export function LiftPage (): JSX.Element {
  const { type } = useAppSelector((state) => state.user)
  const { userLocation } = useAppSelector((state) => state.places)

  return (
    <PageWithNavBar>
      {/* <MapComponent /> */}
      <Grid
        container
        direction='column'
        alignItems={'center'}
        sx={{ height: '100%', width: '100%' }}
      >
        {type === 'passenger' ? <PassengerView userLocation={userLocation}/> : <DriverView />}
        <Grid
          container
          direction='column'
          alignItems={'center'}
          sx={{ height: '100%', width: '100%' }}
        >
          <SearchBar />
          <ToggleUserType />
        </ Grid>
      </Grid>
    </PageWithNavBar>
  )
}
