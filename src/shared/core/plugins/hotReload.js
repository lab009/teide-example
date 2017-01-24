import { createReducer } from '@lab009/teide'

export default {
  hook: (store) => {
    if (!module.hot) return
    module.hot.accept('reducers/.lookup', () =>
      store.replaceReducers([
        createReducer(require('reducers/.lookup')),
      ])
    )
  },
}
