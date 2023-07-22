import { useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import MapGoogle from '../../ui/components/MapGoogle'
import * as React from 'react'

interface PassengerViewProps {
  userLocation: { lat: number, lng: number } | undefined
}

// eslint-disable-next-line max-len
function PassengerViewComp ({ userLocation }: PassengerViewProps): JSX.Element {
  const [markers, setMarkers] = useState<google.maps.Marker[]>([])

  const { map, isMapReady } = useAppSelector((state) => state.map)

  const onClickFunction = (event: google.maps.MapMouseEvent): void => {
    if (!isMapReady) return

    const lat = event.latLng?.lat()
    const lng = event.latLng?.lng()

    if (lat != null && lng != null) {
      const position = { lat, lng }

      const marker = new google.maps.Marker({
        position,
        map,
        title: `${lat}, ${lng}`
      })

      map?.panTo(position)

      marker.addListener('click', () => {
        marker.setMap(null)
        setMarkers(markers.filter((m) => m !== marker))
      })

      setMarkers([...markers, marker])
    }
  }

  return (
    <MapGoogle userLocation={userLocation} onClickFunction={onClickFunction}/>
  )
}

export const PassengerView = React.memo(PassengerViewComp)
