// import { Grid } from '@mui/material'
import { PageWithNavBar } from '../../ui/layout/PageWithNavBar'
// import { SearchBar } from "../components/SearchBar";
// import ToggleUserType from '../components/ToggleUserType'
// import { useAppSelector } from '../../store/hooks'
// import { PassengerView } from '../views/PassengerView'
// import { DriverView } from '../views/DriverView'
import { Grid } from '@mui/material'
import { SearchBar } from '../components/SearchBar'
import ToggleUserType from '../components/ToggleUserType'
import { FabButton } from '../components/FabButton'
import MapGoogle from '../../ui/components/MapGoogle'

export function LiftPage (): JSX.Element {
  return (
    <PageWithNavBar>
      <Grid container
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          direction: 'column',
          justifyContent: 'center'
        }}
      >
        <SearchBar />
        <MapGoogle />
        <Grid sx={{
          width: '100%',
          display: 'flex',
          mb: 4,
          direction: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'flex-end'
        }}>
          <ToggleUserType />
          <FabButton/>
        </Grid>
      </Grid>
    </PageWithNavBar>
  )
}
