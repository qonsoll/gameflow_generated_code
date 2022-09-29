import VideoGameSimpleForm from './VideoGameSimpleForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('Should render the basic fields', async () => {
  render(<VideoGameSimpleForm showTitle />)

  expect(screen.getByRole('heading', { name: 'VideoGame' })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
  expect(screen.getByLabelText('Release date')).toBeInTheDocument()
  expect(
    screen.getByRole('textbox', { name: /publisher/i })
  ).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /genre/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /logoUrl/i })).toBeInTheDocument()
  expect(
    screen.getByRole('textbox', { name: /shortLogoUrl/i })
  ).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /slug/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /color/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /bgColor/i })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: /bgImage/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
})

test('VideoGameSimpleForm required fields', async () => {
  render(<VideoGameSimpleForm />)

  await userEvent.click(screen.getByRole('button', { name: 'Save' }))
})

test('VideoGameSimpleForm render test', () => {
  render(<VideoGameSimpleForm />)
})
