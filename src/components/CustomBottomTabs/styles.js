import { Platform, StyleSheet } from 'react-native'

import theme from '../../../theme'

const isIOS = Platform.OS === 'ios'
const isIPad = isIOS && Platform?.isPad
const height = 76

const dynamicStyles = (appStyles, colorScheme) => {
  return StyleSheet.create({
    tabContainer: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      borderRadius: 16,
      display: 'flex'
    },
    shadowContainer: {
      position: 'absolute',
      bottom: 24,
      height: 60,
      width: '100%',
      paddingHorizontal: 12,
      borderRadius: 16,
      ...theme.CORE.SHADOWS.sm,
      shadowOffset: { width: 2, height: 4 }
    },
    buttonContainer: {
      width: '30%',
      height,
      alignItems: 'center',
      justifyContent: 'center'
    },
    focusButtonContainer: {
      width: '30%',
      height,
      alignItems: 'center',
      justifyContent: 'center'
    },
    rightButtonContainer: {
      borderTopRightRadius: theme.CORE.BORDER_RADIUSES.lg,
      width: isIPad ? '25%' : '20%',
      paddingRight: isIPad ? 80 : 0
    },
    leftButtonContainer: {
      borderTopLeftRadius: theme.CORE.BORDER_RADIUSES.lg,
      width: isIPad ? '25%' : '20%',
      paddingLeft: isIPad ? 80 : 0
    },
    addButtonContainer: {
      width: '100%',
      height,
      alignItems: 'center',
      justifyContent: 'center'
    },
    addButtonCircleContainer: {
      position: 'absolute',
      bottom: 30,
      flex: 1,
      borderRadius: 50,
      width: 90,
      height: 100,
      backgroundColor: 'transparent'
    },
    icon: {
      height: theme.CORE.ICON_SIZES.md,
      width: theme.CORE.ICON_SIZES.md,
      marginBottom: 0
    },
    focusTintColor: {
      tintColor: theme.CORE.COLORS.white
    },
    unFocusTintColor: {
      tintColor: theme.CORE.COLORS['white-t-lighten2']
    },
    disabledIcon: {
      tintColor: theme.CORE.COLORS['white-t-lighten4']
    },
    disabledText: {
      color: theme.CORE.COLORS['white-t-lighten4']
    },
    readialGradientContainer: {
      width: isIPad ? '10%' : '20%',
      height
    },
    leftShadow: {
      width: isIPad ? '45%' : '40%',
      height: isIPad ? 68 : isIOS ? 66 : 66,
      backgroundColor: 'rgb(0, 0, 0)',
      position: 'absolute',
      bottom: 0,
      left: 0,
      borderTopRightRadius: 20,
      ...theme.CORE.SHADOWS.xs,
      shadowOffset: { width: 8, height: 4 }
    },
    rightShadow: {
      width: isIPad ? '45%' : '40%',
      height: isIPad ? 68 : isIOS ? 66 : 66,
      backgroundColor: '#000',
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderTopLeftRadius: 20,
      ...theme.CORE.SHADOWS.xs,
      shadowOffset: { width: -8, height: 4 }
    }
  })
}

export default dynamicStyles
