import { Dimensions, View } from 'react-native'

import { Divider } from 'native-base'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
import React from 'react'
import { SwipeableCard } from '~/components'
import { Text } from '@qonsoll/react-native-design'
import moment from 'moment'
import styles from './PostSimpleView.styles'
import theme from '../../../../../theme'

const windowWidth = Dimensions.get('window').width

const PostSimpleView = (props) => {
  const { post } = props

  return (
    <>
      <SwipeableCard style={styles.wrapper}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Text variant="h5">{post?.title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text color="grey-6" mr={2}>
              {moment(post?.publishingDate?.toDate?.()).format('DD-MM-YYYY')}
            </Text>
            <Icon
              name="chevron-right"
              size={18}
              style={{
                textAlign: 'center'
              }}
              color={theme.CORE.COLORS['grey-7']}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {!!post?.photoUrl && (
            <View style={{ marginRight: 8 }}>
              <FastImage
                source={{ uri: post?.photoUrl }}
                style={{ height: 50, width: 50, borderRadius: 8 }}
              />
            </View>
          )}
          <View style={post?.photoUrl && { width: windowWidth - 94 }}>
            <Text numberOfLines={1}>{post?.author}</Text>
            <Text color="grey-6" numberOfLines={2}>
              {post?.description}
            </Text>
          </View>
        </View>
      </SwipeableCard>
      <Divider ml={6} />
    </>
  )
}

PostSimpleView.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostSimpleView
