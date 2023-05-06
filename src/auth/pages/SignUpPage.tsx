import { AddAPhoto } from '@mui/icons-material'
import { AuthFormLayout } from '../layout/AuthFormLayout'
import {
  Grid,
  Button,
  Link,
  Typography,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio
} from '@mui/material'
import { TextFieldAuth } from '../components/TextFieldAuth'
import { Link as RouterLink } from 'react-router-dom'

export function SignUpPage (): JSX.Element {
  return (
<AuthFormLayout>
      <Grid container sx={{ mt: 3 }}>
        <Grid container direction='row' justifyContent='center'>
          <Typography variant='h4' sx={{
            mb: 2,
            fontWeight: 500
          }}>Regístrate</Typography>
        </Grid>
        <Grid item
              xs={12}
              sx={{
                mb: 2,
                borderRadius: 1
              }}
                >
            <TextFieldAuth
              label='Nombre'
              name='name'
            />
          </Grid>
          <Grid item
              xs={12}
              sx={{
                mb: 2,
                borderRadius: 1
              }}
                >
            <TextFieldAuth
              label='Apellido'
              name='lastName'
            />
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
          <Grid item xs={12}
            sx={{
              mb: 2,
              borderRadius: 1
            }}
          >
             <FormLabel id='demo-radio-buttons-group-label' sx={{
               color: (theme) => theme.palette.primary.contrastText
             }}>Género</FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='female'
              name='gender'
              row={true}
            >
              <FormControlLabel
                value='female'
                control={<Radio color='secondary' />}
                label='Femenino'
              />
              <FormControlLabel
                value='male'
                control={<Radio color='secondary' />}
                label='Masculino'
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}
            sx={{
              mb: 2,
              borderRadius: 1
            }}
          >
             <FormLabel id='demo-radio-buttons-group-label' sx={{
               color: (theme) => theme.palette.primary.contrastText
             }}>Rol</FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='student'
              name='role'
              row={true}
            >
              <FormControlLabel
                value='student'
                control={<Radio color='secondary' />}
                label='Estudiante'
              />
              <FormControlLabel
                value='teacher'
                control={<Radio color='secondary' />}
                label='Profesor'
              />
            </RadioGroup>
          </Grid>

          <Grid
            item xs={12}
            sx={{
              mb: 2,
              borderRadius: 1
            }}>
          <TextFieldAuth
              label='Contacto de emergencia'
              name='emergencyContact'
            />
          </Grid>

          <Grid item xs={12}
            sx={{
              mb: 2,
              borderRadius: 3
            }}>
            <input
              accept='image/*'
              style={{ display: 'none' }}
              id='raised-button-file'
              multiple
              type='file'
              name='image'
            />
            <label htmlFor='raised-button-file'>
              <Button variant='contained' color='secondary' component='span'>
                <AddAPhoto sx={{ mr: 1 }}/>
                Subir foto de perfil
              </Button>
            </label>

          </Grid>

          <Grid container
            direction='row'
            justifyContent='center'
            sx={{ mb: 2 }}>

            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <Button
                variant='outlined'
                fullWidth type='submit'
                color='secondary'>
                Crear una cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Inicia Sesión
            </Link>
          </Grid>

        </Grid>
    </AuthFormLayout>
  )
}
