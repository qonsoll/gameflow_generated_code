import { StyleSheet } from 'react-native'
import theme from '../../../../theme'

const MODAL_HEIGHT = {
  sm: '30%',
  md: '40%',
  lg: '50%'
}

const dynamicStyles = (insets, height = 'lg') => {
  const main = StyleSheet.create({
    modalStyles: {
      margin: 0
    },
    touchableStyles: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },

    modalMainViewContainer: {
      width: '100%',
      height: MODAL_HEIGHT[height] || height,
      backgroundColor: theme.CORE.COLORS.white,
      borderTopLeftRadius: theme.CORE.BORDER_RADIUSES.xxl2,
      borderTopRightRadius: theme.CORE.BORDER_RADIUSES.xxl2,
      padding: 32,
      paddingBottom: insets.bottom || 32
    },

    modalChildrenContainer: {
      width: '100%',
      paddingBottom: 16
    },
    modal: {
      position: 'absolute',
      right: -15,
      top: -15,
      width: 32,
      height: 32,
      zIndex: 1,
      backgroundColor: theme.components.MODAL.backgroundColor,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalImage: {
      height: theme.CORE.ICON_SIZES.sm,
      width: theme.CORE.ICON_SIZES.sm,
      tintColor: 'black'
    },
    scroll: {
      width: '100%'
    }
  })
  const keyboardAvoidingViewStyles = StyleSheet.create({
    touchableStyles: {
      backgroundColor: theme.CORE.COLORS.white,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    modalMainViewContainer: {
      width: '100%',
      paddingBottom: 32
    },
    main: {
      width: '100%',
      backgroundColor: theme.CORE.COLORS.white,
      borderTopLeftRadius: theme.CORE.BORDER_RADIUSES.xxl2,
      borderTopRightRadius: theme.CORE.BORDER_RADIUSES.xxl2,
      padding: 32,
      alignItems: 'center',
      ...theme.SHADOWS.xs,
      shadowOffset: {
        width: 0,
        height: 2
      }
    }
  })

  return { ...main, keyboardAvoidingViewStyles }
}

export default dynamicStyles
