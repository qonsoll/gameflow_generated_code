import { useDocument } from '~/hooks'
import { useMemo } from 'react'
import { COLLECTIONS } from '~/__constants__'

const useListenCompetition = (id) => {
  const query = useMemo(() => ({ ref: COLLECTIONS.COMPETITIONS + '/' + id }), [
    id
  ])
  const [value, loading, error] = useDocument(query)

  return [value, loading, error]
}

export default useListenCompetition
