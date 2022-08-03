import firestore from '@react-native-firebase/firestore'

import { getId } from './'

/**
 * It creates a document in a collection with a given ID
 * @param collectionPath - The path to the collection you want to create a document in.
 * @param documentData - The data you want to store in the document.
 * @param id - The id of the document to create. If not provided, a random id will be generated.
 * @returns The id of the document that was created.
 */
const createDocument = async (collectionPath, documentData, id) => {
  const _id = id || getId(collectionPath)
  const ref = firestore().collection(collectionPath).doc(_id)
  await ref.set({
    ...documentData,
    _id,
    _createdAt: firestore.FieldValue.serverTimestamp()
  })

  return { id: _id }
}

export default createDocument
