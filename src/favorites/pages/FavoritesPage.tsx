import { Grid, Typography } from '@mui/material'
import { PageWithNavBar } from '../../ui/layout/PageWithNavBar'
import { FavoritesCard } from '../components/FavoritesCard'

const mockData = [
  {
    name: 'John',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  },
  {
    name: 'Jane',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  },
  {
    name: 'John',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  },
  {
    name: 'Jane',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  },
  {
    name: 'John',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  },
  {
    name: 'Jane',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  },
  {
    name: 'John',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  },
  {
    name: 'Jane',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  },
  {
    name: 'John',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  },
  {
    name: 'Jane',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  },
  {
    name: 'John',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  },
  {
    name: 'Jane',
    lastname: 'Doe',
    avatarUrl: 'https://avatars.githubusercontent.com/u/26466516?v=4'
  }]

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
            paddingX: '32px',
            scrollBehavior: 'smooth'
          }}
        >
          {
            mockData.map((item, index) => (
              <FavoritesCard
                key={index}
                name={item.name}
                lastname={item.lastname}
                avatarUrl={item.avatarUrl}
                />
            ))
          }
        </Grid>
      </Grid>
    </PageWithNavBar>
  )
}
