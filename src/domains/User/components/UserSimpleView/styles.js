import { StyleSheet } from 'react-native'

const dynamicStyles = (avatarUrl) => {
  return StyleSheet.create({
    wrapper: {
      marginBottom: 24,
      width: '100%',
      paddingHorizontal: 24
    },
    nameContainer: { alignItems: 'center' },
    avatarContainer: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 12
    },
    avatar: {
      height: avatarUrl ? 120 : 96,
      width: avatarUrl ? 120 : 60,
      borderRadius: avatarUrl ? 100 : 0
    }
  })
}

export default dynamicStyles
