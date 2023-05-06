import { AuthFormLayout } from '../layout/AuthFormLayout'
import {
  Grid,
  TextField,
  Button,
  Link,
  Typography,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio
} from '@mui/material'
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
            <TextField
              label='Nombre'
              type='text'
              fullWidth
              name='name'
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
          <Grid item
              xs={12}
              sx={{
                mb: 2,
                borderRadius: 1
              }}
                >
            <TextField
              label='Apellido'
              type='text'
              fullWidth
              name='lastName'
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
          <Grid item xs={12}
            sx={{
              mb: 2,
              borderRadius: 1
            }}
          >
             <FormLabel id="demo-radio-buttons-group-label" sx={{
               color: (theme) => theme.palette.primary.contrastText
             }}>Género</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              row={true}
            >
              <FormControlLabel
                value="female"
                control={<Radio color='secondary' />}
                label="Femenino"
              />
              <FormControlLabel
                value="male"
                control={<Radio color='secondary' />}
                label="Masculino"
              />
            </RadioGroup>
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
                Crear una cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Inicia Sesión
            </Link>
          </Grid>

        </Grid>
    </AuthFormLayout>
  )
}
