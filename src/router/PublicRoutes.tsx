import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { SignUpPage } from '../auth/pages/SignUpPage'

export function PublicRoutes (): JSX.Element {
  return (
    <Routes >
      <Route path='/login' element={<LoginPage />} />
      <Route path='/registro' element={<SignUpPage />} />
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
