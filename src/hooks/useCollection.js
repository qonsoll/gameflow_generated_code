import firestore from '@react-native-firebase/firestore'
import { useEffect, useState } from 'react'
import { buildQuery } from '../helpers'

const useCollection = (props) => {
  const { ref = '' } = props
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(!!ref)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const snapshotRef = buildQuery(firestore().collection(ref), props)
        const querySnapshot = await snapshotRef.get()
        setData(querySnapshot.docs.map((item) => item.data()))
      } catch (err) {
        setError(err)
      }
      setLoading(false)
    }
    ref && fetchData()
  }, [ref, props])

  return [data, loading, error]
}

export default useCollection
