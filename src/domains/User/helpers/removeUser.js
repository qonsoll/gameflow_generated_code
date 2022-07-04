import firestore from '@react-native-firebase/firestore'

const removeUser = async ({ uid }) => {
  const request = await fetch(
    `https://us-central1-can-eat-prod.cloudfunctions.net/users/${uid}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        origin: 'caneatbackend'
      }
    }
  )

  if (request?.ok) {
    // Delete user
    await firestore().collection('users').doc(uid).delete()
  } else {
    console.error('User not deleted')
  }
}

export default removeUser
