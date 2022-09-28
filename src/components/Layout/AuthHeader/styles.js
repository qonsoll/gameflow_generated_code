import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = () => {
  return StyleSheet.create({
    headerContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      top: 24,
      paddingHorizontal: 32,
      zIndex: 4
    },
    language: {
      backgroundColor: theme.COLORS['grey-10'],
      height: 40,
      width: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      ...theme.SHADOWS.xs,
      shadowOffset: {
        width: 0,
        height: 0
      },
      zIndex: 4
    },
    logo: {
      tintColor: theme.COLORS.white
    }
  })
}

export default dynamicStyles
