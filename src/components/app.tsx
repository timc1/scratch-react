import React from 'react'
import { hot } from 'react-hot-loader'
import { Router, RouteComponentProps } from '@reach/router'

import Home from './home'

const App = () => {
  return (
    <Router>
      <RouterPage path="/" pageComponent={<Home />} />
    </Router>
  )
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

export default hot(module)(App)
