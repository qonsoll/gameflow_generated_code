import { useEffect, useState } from 'react'
import { getDocument } from '~/services/firestore'
import { COLLECTIONS } from '~/__constants__'

/**
 * It fetches a teams documents from Firestore and returns it
 * @param match - The match object that we're getting the teams for.
 * @returns An array with two values. The first value is the category object, and the second value is a
 * boolean that indicates whether the category is loading.
 */
const useGetMatchTeams = (match) => {
  /* State for data */
  const [teams, setTeams] = useState([])

  /* State for loading */
  const [loading, setLoading] = useState(!!match?.teams?.length)

  useEffect(() => {
    /* Fetching data */
    const fetchData = async () => {
      /* Setting loading state to true */
      setLoading(true)

      /* Getting teams promises*/
      const promises = match.teams.map((team) =>
        getDocument(COLLECTIONS.TEAMS, team)
      )

      /* Getting teams data */
      const data = await Promise.all(promises)

      /* Setting teams data */
      setTeams(data)

      /* Setting loading state to false */
      setLoading(false)
    }

    match?.teams?.length && fetchData()
  }, [match])

  return [teams, loading]
}

export default useGetMatchTeams
