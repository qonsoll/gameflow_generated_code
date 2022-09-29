import React from 'react'
import dynamicStyles from './VideoGameSimpleForm.styles'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'
import { View, TouchableOpacity } from 'react-native'
import { Container, Divider, Text } from 'native-base'
import { Form, Input, ImagePicker } from '~/components/Form'
import { theme } from '~/styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { IMAGE_UPLOAD_SCREEN } from '~/__constants__/screens'
import { useNavigation } from '@react-navigation/native'
import { DatePicker } from '~/components'

const VideoGameSimpleForm = (props) => {
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
          {t('PUBLISHER')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="publisher">
            <Input placeholder={t('optional')} />
          </Form.Item>
        </View>
        <Text variant="caption1" style={styles.label}>
          {t('GENRE')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="genre">
            <Input placeholder={t('optional')} />
          </Form.Item>
        </View>
        <Text variant="caption1" style={styles.label}>
          {t('SLUG')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="slug">
            <Input placeholder={t('optional')} />
          </Form.Item>
        </View>
        <Text variant="caption1" style={styles.label}>
          {t('COLOR')}
        </Text>
        <View style={styles.wrapper}>
          <Form.Item name="color">
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
          <Divider ml={3} />
          <Form.Item name="shortLogoUrl">
            {({ value }) => (
              <TouchableOpacity
                onPress={() => {
                  const params = { fieldName: 'shortLogoUrl', form, value }
                  navigation.navigate(IMAGE_UPLOAD_SCREEN, params)
                }}>
                <View style={styles.formItem}>
                  <Text ml={3}>{t('Short logo url')}</Text>
                  <Icon
                    name="chevron-right"
                    size={24}
                    color={theme.COLORS['grey-7']}
                  />
                </View>
              </TouchableOpacity>
            )}
          </Form.Item>
          <Divider ml={3} />
          <Form.Item name="bgImage">
            {({ value }) => (
              <TouchableOpacity
                onPress={() => {
                  const params = { fieldName: 'bgImage', form, value }
                  navigation.navigate(IMAGE_UPLOAD_SCREEN, params)
                }}>
                <View style={styles.formItem}>
                  <Text ml={3}>{t('Bg image')}</Text>
                  <Icon
                    name="chevron-right"
                    size={24}
                    color={theme.COLORS['grey-7']}
                  />
                </View>
              </TouchableOpacity>
            )}
          </Form.Item>
          <Divider ml={3} />
          <View style={styles.formItem}>
            <Text>{t('Release date')}</Text>
            <Form.Item name="releaseDate">
              <DatePicker />
            </Form.Item>
          </View>
        </View>
      </Form>
    </Container>
  )
}

VideoGameSimpleForm.propTypes = {
  form: PropTypes.object
}

export default VideoGameSimpleForm
