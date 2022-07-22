import { AuthHeader, BackgroundGradient } from '../../../components'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useState } from 'react'
import { useKeyboardState, useSwipe } from '../../../hooks'

import { ForgotPasswordForm } from '../../../domains/Auth/components/ForgotPasswordForm'
import { Text } from '@qonsoll/react-native-design'
import dynamicStyles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useTranslations } from '@qonsoll/translation'

const ForgotPasswordScreen = () => {
  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()
  const navigation = useNavigation()
  const { t } = useTranslations()
  const isKeyboardVisible = useKeyboardState()

  // [COMPONENT_STATE_HOOKS]
  const [isSpin, setIsSpin] = useState(false)

  // [COMPUTED_PROPERTIES]
  const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height'
  const titleProps = isKeyboardVisible
    ? { mt: 48, mb: 24, variant: 'h3' }
    : { mt: 0, mb: 0, variant: 'h2' }

  // [HANDLERS]
  // TODO MOVE TO SEPARATE HELPER || HOOK
  const onFinish = async (credentials) => {
    setIsSpin(false)
  }
  const handleWrapperPress = () => Keyboard.dismiss()
  const handleBackPress = () => navigation.goBack()
  const { onTouchStart, onTouchEnd } = useSwipe(null, handleBackPress)

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleWrapperPress}>
      {/* Background gradient */}
      <BackgroundGradient />

      {/* Auth header */}
      <AuthHeader />

      <View
        style={styles.wrapper}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}>
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={keyboardBehavior}>
          <View style={styles.container}>
            {/* Title */}
            <Text color="white" {...titleProps}>
              {t('forgot-password-title')}
            </Text>
            {!isKeyboardVisible && (
              <Text variant="body1" color="white" mt={8} mb={48}>
                {t('forgot-password-description')}
              </Text>
            )}

            {/* Form */}
            <ForgotPasswordForm onFinish={onFinish} loading={isSpin} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableOpacity>
  )
}

export default ForgotPasswordScreen
