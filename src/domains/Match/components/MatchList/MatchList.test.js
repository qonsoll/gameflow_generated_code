import MatchList from './MatchList'
import { render, screen } from '@testing-library/react'

test('MatchList with items', async () => {
  const mockedData = [
    {
      _id: 1
    },
    {
      _id: 2
    }
  ]
  render(<MatchList matches={mockedData} />)
  const todoList = await screen.findAllByTestId('matchListItem')

  expect(todoList).toHaveLength(2)
})
