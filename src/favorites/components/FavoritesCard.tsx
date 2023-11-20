import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  ListItem,
  ListItemAvatar,
  Typography
} from '@mui/material'

import { grey } from '@mui/material/colors'

export const FavoritesCard = (): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{
      width: '100%',
      height: '100%',
      border: '1px solid #E0E0E0'
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
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            boxShadow: 'none',
            width: '100%',
            height: '60px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            p: 0
          }}
        >
          <ListItem sx={{ height: 60 }}>
            <ListItemAvatar>
              <Avatar sx={{ width: 50, height: 50, mr: 5 }} />
            </ListItemAvatar>
            <Box>
              <Typography textAlign={'center'}>
                Roberson Garcia
              </Typography>
            </Box>
          </ListItem>
        </CardContent>
      </Card>
    </Grid>
  )
}
