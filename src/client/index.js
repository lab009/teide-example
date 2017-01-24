import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, ScrollRouter } from '@lab009/teide-router'
import { env } from '@lab009/app-config'

import configureStore from 'core/store'
import routes from 'routes'
import actions from 'core/actions'
import Root from 'containers/Root'

import initialState from './initialState'

console.log('Actions:', actions)

const history = browserHistory
const store = configureStore(history, initialState)

ReactDOM.render(
  <Root store={store}>
    <ScrollRouter history={history} >
      {routes}
    </ScrollRouter>
  </Root>,
  document.getElementById('root')
)
