import { useCollection } from '~/hooks'
import { useMemo } from 'react'
import { COLLECTIONS } from '~/__constants__'

const useGetTeams = (props) => {
  const query = useMemo(() => ({ ref: COLLECTIONS.TEAMS, ...props }), [props])
  const [value, loading, error] = useCollection(query)

  return [value, loading, error]
}

export default useGetTeams
