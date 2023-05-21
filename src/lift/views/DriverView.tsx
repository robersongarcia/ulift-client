import MapGoogle from '../../ui/components/MapGoogle'

interface DriverViewProps {
  userLocation?: { lat: number, lng: number } | undefined
}

// eslint-disable-next-line max-len
export function DriverView ({ userLocation }: DriverViewProps): JSX.Element {
  return (
    <MapGoogle />
  )
}
