import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Platform } from 'react-native'
import { firebase as RNFBAuth } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import messaging from '@react-native-firebase/messaging'

const usersRef = firestore().collection('users')

const signInWithCredential = (authManager, credential) => {
  return new Promise((resolve, _reject) => {
    authManager
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        const isNewUser = response?.additionalUserInfo?.isNewUser
        const { uid, email, photoURL, displayName } = response?.user

        const firstName = displayName?.split(' ')[0]
        const lastName = displayName?.split(' ')[1]

        const serviceFields = {
          _createdAt: firestore.FieldValue.serverTimestamp(),
          _updatedAt: null,
          _createdBy: uid,
          _isUpdated: false,
          _updatedBy: null
        }

        if (isNewUser) {
          const userData = {
            avatarUrl: photoURL || null,
            email: email || null,
            firstName,
            lastName,
            _id: uid,
            ...serviceFields
          }
          usersRef
            .doc(uid)
            .set(userData)
            .then(() => {
              resolve({
                user: { ...userData, id: uid, userID: uid },
                accountCreated: true
              })
            })
        }

        usersRef
          .doc(uid)
          .get()
          .then((document) => {
            const userData = document.data()
            resolve({
              user: { ...userData, id: uid, userID: uid },
              accountCreated: false
            })
          })
      })
      .catch((_error) => {
        console.log(_error)
      })
  })
}

const loginWithGoogle = (idToken) => {
  const credential = RNFBAuth.auth.GoogleAuthProvider.credential(idToken)

  return new Promise((resolve, _reject) => {
    signInWithCredential(RNFBAuth, credential).then((response) => {
      resolve(response)
    })
  })
}

const updateUser = async (userID, newData) => {
  const dataWithOnlineStatus = {
    ...newData,
    lastOnlineTimestamp: firestore().FieldValue.serverTimestamp()
  }
  return usersRef.doc(userID).set({ ...dataWithOnlineStatus }, { merge: true })
}

const fetchAndStorePushTokenIfPossible = async (user) => {
  try {
    const settings = await messaging().requestPermission()
    if (settings) {
      const token = await messaging().getToken()
      updateUser(user.id || user.userID, {
        pushToken: token,
        pushKitToken: '',
        badgeCount: 0
      })
    }
  } catch (error) {
    console.log(error)
  }
}

const handleSuccessfulLogin = (user) => {
  fetchAndStorePushTokenIfPossible(user)

  return new Promise((resolve) => {
    resolve({ user: { ...user } })
  })
}

export const loginOrSignUpWithGoogle = () => {
  const clientId =
    Platform.OS === 'ios'
      ? '612794922661-lerng0oantqp0gb02js3qq2lq7j88esk.apps.googleusercontent.com'
      : '' // NEED CHANGE FOR ANDROID

  GoogleSignin.configure({
    webClientId: clientId
  })

  return new Promise(async (resolve, _reject) => {
    const { idToken } = await GoogleSignin.signIn()

    loginWithGoogle(idToken).then(async (response) => {
      if (response?.user) {
        const newResponse = {
          user: { ...response.user },
          accountCreated: response.accountCreated
        }
        handleSuccessfulLogin(newResponse.user)
      }
    })
  })
}
