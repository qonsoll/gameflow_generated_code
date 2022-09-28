import { StyleSheet } from 'react-native'
import { theme } from '~/styles/theme'

const dynamicStyles = (size) => {
  return StyleSheet.create({
    fastImage: {
      width: size || 130,
      height: size || 130,
      borderRadius: (size || 130) / 2
    },
    defaultAvatarContainer: {
      borderRadius: (size || 130) / 2,
      backgroundColor: theme.COLORS.white,
      height: size || 130,
      width: size || 130,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    defaultAvatar: {
      height: size / 1.35 || 96,
      width: size / 2.16 || 60
    },
    avatarContainer: { marginBottom: 12 }
  })
}

export default dynamicStyles
