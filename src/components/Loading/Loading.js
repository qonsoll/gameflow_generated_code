import { Box, Spinner, Text } from '@qonsoll/react-native-design'
import React from 'react'
import PropTypes from 'prop-types'

const Loading = (props) => {
  const { text } = props

  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      flexDirection="row">
      <Box mr={8}>
        <Spinner colorCode="#07272D" />
      </Box>
      <Text>{text}...</Text>
    </Box>
  )
}

Loading.propTypes = { text: PropTypes.string.isRequired }

export default Loading
