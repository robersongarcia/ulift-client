import { TextField as MuiTextField } from '@mui/material'

export function TextFieldAuth (props: any): JSX.Element {
  return (
    <MuiTextField
        fullWidth
        type='text'
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
        {...props}
    />
  )
}
