import { Height } from '@mui/icons-material'
import { TextField as MuiTextField } from '@mui/material'

export function SearchBar (): JSX.Element {
  return (
          <MuiTextField
            label='Buscar lugar'
            variant='outlined'
            fullWidth
            sx= {
              {
                '& .MuiInputBase-root': {
                  backgroundColor: 'rgba(255,255,255,0.8)'

                },
                '& .MuiFormControl-root': {

                },
                zIndex: 100,
                width: '80%',
                mt: 4,
                height: '8%'
              }}

          />
  )
}
