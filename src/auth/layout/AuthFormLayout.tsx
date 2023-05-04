import { Grid } from '@mui/material'
import { type PropsWithChildren } from 'react'

export function AuthFormLayout ({ children }: PropsWithChildren): JSX.Element {
  return (
    <Grid
        // general Grid
        container
        component='main'
        spacing={0}
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{
          minHeight: '100vh',
          padding: 4,
          backgroundImage: `url(${'/background.jpg'})`,
          // cover the image with a dark layer with a 50% opacity
          // //backgroundBlendMode: 'multiply',
          // backgroundColor: 'rgba(64, 180, 229, 0.5)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
    >
        <Grid
            // form grid card
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              padding: 3,
              borderRadius: 3,
              width: {
                xs: '100%',
                sm: '80%',
                md: '60%'
              },
              minHeight: '50%',
              boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.5)',
              color: (theme) => theme.palette.primary.contrastText
            }}
        >
            <img srcSet='/logo-name.png' alt='ulift application logo'/>
            {children}
        </Grid>
    </Grid>
  )
}
