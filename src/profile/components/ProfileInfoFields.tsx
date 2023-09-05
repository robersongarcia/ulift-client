import { TextField as MuiTextField } from '@mui/material'
export const ProfileInfoFields = (props: any): JSX.Element => {
  return (
    <MuiTextField
    fullWidth
    type='text'
    InputProps={{
      sx: {
        '& input': {
          color: 'rgba(0, 0, 0, 0.87)'
        }
      }
    }}
    sx={{
      '& .MuiInputBase-root': {
        color: 'rgba(0, 0, 0, 0.87)'
      },
      '& .MuiInputLabel-root': {
        color: 'rgba(0, 0, 0, 0.87)'
      },
      '& .MuiFormLabel-root': {
        color: 'rgba(0, 0, 0, 0.87)'
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: 'rgba(0, 0, 0, 0.87)'
      }
    }}
    InputLabelProps={{
      sx: {
        color: 'rgba(0, 0, 0, 0.87)'
      }
    }}
    variant='filled'
    {...props}
/>
  )
}
