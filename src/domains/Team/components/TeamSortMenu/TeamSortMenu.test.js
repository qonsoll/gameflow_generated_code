import TeamSortMenu from './TeamSortMenu'
import { render } from '@testing-library/react'
import ReactRouter from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

test('TeamSortMenu render test', () => {
  jest.spyOn(ReactRouter, 'useLocation').mockReturnValue({ pathname: '/test' })

  render(
    <Router>
      <TeamSortMenu filteredData={{ orderBy: [] }} />
    </Router>
  )
})
