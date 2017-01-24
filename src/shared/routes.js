import React from 'react'
import { Route, IndexRoute } from '@lab009/teide-router'

import Home from 'containers/Home'
import NotFound from 'containers/NotFound'

const routes = (
  <Route path="/">
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
)

export default routes
