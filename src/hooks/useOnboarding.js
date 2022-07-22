import { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * It returns a boolean value that indicates whether the onboarding has been shoved or not
 * @returns An array with a single element, isOnboardingShoved.
 */
const useOnboarding = () => {
  const [isOnboardingShoved, setIsOnboardingShoved] = useState(null)

  // Set initial state
  useEffect(() => {
    let mounted = true
    const getIsOnboardingShoved = async () => {
      const data = await AsyncStorage.getItem('@isOnboardingShoved')
      mounted && setIsOnboardingShoved(data || 'false')
    }
    mounted && getIsOnboardingShoved()
    return () => {
      mounted = false
    }
  }, [])

  return [isOnboardingShoved]
}

export default useOnboarding
