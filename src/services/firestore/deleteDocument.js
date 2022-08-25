import firestore from '@react-native-firebase/firestore'

/**
 * It creates a document in a collection with a given ID
 * @param collectionPath - The path to the collection you want to create a document in.
 * @param documentData - The data you want to store in the document.
 * @param id - The id of the document to create. If not provided, a random id will be generated.
 * @returns The id of the document that was created.
 */
const deleteDocument = async (collectionPath, id) => {
  await firestore().collection(collectionPath).doc(id).delete()
}

export default deleteDocument
