import React from 'react'
import styles from './LanguageList.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { FlatList, View } from 'react-native'
import { Text } from '@qonsoll/react-native-design'
import { useGetLanguages } from '~/domains/Language/hooks'
import { LanguageSimpleView } from '~/domains/Language/components'

const LanguageList = (props) => {
  // [COMPONENT_STATE_HOOKS]
  const [languages, loading] = useGetLanguages()

  // [ADDITIONAL_HOOKS]
  const { t } = useTranslations()

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={languages}
        renderItem={({ item }) => <LanguageSimpleView language={item} />}
      />
    </View>
  )
}

LanguageList.propTypes = {}

export default LanguageList
