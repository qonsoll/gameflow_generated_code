import React from 'react'
import styles from './LanguageSimpleView.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View } from 'react-native'
import { SwipeableCard } from '~/components'
import { Text, Divider, Title } from '@qonsoll/react-native-design'

const LanguageSimpleView = (props) => {
  const { language } = props

  // [ADDITIONAL_HOOKS]
  const { t } = useTranslations()

  return (
    <SwipeableCard style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text variant="body1">{language.name}</Text>
        </View>
      </View>
    </SwipeableCard>
  )
}

LanguageSimpleView.propTypes = {
  language: PropTypes.object.isRequired
}

export default LanguageSimpleView
