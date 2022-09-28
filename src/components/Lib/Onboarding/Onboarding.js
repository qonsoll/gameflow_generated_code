import { Image, Text, TouchableOpacity, View } from 'react-native'

import { ArrowShortLeft3x } from '~/__constants__/assets'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PropTypes from 'prop-types'
import React from 'react'
import { SIGN_IN_SCREEN } from '~/__constants__/screens'
import dynamicStyles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'

/**
 * It renders a screen with a title, description, and buttons to navigate to the previous, next, or
 * skip screen
 * @param title - The title of the onboarding screen
 * @param description - The description of the onboarding screen.
 * @param bgColor - background color of the screen
 * @param prevScreen - The screen to navigate to when the user presses the left arrow button.
 * @param nextScreen - The screen to navigate to when the user clicks the next button.
 * @param skipScreen - The screen to navigate to when the user skips the onboarding.
 * @returns A function that returns a view
 */
const Onboarding = (props) => {
  const {
    title,
    description,
    bgColor,
    prevScreen,
    nextScreen,
    skipScreen
  } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles({ bgColor })
  const navigation = useNavigation()
  const { t } = useTranslations()

  // [CLEAN_FUNCTIONS]
  const onPrev = () => prevScreen && navigation.navigate(prevScreen)
  const onNext = () => {
    nextScreen && navigation.navigate(nextScreen)
    nextScreen === SIGN_IN_SCREEN && AsyncStorage.setItem('onboarding', 'true')
  }
  const onSkip = () => {
    skipScreen && navigation.navigate(skipScreen)
    AsyncStorage.setItem('@isOnboardingShoved', 'true')
  }

  return (
    <View style={styles.wrapper}>
      {prevScreen && (
        <TouchableOpacity onPress={onPrev} style={styles.iconButton}>
          <Image source={ArrowShortLeft3x} style={styles.icon} />
        </TouchableOpacity>
      )}

      <Text variant="h2" mb={3}>
        {title}
      </Text>
      <Text>{description}</Text>

      <View style={styles.buttonWrapper}>
        {skipScreen && (
          <TouchableOpacity onPress={onSkip} style={styles.button}>
            <Text>{t('skip')}</Text>
          </TouchableOpacity>
        )}
        {nextScreen && (
          <TouchableOpacity onPress={onNext} style={styles.button}>
            <Text>{t('next')}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

Onboarding.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  prevScreen: PropTypes.string,
  nextScreen: PropTypes.string,
  skipScreen: PropTypes.string
}

export default Onboarding
