import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'

import Color from 'color'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from 'react-native'
import dynamicStyles from './styles'

/**
 * It renders a radial gradient SVG with a stop color that is 20% lighter than the color passed in as a
 * prop
 * @param color - The color of the gradient.
 * @returns A View component with a width and height of the screen, and a style of wrapper. Inside the
 * View component is an Svg component. Inside the Svg component is a Defs component. Inside the Defs
 * component is a RadialGradient component. Inside the RadialGradient component are two Stop
 * components.
 */
const BackgroundGradient = (props) => {
  const { color } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()

  // [COMPUTED_PROPERTIES]
  const stopColor = color || styles.stopColor
  const lighterColor = Color(stopColor).lighten(0.2).toString()

  return (
    <View style={styles.wrapper}>
      <Svg>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="40%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={stopColor} />
          </RadialGradient>
        </Defs>
        <Rect
          x={0}
          y={0}
          width={styles.width}
          height={styles.height}
          fill="url(#gradient)"
        />
      </Svg>
    </View>
  )
}

BackgroundGradient.propTypes = {
  color: PropTypes.string
}

export default BackgroundGradient
