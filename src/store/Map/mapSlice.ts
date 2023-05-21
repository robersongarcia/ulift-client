import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
// initial state type
interface MapState {
  isMapReady: boolean
  map?: any
  options: any
  type: string
}

const initialState: MapState = {
  isMapReady: false,
  map: undefined,
  options: {},
  type: ''
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMap: (state, action: PayloadAction<any>) => {
      state.map = action.payload
      state.isMapReady = true
    },
    setTypeMap: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    }
  }
})

export const { setMap, setTypeMap } = mapSlice.actions
