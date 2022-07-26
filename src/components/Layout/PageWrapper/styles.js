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
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 32
    },
    logo: {
      top: 16,
      width: 120,
      height: 48,
      tintColor: logoColor || theme.CORE.COLORS.black
    },
    leftButton: {
      top: 24,
      position: 'absolute',
      left: 0,
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
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.16,
      shadowRadius: 2,
      zIndex: 4
    }
  })
}

export default dynamicStyles
