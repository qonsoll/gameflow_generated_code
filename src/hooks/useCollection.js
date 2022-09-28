import { useEffect, useState } from 'react'

import { buildQuery } from '../helpers'
import firestore from '@react-native-firebase/firestore'

const useCollection = (props) => {
  const { ref = '' } = props
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(!!ref)
  const [error, setError] = useState(null)

  useEffect(() => {
    const subscriber = buildQuery(
      firestore().collection(ref),
      props
    ).onSnapshot((snapshot) => {
      try {
        const items = snapshot.docs.map((doc) => ({ ...doc.data() }))
        setData(items)
        setLoading(false)
      } catch (e) {
        setError(e)
      }
    })

    return () => subscriber()
  }, [ref, props])

  return [data, loading, error]
}

export default useCollection
