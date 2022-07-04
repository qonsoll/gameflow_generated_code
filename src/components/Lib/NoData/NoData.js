import { Box, Text } from '@qonsoll/react-native-design'

import PropTypes from 'prop-types'
import React from 'react'

const NoData = (props) => {
  const { text, height = 200 } = props
  return (
    <Box height={height} alignItems="center" justifyContent="center">
      <Text color="grey-6" variant="body1">
        {text}
      </Text>
    </Box>
  )
}

NoData.propTypes = { text: PropTypes.string.isRequired }

export default NoData
