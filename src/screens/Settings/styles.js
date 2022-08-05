import { StyleSheet } from 'react-native'
import theme from '../../../theme'

const dynamicStyles = () => {
  return StyleSheet.create({
    wrapper: {
      width: '100%',
      paddingHorizontal: 12,
      marginBottom: 32
    },
    logo: { width: 140, height: 100, marginBottom: 24 },
    item: {
      height: theme.COMPONENTS.BUTTONS.sizes.md.height,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16
    },
    itemWithMargin: { marginBottom: 32 },
    arrowIcon: {
      width: theme.COMPONENTS.ICON.iconSizes.md,
      height: theme.COMPONENTS.ICON.iconSizes.md
    },
    text: { lineHeight: 20, fontSize: 16, fontWeight: '500' },
    icon: {
      width: theme.COMPONENTS.ICON.iconSizes.sm,
      height: theme.COMPONENTS.ICON.iconSizes.sm,
      tintColor: theme.COMPONENTS.ICON.variants.lightGrey.backgroundColor
    },
    textWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: '80%'
    },
    container: {
      width: '100%',
      backgroundColor: theme.COMPONENTS.CARD.backgroundColor,
      borderRadius: theme.COMPONENTS.CARD.borderRadiuses.sm
    },
    iconContainer: {
      backgroundColor: 'green',
      borderRadius: 6,
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16
    }
  })
}

export default dynamicStyles
