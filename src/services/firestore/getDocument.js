import firestore from '@react-native-firebase/firestore'

/**
 * It gets a document from a collection in Firestore
 * @param collectionPath - The path to the collection you want to get the document from.
 * @param id - The id of the document you want to get.
 * @returns The data from the document
 */
const getDocument = async (collectionPath, id) => {
  const ref = firestore().collection(collectionPath).doc(id)
  const docSnapshot = await ref.get()
  return docSnapshot.data()
}

export default getDocument
