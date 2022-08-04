import { useCollection } from '~/hooks'
import { useMemo } from 'react'

const collection = 'posts'

const useGetPosts = (props) => {
  const query = useMemo(() => ({ ref: collection, ...props }), [props])
  const [value, loading, error] = useCollection(query)

  return [value, loading, error]
}

export default useGetPosts
