import firestore from '@react-native-firebase/firestore'
import { useEffect, useState } from 'react'
import { buildQuery } from '../helpers'

const useDocument = (props) => {
  const { ref = '' } = props
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(!!ref)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [collectionName, documentId] = ref.split('/')
        const snapshotRef = buildQuery(
          firestore().collection(collectionName).doc(documentId),
          props
        )
        const querySnapshot = await snapshotRef.get()
        setData(querySnapshot.data())
      } catch (err) {
        setError(err)
      }
      setLoading(false)
    }
    ref && fetchData()
  }, [ref, props])

  return [data, loading, error]
}

export default useDocument
