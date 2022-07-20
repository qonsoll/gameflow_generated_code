import appleAuth from '@invertase/react-native-apple-authentication'
import auth from '@react-native-firebase/auth'
import jwt_decode from 'jwt-decode'
import signInWithCredential from './signInWithCredential'

const getAppleCredential = async ({ identityToken, nonce }) => {
  // Create a Firebase credential from the response
  const appleCredential = await auth.AppleAuthProvider.credential(
    identityToken,
    nonce
  )

  return appleCredential
}

const loginWithApple = async ({ appleAuthRequestResponse, email }) => {
  // Get Apple credential
  const appleCredential = await getAppleCredential({
    identityToken: appleAuthRequestResponse?.identityToken,
    nonce: appleAuthRequestResponse?.nonce
  })
  // Sign in with Apple credential
  signInWithCredential(appleCredential)
}

const getAppleAuthData = async () => {
  // Performs login request
  const appleAuthRequestResponse = await appleAuth?.performRequest({
    requestedOperation: appleAuth?.Operation?.LOGIN,
    requestedScopes: [appleAuth?.Scope?.EMAIL, appleAuth?.Scope?.FULL_NAME]
  })

  // Getting the email after the first login
  const { email } = jwt_decode(appleAuthRequestResponse.identityToken)
  return [appleAuthRequestResponse, email?.toLowerCase()]
}

const loginOrSignUpWithApple = async () => {
  // Getting Apple auth data
  const [appleAuthRequestResponse, email] = await getAppleAuthData()

  // Getting apple credentials
  loginWithApple({ appleAuthRequestResponse, email })
}

export { loginOrSignUpWithApple }
