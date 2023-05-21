import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

// initial state type
interface UserState {
  status: string | null // status of the user in the app
  uid: string | null
  email: string | null
  photoURL: string | null
  name: string | null
  lastName: string | null
  gender: string | null
  role: string | null
  emergencyContact: string | null
  passengerRating: string | null
  driverRating: string | null
  errorMessage: string | null
  type: string | null
}

const initialState: UserState = {
  status: null, // status of the user in the app
  uid: null,
  email: null,
  photoURL: null,
  name: null,
  lastName: null,
  gender: null,
  role: null,
  emergencyContact: null,
  passengerRating: null,
  driverRating: null,
  errorMessage: null,
  type: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    test: (state, action: PayloadAction<number>) => {
      console.log('userSlice Test')
    },
    setUserType: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    }
  }
})

export const { test, setUserType } = userSlice.actions
