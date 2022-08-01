import { Home3x, Settings } from '~/constants/assets'
import { SETTINGS_NAVIGATOR } from '~/constants/navigators'
import { DASHBOARD_SCREEN } from '~/constants/screens'

const MENU_CONFIG = {
  [DASHBOARD_SCREEN]: { icon: Home3x, title: 'DASHBOARD' },
  [SETTINGS_NAVIGATOR]: { icon: Settings, title: 'SETTINGS' }
}

export default MENU_CONFIG
