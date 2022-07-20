import { COLLECTIONS } from '~/constants'
import Config from 'react-native-config'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Platform } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import messaging from '@react-native-firebase/messaging'
import signInWithCredential from './signInWithCredential'

const usersRef = firestore().collection(COLLECTIONS.USERS)
const WEB_CLIENT_ID =
  Platform.OS === 'ios'
    ? Config.GOOGLE_IOS_WEB_CLIENT_ID
    : Config.GOOGLE_ANDROID_WEB_CLIENT_ID

const loginWithGoogle = async (idToken) => {
  const credential = auth.GoogleAuthProvider.credential(idToken)
  const response = await signInWithCredential(credential)
  return response
}

const updateUser = async (userID, newData) => {
  const dataWithOnlineStatus = {
    ...newData,
    lastOnlineTimestamp: firestore().FieldValue.serverTimestamp()
  }
  return usersRef.doc(userID).set({ ...dataWithOnlineStatus }, { merge: true })
}

const fetchAndStorePushTokenIfPossible = async (user) => {
  const settings = await messaging().requestPermission()
  if (settings) {
    const token = await messaging().getToken()
    updateUser(user.id || user.userID, {
      pushToken: token,
      pushKitToken: '',
      badgeCount: 0
    })
  }
}

const loginOrSignUpWithGoogle = async () => {
  try {
    GoogleSignin.configure({ webClientId: WEB_CLIENT_ID })
    const { idToken } = await GoogleSignin.signIn()
    const response = await loginWithGoogle(idToken)

    if (response?.user) {
      const newResponse = {
        user: { ...response.user },
        accountCreated: response.accountCreated
      }
      console.log('Success fetching user from Google', newResponse)
      fetchAndStorePushTokenIfPossible(newResponse.user)
    }
  } catch (error) {
    console.error('Error fetching user from Google', error)
  }
}

export { loginOrSignUpWithGoogle }
export default loginOrSignUpWithGoogle
