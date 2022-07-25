import { Home3x, Settings } from '../../constants/assets'
import { Image, TouchableOpacity } from 'react-native'
import React, { Fragment } from 'react'
import { Text, useTheme } from '@qonsoll/react-native-design'

import PropTypes from 'prop-types'
import dynamicStyles from './styles'
import { useColorScheme } from 'react-native-appearance'
import { useTranslations } from '@qonsoll/translation'

function TabItem(props) {
  const { onPress, focus, routeName, i } = props

  // [ADDITIONAL_HOOKS]
  const colorScheme = useColorScheme()
  const { theme } = useTheme()
  const styles = dynamicStyles(colorScheme, theme)
  const { t } = useTranslations()

  // [CLEAN_FUNCTIONS]
  const onTabPress = () => onPress(routeName)

  const menuConfig = {
    0: { icon: Home3x, title: t('dashboard') },
    1: { icon: Settings, title: t('settings') }
  }

  return (
    <TouchableOpacity
      style={[focus ? styles.focusButtonContainer : styles.buttonContainer]}
      activeOpacity={1}
      onPress={onTabPress}>
      <Fragment>
        <Image
          style={[
            styles.icon,
            focus ? styles.focusTintColor : styles.unFocusTintColor
          ]}
          source={menuConfig[i]?.icon}
        />

        <Text
          variant="caption1"
          fontWeight="semibold"
          color={focus ? 'white' : 'white-t-lighten2'}>
          {menuConfig[i]?.title.toUpperCase()}
        </Text>
      </Fragment>
    </TouchableOpacity>
  )
}

TabItem.propTypes = {
  route: PropTypes.object,
  onPress: PropTypes.func,
  focus: PropTypes.bool,
  tabIcons: PropTypes.object,
  routeName: PropTypes.string,
  isAdd: PropTypes.bool,
  onAddPress: PropTypes.func,
  isRightBorder: PropTypes.bool,
  isLeftBorder: PropTypes.bool
}

export default TabItem
