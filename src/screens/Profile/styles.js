import { StyleSheet } from 'react-native'
import theme from '../../../theme'

const dynamicStyles = () => {
  return StyleSheet.create({
    checkMarkStyles: { width: 28, height: 28 },
    phoneInput: {
      height: 50,
      backgroundColor: theme.CORE.COLORS['input-background'],
      fontSize: 16,
      borderWidth: 1,
      borderRadius: theme.CORE.BORDER_RADIUSES.md2,
      flex: 1,
      color: theme.CORE.COLORS['grey-t-4'],
      borderColor: theme.CORE.COLORS['input-border-color'],
      paddingVertical: 12,
      paddingHorizontal: 10,
      marginBottom: 32
    },
    wrapper: {
      width: '100%',
      paddingHorizontal: 24
    },
    container: { flexDirection: 'row', flex: 1, height: '100%' },
    input: { height: 50 },
    phoneContainer: { height: 80, width: '100%' },
    button: {
      height: 50,
      borderRadius: 10,
      marginBottom: 32
    },
    buttonContainer: {
      paddingBottom: 250
    },
    inputFontSize: {
      fontSize: 18
    },
    textStyle: {
      fontSize: 16,
      flex: 1,
      color: theme.CORE.COLORS['grey-t-4']
    }
  })
}

export default dynamicStyles
