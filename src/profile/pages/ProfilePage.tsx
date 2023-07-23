import
{
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper,
  Typography
} from '@mui/material'
import { PageWithNavBar } from '../../ui/layout/PageWithNavBar'
import {
  DirectionsCar,
  LocationCity,
  RampLeftRounded,
  Star
} from '@mui/icons-material'

import '../../ui/utils.css'

export function ProfilePage (): JSX.Element {
  return (
    <PageWithNavBar>
      <Grid container
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          mb: '14%'
        }}
      >
        <Grid container
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: 'white',
            mb: 0.5
          }}
          className='backgroundGradientPrimary'
        >
          <Grid item
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              mt: 2
            }}
          >
            <Typography variant="h4">Perfil</Typography>
          </Grid>
          <Grid item
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              mt: 2
            }}
          >
            <Avatar
              sx={
                {
                  width: '10rem',
                  height: '10rem'
                }
              }
            />
          </Grid>

          <Grid item
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              mt: 2,
              mb: 3
            }}
          >
            <Typography variant="h5">John Doe</Typography>
          </Grid>
        </Grid>
        <Grid container
          sx={{
            width: '100%',
            display: 'flex',
            direction: 'row',
            color: 'grey.300',
            borderBottomRightRadius: '1.5rem',
            borderBottomLeftRadius: '1.5rem'
          }}
          className='backgroundGradientPrimary'
        >
          <Grid item
            sx={{
              display: 'flex',
              mt: 2,
              mb: 2,
              width: '50%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography variant='h6'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5
              }}
            >4.5

            <Star sx={{
              color: 'lightskyblue',
              fontSize: '1.4rem'
            }}/>

            </Typography>
            <Typography variant='subtitle1'>Rating</Typography>
          </Grid>
          <Grid item
            sx={{
              display: 'flex',
              mt: 2,
              mb: 2,
              width: '50%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
             <Typography variant='h6'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5
              }}
            >
              <span>33</span>

            <DirectionsCar sx={{
              color: 'lightskyblue',
              fontSize: '1.4rem'
            }}/>

            </Typography>
            <Typography variant='subtitle1'>Número de Viajes</Typography>
          </Grid>
        </Grid>
        <Grid container
          sx={{
            width: '100%',
            display: 'flex'
          }}
        >
          <Card
            sx={{
              width: '100%',
              height: '100%',
              p: 0,
              backgroundColor: 'background.default'
            }}
          >
            <CardHeader
            title='Información Personal'
            titleTypographyProps={{
              variant: 'h6',
              fontWeight: 600,
              textAlign: 'center'
            }}
            />
            <CardContent>
              <Grid container
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Grid item
                  sx={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 3,
                    mt: -1
                  }}
                  >
                  <Typography><span style={{
                    fontWeight: 'bold'
                  }}>Nombre: </span>Roberson</Typography>
                  <Typography><span style={{
                    fontWeight: 'bold'
                  }}>Apellido: </span>Garcia</Typography>
                </Grid>
                <Grid item
                  sx={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    mb: 3
                  }}
                  >
                  <Typography><span style={{
                    fontWeight: 'bold'
                  }}>Correo: </span>ragarcia.19@est.ucab.edu.ve</Typography>
                </Grid>
                <Grid item
                  sx={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    mb: 3
                  }}
                  >
                  <Typography><span style={{
                    fontWeight: 'bold'
                  }}>Número: </span>(424)9144388</Typography>
                </Grid>
                <Grid item
                  sx={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    mb: 3
                  }}
                  >
                  <Typography><span style={{
                    fontWeight: 'bold'
                  }}>Nro de Emergencia: </span>(424)9144388</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid container
          sx={{
            width: '100%'
          }}
        >
          <Card
              sx={{
                display: 'flex',
                width: '100%',
                height: '80px',
                p: 0
              }}
              onClick={() => {
                console.log('si')
              }}
            >
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                  width: '100%',
                  height: '80px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  backgroundColor: 'background.default'
                }}
                variant='outlined'
              >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                  width: '100%',
                  height: '80px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden'
                }}
              >
                <LocationCity />
                <Typography
                  sx={{ fontWeight: 600, fontSize: 16, ml: 2 }}>
                    Agregar Destino
                </Typography>
              </CardContent>
              </Paper>
            </Card>
            <Divider />
            <Card
              sx={{
                width: '100%',
                height: '70px',
                p: 0
              }}
              onClick={() => {
                console.log('si')
              }}
            >
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                  width: '100%',
                  height: '80px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  backgroundColor: 'background.default'
                }}
                variant='outlined'
              >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                  width: '100%',
                  height: '70px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden'
                }}
              >
                <DirectionsCar />
                <Typography sx={{ fontWeight: 600, fontSize: 16, ml: 2 }}>
                  Agregar Vehículo{' '}
                </Typography>
              </CardContent>
              </Paper>
            </Card>
            <Divider />
            <Card
              sx={{
                width: '100%',
                height: '70px',
                p: 0
              }}
              onClick={() => {
                console.log('si')
              }}
            >
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                  width: '100%',
                  height: '80px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  backgroundColor: 'background.default'
                }}
                variant='outlined'
              >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                  width: '100%',
                  height: '70px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden'
                }}
              >
                <RampLeftRounded />
                <Typography sx={{ fontWeight: 600, fontSize: 16, ml: 2 }}>
                  Agregar Ruta{' '}
                </Typography>
              </CardContent>
              </Paper>
            </Card>
            <Divider />
        </Grid>

      </Grid>
    </PageWithNavBar>
  )
}
