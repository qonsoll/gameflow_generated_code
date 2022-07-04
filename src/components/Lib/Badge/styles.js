import { StyleSheet } from 'react-native'

const dynamicStyles = (theme, checked) => {
  const colors = theme.CORE.COLORS

  return StyleSheet.create({
    badgeMainWrapper: {
      width: 14,
      height: 14,
      backgroundColor: checked
        ? colors['grey-t-8']
        : colors['primary-lighten-3'],
      borderRadius: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 2
    },
    badge: {
      width: 8,
      height: 8,
      backgroundColor: checked ? colors['grey-t-6'] : colors['primary-default'],
      borderRadius: 50
    }
  })
}

export default dynamicStyles
