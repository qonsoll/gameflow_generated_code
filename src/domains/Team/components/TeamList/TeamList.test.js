import TeamList from './TeamList'
import { render, screen } from '@testing-library/react'

test('TeamList with items', async () => {
  const mockedData = [
    {
      _id: 1
    },
    {
      _id: 2
    }
  ]
  render(<TeamList teams={mockedData} />)
  const todoList = await screen.findAllByTestId('teamListItem')

  expect(todoList).toHaveLength(2)
})
