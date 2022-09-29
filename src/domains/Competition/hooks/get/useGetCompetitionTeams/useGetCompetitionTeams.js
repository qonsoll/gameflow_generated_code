import { useEffect, useState } from 'react'
import { getDocument } from '~/services/firestore'
import { COLLECTIONS } from '~/__constants__'

/**
 * It fetches a teams documents from Firestore and returns it
 * @param competition - The competition object that we're getting the teams for.
 * @returns An array with two values. The first value is the category object, and the second value is a
 * boolean that indicates whether the category is loading.
 */
const useGetCompetitionTeams = (competition) => {
  /* State for data */
  const [teams, setTeams] = useState([])

  /* State for loading */
  const [loading, setLoading] = useState(!!competition?.participants?.length)

  useEffect(() => {
    /* Fetching data */
    const fetchData = async () => {
      /* Setting loading state to true */
      setLoading(true)

      /* Getting teams promises*/
      const promises = competition.participants.map((team) =>
        getDocument(COLLECTIONS.TEAMS, team)
      )

      /* Getting teams data */
      const data = await Promise.all(promises)

      /* Setting teams data */
      setTeams(data)

      /* Setting loading state to false */
      setLoading(false)
    }

    competition?.participants?.length && fetchData()
  }, [competition])

  return [teams, loading]
}

export default useGetCompetitionTeams
