import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = ({ bgColor }) => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bgColor || theme.COLORS.white,
      paddingHorizontal: 24
    },
    buttonWrapper: {
      position: 'absolute',
      bottom: 60,
      flexDirection: 'row'
    },
    button: {
      height: 52,
      borderWidth: 1,
      borderColor: theme.COLORS['primary-default'],
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 32,
      marginHorizontal: 12
    },
    iconButton: {
      position: 'absolute',
      top: 48,
      left: 24,
      borderWidth: 1,
      borderColor: theme.COLORS['primary-default'],
      borderRadius: 20,
      height: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      width: 32,
      height: 32
    }
  })
}

export default dynamicStyles
