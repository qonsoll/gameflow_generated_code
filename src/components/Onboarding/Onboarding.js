import { Image, TouchableOpacity, View } from 'react-native'

import { ArrowShortLeft3x } from '../../constants/assets'
import PropTypes from 'prop-types'
import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'

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
  const onNext = () => nextScreen && navigation.navigate(nextScreen)
  const onSkip = () => skipScreen && navigation.navigate(skipScreen)

  return (
    <View style={styles.wrapper}>
      {prevScreen && (
        <TouchableOpacity onPress={onPrev} style={styles.iconButton}>
          <Image source={ArrowShortLeft3x} style={styles.icon} />
        </TouchableOpacity>
      )}

      <Text variant="h2" mb={12}>
        {title}
      </Text>
      <Text variant="body1">{description}</Text>

      <View style={styles.buttonWrapper}>
        {skipScreen && (
          <TouchableOpacity onPress={onSkip} style={styles.button}>
            <Text variant="body1">{t('skip')}</Text>
          </TouchableOpacity>
        )}
        {nextScreen && (
          <TouchableOpacity onPress={onNext} style={styles.button}>
            <Text variant="body1">{t('next')}</Text>
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
