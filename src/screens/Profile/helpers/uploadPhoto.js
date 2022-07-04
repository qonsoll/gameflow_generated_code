import storage from '@react-native-firebase/storage'

const uploadPhoto = async ({ userData, _id }) => {
  const path = userData?.avatarUrl

  // Path to file on storage
  const reference = await storage().ref('avatars').child(_id)

  // Uploads file
  await reference.putFile(path)

  // Get download URL
  const url = await storage().ref(`avatars/${_id}`).getDownloadURL()

  return url
}

export default uploadPhoto
