import { Navigate, Route, Routes } from 'react-router-dom'
import LiftPage from '../lift/pages/LiftPage'
import { ProfilePage } from '../profile/pages/ProfilePage'
import { FavoritesPage } from '../favorites/pages/FavoritesPage'
import { useEffect } from 'react'
import { useAppDispatch } from '../store/hooks'
import { getLocation } from '../store/Places/thunks'
import { HistoryPage } from '../history/pages/HistoryPage'

export function PrivateRoutes (): JSX.Element {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLocation())
  }, [])

  return (
    <Routes>
      <Route path='/' element={<LiftPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
      <Route path='/perfil' element={<ProfilePage/>} />
      <Route path='/favoritos' element={<FavoritesPage/>} />
      <Route path='/historial' element={<HistoryPage/>} />
    </Routes>
  )
}
