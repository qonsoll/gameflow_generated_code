import { useEffect, useState } from 'react'
import { getDocument } from '~/services/firestore'
import { COLLECTIONS } from '~/__constants__'

/**
 * It fetches a matches documents from Firestore and returns it
 * @param competition - The competition object that we're getting the matches for.
 * @returns An array with two values. The first value is the category object, and the second value is a
 * boolean that indicates whether the category is loading.
 */
const useGetCompetitionMatches = (competition) => {
  /* State for data */
  const [matches, setMatches] = useState([])

  /* State for loading */
  const [loading, setLoading] = useState(!!competition?.matches?.length)

  useEffect(() => {
    /* Fetching data */
    const fetchData = async () => {
      /* Setting loading state to true */
      setLoading(true)

      /* Getting matches promises*/
      const promises = competition.matches.map((match) =>
        getDocument(COLLECTIONS.MATCHES, match)
      )

      /* Getting matches data */
      const data = await Promise.all(promises)

      /* Setting matches data */
      setMatches(data)

      /* Setting loading state to false */
      setLoading(false)
    }

    competition?.matches?.length && fetchData()
  }, [competition])

  return [matches, loading]
}

export default useGetCompetitionMatches
