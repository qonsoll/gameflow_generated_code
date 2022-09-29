import { Home3x, Settings, Category3x } from '~/__constants__/assets'
import {
  SETTINGS_NAVIGATOR,
  MATCH_NAVIGATOR,
  COMPETITION_NAVIGATOR
} from '~/__constants__/navigators'
import { DASHBOARD_SCREEN } from '~/__constants__/screens'

const MENU_CONFIG = {
  [DASHBOARD_SCREEN]: { icon: Home3x, title: 'Dashboard' },
  [SETTINGS_NAVIGATOR]: { icon: Settings, title: 'Settings' },
  [MATCH_NAVIGATOR]: { icon: Category3x, title: 'Matches' },
  [COMPETITION_NAVIGATOR]: { icon: Category3x, title: 'Competitions' }
}

export default MENU_CONFIG
