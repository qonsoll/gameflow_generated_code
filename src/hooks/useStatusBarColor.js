import { useEffect, useState } from 'react'

import statusBarColorsMap from '../constants/statusBarColorsMap'
import { useNavigationState } from '@react-navigation/native'

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
