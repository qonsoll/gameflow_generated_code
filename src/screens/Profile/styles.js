import { StyleSheet } from 'react-native'
import theme from '../../../theme'

const dynamicStyles = ({} = {}) => {
  return StyleSheet.create({
    divider: { marginLeft: 3 },
    checkMarkStyles: { width: 28, height: 28 },
    phoneInput: {
      height: 50,
      backgroundColor: theme.CORE.COLORS['input-background'],
      fontSize: 16,
      borderWidth: 1,
      borderRadius: theme.CORE.BORDER_RADIUSES.md,
      flex: 1,
      color: theme.CORE.COLORS['grey-t-4'],
      borderColor: theme.CORE.COLORS['input-border-color'],
      paddingVertical: 12,
      paddingHorizontal: 10,
      marginBottom: 32
    },
    container: {
      flexDirection: 'row',
      flex: 1,
      height: '100%'
    },
    phoneContainer: { height: 80, width: '100%' },
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
    },
    itemContainer: {
      marginBottom: 36,
      width: '100%',
      backgroundColor: theme.COMPONENTS.CARD.backgroundColor,
      borderRadius: theme.COMPONENTS.CARD.borderRadiuses.sm
    },
    formContainer: {
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 10,
      justifyContent: 'center',
      marginBottom: 4,
      paddingLeft: 4,
      paddingVertical: 4,
      overflow: 'hidden'
    },
    input: {
      fontFamily: theme.CORE.FONT_FAMILIES.body,
      fontSize: theme.CORE.FONT_SIZES.body
    },
    description: {
      fontSize: theme.CORE.FONT_SIZES.footnote,
      lineHeight: theme.CORE.LINE_HEIGHTS.footnote
    },
    button: {
      backgroundColor: theme.CORE.COLORS.white,
      borderRadius: 10,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    icon: { textAlign: 'center' },
    iconWrapper: {
      backgroundColor: theme.CORE.COLORS['grey-7'],
      borderRadius: 10,
      width: 16,
      height: 16,
      justifyContent: 'center',
      marginRight: 12
    }
  })
}

export default dynamicStyles
