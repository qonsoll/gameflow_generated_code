import { StyleSheet } from 'react-native'

const pickerSelectStyles = (theme, error) =>
  StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: error
        ? theme.CORE.COLORS['danger-default']
        : theme.CORE.COLORS['input-border-color'],
      backgroundColor: theme.CORE.COLORS['input-background'],
      borderRadius: theme.CORE.BORDER_RADIUSES.md2,
      color: theme.CORE.COLORS['grey-t-4'],
      paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: error
        ? theme.CORE.COLORS['danger-default']
        : theme.CORE.COLORS['input-border-color'],
      backgroundColor: theme.CORE.COLORS['input-background'],
      borderRadius: theme.CORE.BORDER_RADIUSES.md2,
      color: theme.CORE.COLORS['grey-t-4'],
      paddingRight: 30 // to ensure the text is never behind the icon
    },
    iconContainer: {
      justifyContent: 'center',
      paddingRight: 10,
      height: '100%'
    }
  })

export default pickerSelectStyles
