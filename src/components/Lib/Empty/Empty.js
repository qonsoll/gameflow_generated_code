import { Button, Container, Text } from 'native-base'

import PropTypes from 'prop-types'
import React from 'react'
import dynamicStyles from './Empty.styles'
import { useTranslations } from '@qonsoll/translation'

/**
 * It renders a message and a button if the button is not hidden and the onButtonPress prop is passed
 * @param message - The message to display
 * @param hideButton - boolean
 * @param onButtonPress - function to be called when the button is pressed
 * @param buttonText - The text to display on the button.
 * @returns A component that displays a message and a button.
 */
const Empty = (props) => {
  const { message, hideButton, onButtonPress, buttonText } = props
  const { t } = useTranslations()
  const styles = dynamicStyles()
  const isAddVisible = !hideButton && onButtonPress

  return (
    <Container style={styles.wrapper}>
      <Text mb={isAddVisible ? 4 : 0}>{t(message || 'No data')}</Text>
      {isAddVisible && (
        <Button onPress={onButtonPress} style={styles.button}>
          {t(buttonText || 'Add new')}
        </Button>
      )}
    </Container>
  )
}

Empty.propTypes = {
  message: PropTypes.string,
  buttonText: PropTypes.string,
  hideButton: PropTypes.bool,
  onButtonPress: PropTypes.func
}

export default Empty
