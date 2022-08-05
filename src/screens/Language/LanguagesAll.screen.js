import { useTranslations } from '@qonsoll/translation'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { PageWrapper } from '~/components'
import { LanguageList } from '~/domains/Language/components'

const LanguagesAll = (props) => {
  const { t } = useTranslations()
  const navigation = useNavigation()

  return (
    <PageWrapper
      leftButtonText={t('Cancel')}
      leftButtonAction={navigation.goBack}
      title="Language">
      <LanguageList />
    </PageWrapper>
  )
}

export default LanguagesAll
