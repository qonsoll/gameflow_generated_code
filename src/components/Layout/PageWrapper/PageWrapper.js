import { Keyboard, ScrollView, TouchableOpacity, View } from 'react-native'

import { Avatar } from '~/components'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Language from '../../Language/Language'
import Logo from '../Logo'
import PropTypes from 'prop-types'
import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from './styles'
import theme from '../../../../theme'

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
    bgColor,
    isContentScrollable
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
            <Text variant="h4">{title}</Text>
          </View>
        ) : (
          withLogo && <Logo style={styles.logo} />
        )}

        {(!!leftButtonIcon || !!leftButtonText) && (
          <TouchableOpacity
            onPress={leftButtonAction}
            style={styles.leftButton}>
            {!!leftButtonIcon && (
              <Icon
                name={leftButtonIcon}
                size={24}
                color={theme.CORE.COLORS['primary-default']}
              />
            )}
            {!!leftButtonText && (
              <Text
                color="primary-default"
                styleOverride={theme.CORE.FONTS.body}>
                {leftButtonText}
              </Text>
            )}
          </TouchableOpacity>
        )}
        {withLanguage && <Language style={styles.language} />}
        {(!!rightButtonIcon || !!rightButtonText) && (
          <TouchableOpacity
            onPress={rightButtonAction}
            style={styles.rightButton}>
            {!!rightButtonText && (
              <Text
                styleOverride={theme.CORE.FONTS.body}
                fontWeight="medium"
                color="primary-default">
                {rightButtonText}
              </Text>
            )}
            {!!rightButtonIcon && (
              <Icon
                name={rightButtonIcon}
                size={24}
                color={theme.CORE.COLORS['primary-default']}
              />
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
      {isContentScrollable ? (
        <ScrollView
          style={theme.COMPONENTS.CONTAINER.scrollWrapper}
          contentContainerStyle={theme.COMPONENTS.CONTAINER.scrollContent}>
          {children}
        </ScrollView>
      ) : (
        children
      )}
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
