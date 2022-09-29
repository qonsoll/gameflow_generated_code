import TeamSimpleForm from './TeamSimpleForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('Should render the basic fields', async () => {
  render(<TeamSimpleForm showTitle />)

  expect(screen.getByRole('heading', { name: 'Team' })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /logoUrl/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /bgColor/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
})

test('TeamSimpleForm required fields', async () => {
  render(<TeamSimpleForm />)

  await userEvent.click(screen.getByRole('button', { name: 'Save' }))
})

test('TeamSimpleForm render test', () => {
  render(<TeamSimpleForm />)
})
