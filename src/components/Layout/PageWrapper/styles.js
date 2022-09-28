import { StyleSheet } from 'react-native'
import { isIOS } from '~/__constants__'
import { theme } from '~/styles'

const dynamicStyles = ({
  logoColor,
  leftIconColor,
  rightIconColor,
  title,
  bgColor
}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: bgColor || theme.COLORS['page-wrapper-background']
    },
    headerContainer: {
      width: '100%',
      marginBottom: isIOS ? (title ? 12 : -20) : title ? 12 : 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingTop: isIOS ? 40 : 0,
      height: isIOS ? 88 : 48
    },
    title: {
      height: 52,
      justifyContent: 'center'
    },
    leftButton: {
      flexDirection: 'row',
      alignItems: 'center',
      height: isIOS ? 52 : 44,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      paddingHorizontal: 16,
      top: isIOS ? 36 : 0
    },
    leftIcon: {
      width: 32,
      height: 32,
      tintColor: leftIconColor || theme.COLORS['primary-default']
    },
    rightButton: {
      height: isIOS ? 52 : 44,
      justifyContent: 'center',
      position: 'absolute',
      right: 0,
      paddingHorizontal: 16,
      top: isIOS ? 36 : 0,
      flexDirection: 'row',
      alignItems: 'center'
    },
    rightIcon: {
      width: 32,
      height: 32,
      tintColor: rightIconColor || theme.COLORS['primary-default']
    },
    language: {
      position: 'absolute',
      right: 24,
      top: 18,
      backgroundColor: theme.COLORS['grey-10'],
      height: 40,
      width: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      ...theme.SHADOWS.xs,
      shadowOffset: { width: 0, height: 0 },
      zIndex: 4
    },
    scrollView: theme.COMPONENTS.Container.scrollWrapper,
    scrollViewContent: theme.COMPONENTS.Container.scrollContent,
    avatarContainer: { position: 'absolute', right: 24, top: 24 }
  })
}

export default dynamicStyles
