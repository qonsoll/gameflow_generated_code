import firestore from '@react-native-firebase/firestore'

/**
 * `getDocumentSnapshot` is a function that returns a document snapshot from a collection path and an
 * id
 * @param collectionPath - The path to the collection you want to get the document from.
 * @param id - the id of the document you want to get
 * @returns A document snapshot
 */
const getDocumentSnapshot = async (collectionPath, id) => {
  const ref = firestore().collection(collectionPath).doc(id)
  const docSnapshot = await ref.get()
  return docSnapshot
}

export default getDocumentSnapshot
