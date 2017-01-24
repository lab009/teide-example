import { createActions, createReducerActions } from '@lab009/teide'
import { actions as routeActions } from '@lab009/teide-router'

import localActions from 'actions/.lookup'
import localReducers from 'reducers/.lookup'


let _dispatch = null

const lazyDispatch = (action) => {
  if (typeof _dispatch !== 'function') throw new Error('Actions not initialized')
  return _dispatch(action)
}

export const initActions = (dispatch) => { _dispatch = dispatch }

export default createActions({
  ...localActions,
  ...routeActions,
  ...createReducerActions(localReducers),
}, lazyDispatch)
