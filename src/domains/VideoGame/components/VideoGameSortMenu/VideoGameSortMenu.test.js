import VideoGameSortMenu from './VideoGameSortMenu'
import { render } from '@testing-library/react'
import ReactRouter from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

test('VideoGameSortMenu render test', () => {
  jest.spyOn(ReactRouter, 'useLocation').mockReturnValue({ pathname: '/test' })

  render(
    <Router>
      <VideoGameSortMenu filteredData={{ orderBy: [] }} />
    </Router>
  )
})
