import { NEXT_LANGUAGES } from './constants'
import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import { TouchableOpacity } from 'react-native'
import { useTranslations } from '@qonsoll/translation'

const Language = (props) => {
  // [ADDITIONAL_HOOKS]
  const { language, setCurrentLanguage } = useTranslations()

  // [HANDLERS]
  const handleLanguageChange = () => {
    const nextLanguage = NEXT_LANGUAGES[language]
    setCurrentLanguage(nextLanguage)
  }

  // [COMPUTED_PROPERTIES]
  const languageComputed = language?.toUpperCase()

  return (
    <TouchableOpacity onPress={handleLanguageChange} {...props}>
      <Text variant="h5" color="primary-default">
        {languageComputed}
      </Text>
    </TouchableOpacity>
  )
}

export default Language
