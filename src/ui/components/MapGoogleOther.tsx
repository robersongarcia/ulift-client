import React from 'react'
import { GoogleMap } from '@react-google-maps/api'

export const UcabPosition = {
  lat: 8.297506822303538,
  lng: -62.711479090059036
}

interface MapProps {
  userLocation?: { lat: number, lng: number } | undefined
  children?: React.ReactNode | React.ReactNode[]
}

function MapGoogle ({ userLocation, children }: MapProps): JSX.Element {
  return (
    <GoogleMap
      mapContainerStyle={
        {
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }
      }
      center={(userLocation != null) ? userLocation : UcabPosition}
      zoom={16}
      options={
        {
          streetViewControl: false,
          mapTypeControl: false,
          keyboardShortcuts: false,
          fullscreenControl: false
        }}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      {children}
    </GoogleMap>
  )
}

export default React.memo(MapGoogle)
