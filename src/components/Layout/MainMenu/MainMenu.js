import { BottomTabs, FormedBottomTabs, StickyBottomTabs } from './components'
import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

const MENU_VARIANTS = ['default', 'sticky', 'add']
const MENU_VARIANTS_MAP = {
  [MENU_VARIANTS[0]]: BottomTabs,
  [MENU_VARIANTS[1]]: StickyBottomTabs,
  [MENU_VARIANTS[2]]: FormedBottomTabs
}

const MainMenu = (props) => {
  const { variant = 'default', ...rest } = props

  const Menu = useMemo(
    () => MENU_VARIANTS_MAP[variant] || MENU_VARIANTS_MAP.default,
    [variant]
  )

  return <Menu {...rest} />
}

MainMenu.propTypes = {
  variant: PropTypes.oneOf(MENU_VARIANTS)
}

export default MainMenu
