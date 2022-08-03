import firestore from '@react-native-firebase/firestore'

/**
 * It updates a document in a collection
 * @param collectionPath - The path to the collection you want to update.
 * @param id - The id of the document you want to update.
 * @param data - The data to be updated.
 * @returns A promise that resolves to the data that was updated.
 */
const updateDocument = (collectionPath, id, data) => {
  const ref = firestore().collection(collectionPath).doc(id)
  return ref.update(data)
}

export default updateDocument
