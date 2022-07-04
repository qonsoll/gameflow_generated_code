import { firebase as RNFBAuth } from '@react-native-firebase/auth'
import appleAuth from '@invertase/react-native-apple-authentication'
import firestore from '@react-native-firebase/firestore'
import messaging from '@react-native-firebase/messaging'

const usersRef = firestore().collection('users')

const signInWithCredential = (authManager, credential, fullName) => {
  return new Promise((resolve, _reject) => {
    authManager
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        const isNewUser = response.additionalUserInfo.isNewUser
        const { uid, email, photoURL } = response.user
        const { firstName, lastName } = fullName

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

const loginWithApple = (identityToken, nonce, fullName) => {
  const appleCredential = RNFBAuth.auth.AppleAuthProvider.credential(
    identityToken,
    nonce
  )

  return new Promise((resolve, _reject) => {
    signInWithCredential(RNFBAuth, appleCredential, fullName).then(
      (response) => {
        resolve(response)
      }
    )
  })
}

export const loginOrSignUpWithApple = () => {
  return new Promise(async (resolve, _reject) => {
    try {
      const appleAuthRequestResponse = await appleAuth?.performRequest({
        requestedOperation: appleAuth?.Operation?.LOGIN,
        requestedScopes: [appleAuth?.Scope?.EMAIL, appleAuth?.Scope?.FULL_NAME]
      })

      const { identityToken, nonce } = appleAuthRequestResponse

      const fullName = {
        firstName: appleAuthRequestResponse?.fullName?.givenName,
        lastName: appleAuthRequestResponse?.fullName?.familyName
      }

      loginWithApple(identityToken, nonce, fullName).then(async (response) => {
        if (response?.user) {
          const newResponse = {
            user: { ...response.user },
            accountCreated: response.accountCreated
          }
          handleSuccessfulLogin(newResponse.user, response.accountCreated)
        }
      })
    } catch (error) {
      console.log(error)
    }
  })
}
