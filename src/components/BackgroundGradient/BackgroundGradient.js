import { Dimensions, View } from 'react-native'
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'

import Color from 'color'
import PropTypes from 'prop-types'
import React from 'react'
import dynamicStyles from './styles'

const { width, height } = Dimensions.get('screen')

const BackgroundGradient = (props) => {
  const { color } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()

  // [COMPUTED_PROPERTIES]
  const stopColor = color || styles.stopColor
  const lighterColor = Color(stopColor).lighten(0.2).toString()

  return (
    <View width={width} height={height} style={styles.wrapper}>
      <Svg>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="40%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={stopColor} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
    </View>
  )
}

BackgroundGradient.propTypes = {
  color: PropTypes.string
}

export default BackgroundGradient
