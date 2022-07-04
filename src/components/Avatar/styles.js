import { StyleSheet } from 'react-native'

const dynamicStyles = (theme, size) => {
  return StyleSheet.create({
    editIconBorder: {
      width: 38,
      height: 38,
      borderRadius: 50,
      backgroundColor: '#f6f9fd',
      position: 'absolute',
      bottom: -12,
      right: -12,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    },
    editIconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 32,
      height: 32,
      backgroundColor: theme.CORE.COLORS['primary-default'],
      borderRadius: 50
    },
    editIcon: {
      height: 20,
      width: 20,
      tintColor: '#fff'
    },

    fastImage: { width: size || 130, height: size || 130, borderRadius: 12 },
    defaultAvatarContainer: {
      borderRadius: 14,
      backgroundColor: theme.CORE.COLORS.white,
      height: size || 130,
      width: size || 130,
      alignItems: 'center',
      justifyContent: 'flex-end',
      borderWidth: 2,
      borderColor: '#C18AA4'
    },
    defaultAvatar: {
      height: size / 1.35 || 96,
      width: size / 2.16 || 60
    }
  })
}

export default dynamicStyles
