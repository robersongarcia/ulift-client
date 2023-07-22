import { Fab } from '@mui/material'

export function FabButton (): JSX.Element {
  return (
    <Fab
        size='large'
        sx={{
          mr: 2
        }}
        color='primary'
    >
        +
    </Fab>
  )
}
