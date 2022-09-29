import { useEffect, useState } from 'react'
import { getDocument } from '~/services/firestore'
import { COLLECTIONS } from '~/__constants__'

/**
 * It fetches a videoGame document from Firestore and returns it
 * @param competition - The competition object that we're getting the videoGame for.
 * @returns An array with two values. The first value is the category object, and the second value is a
 * boolean that indicates whether the category is loading.
 */
const useGetCompetitionVideoGame = (competition) => {
  /* State for data */
  const [videoGame, setVideoGame] = useState(null)

  /* State for loading */
  const [loading, setLoading] = useState(!!competition?.videoGame)

  useEffect(() => {
    /* Fetching data */
    const fetchData = async () => {
      setLoading(true)
      const document = await getDocument(
        COLLECTIONS.VIDEO_GAMES,
        competition.videoGame
      )
      setVideoGame(document)
      setLoading(false)
    }
    competition?.videoGame && fetchData()
  }, [competition])

  return [videoGame, loading]
}

export default useGetCompetitionVideoGame
