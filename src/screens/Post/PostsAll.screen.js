import { PageWrapper } from '~/components'
import { PostList } from '~/domains/Post/components'
import React from 'react'
import theme from '../../../theme'

const PostsAll = (props) => {
  return (
    <PageWrapper bgColor={theme.CORE.COLORS.white} title="Posts">
      <PostList />
    </PageWrapper>
  )
}

export default PostsAll
