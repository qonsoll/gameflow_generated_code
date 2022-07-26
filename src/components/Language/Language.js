import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import { TouchableOpacity } from 'react-native'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'
import { NEXT_LANGUAGES } from './constants'

const Language = (props) => {
  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()
  const { language, setCurrentLanguage } = useTranslations()

  // [HANDLERS]
  const handleLanguageChange = () =>
    setCurrentLanguage(NEXT_LANGUAGES[language])

  return (
    <TouchableOpacity
      onPress={handleLanguageChange}
      style={styles.container}
      {...props}>
      <Text variant="h5" color="primary-default">
        {language?.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}

export default Language
