import firestore from '@react-native-firebase/firestore'

/**
 * It returns the id of a document in a collection
 * @returns The id of the document
 */
const getId = (collectionPath) => {
  const ref = firestore().collection(collectionPath).doc()
  return ref.id
}

export default getId
