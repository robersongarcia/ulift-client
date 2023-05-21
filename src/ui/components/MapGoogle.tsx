import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import Spinner from './Spinner'
import { loadOptions, options, UcabPosition } from '../../config/googleMaps'
import { useAppDispatch } from '../../store/hooks'
import { setMap } from '../../store/Map/mapSlice'

interface MapProps {
  userLocation?: { lat: number, lng: number } | undefined
  children?: React.ReactNode | React.ReactNode[]
}

function MapGoogle ({ userLocation, children }: MapProps): JSX.Element {
  const { isLoaded, loadError } = useLoadScript(loadOptions)
  const dispatch = useAppDispatch()

  const onLoad = React.useCallback(
    function onLoad (mapInstance: google.maps.Map) {
      console.log(mapInstance)
      dispatch(setMap(mapInstance))
    }
    , [])

  const renderMap = (): JSX.Element => {
    return <GoogleMap
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
      options={options}
      onLoad={onLoad}
    >
        {children}
    </GoogleMap>
  }

  if (loadError != null) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <Spinner />
}

export default React.memo(MapGoogle)
