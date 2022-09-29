import CompetitionSortMenu from './CompetitionSortMenu'
import { render } from '@testing-library/react'
import ReactRouter from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

test('CompetitionSortMenu render test', () => {
  jest.spyOn(ReactRouter, 'useLocation').mockReturnValue({ pathname: '/test' })

  render(
    <Router>
      <CompetitionSortMenu filteredData={{ orderBy: [] }} />
    </Router>
  )
})
