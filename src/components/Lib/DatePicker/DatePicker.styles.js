import { StyleSheet } from 'react-native'

const dynamicStyles = (props) => {
  const { buttonStyles = {} } = props

  return StyleSheet.create({
    buttonStyles
  })
}

export default dynamicStyles
