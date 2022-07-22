import { Box, Text } from '@qonsoll/react-native-design'
import { Form, Input } from '../../../../components'

import React from 'react'
import { TouchableOpacity } from 'react-native'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'

const LoginForm = (props) => {
  const { loading, ...rest } = props

  // [ADDITIONAL_HOOKS]
  const { t } = useTranslations()
  const form = Form.useForm()
  const styles = dynamicStyles()

  return (
    <Form form={form} {...rest}>
      <Box bg="white" px={16} pb={0} pt={24} mb={12} borderRadius="md">
        <Form.Item
          // label={t('Email')}
          // labelColor="white"
          name="email"
          margins="xs"
          rules={{ required: t('enter-email-validation-message') }}>
          <Input
            disabled={loading}
            placeholder={t('email-input-placeholder')}
            style={{ box: styles.input }}
            autoCorrect={false}
          />
        </Form.Item>
        <Form.Item
          margins="xs"
          // label={t('Password')}
          // labelColor="white"
          name="password"
          rules={{
            required: t('enter-password-validation-message'),
            minLength: {
              value: 6,
              message: t('password-length-validation-message')
            }
          }}>
          <Input
            disabled={loading}
            placeholder={t('password-input-placeholder')}
            secureTextEntry
            style={{ box: styles.input }}
          />
        </Form.Item>
      </Box>

      <TouchableOpacity onPress={() => form.submit()} style={styles.button}>
        <Text variant="body1" fontWeight="medium" color="grey-5">
          {t('sign-in-button-text')}
        </Text>
      </TouchableOpacity>
    </Form>
  )
}

export default LoginForm
