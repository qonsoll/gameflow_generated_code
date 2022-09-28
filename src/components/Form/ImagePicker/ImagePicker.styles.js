import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = (size) => {
  return StyleSheet.create({
    fastImage: {
      width: size || 130,
      height: size || 130,
      borderRadius: theme.BORDER_RADIUSES.sm
    },
    defaultAvatarContainer: {
      borderRadius: theme.BORDER_RADIUSES.sm,
      backgroundColor: theme.COLORS.white,
      height: size || 130,
      width: size || 130,
      alignItems: 'center',
      justifyContent: 'center'
    },
    defaultAvatar: {},
    avatarContainer: { marginBottom: 12 },
    wrapper: { alignItems: 'center' }
  })
}

export default dynamicStyles
