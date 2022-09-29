import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = () =>
  StyleSheet.create({
    selectWrapper: {
      display: 'flex',
      width: '100%'
    },
    description: {
      fontSize: theme.FONT_SIZES.footnote,
      lineHeight: theme.LINE_HEIGHTS.footnote,
      color: theme.COLORS['grey-t-5'],
      marginBottom: 8
    }
  })

export default dynamicStyles
