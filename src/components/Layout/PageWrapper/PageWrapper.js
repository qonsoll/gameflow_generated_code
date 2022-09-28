import { Keyboard, ScrollView, TouchableOpacity, View } from 'react-native'

import { Avatar } from '~/components'
import { Heading } from 'native-base'
import { Language } from '../../Lib'
import Logo from '../Logo'
import { NavigationAction } from './components'
import PropTypes from 'prop-types'
import React from 'react'
import dynamicStyles from './styles'

/**
 * It renders a page with a header, a body, and a footer
 * @param leftButtonIcon - Icon name for the left button
 * @param leftButtonAction - function
 * @param rightButtonIcon - string
 * @param rightButtonAction - function
 * @param leftIconColor - color of the left icon
 * @param rightIconColor - color of the right icon
 * @param logoColor - color of the logo
 * @param children - the content of the page
 * @param withLanguage - boolean
 * @param [withLogo=true] - boolean - whether to show the logo or not
 * @param title - string
 * @param userAvatarUrl - string
 * @param rightButtonText - string
 * @param leftButtonText - Text to be displayed on the left button
 * @param bgColor - background color of the page
 * @param isContentScrollable - boolean
 * @returns A function that takes in props and returns a TouchableOpacity component.
 */
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
            <Heading>{title}</Heading>
          </View>
        ) : (
          withLogo && <Logo />
        )}

        {(!!leftButtonIcon || !!leftButtonText) && (
          <NavigationAction
            style={styles.leftButton}
            leftIcon={leftButtonIcon}
            action={leftButtonAction}
            leftIconColor={leftIconColor}
            text={leftButtonText}
          />
        )}
        {withLanguage && <Language style={styles.language} />}
        {(!!rightButtonIcon || !!rightButtonText) && (
          <NavigationAction
            style={styles.rightButton}
            leftIcon={rightButtonIcon}
            action={rightButtonAction}
            leftIconColor={rightIconColor}
            text={rightButtonText}
          />
        )}
        {userAvatarUrl && (
          <Avatar
            avatarContainerStyle={styles.avatarContainer}
            size={36}
            url={userAvatarUrl}
          />
        )}
      </View>
      {isContentScrollable ? (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}>
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
