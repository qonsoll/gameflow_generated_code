import { Image, Keyboard, TouchableOpacity, View } from 'react-native'

import { Logo } from '../Layout'
import PropTypes from 'prop-types'
import React from 'react'
import dynamicStyles from './styles'

const PageWrapper = (props) => {
  const {
    leftButtonIcon,
    leftButtonAction,
    rightButtonIcon,
    rightButtonAction,
    leftIconColor,
    rightIconColor,
    logoColor,
    children
  } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles({ logoColor, leftIconColor, rightIconColor })
  const onPress = () => Keyboard.dismiss()

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.headerContainer}>
        <Logo style={styles.logo} />
        {!!leftButtonIcon && (
          <TouchableOpacity
            onPress={leftButtonAction}
            style={styles.leftButton}>
            <Image source={leftButtonIcon} style={styles.leftIcon} />
          </TouchableOpacity>
        )}
        {!!rightButtonIcon && (
          <TouchableOpacity
            onPress={rightButtonAction}
            style={styles.rightButton}>
            <Image source={rightButtonIcon} style={styles.rightIcon} />
          </TouchableOpacity>
        )}
      </View>
      {children}
    </TouchableOpacity>
  )
}

PageWrapper.propTypes = {
  leftButtonAction: PropTypes.func,
  rightButtonAction: PropTypes.func,
  leftIconColor: PropTypes.string,
  rightIconColor: PropTypes.string,
  logoColor: PropTypes.string
}

export default PageWrapper
