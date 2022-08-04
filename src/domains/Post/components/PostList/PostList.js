import React from 'react'
import styles from './PostList.styles'
import PropTypes from 'prop-types'
import { FlatList, View } from 'react-native'
import { Text } from '@qonsoll/react-native-design'
import { useGetPosts } from '~/domains/Post/hooks'
import { PostSimpleView } from '~/domains/Post/components'

const PostList = (props) => {
  // [COMPONENT_STATE_HOOKS]
  const [posts, loading] = useGetPosts()

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostSimpleView post={item} />}
      />
    </View>
  )
}

PostList.propTypes = {}

export default PostList
