import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Map } from 'mapbox-gl'
// import type { RootState } from '../store'

// initial state type
interface MapState {
  isMapReady: boolean
  map?: Map
}

const initialState: MapState = {
  isMapReady: false,
  map: undefined
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMap: (state, action: PayloadAction<Map>) => {
      state.map = action.payload
      state.isMapReady = true
    }
  }
})

export const { setMap } = mapSlice.actions
