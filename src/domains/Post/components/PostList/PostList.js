import { FlatList, View } from 'react-native'

import { Divider } from 'native-base'
import { PostSimpleView } from '~/domains/Post/components'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './PostList.styles'
import { useGetPosts } from '~/domains/Post/hooks'

const PostList = (props) => {
  // [COMPONENT_STATE_HOOKS]
  const [posts, loading] = useGetPosts()

  return (
    <View style={styles.wrapper}>
      <Divider ml={6} />
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostSimpleView post={item} />}
      />
    </View>
  )
}

PostList.propTypes = {}

export default PostList
