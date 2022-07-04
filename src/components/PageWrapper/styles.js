import { StyleSheet } from 'react-native'
import theme from '../../../theme'

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
      width: 140,
      height: 100,
      tintColor: logoColor || theme.CORE.COLORS.black
    },
    leftButton: { position: 'absolute', left: 0, paddingHorizontal: 24 },
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
    }
  })
}

export default dynamicStyles
