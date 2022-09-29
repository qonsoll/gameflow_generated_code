import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = () =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      backgroundColor: theme.COMPONENTS.Card.backgroundColor,
      borderRadius: theme.COMPONENTS.Card.borderRadius,
      minHeight: 40,
      justifyContent: 'center',
      padding: 4,
      marginBottom: 24,
      overflow: 'hidden'
    },
    descriptionWrapper: {
      height: null,
      minHeight: 44,
      marginBottom: 4,
      paddingBottom: 0
    },
    description: {
      color: theme.COMPONENTS.Typography.captionColor,
      marginHorizontal: 16,
      marginBottom: 24
    },
    formItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 6,
      minHeight: 40
    },
    label: {
      color: theme.COMPONENTS.Typography.captionColor,
      marginHorizontal: 16,
      marginBottom: 4
    }
  })

export default dynamicStyles
