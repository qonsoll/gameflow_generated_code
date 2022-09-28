import { Text, View } from 'native-base'

import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'
import React from 'react'
import { Spinner } from '@qonsoll/react-native-design'
import dynamicStyles from './styles'

/**
 * It renders a loading screen with a spinner and text
 * @param text - The text to display next to the spinner.
 * @returns A function that returns a component
 */
const ScreenLoading = (props) => {
  const { text } = props
  const styles = dynamicStyles()

  return (
    <LinearGradient colors={styles.gradient} style={styles.wrapper}>
      <View style={styles.spinnerWrapper}>
        <View mr="8px">
          <Spinner colorCode={styles.spinnerColor} />
        </View>
        <Text>{text}...</Text>
      </View>
    </LinearGradient>
  )
}

ScreenLoading.propTypes = { text: PropTypes.string.isRequired }

export default ScreenLoading
