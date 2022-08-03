import { StyleSheet } from 'react-native'
import theme from '../../../theme'

const dynamicStyles = () => {
  return StyleSheet.create({
    wrapper: {
      backgroundColor: theme.CORE.COLORS.white,
      flex: 1,
      alignItems: 'center'
    },
    logo: { width: 140, height: 100, marginBottom: 24 },
    item: {
      backgroundColor: theme.COMPONENTS.CARD.backgroundColor,
      height: 52,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 12,
      marginBottom: 8
    },
    itemWithMargin: { marginBottom: 32 },
    arrowIcon: { width: 32, height: 32 },
    text: { lineHeight: 20, fontSize: 16, fontWeight: '500' },
    icon: {
      width: 24,
      height: 26
    },
    textWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '80%'
    },
    container: { width: '100%', paddingHorizontal: 24 },
    iconContainer: {
      borderRadius: 8,
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8
    }
  })
}

export default dynamicStyles
