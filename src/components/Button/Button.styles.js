import { StyleSheet } from 'react-native'
import theme from '../../../theme'

const dynamicStyles = (props) =>
  StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: theme.CORE.COLORS.white,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: theme.CORE.BORDER_RADIUSES.sm,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    textWrapper: { display: 'flex', flexDirection: 'row' }
  })

export default dynamicStyles
