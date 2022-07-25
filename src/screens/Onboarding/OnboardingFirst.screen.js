import { ONBOARDING_SECOND_SCREEN, SIGN_IN_SCREEN } from '~/constants/screens'

import { Onboarding } from '~/components'
import React from 'react'
import { useTranslations } from '@qonsoll/translation'

const OnboardingFirstScreen = () => {
  const { t } = useTranslations()

  return (
    <Onboarding
      title={t('first-onboarding-title')}
      description={t('first-onboarding-description')}
      bgColor={null}
      prevScreen={null}
      nextScreen={ONBOARDING_SECOND_SCREEN}
      skipScreen={SIGN_IN_SCREEN}
    />
  )
}

export default OnboardingFirstScreen
