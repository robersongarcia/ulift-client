import React from 'react'
import ReactDOM from 'react-dom/client'
import UliftApp from './UliftApp'
import { BrowserRouter } from 'react-router-dom'
// fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
// import mapboxgl from 'mapbox-gl'
// eslint-disable-next-line max-len
// mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJzb25nYXJjaWEiLCJhIjoiY2xocGlkMDE3MDlhNzNlbjA5Z2F3NWdrdCJ9.ZCo5X4EcOevB4T54blxOGQ'
import { LoadScript } from '@react-google-maps/api'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
     <LoadScript
        googleMapsApiKey="***REMOVED***"
        libraries={['places']}
        region='VE'
        language='es'
      >
        <UliftApp />
      </LoadScript>
     </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
