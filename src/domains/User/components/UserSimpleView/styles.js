import { StyleSheet } from 'react-native'
import theme from '../../../../../theme'

const dynamicStyles = (avatarUrl) => {
  return StyleSheet.create({
    wrapper: {
      marginBottom: 32,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 24
    },
    nameContainer: { flex: 1, paddingRight: 20, marginBottom: 24 },
    avatarContainer: {
      borderRadius: 14,
      backgroundColor: theme.CORE.COLORS.white,
      height: 130,
      width: 130,
      alignItems: 'center',
      justifyContent: 'flex-end',
      borderWidth: avatarUrl ? 0 : 2,
      borderColor: avatarUrl ? 'transparent' : '#C18AA4'
    },
    avatar: {
      height: avatarUrl ? '100%' : 96,
      width: avatarUrl ? '100%' : 60,
      borderRadius: avatarUrl ? 12 : 0
    }
  })
}

export default dynamicStyles
