import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { LocalTaxi, Person } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { useAppDispatch } from '../../store/hooks'
import { setUserType } from '../../store/user/userSlice'
import { setTypeMap } from '../../store/Map/mapSlice'

export default function ToggleUserType (): JSX.Element {
  const [alignment, setAlignment] = React.useState<string>('passenger')
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(setUserType(alignment))
    dispatch(setTypeMap(alignment))
  }, [alignment])

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ): void => {
    if (newAlignment === null) return
    setAlignment(newAlignment)
  }

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label='text alignment'
      sx={{
        backgroundColor: 'white',
        ml: 2,
        zIndex: 100
      }}

    >
      <ToggleButton value='driver' aria-label='driver' sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        <LocalTaxi color='primary' />
        {alignment === 'driver' &&
            <Typography sx={{
              color: (theme) => theme.palette.primary.main,
              fontWeight: 'bold',
              fontSize: '0.7rem'
            }}>Conductor</Typography>}
      </ToggleButton>
      <ToggleButton value='passenger' aria-label='passenger' sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        <Person color='primary' />
        {alignment === 'passenger' &&
            <Typography sx={{
              color: (theme) => theme.palette.primary.main,
              fontWeight: 'bold',
              fontSize: '0.7rem'
            }}>Pasajero</Typography>}
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
