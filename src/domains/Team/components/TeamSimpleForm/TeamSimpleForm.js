import React from 'react'
import dynamicStyles from './TeamSimpleForm.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View, TouchableOpacity } from 'react-native'
import { Container, Divider, Text } from 'native-base'
import { Form, Input, ImagePicker } from '~/components/Form'
import { theme } from '~/styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { IMAGE_UPLOAD_SCREEN } from '~/__constants__/screens'
import { useNavigation } from '@react-navigation/native'

const TeamSimpleForm = (props) => {
  const { form } = props

  /* Getting translations instance from useTranslations hook */
  const { t } = useTranslations()

  /* Getting styles from styles file */
  const styles = dynamicStyles()

  /* Getting navigation instance from useNavigation hook */
  const navigation = useNavigation()

  return (
    <Container>
      <Form form={form}>
        <Text variant="caption1" style={styles.label}>
          {t('NAME')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="name">
            <Input placeholder={t('optional')} />
          </Form.Item>
        </View>
        <Text variant="caption1" style={styles.label}>
          {t('BG COLOR')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="bgColor">
            <Input placeholder={t('optional')} />
          </Form.Item>
        </View>
        <Text variant="caption1" style={styles.label}>
          {t('SETTINGS')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="logoUrl">
            {({ value }) => (
              <TouchableOpacity
                onPress={() => {
                  const params = { fieldName: 'logoUrl', form, value }
                  navigation.navigate(IMAGE_UPLOAD_SCREEN, params)
                }}>
                <View style={styles.formItem}>
                  <Text ml={3}>{t('Logo url')}</Text>
                  <Icon
                    name="chevron-right"
                    size={24}
                    color={theme.COLORS['grey-7']}
                  />
                </View>
              </TouchableOpacity>
            )}
          </Form.Item>
        </View>
      </Form>
    </Container>
  )
}

TeamSimpleForm.propTypes = {
  form: PropTypes.object
}

export default TeamSimpleForm
