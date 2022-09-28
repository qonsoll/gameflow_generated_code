import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const styles = StyleSheet.create({
  removeIcon: {
    width: theme.COMPONENTS.Icon.iconSizes.md,
    height: theme.COMPONENTS.Icon.iconSizes.md
  },
  editIcon: {
    width: theme.COMPONENTS.Icon.iconSizes.md,
    height: theme.COMPONENTS.Icon.iconSizes.md
  },
  removeButton: {
    height: '100%',
    width: 64,
    backgroundColor: theme.COLORS['danger-lighten-1'],
    justifyContent: 'center',
    alignItems: 'center'
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 64,
    backgroundColor: theme.COLORS['grey-7']
  },
  actionsWrapper: { flexDirection: 'row' }
})

export default styles
