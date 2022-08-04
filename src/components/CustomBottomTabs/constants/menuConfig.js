import { Home3x, Settings, Category3x } from '~/__constants__/assets'
import { SETTINGS_NAVIGATOR, POST_NAVIGATOR } from '~/__constants__/navigators'
import { DASHBOARD_SCREEN } from '~/__constants__/screens'

const MENU_CONFIG = {
  [DASHBOARD_SCREEN]: { icon: Home3x, title: 'DASHBOARD' },
  [SETTINGS_NAVIGATOR]: { icon: Settings, title: 'SETTINGS' },
  [POST_NAVIGATOR]: { icon: Category3x, title: 'POSTS' }
}

export default MENU_CONFIG
