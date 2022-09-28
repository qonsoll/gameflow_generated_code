import { StyleSheet } from 'react-native'
import { WINDOW_WIDTH } from '~/__constants__'
import { theme } from '~/styles'

const dynamicStyles = ({ routesCount }) => {
  const themeComponent = theme.COMPONENTS.BottomTabs.variants.default
  const height = themeComponent.height
  const tabWidth = WINDOW_WIDTH / routesCount

  return StyleSheet.create({
    tabContainer: {
      height,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      borderRadius: themeComponent.borderRadius,
      display: 'flex',
      overflow: 'hidden'
    },
    shadowContainer: {
      position: 'absolute',
      height,
      width: '100%',
      bottom: themeComponent.bottomOffset,
      paddingHorizontal: themeComponent.px,
      borderRadius: themeComponent.borderRadius,
      ...theme.SHADOWS.sm,
      shadowOffset: { width: 2, height: 4 }
    },
    buttonContainer: {
      width: tabWidth,
      height,
      alignItems: 'center',
      justifyContent: 'center'
    },
    focusButtonContainer: {
      width: tabWidth,
      height,
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      height: theme.ICON_SIZES.md,
      width: theme.ICON_SIZES.md,
      marginBottom: 0
    },
    focusTintColor: { tintColor: theme.COLORS.white },
    unFocusTintColor: { tintColor: theme.COLORS['white-t-lighten2'] },
    gradient: themeComponent.gradient
  })
}

export default dynamicStyles
