import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import Spinner from './Spinner'
import { loadOptions, options, UcabPosition } from '../../config/googleMaps'
import { useAppDispatch } from '../../store/hooks'
import { setMap } from '../../store/Map/mapSlice'

interface MapProps {
  userLocation?: { lat: number, lng: number } | undefined
  onClickFunction?: (event: google.maps.MapMouseEvent) => void
  children?: React.ReactNode | React.ReactNode[]
}

// eslint-disable-next-line max-len
function MapGoogle ({ userLocation, onClickFunction, children }: MapProps): JSX.Element {
  const { isLoaded, loadError } = useLoadScript(loadOptions)
  const dispatch = useAppDispatch()
  console.log('Render')
  const onLoad = React.useCallback(
    function onLoad (mapInstance: google.maps.Map) {
      // console.log(mapInstance)
      dispatch(setMap(mapInstance))
    }
    , [])

  const renderMap = (): JSX.Element => {
    return <GoogleMap
        mapContainerStyle={
            {
              width: '100%',
              height: '93vh',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            }
        }
      center={(userLocation != null) ? userLocation : UcabPosition}
      options={options}
      onLoad={onLoad}
      onClick={onClickFunction}
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
