import VideoGameList from './VideoGameList'
import { render, screen } from '@testing-library/react'

test('VideoGameList with items', async () => {
  const mockedData = [
    {
      _id: 1
    },
    {
      _id: 2
    }
  ]
  render(<VideoGameList videoGames={mockedData} />)
  const todoList = await screen.findAllByTestId('videoGameListItem')

  expect(todoList).toHaveLength(2)
})
