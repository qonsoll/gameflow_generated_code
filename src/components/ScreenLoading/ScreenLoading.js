import { Box, Spinner, Text } from '@qonsoll/react-native-design'

import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'
import React from 'react'
import dynamicStyles from './styles'

const ScreenLoading = (props) => {
  const { text } = props
  const styles = dynamicStyles()

  return (
    <LinearGradient colors={['#fff', '#fff']} style={styles.wrapper}>
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
    </LinearGradient>
  )
}

ScreenLoading.propTypes = { text: PropTypes.string.isRequired }

export default ScreenLoading
