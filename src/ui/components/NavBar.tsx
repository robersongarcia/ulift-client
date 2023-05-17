import { DirectionsCar, Person, Star } from '@mui/icons-material'
import { AppBar, IconButton } from '@mui/material'
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
    <AppBar
      sx={{
        height: '9%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        bottom: 0
      }}
    >

      <IconButton
      >
        <NavLink to='/perfil'>
          <Person
            sx={{
              fontSize: '3rem',
              borderRadius: '50%',
              padding: '0.5rem',
              color: 'white',
              backgroundColor: path === '/perfil' ? 'primary.dark' : 'inherit'
            }}
          />
        </NavLink>
      </IconButton>

      <IconButton
        >
          <NavLink to='/'>
          <DirectionsCar
            sx={{
              fontSize: '3rem',
              borderRadius: '50%',
              padding: '0.5rem',
              color: 'white',
              backgroundColor: path === '/' ? 'primary.dark' : 'inherit'
            }}
          />
          </NavLink>
      </IconButton>
      <IconButton>
        <NavLink to='/favoritos'>
          <Star
            sx={{
              fontSize: '3rem',
              borderRadius: '50%',
              padding: '0.5rem',
              color: 'white',
              // eslint-disable-next-line max-len
              backgroundColor: path === '/favoritos' ? 'primary.dark' : 'inherit'
            }}
          />
          </NavLink>
      </IconButton>
    </AppBar>
  )
}
