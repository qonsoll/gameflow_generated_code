import { Home3x, Settings } from '~/constants/assets'

import { DASHBOARD_SCREEN } from '~/constants/screens'
import { SETTINGS_NAVIGATOR } from '~/constants/navigators'

const MENU_CONFIG = {
  [DASHBOARD_SCREEN]: { icon: Home3x, title: 'DASHBOARD' },
  [SETTINGS_NAVIGATOR]: { icon: Settings, title: 'SETTINGS' }
}

export default MENU_CONFIG
