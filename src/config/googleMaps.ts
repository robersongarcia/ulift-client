// eslint-disable-next-line max-len
type Libraries = Array<'places' | 'drawing' | 'geometry' | 'localContext' | 'visualization'>

const librariesArray: Libraries = ['places']

const api = import.meta.env.VITE_GOOGLE_API

export const loadOptions = {
  googleMapsApiKey: api,
  libraries: librariesArray,
  region: 'VE',
  language: 'es'
}

export const options: google.maps.MapOptions = {
  streetViewControl: false,
  mapTypeControl: false,
  keyboardShortcuts: false,
  fullscreenControl: false,
  zoom: 16,
  zoomControl: false,
  clickableIcons: false,
  disableDefaultUI: true
}

export const UcabPosition = {
  lat: 8.297506822303538,
  lng: -62.711479090059036
}
