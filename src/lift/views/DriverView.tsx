import { useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import MapGoogle from '../../ui/components/MapGoogle'
// eslint-disable-next-line max-len
import { DirectionsService, type DirectionsServiceProps, DirectionsRenderer } from '@react-google-maps/api'

interface DriverViewProps {
  userLocation?: { lat: number, lng: number } | undefined
}

// eslint-disable-next-line max-len
export function DriverView ({ userLocation }: DriverViewProps): JSX.Element {
  const [markers, setMarkers] = useState<google.maps.Marker[]>([])
  // eslint-disable-next-line max-len
  const [response, setResponse] = useState<google.maps.DirectionsResult | null>(null)
  const { map, isMapReady } = useAppSelector((state) => state.map)

  const serviceProps: DirectionsServiceProps = {
    options: {
      destination: markers[1]?.getPosition() as google.maps.LatLng,
      origin: markers[0]?.getPosition() as google.maps.LatLng,
      travelMode: 'DRIVING'
    },
    // eslint-disable-next-line max-len
    callback: (result: google.maps.DirectionsResult | null, status: google.maps.DirectionsStatus) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setResponse(result)
      }
    },
    onLoad: (directionsService) => {
      // eslint-disable-next-line max-len
      console.log('DirectionsService onLoad directionsService: ', directionsService)
    },
    onUnmount: (directionsService) => {
      // eslint-disable-next-line max-len
      console.log('DirectionsService onUnmount directionsService: ', directionsService)
    }
  }

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
    <MapGoogle userLocation={userLocation} onClickFunction={onClickFunction} >
      {
        markers.length > 1 && (
          <DirectionsService
                  // required
                  options={serviceProps.options}
                  // required
                  callback={serviceProps.callback}
                  // optional
                  onLoad={serviceProps.onLoad}
                  // optional
                  onUnmount={serviceProps.onUnmount}
                />)
      }

      {
        response !== null && (
          <DirectionsRenderer
                  // required
                  options={{ directions: response }}
                  // optional
                  onLoad={(directionsRenderer) => {
                    // eslint-disable-next-line max-len
                    console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                  }}
                  // optional
                  onUnmount={(directionsRenderer) => {
                    // eslint-disable-next-line max-len
                    console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                  }}
                />)
      }
    </MapGoogle>
  )
}
