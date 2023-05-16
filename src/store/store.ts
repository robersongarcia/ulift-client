import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { userSlice } from './user/userSlice'
import { placesSlice } from './Places/placesSlice'
import { mapSlice } from './Map/mapSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    places: placesSlice.reducer,
    map: mapSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
