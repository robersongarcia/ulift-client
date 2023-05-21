import MapGoogle from '../../ui/components/MapGoogle'

interface PassengerViewProps {
  userLocation: { lat: number, lng: number } | undefined
}

// eslint-disable-next-line max-len
export function PassengerView ({ userLocation }: PassengerViewProps): JSX.Element {
  return (
    <MapGoogle userLocation={userLocation} />
  )
}
