import { Container, Text, View } from 'native-base'

import PropTypes from 'prop-types'
import React from 'react'
import { Spinner } from '@qonsoll/react-native-design'
import dynamicStyles from './Loading.styles'
import { theme } from '~/styles'

/**
 * It renders a loading spinner and text
 * @param text - The text to display next to the spinner.
 * @returns A React component
 */
const Loading = (props) => {
  const { text } = props
  const styles = dynamicStyles()

  return (
    <Container style={styles.wrapper}>
      <View flexDirection="row">
        <View mr="8px">
          <Spinner colorCode={theme.COMPONENTS.Typography.color} />
        </View>
        <Text>{text}...</Text>
      </View>
    </Container>
  )
}

Loading.propTypes = { text: PropTypes.string.isRequired }

export default Loading
