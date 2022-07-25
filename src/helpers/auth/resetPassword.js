import auth from '@react-native-firebase/auth'

const resetPassword = (email) => {
  return auth().sendPasswordResetEmail(email)
}

export { resetPassword }
export default resetPassword
