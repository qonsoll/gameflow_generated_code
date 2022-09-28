import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = () => {
  return StyleSheet.create({
    shadowContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.COLORS['black-t-lighten3'],
      position: 'absolute'
    },
    input: { height: 200, alignItems: 'flex-start' },
    button: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: { width: 28, height: 28 },
    removeIcon: {
      tintColor: theme.COLORS['danger-default']
    },
    noDataContainer: {
      width: '100%',
      alignItems: 'center',
      height: 100,
      justifyContent: 'center'
    },
    modalWrapper: {
      flex: 1,
      justifyContent: 'flex-end'
    },
    modalEmptyContainer: { flex: 1 },
    modalContainer: {
      paddingTop: 16,
      zIndex: 3,
      maxHeight: '50%',
      width: '100%',
      backgroundColor: theme.COLORS['card-background'],
      borderTopLeftRadius: theme.BORDER_RADIUSES.md,
      borderTopRightRadius: theme.BORDER_RADIUSES.md
    },
    modalHeader: {
      borderColor: theme.COLORS.white
    }
  })
}

export default dynamicStyles
