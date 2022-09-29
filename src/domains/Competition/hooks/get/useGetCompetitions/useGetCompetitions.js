import { useCollection } from '~/hooks'
import { useMemo } from 'react'
import { COLLECTIONS } from '~/__constants__'

const useGetCompetitions = (props) => {
  const query = useMemo(() => ({ ref: COLLECTIONS.COMPETITIONS, ...props }), [
    props
  ])
  const [value, loading, error] = useCollection(query)

  return [value, loading, error]
}

export default useGetCompetitions
