import VideoGameAdvancedView from './VideoGameAdvancedView'
import { render } from '@testing-library/react'
import ReactRouter from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

test('VideoGameAdvancedView render test', () => {
  jest.spyOn(ReactRouter, 'useLocation').mockReturnValue({ pathname: '/test' })

  render(
    <Router>
      <VideoGameAdvancedView />
    </Router>
  )
})
