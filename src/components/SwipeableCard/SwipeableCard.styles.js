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
    height: theme.COMPONENTS.BUTTONS.sizes.md.height,
    width: theme.COMPONENTS.BUTTONS.sizes.md.height,
    backgroundColor:
      theme.COMPONENTS.BUTTONS.variants.lightDanger.backgroundColor,
    borderRadius: theme.COMPONENTS.BUTTONS.borderRadiuses.sm,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  editButton: {
    marginLeft: -24,
    justifyContent: 'center',
    alignItems: 'center',
    height: theme.COMPONENTS.BUTTONS.sizes.md.height,
    width: theme.COMPONENTS.BUTTONS.sizes.md.height,
    backgroundColor:
      theme.COMPONENTS.BUTTONS.variants.lightGrey.backgroundColor,
    borderRadius: theme.COMPONENTS.BUTTONS.borderRadiuses.sm
  },
  actionsWrapper: { flexDirection: 'row', paddingRight: 24 }
})

export default styles
