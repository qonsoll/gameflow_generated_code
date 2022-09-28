import { StyleSheet } from 'react-native'

const dynamicStyles = (props) =>
  StyleSheet.create({
    wrapper: {
      height: '90%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

export default dynamicStyles
