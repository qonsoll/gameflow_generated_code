import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = (props) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      marginBottom: 32
    },
    container: {
      width: '100%',
      backgroundColor: theme.COMPONENTS.Card.backgroundColor,
      borderRadius: theme.COMPONENTS.Card.borderRadiuses.sm
    },
    cardWrapper: { padding: 16, marginBottom: 32 },
    description: { paddingLeft: 16, marginBottom: 4 },
    image: {
      width: '100%',
      height: 200,
      borderRadius: theme.BORDER_RADIUSES.md
    }
  })

export default dynamicStyles
