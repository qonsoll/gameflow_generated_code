import firestore from '@react-native-firebase/firestore'
import { useEffect, useState } from 'react'

const useDocument = (props) => {
  const { ref = '' } = props
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(!!ref)
  const [error, setError] = useState(null)

  useEffect(() => {
    const [collectionName, documentId] = ref.split('/')

    const subscriber = firestore()
      .collection(collectionName)
      .doc(documentId)
      .onSnapshot((snapshot) => {
        try {
          setData(snapshot.data())
          setLoading(false)
        } catch (e) {
          setError(e)
        }
      })

    return () => subscriber()
  }, [ref, props])

  return [data, loading, error]
}

export default useDocument
