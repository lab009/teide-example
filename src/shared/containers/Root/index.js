import React from 'react'
import { Provider, PropTypes } from '@lab009/teide'

import rebassStyles from './styles/rebass'
import reflexboxStyles from './styles/reflexbox'

export default class Root extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    store: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    rebass: PropTypes.object,
    reflexbox: React.PropTypes.object,
  }

  getChildContext() {
    return {
      rebass: rebassStyles,
      reflexbox: reflexboxStyles,
    }
  }

  componentWillMount() {
    console.time('First Render Time')
  }

  componentDidMount() {
    console.timeEnd('First Render Time')
  }


  render() {
    const { children, store } = this.props

    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }
}
