import { LanguageList } from '~/domains/Language/components'
import { PageWrapper } from '~/components'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'

const LanguagesAll = (props) => {
  const { t } = useTranslations()
  const navigation = useNavigation()

  return (
    <PageWrapper
      leftButtonText={t('Back')}
      leftButtonIcon="chevron-left"
      leftButtonAction={navigation.goBack}
      title="Language">
      <LanguageList />
    </PageWrapper>
  )
}

export default LanguagesAll
