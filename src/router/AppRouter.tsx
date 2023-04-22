import { Route, Routes } from 'react-router-dom'
import { Typography } from '@mui/material'

export default function AppRouter (): JSX.Element {
  return (
    <Routes>
      <Route
        path="/*"
        element={<Typography variant='h1' component='h1'>
          Ulift Home
        </Typography>}/>
    </Routes>
  )
}
