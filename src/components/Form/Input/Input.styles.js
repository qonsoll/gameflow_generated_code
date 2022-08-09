import { StyleSheet } from 'react-native'
import theme from '../../../../theme'

const dynamicStyles = (props) =>
  StyleSheet.create({
    input: {
      fontFamily: theme.CORE.FONT_FAMILIES.body,
      fontSize: theme.CORE.FONT_SIZES.body
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

export default dynamicStyles
