import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

const useSwipe = (
  onSwipeLeft = () => {},
  onSwipeRight = () => {},
  rangeOffset = 4
) => {
  let pageOffset = 0

  // set user touch start position
  const onTouchStart = (e) => {
    pageOffset = e.nativeEvent.pageX
  }

  // when touch ends check for swipe directions
  const onTouchEnd = (e) => {
    // get touch position and screen size
    const positionX = e.nativeEvent.pageX
    const range = windowWidth / rangeOffset

    // check if position is growing positively and has reached specified range
    if (positionX - pageOffset > range) {
      onSwipeRight?.()
    }
    // check if position is growing negatively and has reached specified range
    else if (pageOffset - positionX > range) {
      onSwipeLeft?.()
    }
  }

  return { onTouchStart, onTouchEnd }
}

export default useSwipe
