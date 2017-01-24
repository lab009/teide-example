import { createStore, createReducer } from '@lab009/teide'
import { createPlugin as createRouterPlugin } from '@lab009/teide-router'

import { initActions } from 'core/actions'
import localReducers from 'reducers/.lookup'

import plugins from '../plugins'


export default (history, initialState) => {
  const routerPlugin = createRouterPlugin(history)
  const store = createStore({
    plugins: [
      ...plugins,
      routerPlugin,
    ],
    reducers: [
      createReducer(localReducers),
    ],
    initialState,
  })

  initActions(store.dispatch)

  return store
}
