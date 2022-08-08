import { LANGUAGES, LANGUAGES_DESCRIPTION } from '~/__constants__'
import { Text, TouchableOpacity, View } from 'react-native'

import { Divider } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './LanguageSimpleView.styles'
import theme from '../../../../../theme'
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
            <Text style={{ ...theme.CORE.FONTS.body }}>
              {LANGUAGES[language]}
            </Text>

            <Text style={{ ...theme.CORE.FONTS.footnote }} numberOfLines={2}>
              {LANGUAGES_DESCRIPTION[language]}
            </Text>
          </View>
          {isSelected && (
            <Icon
              name="check"
              size={18}
              color={theme.CORE.COLORS['primary-default']}
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
