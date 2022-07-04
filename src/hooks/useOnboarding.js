import { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

const useOnboarding = () => {
  const [isOnboardingShoved, setIsOnboardingShoved] = useState(null)

  // Set initial state
  useEffect(() => {
    const getIsOnboardingShoved = async () => {
      const data = await AsyncStorage.getItem('@isOnboardingShoved')
      setIsOnboardingShoved(data || 'false')
    }
    getIsOnboardingShoved()
  }, [])

  return [isOnboardingShoved]
}

export default useOnboarding
