import { StyleSheet } from 'react-native'

const dynamicStyles = () => {
  return StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 12,
      height: 52,
      shadowColor: '#000',
      shadowOffset: {
        width: 4,
        height: 4
      },
      shadowOpacity: 0.06,
      shadowRadius: 4,
      marginBottom: 12
    },
    input: { box: { height: 50 } }
  })
}

export default dynamicStyles
