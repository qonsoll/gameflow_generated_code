import { StyleSheet } from 'react-native'
import { isIOS } from '~/__constants__'
import theme from '../../../../theme'

const dynamicStyles = ({ logoColor, leftIconColor, rightIconColor, title }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.CORE.COLORS['page-wrapper-background']
    },
    headerContainer: {
      width: '100%',
      marginBottom: isIOS ? (title ? 12 : -20) : title ? 32 : 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingTop: isIOS ? 40 : 0,
      height: isIOS ? 88 : 48
    },
    logo: {
      width: 128,
      height: 48,
      tintColor: logoColor || theme.CORE.COLORS.black
    },
    title: {
      height: 52,
      justifyContent: 'center'
    },
    leftButton: {
      height: 52,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      paddingHorizontal: 16
    },
    leftIcon: {
      width: 32,
      height: 32,
      tintColor: leftIconColor || theme.CORE.COLORS['primary-default']
    },
    rightButton: {
      height: 52,
      justifyContent: 'center',
      position: 'absolute',
      right: 0,
      paddingHorizontal: 16,
      top: isIOS ? 36 : 2
    },
    rightIcon: {
      width: 32,
      height: 32,
      tintColor: rightIconColor || theme.CORE.COLORS['primary-default']
    },
    language: {
      position: 'absolute',
      right: 24,
      top: 18,
      backgroundColor: theme.CORE.COLORS['grey-10'],
      height: 40,
      width: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      ...theme.SHADOWS.xs,
      shadowOffset: { width: 0, height: 0 },
      zIndex: 4
    }
  })
}

export default dynamicStyles
