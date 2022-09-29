import CompetitionSimpleForm from './CompetitionSimpleForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('Should render the basic fields', async () => {
  render(<CompetitionSimpleForm showTitle />)

  expect(
    screen.getByRole('heading', { name: 'Competition' })
  ).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /title/i })).toBeInTheDocument()
  expect(screen.getByLabelText('Start date')).toBeInTheDocument()
  expect(screen.getByLabelText('End date')).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /prize/i })).toBeInTheDocument()
  expect(
    screen.getByRole('textbox', { name: /description/i })
  ).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /region/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /color/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /season/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /tier/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
})

test('CompetitionSimpleForm required fields', async () => {
  render(<CompetitionSimpleForm />)

  await userEvent.click(screen.getByRole('button', { name: 'Save' }))
})

test('CompetitionSimpleForm render test', () => {
  render(<CompetitionSimpleForm />)
})
