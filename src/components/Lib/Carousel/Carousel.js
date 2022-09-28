import { Dimensions } from 'react-native'
import LibCarousel from 'react-native-snap-carousel'
import React from 'react'
import { theme } from '~/styles'

const WINDOW_WIDTH = Dimensions.get('window').width

const carouselCardWidth = theme.COMPONENTS.Container.maxWidth

const Carousel = (props) => {
  return (
    <LibCarousel
      itemWidth={carouselCardWidth}
      sliderWidth={WINDOW_WIDTH + carouselCardWidth}
      {...props}
    />
  )
}

export default Carousel
