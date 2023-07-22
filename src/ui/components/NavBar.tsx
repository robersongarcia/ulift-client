import { DirectionsCar, Person, Star, ReceiptLong } from '@mui/icons-material'
import { AppBar, Grid, IconButton } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function NavBar (): JSX.Element {
  // get actual path
  const { pathname } = useLocation()
  const [path, setPath] = useState(pathname)

  useEffect(() => {
    setPath(pathname)
  }, [pathname])

  return (
    <Grid item
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'primary.main',
        alignSelf: 'flex-end',
        height: '7%'
      }}
    >
      <IconButton
      >
        <NavLink to='/perfil'>
          <Person
            sx={{
              fontSize: '2.5rem',
              borderRadius: '50%',
              padding: '0.5rem',
              color: 'white',
              height: '100%'
            }}
          />
        </NavLink>
      </IconButton>

      <IconButton
        >
          <NavLink to='/'>
          <DirectionsCar
            sx={{
              fontSize: '2.5rem',
              borderRadius: '50%',
              padding: '0.5rem',
              color: 'white',
              height: '100%'
            }}
          />
        </NavLink>
      </IconButton>
      <IconButton
        >
          <NavLink to='/historial'>
          <ReceiptLong
            sx={{
              fontSize: '2.5rem',
              borderRadius: '50%',
              padding: '0.5rem',
              color: 'white',
              height: '100%'
            }}
          />
        </NavLink>
      </IconButton>
      <IconButton>
        <NavLink to='/favoritos'>
          <Star
            sx={{
              fontSize: '2.5rem',
              borderRadius: '50%',
              padding: '0.5rem',
              color: 'white',
              height: '100%'
            }}
          />
          </NavLink>
      </IconButton>
    </Grid>
  )
}
