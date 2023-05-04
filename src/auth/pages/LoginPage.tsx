import { AuthFormLayout } from '../layout/AuthFormLayout'
import { Grid, TextField, Button, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export function LoginPage (): JSX.Element {
  return (
    <AuthFormLayout>
      <Grid container sx={{ mt: 3 }}>
        <Grid container direction='row' justifyContent='center'>
            <Typography variant='h4' sx={{
              mb: 2,
              fontWeight: 500
            }}>Inicia Sesión</Typography>
        </Grid>
          <Grid item
              xs={12}
              sx={{
                mb: 2,
                borderRadius: 1
              }}
                >
            <TextField
              label='Correo'
              type='email'
              fullWidth
              name='email'
              placeholder='correo@ucab.edu.ve'
              InputProps={{
                sx: {
                  '& input': {
                    color: (theme) => theme.palette.primary.contrastText
                  }
                }
              }}
              sx={{
                '& .MuiInputBase-root': {
                  color: (theme) => theme.palette.primary.contrastText
                },
                '& .MuiInputLabel-root': {
                  color: (theme) => theme.palette.primary.contrastText
                },
                '& .MuiFormLabel-root': {
                  color: (theme) => theme.palette.primary.contrastText
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: (theme) => theme.palette.primary.contrastText
                }
              }}
              InputLabelProps={{
                sx: {
                  color: (theme) => theme.palette.primary.contrastText
                }
              }}
              variant='filled'
            />
          </Grid>
          <Grid
            item xs={12}
            sx={{
              mb: 2,
              borderRadius: 1
            }}>
            <TextField
              label='Contraseña'
              type='password'
              fullWidth
              name='password'
              placeholder='********'
              InputProps={{
                sx: {
                  '& input': {
                    color: (theme) => theme.palette.primary.contrastText
                  }
                }
              }}
              sx={{
                '& .MuiInputBase-root': {
                  color: (theme) => theme.palette.primary.contrastText
                },
                '& .MuiInputLabel-root': {
                  color: (theme) => theme.palette.primary.contrastText
                },
                '& .MuiFormLabel-root': {
                  color: (theme) => theme.palette.primary.contrastText
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: (theme) => theme.palette.primary.contrastText
                }
              }}
              InputLabelProps={{
                sx: {
                  color: (theme) => theme.palette.primary.contrastText
                }
              }}
              variant='filled'
            />
          </Grid>

          <Grid container
            direction='row'
            justifyContent='center'
            sx={{ mb: 2 }}>

            <Grid item xs={12} sm={6} >
              <Button variant='outlined' fullWidth type='submit' sx={
                {
                  color: (theme) => theme.palette.primary.contrastText,
                  borderColor: (theme) =>
                    theme.palette.primary.contrastText,
                  '&:hover': {
                    backgroundColor: (theme) =>
                      theme.palette.primary.contrastText,
                    color: (theme) => theme.palette.primary.main
                  }
                }
              }>
                Login
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/registro'>
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
    </AuthFormLayout>
  )
}
