import firestore from '@react-native-firebase/firestore'
import { useEffect, useState } from 'react'
import { buildQuery } from '../helpers'

const useCollection = (props) => {
  const { ref = '' } = props
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      let snapshotRef = buildQuery(firestore().collection(ref), props)

      setLoading(true)
      try {
        const querySnapshot = await snapshotRef.get()
        setData(querySnapshot.docs.map((item) => item.data()))
      } catch (err) {
        setError(err)
      }
      setLoading(false)
    }
    fetchData()
  }, [ref, props])

  return [data, loading, error]
}

export default useCollection
