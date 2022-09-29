import CompetitionList from './CompetitionList'
import { render, screen } from '@testing-library/react'

test('CompetitionList with items', async () => {
  const mockedData = [
    {
      _id: 1
    },
    {
      _id: 2
    }
  ]
  render(<CompetitionList competitions={mockedData} />)
  const todoList = await screen.findAllByTestId('competitionListItem')

  expect(todoList).toHaveLength(2)
})
