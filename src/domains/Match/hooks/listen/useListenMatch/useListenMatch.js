import { useDocument } from '~/hooks'
import { useMemo } from 'react'
import { COLLECTIONS } from '~/__constants__'

const useListenMatch = (id) => {
  const query = useMemo(() => ({ ref: COLLECTIONS.MATCHES + '/' + id }), [id])
  const [value, loading, error] = useDocument(query)

  return [value, loading, error]
}

export default useListenMatch
