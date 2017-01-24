import React from 'react'
import { Link } from '@lab009/teide-router'
import { Component } from '@lab009/teide'
import { Flex, Box } from 'reflexbox'

export default class NotFound extends Component {
  render() {
    return (
      <Flex align="center" justify="center" column auto>
        <Box p={1}>
          <div className="large">Not Found!</div>
        </Box>
        <Box p={1}>
          <Link to="/">Back To Home</Link>
        </Box>
      </Flex>
    )
  }
}
