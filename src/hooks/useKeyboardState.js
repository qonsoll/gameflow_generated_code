import { useEffect, useState } from 'react'

import { Keyboard, LayoutAnimation } from 'react-native'

/**
 * It returns a boolean value that indicates whether the keyboard is opened or not
 * @returns A boolean value that indicates whether the keyboard is opened or not.
 */
const useKeyboardState = () => {
  const [opened, setOpened] = useState()

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        setOpened(true)
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        setOpened(false)
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return opened
}

export default useKeyboardState
