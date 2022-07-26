import { StyleSheet } from 'react-native'
import theme from '../../../../theme'

const dynamicStyles = ({ logoColor, leftIconColor, rightIconColor }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.CORE.COLORS.white
    },
    headerContainer: {
      width: '100%',
      marginBottom: 32,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    logo: {
      top: 16,
      width: 120,
      height: 48,
      tintColor: logoColor || theme.CORE.COLORS.black
    },
    leftButton: {
      top: 24,
      left: 0,
      position: 'absolute',
      paddingHorizontal: 24
    },
    leftIcon: {
      width: 32,
      height: 32,
      tintColor: leftIconColor || theme.CORE.COLORS['primary-default']
    },
    rightButton: { position: 'absolute', right: 0, paddingHorizontal: 24 },
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
      shadowColor: theme.CORE.COLORS.black,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.16,
      shadowRadius: 2,
      zIndex: 4
    }
  })
}

export default dynamicStyles
