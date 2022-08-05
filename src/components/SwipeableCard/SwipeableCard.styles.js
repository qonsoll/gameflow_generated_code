import { StyleSheet } from 'react-native'
import theme from '../../../theme'

const styles = StyleSheet.create({
  removeIcon: {
    tintColor: theme.COMPONENTS.ICON.variants.danger.backgroundColor,
    width: theme.COMPONENTS.ICON.iconSizes.md,
    height: theme.COMPONENTS.ICON.iconSizes.md
  },
  editIcon: {
    tintColor: theme.COMPONENTS.ICON.variants.black.backgroundColor,
    width: theme.COMPONENTS.ICON.iconSizes.md,
    height: theme.COMPONENTS.ICON.iconSizes.md
  },
  removeButton: {
    height: '100%',
    width: theme.COMPONENTS.BUTTONS.sizes.xl.width,
    backgroundColor: theme.CORE.COLORS['danger-lighten-1'],
    justifyContent: 'center',
    alignItems: 'center'
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: theme.COMPONENTS.BUTTONS.sizes.xl.width,
    backgroundColor: theme.CORE.COLORS['grey-7']
  },
  actionsWrapper: { flexDirection: 'row' }
})

export default styles
