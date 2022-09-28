import {
  statusBarBackgroundMap,
  statusBarColorsMap
} from '../__constants__/statusBarColorsMap'

import { StatusBar } from 'react-native'
import { isAndroid } from '../__constants__'
import { useMemo } from 'react'
import { useNavigationState } from '@react-navigation/native'

/**
 * It gets the current route name, then sets the status bar color based on the route name
 */
const useStatusBarColor = () => {
  /* Get all navigation routes list */
  const routes = useNavigationState((s) => s?.routes)
  /* Computing current route */
  const currentRoute = useMemo(() => routes?.[routes?.length - 1]?.name, [
    routes
  ])
  /* Computing status bar color */
  const statusBarColor = useMemo(
    () => statusBarColorsMap[currentRoute] || statusBarColorsMap.default,
    [currentRoute]
  )
  /* Computing status bar background color */
  const statusBarBackground = useMemo(
    () =>
      statusBarBackgroundMap[currentRoute] || statusBarBackgroundMap.default,
    [currentRoute]
  )

  /* Setting status bar color */
  if (statusBarColor) {
    StatusBar.setBarStyle(statusBarColor, true)
    isAndroid && StatusBar.setBackgroundColor(statusBarBackground, true)
  }
}

export default useStatusBarColor
