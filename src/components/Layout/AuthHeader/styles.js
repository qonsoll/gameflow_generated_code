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
