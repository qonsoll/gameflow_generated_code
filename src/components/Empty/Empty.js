import React from 'react'
import { Button, Container, Heading } from 'native-base'
import { useTranslations } from '@qonsoll/translation'
import dynamicStyles from './Empty.styles'
import PropTypes from 'prop-types'

const Empty = (props) => {
  const { message, hideButton, onButtonPress, buttonText } = props
  const { t } = useTranslations()
  const styles = dynamicStyles()

  const onPress = onButtonPress || (() => {})

  return (
    <Container style={styles.wrapper}>
      <Heading>{t(message || 'No data')}</Heading>
      {!hideButton && (
        <Button onPress={onPress} style={styles.button}>
          {t(buttonText || 'Add new')}
        </Button>
      )}
      {/* <NoData /> */}
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
