import { NEXT_LANGUAGES } from './constants'
import React from 'react'
import { Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { useTranslations } from '@qonsoll/translation'

/**
 * It's a component that displays the current language and changes it when pressed
 * @param props - The props that are passed to the component.
 * @returns A component that displays the current language and allows the user to change it.
 */
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
