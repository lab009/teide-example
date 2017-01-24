import React from 'react'
import { Link } from '@lab009/teide-router'
import { Component, PropTypes, connect } from '@lab009/teide'
import { Flex, Box } from 'reflexbox'
import {
  Toolbar, NavItem, Space,
  Text, Container, Button,
  Panel, PanelHeader, PanelFooter
} from 'rebass'

import jif from 'jif'
import actions from 'core/actions'

import RepoList from 'components/RepoList'
import OrgList from 'components/OrgList'
import User from 'components/User'

@connect({
  count: 'counter.count',
})
export default class Home extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    name: 'sokra',
  }

  render() {
    return (
      <Flex align="center" column auto>
        <Box p={2} mobile={12} tablet={6} desktop={4}>
          <Panel rounded>
            <PanelHeader>Counter</PanelHeader>
            <Container>
              <Text>Current: {this.props.count}</Text>
            </Container>
            <PanelFooter>
              <Flex justify="space-between" auto wrap>
                <Button onClick={() => actions.counter.increment()}>
                  Increment
                </Button>
                <Button onClick={() => actions.counter.decrement()}>
                  Decrement
                </Button>
                <Button onClick={() => actions.counter.reset()}>
                  Reset
                </Button>
              </Flex>
            </PanelFooter>
          </Panel>
        </Box>

        <Box p={2} mobile={12} tablet={6} desktop={4}>
          <User name={this.props.name} />
        </Box>

        <Flex align="flex-start" auto>
          <Box p={2} mobile={12} tablet={6} desktop={6}>
            <OrgList name={this.props.name} />
          </Box>

          <Box p={2} mobile={12} tablet={6} desktop={6}>
            <RepoList name={this.props.name} />
          </Box>

        </Flex>

      </Flex>
    )
  }
}
