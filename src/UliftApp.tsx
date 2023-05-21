import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'
import { useResize } from './ui/hooks/useResize'

export default function UliftApp (): JSX.Element {
  useResize()

  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
