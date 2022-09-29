import React from 'react'
import { Form, Select } from '~/components/Form'
import { useGetVideoGames } from '~/domains/VideoGame/hooks'
import { Loading } from '~/components'
import { Container, Text } from 'native-base'
import { View } from 'react-native'
import dynamicStyles from './VideoGameSelect.styles.js'
import PropTypes from 'prop-types'
import { useTranslations } from '@qonsoll/translation'

const VideoGameSelect = (props) => {
  const { form } = props

  const [videoGames, loading] = useGetVideoGames()
  const styles = dynamicStyles()
  const { t } = useTranslations()

  return loading ? (
    <Loading text={t('VideoGames are loading')} />
  ) : (
    <Container>
      <Text style={styles.description}>{t('Choose a videoGame')}</Text>
      <Form form={form}>
        <View style={styles.selectWrapper}>
          <Form.Item name="videoGame">
            <Select>
              {videoGames.map((videoGame) => (
                <Select.Item value={videoGame._id} label={videoGame.name} />
              ))}
            </Select>
          </Form.Item>
        </View>
      </Form>
    </Container>
  )
}

VideoGameSelect.propTypes = {
  form: PropTypes.object.isRequired
}

export default VideoGameSelect
