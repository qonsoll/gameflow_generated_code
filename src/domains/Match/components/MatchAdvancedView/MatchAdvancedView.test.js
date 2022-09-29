import MatchAdvancedView from './MatchAdvancedView'
import { render } from '@testing-library/react'
import ReactRouter from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

test('MatchAdvancedView render test', () => {
  jest.spyOn(ReactRouter, 'useLocation').mockReturnValue({ pathname: '/test' })

  render(
    <Router>
      <MatchAdvancedView />
    </Router>
  )
})
