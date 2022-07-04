import {
  ONBOARDING_SECOND_SCREEN,
  SIGN_IN_SCREEN
} from '../../constants/screens'

import { Onboarding } from '../../components'
import React from 'react'
import { useTranslations } from '@qonsoll/translation'

const OnboardingThirdScreen = () => {
  const { t } = useTranslations()

  return (
    <Onboarding
      title={t('third-onboarding-title')}
      description={t('third-onboarding-description')}
      bgColor={null}
      prevScreen={ONBOARDING_SECOND_SCREEN}
      nextScreen={SIGN_IN_SCREEN}
      skipScreen={null}
    />
  )
}

export default OnboardingThirdScreen
