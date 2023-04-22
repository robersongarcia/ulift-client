import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

export default function UliftApp (): JSX.Element {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
