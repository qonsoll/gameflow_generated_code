import { Box, Text } from '@qonsoll/react-native-design'
import { Form, Input } from '../../../../components'
import {
  validateEmail,
  validatePasswordConfirmation
} from '../../../../helpers'

import React from 'react'
import { TouchableOpacity } from 'react-native'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'

const SignupForm = (props) => {
  const { loading, ...rest } = props

  // [ADDITIONAL_HOOKS]
  const { t } = useTranslations()
  const form = Form.useForm()
  const styles = dynamicStyles()

  // [COMPUTED_PROPERTIES]
  const emailValidationRules = {
    required: t('email-required-validation-message'),
    validate: (email) => validateEmail(t, email)
  }
  const passwordValidationRules = {
    required: t('password-required-validation-message'),
    minLength: {
      value: 6,
      message: t('password-min-length-validation-message')
    }
  }
  const confirmPasswordValidationRules = {
    required: t('confirm-password-required-validation-message'),
    validate: (value) => {
      const password = form.watch?.('password')
      validatePasswordConfirmation(t, password, value)
    }
  }

  // [HANDLERS]
  const handleSignup = () => form.submit()

  return (
    <Form form={form} {...rest}>
      <Box mb={12}>
        <Form.Item
          name="email"
          label={t('email-label')}
          labelColor="white"
          margins="xs"
          rules={emailValidationRules}>
          <Input
            placeholder={t('email-input-placeholder')}
            style={styles.input}
            autoCorrect={false}
            disabled={loading}
          />
        </Form.Item>
        <Form.Item
          margins="xs"
          label={t('password-label')}
          labelColor="white"
          name="password"
          rules={passwordValidationRules}>
          <Input
            disabled={loading}
            placeholder={t('password-input-placeholder')}
            secureTextEntry
            style={styles.input}
          />
        </Form.Item>
        <Form.Item
          margins="xs"
          label={t('confirm-password-label')}
          labelColor="white"
          name="confirmedPassword"
          rules={confirmPasswordValidationRules}>
          <Input
            disabled={loading}
            placeholder={t('confirm-password-input-placeholder')}
            secureTextEntry
            style={styles.input}
          />
        </Form.Item>
      </Box>

      <TouchableOpacity onPress={handleSignup} style={styles.button}>
        <Text variant="body1" fontWeight="medium" color="grey-5">
          {t('sign-up-button-text')}
        </Text>
      </TouchableOpacity>
    </Form>
  )
}

export default SignupForm
