import { Grid, Typography } from '@mui/material';
import { PageWithNavBar } from '../../ui/layout/PageWithNavBar'
import { FavoritesCard } from '../components/FavoritesCard';

export function FavoritesPage (): JSX.Element {
  return (
    <PageWithNavBar>
      <Grid container
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
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
          <Typography variant='h4'>Favoritos</Typography>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            paddingX: '32px'
          }}
        >
          <FavoritesCard />
        </Grid>
      </Grid>
    </PageWithNavBar>
  )
}
