import React from 'react'
import { hot } from 'react-hot-loader'
import { Router, RouteComponentProps } from '@reach/router'

import Layout from './shared/layout'
import Component1 from './component-1'
import Component2 from './component-2'

const App = () => {
  return (
    <Layout>
      <Router>
        <RouterPage path="/" pageComponent={<Component1 />} />
        <RouterPage path="/component-2" pageComponent={<Component2 />} />
      </Router>
    </Layout>
  )
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

export default hot(module)(App)
