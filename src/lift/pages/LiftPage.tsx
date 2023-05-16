import { MapComponent } from '../../ui/components/MapComponent'
import { PageWithNavBar } from '../../ui/layout/PageWithNavBar'

export function LiftPage (): JSX.Element {
  return (
    <PageWithNavBar>
      <MapComponent />
    </PageWithNavBar>
  )
}
