import VideoGameSimpleView from './VideoGameSimpleView'
import { render } from '@testing-library/react'
import ReactRouter from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

test('VideoGameSimpleView render test', () => {
  jest.spyOn(ReactRouter, 'useLocation').mockReturnValue({ pathname: '/test' })

  render(
    <Router>
      <VideoGameSimpleView />
    </Router>
  )
})
