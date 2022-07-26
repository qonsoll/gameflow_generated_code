import { COLLECTIONS } from '~/constants'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { parseEmailDisplayName } from '../parse'

const usersRef = firestore().collection(COLLECTIONS.USERS)

const signUpWithCredentials = async (_email, _password) => {
  const response = await auth().createUserWithEmailAndPassword(
    _email,
    _password
  )
  const { uid, email, photoURL, displayName } = response?.user

  let firstName = null
  let lastName = null

  if (displayName) {
    firstName = displayName.split(' ')[0]
    lastName = displayName.split(' ')[1]
  } else {
    const _displayName = parseEmailDisplayName(_email)
    firstName = _displayName.firstName
    lastName = _displayName.lastName
  }

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

export { signUpWithCredentials }
export default signUpWithCredentials
