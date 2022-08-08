import { Keyboard, LayoutAnimation } from 'react-native'
import { useEffect, useState } from 'react'

/**
 * It returns a boolean value that indicates whether the keyboard is opened or not
 * @returns A boolean value that indicates whether the keyboard is opened or not.
 */
const useKeyboardWithAnimationPresetState = () => {
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

export default useKeyboardWithAnimationPresetState
