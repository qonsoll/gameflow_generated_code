import { useEffect, useState } from 'react'

import statusBarColorsMap from '../__constants__/statusBarColorsMap'
import { useNavigationState } from '@react-navigation/native'

/**
 * It returns the status bar color for the current route
 * @returns An array with a single element, statusBarColor.
 */
const useStatusBarColor = () => {
  const [statusBarColor, setStatusBarColor] = useState(null)

  const routes = useNavigationState?.((state) => state?.routes)
  const currentRoute = routes?.[routes?.length - 1]?.name

  useEffect(() => {
    if (currentRoute) {
      setStatusBarColor(statusBarColorsMap[currentRoute])
    }
  }, [currentRoute])

  return [statusBarColor]
}

export default useStatusBarColor
