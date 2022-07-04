import {
  ONBOARDING_FIRST_SCREEN,
  ONBOARDING_THIRD_SCREEN,
  SIGN_IN_SCREEN
} from '../../constants/screens'

import { Onboarding } from '../../components'
import React from 'react'
import { useTranslations } from '@qonsoll/translation'

const OnboardingSecondScreen = () => {
  const { t } = useTranslations()

  return (
    <Onboarding
      title={t('second-onboarding-title')}
      description={t('second-onboarding-description')}
      bgColor={null}
      prevScreen={ONBOARDING_FIRST_SCREEN}
      nextScreen={ONBOARDING_THIRD_SCREEN}
      skipScreen={SIGN_IN_SCREEN}
    />
  )
}

export default OnboardingSecondScreen
