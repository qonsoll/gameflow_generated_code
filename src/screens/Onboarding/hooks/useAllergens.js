import { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

const useAllergens = () => {
  const [allergens, setAllergens] = useState(null)

  // Set initial state
  useEffect(() => {
    const getInitialData = async () => {
      // Get selected allergens
      const data = await AsyncStorage.getItem('@allergens')
      data && setAllergens([...JSON.parse(data)])
    }
    if (!allergens) {
      getInitialData()
    }
  }, [allergens])

  return [allergens, setAllergens]
}

export default useAllergens
