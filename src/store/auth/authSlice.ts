import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

// initial state type
interface AuthState {
  status: string // 'checking', 'authenticated', 'no-authenticated'
  uid: string | null
  email: string | null
  errorMessage: string | null
  apiKey: string | null
}

const initialState: AuthState = {
  status: 'checking',
  uid: null,
  email: null,
  apiKey: null,
  errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    test: (state, action: PayloadAction<number>) => {
      console.log('authSlice test')
    }
  }
})

export const { test } = authSlice.actions
