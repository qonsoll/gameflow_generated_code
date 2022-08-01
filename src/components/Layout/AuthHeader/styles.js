import { StyleSheet } from 'react-native'
import theme from '../../../../theme'

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
    logo: {
      width: 120,
      height: 48,
      tintColor: theme.CORE.COLORS.white
    },
    language: {
      backgroundColor: theme.CORE.COLORS['grey-10'],
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
    }
  })
}

export default dynamicStyles
