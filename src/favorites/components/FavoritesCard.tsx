import {
  Avatar,
  Box,
  Card,
  Grid,
  ListItem,
  ListItemAvatar,
  Typography
} from '@mui/material'

import { grey } from '@mui/material/colors'

interface FavoritesProps {
  name: string
  lastname: string
  avatarUrl: string
}

// eslint-disable-next-line max-len
export const FavoritesCard = ({ name, lastname, avatarUrl }: FavoritesProps): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{
      width: '100%',
      height: '100%',
      border: '1px solid #E0E0E0',
      borderRadius: 2,
      mb: 2
    }}>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '60px',
          boxShadow: 'none',
          p: 0,
          borderRadius: 2,
          backgroundColor: grey[100]
        }}
      >
          <ListItem sx={{ height: 60, width: '100%' }}>
            <ListItemAvatar sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '30%',
              height: '100%'
            }}>
              <Avatar sx={{ width: 50, height: 50, mr: 5 }} src={avatarUrl} />
            </ListItemAvatar>
            <Box sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              width: '70%',
              height: '100%'
            }}>
              <Typography textAlign={'center'}>
                {name} {lastname}
              </Typography>
            </Box>
          </ListItem>
      </Card>
    </Grid>
  )
}
