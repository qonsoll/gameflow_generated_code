import { COLLECTIONS } from '~/constants'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const usersRef = firestore().collection(COLLECTIONS.USERS)

const signInWithCredentials = async (credential) => {
  const response = await auth().signInWithCredential(credential)
  const isNewUser = response?.additionalUserInfo?.isNewUser
  const { uid, email, photoURL, displayName } = response?.user

  if (isNewUser) {
    const firstName = displayName?.split(' ')[0]
    const lastName = displayName?.split(' ')[1]

    const userData = {
      avatarUrl: photoURL || null,
      email: email || null,
      firstName: firstName || null,
      lastName: lastName || null,
      _id: uid,
      // Service fields
      _createdAt: firestore.FieldValue.serverTimestamp(),
      _updatedAt: null,
      _createdBy: uid,
      _isUpdated: false,
      _updatedBy: null
    }
    await usersRef.doc(uid).set(userData)
    return {
      user: { ...userData, id: uid, userID: uid },
      accountCreated: true
    }
  }
  const userSnapshot = await usersRef.doc(uid).get()
  const userData = userSnapshot.data() || {}
  return {
    user: { ...userData, id: uid, userID: uid },
    accountCreated: false
  }
}

export { signInWithCredentials }
export default signInWithCredentials
