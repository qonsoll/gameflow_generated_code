import { Divider, Text, Title } from '@qonsoll/react-native-design'

import PropTypes from 'prop-types'
import React from 'react'
import { SwipeableCard } from '~/components'
import { View } from 'react-native'
import styles from './PostSimpleView.styles'

const PostSimpleView = (props) => {
  const { post } = props

  return (
    <>
      {/* <SwipeableCard style={styles.wrapper}> */}
      {/* <View style={styles.container}> */}
      {/* <View style={styles.textContainer}> */}
      <Text variant="body1">{post.title}</Text>
      <Divider my={4} />
      <Text variant="body1">{post.description}</Text>
      <Divider my={4} />
      <Text variant="body1">{post.isDraft}</Text>
      <Divider my={4} />
      <Text variant="body1">{post.author}</Text>
      <Divider my={4} />
      <Text variant="body1">{post.publishingDate}</Text>
      {/* </View> */}
      {/* </View> */}
      {/* </SwipeableCard> */}
    </>
  )
}

PostSimpleView.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostSimpleView
