import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'

import Color from 'color'
import { Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import theme from '../../../theme'

const { width, height } = Dimensions.get('screen')

const BackgroundGradient = (props) => {
  const { color } = props

  // [COMPUTED_PROPERTIES]
  const lighterColor = Color(color || theme.CORE.COLORS['primary-default'])
    .lighten(0.2)
    .toString()

  return (
    <Svg>
      <Defs>
        <RadialGradient id="gradient" cx="50%" cy="40%">
          <Stop offset="0%" stopColor={lighterColor} />
          <Stop
            offset="100%"
            stopColor={color || theme.CORE.COLORS['primary-default']}
          />
        </RadialGradient>
      </Defs>
      <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
    </Svg>
  )
}

BackgroundGradient.propTypes = {
  color: PropTypes.string
}

export default BackgroundGradient
