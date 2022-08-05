import React from 'react'
import styles from './LanguageSimpleView.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View, TouchableOpacity } from 'react-native'
import { Text } from '@qonsoll/react-native-design'
import theme from '../../../../../theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { LANGUAGES, LANGUAGES_DESCRIPTION } from '~/__constants__'
import { Divider } from 'native-base'

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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Text variant="h5" fontWeight="semibold">
            {LANGUAGES[language]}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {isSelected && (
              <Icon
                name="check"
                size={18}
                color={theme.CORE.COLORS['primary-default']}
              />
            )}
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Text color="grey-6" numberOfLines={2}>
              {LANGUAGES_DESCRIPTION[language]}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {showDivider && <Divider ml={6} />}
    </>
  )
}

LanguageSimpleView.propTypes = {
  language: PropTypes.object.isRequired
}

export default LanguageSimpleView
