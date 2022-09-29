import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

const dynamicStyles = () =>
  StyleSheet.create({
    wrapper: { width: '100%' },
    divider: { margin: theme.COMPONENTS.Container.offset + 'px' }
  })

export default dynamicStyles
