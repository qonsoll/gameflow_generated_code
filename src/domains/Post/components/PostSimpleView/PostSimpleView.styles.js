import { StyleSheet } from 'react-native'
import theme from '../../../../../theme'

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.COMPONENTS.CARD.backgroundColor,
    minHeight: 48,
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 24
  },
  container: {
    flexDirection: 'row'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%'
  }
})

export default styles
