import { firebase as RNFBAuth } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import messaging from '@react-native-firebase/messaging'
// import * as Facebook from 'expo-facebook'

const usersRef = firestore().collection('users')

const signInWithCredential = (authManager, credential) => {
  return new Promise((resolve, _reject) => {
    authManager
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        const isNewUser = response.additionalUserInfo.isNewUser
        const { first_name, last_name } = response.additionalUserInfo.profile
        const { uid, email, phoneNumber, photoURL, displayName } = response.user

        console.log(response)
        if (isNewUser) {
          const timestamp = firestore.FieldValue.serverTimestamp()
          const userData = {
            _id: uid,
            _createdAt: timestamp,
            email: email || '',
            firstName: first_name || '',
            lastName: last_name || '',
            displayName: displayName || '',
            phone: phoneNumber || null,
            profilePictureURL: photoURL || null
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

const loginWithFacebook = (accessToken, appIdentifier) => {
  const credential = RNFBAuth.auth.FacebookAuthProvider.credential(accessToken)

  return new Promise((resolve, _reject) => {
    signInWithCredential(RNFBAuth, credential, appIdentifier).then(
      (response) => {
        resolve(response)
      }
    )
  })
}

export const loginOrSignUpWithFacebook = () => {
  // Facebook.initializeAsync('289148443091766')
  // return new Promise(async (resolve, _reject) => {
  //   try {
  //     const { type, token } = await Facebook.logInWithReadPermissionsAsync({
  //       permissions: ['public_profile', 'email']
  //     })
  //     if (type === 'success') {
  //       // Get the user's name using Facebook's Graph API
  //       // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
  //       // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
  //       loginWithFacebook(token, 'io.rn.ios.otvet').then(async (response) => {
  //         if (response?.user) {
  //           const newResponse = {
  //             user: { ...response.user },
  //             accountCreated: response.accountCreated
  //           }
  //           handleSuccessfulLogin(newResponse.user, response.accountCreated)
  //         }
  //       })
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // })
}
