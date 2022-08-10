import { Home3x, Settings } from '~/__constants__/assets'

import { DASHBOARD_SCREEN } from '~/__constants__/screens'
import { SETTINGS_NAVIGATOR } from '~/__constants__/navigators'

const MENU_CONFIG = {
  [DASHBOARD_SCREEN]: { icon: Home3x, title: 'DASHBOARD' },
  [SETTINGS_NAVIGATOR]: { icon: Settings, title: 'SETTINGS' }
}

export default MENU_CONFIG
