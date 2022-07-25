import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import { TouchableOpacity } from 'react-native'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'

const Language = (props) => {
  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()
  const { language, setCurrentLanguage } = useTranslations()

  const onLanguageChange = () => {
    if (language === 'no') {
      setCurrentLanguage?.('en')
    }
    if (language === 'en') {
      setCurrentLanguage?.('uk')
    }
    if (language === 'uk') {
      setCurrentLanguage?.('no')
    }
  }

  return (
    <TouchableOpacity
      onPress={onLanguageChange}
      style={styles.container}
      {...props}>
      <Text variant="h5" color="primary-default">
        {language?.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}

export default Language
