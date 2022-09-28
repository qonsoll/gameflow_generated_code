import { DASHBOARD_SCREEN } from './screens'
import { theme } from '../styles'

const statusBarColorsMap = {
  [DASHBOARD_SCREEN]: 'dark-content',
  default: theme.COLORS['status-bar-color']
}

const statusBarBackgroundMap = {
  [DASHBOARD_SCREEN]: theme.COLORS.white,
  default: theme.COLORS['status-bar-bg-color']
}

export { statusBarBackgroundMap, statusBarColorsMap }
