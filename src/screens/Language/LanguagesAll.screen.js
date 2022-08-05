import React from 'react'
import { PageWrapper } from '~/components'
import { LanguageList } from '~/domains/Language/components'

const LanguagesAll = (props) => {
  return (
    <PageWrapper title="Language">
      <LanguageList />
    </PageWrapper>
  )
}

export default LanguagesAll
