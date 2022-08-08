import { useCollection } from '~/hooks'
import { useMemo } from 'react'

const collection = 'languages'

const useGetLanguages = (props) => {
  const query = useMemo(() => ({ ref: collection, ...props }), [props])
  const [value, loading, error] = useCollection(query)

  return [value, loading, error]
}

export default useGetLanguages
