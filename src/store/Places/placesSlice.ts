import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

// initial state type
interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number]
  errorMessage?: string
}

const initialState: PlacesState = {
  isLoading: false,
  userLocation: undefined,
  errorMessage: undefined
}

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true
    },
    setPlace: (state, action: PayloadAction<[number, number]>) => {
      state.userLocation = action.payload
      state.isLoading = false
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
      state.isLoading = false
    }
  }
})

export const { startLoading, setPlace, setError } = placesSlice.actions
