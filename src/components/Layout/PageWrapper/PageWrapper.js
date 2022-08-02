import { Image, Keyboard, TouchableOpacity, View } from 'react-native'

import Language from '../../Language/Language'
import Logo from '../Logo'
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
    children,
    withLanguage
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
        {withLanguage && <Language style={styles.language} />}
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