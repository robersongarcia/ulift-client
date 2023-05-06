import { AuthFormLayout } from '../layout/AuthFormLayout'
import { Grid, Button, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { TextFieldAuth } from '../components/TextFieldAuth'

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
            <TextFieldAuth
              label='Correo'
              type='email'
              name='email'
              placeholder='correo@ucab.edu.ve'
            />
          </Grid>
          <Grid
            item xs={12}
            sx={{
              mb: 2,
              borderRadius: 1
            }}>
            <TextFieldAuth
              label='Contraseña'
              type='password'
              name='password'
              placeholder='********'
            />
          </Grid>

          <Grid container
            direction='row'
            justifyContent='center'
            sx={{ mb: 2 }}>

            <Grid item xs={12} sm={6} >
              <Button
                variant='outlined'
                fullWidth
                type='submit'
                color='secondary'
              >
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
