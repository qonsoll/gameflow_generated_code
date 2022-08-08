import { FlatList, View } from 'react-native'

import { LANGUAGES } from '../../../../__constants__'
import { LanguageSimpleView } from '~/domains/Language/components'
import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from './LanguageList.styles'
import { useTranslations } from '@qonsoll/translation'

const LanguageList = (props) => {
  // [COMPONENT_STATE_HOOKS]

  const styles = dynamicStyles()
  const { t } = useTranslations()

  return (
    <View style={styles.wrapper}>
      <Text color="grey-6" mb={8} ml={12}>
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
