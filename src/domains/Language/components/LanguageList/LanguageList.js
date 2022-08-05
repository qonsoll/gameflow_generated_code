import React from 'react'
import dynamicStyles from './LanguageList.styles'
import { FlatList, View } from 'react-native'
import { LanguageSimpleView } from '~/domains/Language/components'
import { LANGUAGES } from '../../../../__constants__'
import { useTranslations } from '@qonsoll/translation'
import { Text } from '@qonsoll/react-native-design'

const LanguageList = (props) => {
  // [COMPONENT_STATE_HOOKS]

  const styles = dynamicStyles()
  const { t } = useTranslations()

  return (
    <View style={styles.wrapper}>
      <Text color="grey-6" mb={8} ml={16}>
        {t('language-description-text').toUpperCase()}
      </Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={Object.keys(LANGUAGES)}
          renderItem={({ item, index }) => (
            <LanguageSimpleView
              language={item}
              showDivider={index !== Object.keys(LANGUAGES).length - 1}
            />
          )}
        />
      </View>
    </View>
  )
}

LanguageList.propTypes = {}

export default LanguageList
