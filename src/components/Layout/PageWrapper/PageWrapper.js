import { Image, Keyboard, TouchableOpacity, View } from 'react-native'

import { Avatar } from '~/components'
import Language from '../../Language/Language'
import Logo from '../Logo'
import PropTypes from 'prop-types'
import React from 'react'
import { Text } from '@qonsoll/react-native-design'
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
    withLanguage,
    withLogo = true,
    title,
    userAvatarUrl,
    rightButtonText,
    leftButtonText,
    bgColor
  } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles({
    logoColor,
    leftIconColor,
    rightIconColor,
    title,
    bgColor
  })
  const onPress = () => Keyboard.dismiss()

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.headerContainer}>
        {title ? (
          <View style={styles.title}>
            <Text variant="h3">{title}</Text>
          </View>
        ) : (
          withLogo && <Logo style={styles.logo} />
        )}

        {(!!leftButtonIcon || !!leftButtonText) && (
          <TouchableOpacity
            onPress={leftButtonAction}
            style={styles.leftButton}>
            {!!leftButtonText && (
              <Text variant="body1" color="info-default">
                {leftButtonText}
              </Text>
            )}
            {!!leftButtonIcon && (
              <Image source={leftButtonIcon} style={styles.leftIcon} />
            )}
          </TouchableOpacity>
        )}
        {withLanguage && <Language style={styles.language} />}
        {(!!rightButtonIcon || !!rightButtonText) && (
          <TouchableOpacity
            onPress={rightButtonAction}
            style={styles.rightButton}>
            {!!rightButtonText && (
              <Text variant="body1" color="info-default">
                {rightButtonText}
              </Text>
            )}
            {!!rightButtonIcon && (
              <Image source={rightButtonIcon} style={styles.rightIcon} />
            )}
          </TouchableOpacity>
        )}
        {userAvatarUrl && (
          <Avatar
            avatarContainerStyle={{ position: 'absolute', right: 24, top: 24 }}
            size={36}
            url={userAvatarUrl}
          />
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
