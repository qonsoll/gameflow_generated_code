import { useCollection } from '~/hooks'
import { useMemo } from 'react'
import { COLLECTIONS } from '~/__constants__'

const useGetVideoGames = (props) => {
  const query = useMemo(() => ({ ref: COLLECTIONS.VIDEO_GAMES, ...props }), [
    props
  ])
  const [value, loading, error] = useCollection(query)

  return [value, loading, error]
}

export default useGetVideoGames
