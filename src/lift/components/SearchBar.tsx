import { Grid, TextField as MuiTextField } from '@mui/material'

export function SearchBar (): JSX.Element {
  return (
    <Grid
          item
          sx={{ zIndex: 2, mt: 3, width: '80%' }}

        >
          <MuiTextField
            label='Buscar lugar'
            variant='outlined'
            fullWidth
            sx= {
              {
                '& .MuiInputBase-root': {
                  backgroundColor: 'rgba(255,255,255,0.8)'
                }
              }}
          />
    </Grid>
  )
}
