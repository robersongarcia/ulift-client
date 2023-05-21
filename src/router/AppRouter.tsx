import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export function AppRouter (): JSX.Element {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path='auth/*' element={<PublicRoutes />} />

      {/* Rutas privadas */}
      <Route path='/*' element={<PrivateRoutes />} />

    </Routes>
  )
}
