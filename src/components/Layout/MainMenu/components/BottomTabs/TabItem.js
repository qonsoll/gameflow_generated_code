import { Image, TouchableOpacity } from 'react-native'
import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'

function TabItem(props) {
  const { onPress, focus, routeName, icon, title, routesCount } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles({ routesCount })
  const { t } = useTranslations()

  // [CLEAN_FUNCTIONS]
  const onTabPress = () => onPress(routeName)

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
          source={icon}
        />

        <Text
          variant="caption1"
          fontWeight="semibold"
          color={focus ? 'white' : 'white-t-lighten2'}>
          {t(title)}
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
