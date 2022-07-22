import { useEffect, useState } from 'react'

import { Keyboard } from 'react-native'

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
        setOpened(true)
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
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
