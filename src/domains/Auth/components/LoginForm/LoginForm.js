import { Box, Text } from '@qonsoll/react-native-design'
import { Form, Input } from '../../../../components'

import React from 'react'
import { TouchableOpacity } from 'react-native'
import dynamicStyles from './styles'
import { useTranslations } from '@qonsoll/translation'

const LoginForm = (props) => {
  const { loading, ...rest } = props
  const { t } = useTranslations()
  const form = Form.useForm()
  const styles = dynamicStyles()

  return (
    <Form form={form} {...rest}>
      <Box bg="white" p={16} pb={0} pt={24} mb={12} borderRadius="md">
        <Form.Item
          label={t('Email')}
          name="email"
          margins="sm"
          rules={{ required: t('Enter email, please') }}>
          <Input
            disabled={loading}
            placeholder={t('Enter email')}
            style={{ box: styles.input }}
            autoCorrect={false}
          />
        </Form.Item>
        <Form.Item
          margins="sm"
          label={t('Password')}
          name="password"
          rules={{
            required: t('Enter password, please'),
            minLength: {
              value: 6,
              message: t('Password should contain at least 6 symbols')
            }
          }}>
          <Input
            disabled={loading}
            placeholder={t('Enter password')}
            secureTextEntry
            style={{ box: styles.input }}
          />
        </Form.Item>
      </Box>

      <TouchableOpacity onPress={() => form.submit()} style={styles.button}>
        <Text variant="body1" fontWeight="medium" color="grey-5">
          Login with email
        </Text>
      </TouchableOpacity>
    </Form>
  )
}

export default LoginForm
