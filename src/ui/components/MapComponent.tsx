import mapboxgl from 'mapbox-gl'
import { useLayoutEffect, useRef } from 'react'
import { setMap } from '../../store/Map/mapSlice'
import { useAppDispatch } from '../../store/hooks'

interface MapProps {
  userLocation?: [number, number] | undefined
  children?: React.ReactNode | React.ReactNode[]
}

const testLocation: [number, number] = [-74.5, 40]

// eslint-disable-next-line max-len
export function MapComponent ({ userLocation = undefined, children }: MapProps): JSX.Element {
  const mapDiv = useRef <HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    if (mapDiv.current == null) {
      return
    }

    const newMap = new mapboxgl.Map({
      container: mapDiv.current, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center:
      (userLocation != null)
        ? userLocation
        : testLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
    })

    dispatch(setMap(newMap))
  }, [])

  return (
    <div
        ref={mapDiv}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute'
        }}
    >
      {children}
    </div>
  )
}
