import { Navigate, Route, Routes } from 'react-router-dom'
import { LiftPage } from '../lift/pages/LiftPage'
import { ProfilePage } from '../profile/pages/ProfilePage'
import { FavoritesPage } from '../favorites/pages/FavoritesPage'
import { LoginPage } from '../auth/pages/LoginPage'
import { SignUpPage } from '../auth/pages/SignUpPage'

export function AppRouter (): JSX.Element {
  return (
    <Routes>

      {/* Rutas privadas */}
      <Route path='/' element={<LiftPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
      <Route path='/perfil' element={<ProfilePage/>} />
      <Route path='/favoritos' element={<FavoritesPage/>} />

      {/* Rutas públicas */}
      <Route path='/auth/login' element={<LoginPage />} />
      <Route path='/auth/registro' element={<SignUpPage />} />
      <Route path='/auth/*' element={<Navigate to='/auth/login' />} />

    </Routes>
  )
}
