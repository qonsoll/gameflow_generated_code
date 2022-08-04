import { PostsAll } from '../screens/Post'

import React, { Suspense } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Spinner } from '@qonsoll/react-native-design'

const Post = createStackNavigator()

const PostStackNavigator = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Post.Navigator
        initialRouteName="POSTS_ALL"
        screenOptions={{
          headerShown: false
        }}>
        <Post.Screen name="POSTS_ALL" component={PostsAll} />
      </Post.Navigator>
    </Suspense>
  )
}

export default PostStackNavigator
