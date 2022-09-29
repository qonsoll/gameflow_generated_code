import MatchSortMenu from './MatchSortMenu'
import { render } from '@testing-library/react'
import ReactRouter from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

test('MatchSortMenu render test', () => {
  jest.spyOn(ReactRouter, 'useLocation').mockReturnValue({ pathname: '/test' })

  render(
    <Router>
      <MatchSortMenu filteredData={{ orderBy: [] }} />
    </Router>
  )
})
