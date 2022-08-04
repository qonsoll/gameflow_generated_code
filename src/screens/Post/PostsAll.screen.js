import React from 'react'
import { PageWrapper } from '~/components'
import { PostList } from '~/domains/Post/components'

const PostsAll = (props) => {
  return (
    <PageWrapper title="Post">
      <PostList />
    </PageWrapper>
  )
}

export default PostsAll
