import MatchSimpleForm from './MatchSimpleForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('Should render the basic fields', async () => {
  render(<MatchSimpleForm showTitle />)

  expect(screen.getByRole('heading', { name: 'Match' })).toBeInTheDocument()
  expect(
    screen.getByRole('textbox', { name: /startDate/i })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('textbox', { name: /streamUrl/i })
  ).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
})

test('MatchSimpleForm required fields', async () => {
  render(<MatchSimpleForm />)

  await userEvent.click(screen.getByRole('button', { name: 'Save' }))
})

test('MatchSimpleForm render test', () => {
  render(<MatchSimpleForm />)
})
