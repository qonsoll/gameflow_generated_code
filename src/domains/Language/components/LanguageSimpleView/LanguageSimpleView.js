import { Divider, Text } from 'native-base'
import { LANGUAGES, LANGUAGES_DESCRIPTION } from '~/__constants__'
import { TouchableOpacity, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './LanguageSimpleView.styles'
import { theme } from '~/styles'
import { useTranslations } from '@qonsoll/translation'

const LanguageSimpleView = (props) => {
  const { language, showDivider } = props

  // [ADDITIONAL_HOOKS]
  const { language: selectedLanguage, setCurrentLanguage } = useTranslations()

  // [COMPUTED_PROPERTIES]
  const isSelected = language === selectedLanguage

  // [HANDLERS]
  const onLanguagePress = () => setCurrentLanguage(language)

  return (
    <>
      <TouchableOpacity
        onPress={onLanguagePress}
        style={styles.wrapper}
        activeOpacity={0.2}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <View>
            <Text>{LANGUAGES[language]}</Text>
            <Text variant="caption" numberOfLines={2}>
              {LANGUAGES_DESCRIPTION[language]}
            </Text>
          </View>
          {isSelected && (
            <Icon
              name="check"
              size={18}
              color={theme.COLORS['primary-default']}
            />
          )}
        </View>
      </TouchableOpacity>
      {showDivider && <Divider ml={3} />}
    </>
  )
}

LanguageSimpleView.propTypes = {
  language: PropTypes.string.isRequired
}

export default LanguageSimpleView
