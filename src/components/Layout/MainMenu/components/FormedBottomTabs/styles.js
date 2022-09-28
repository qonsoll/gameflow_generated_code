import { Platform, StyleSheet } from 'react-native'

import { theme } from '~/styles'

const isIOS = Platform.OS === 'ios'
const isIPad = isIOS && Platform?.isPad
// const height = 76

const dynamicStyles = () => {
  const themeComponent = theme.COMPONENTS.BottomTabs.variants.add
  const height = themeComponent.height
  const addIndex = themeComponent.addIndex

  const shadow = {
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    width: '100%',
    height: height - 10,
    backgroundColor: themeComponent.shadowColor,
    position: 'absolute'
  }

  const addFooterColor =
    Platform.OS === 'ios'
      ? [
          'transparent',
          themeComponent.backgroundColor,
          'transparent',
          'transparent'
        ]
      : [
          'transparent',
          'transparent',
          'transparent',
          themeComponent.backgroundColor
        ]

  return StyleSheet.create({
    radialGradientContainer: {
      width: isIPad ? '10%' : '20%',
      height
    },
    addFooterColor,
    tabContainer: {
      position: 'absolute',
      bottom: 0,
      height,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: 0,
      width: '100%',
      display: 'flex'
    },
    buttonContainer: {
      flex: 1,
      width: 'auto',
      height,
      alignItems: 'center',
      backgroundColor: themeComponent.backgroundColor,
      justifyContent: 'center'
    },
    rightButtonContainer: {
      borderTopRightRadius: theme.BORDER_RADIUSES.lg,
      paddingRight: isIPad ? 80 : 0
    },
    leftButtonContainer: {
      borderTopLeftRadius: theme.BORDER_RADIUSES.lg,
      paddingLeft: isIPad ? 80 : 0
    },
    addButtonContainer: {
      width: '100%',
      height,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: theme.FONT_SIZES.caption2,
      paddingTop: 2,
      fontWeight: '500'
    },
    addButtonCircleContainer: {
      position: 'absolute',
      bottom: 30
    },
    addContainer: {
      width: theme.ICON_SIZES.xxxl,
      height: theme.ICON_SIZES.xxxl,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.BORDER_RADIUSES.xxl,
      backgroundColor: themeComponent.addBackgroundColor,
      marginBottom: height,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -12 },
      shadowOpacity: 0.16,
      shadowRadius: 20
    },
    leftShadow: {
      bottom: 0,
      left: 0,
      borderTopRightRadius: 20,
      ...shadow
    },
    rightShadow: {
      bottom: 0,
      right: 0,
      borderTopLeftRadius: 20,
      ...shadow
    },
    shadow: { bottom: 0, ...shadow },
    icon: {
      height: theme.ICON_SIZES.md,
      width: theme.ICON_SIZES.md,
      marginBottom: 0
    },
    addIcon: {
      color: themeComponent.addIconColor,
      size: themeComponent.addIconSize
    },
    focusTintColor: { tintColor: themeComponent.focusColor },
    focusTextColor: { color: themeComponent.focusColor },
    unFocusTintColor: { tintColor: themeComponent.unFocusColor },
    unFocusTextColor: { color: themeComponent.unFocusColor },
    addIndex
  })
}

export default dynamicStyles
