import { useCollection } from '~/hooks'
import { useMemo } from 'react'
import { COLLECTIONS } from '~/__constants__'

const useGetMatches = (props) => {
  const query = useMemo(() => ({ ref: COLLECTIONS.MATCHES, ...props }), [props])
  const [value, loading, error] = useCollection(query)

  return [value, loading, error]
}

export default useGetMatches
