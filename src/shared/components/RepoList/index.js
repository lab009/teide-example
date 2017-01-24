import React from 'react'
import {
  Media, Heading, Text,
  Panel, PanelHeader
} from 'rebass'
import { PropTypes, connect } from '@lab009/teide'
import DataComponent from '@lab009/teide-data-view'

import jif from 'jif'
import actions from 'core/actions'

@connect({
  repos: 'api.subsets.repos'
})
export default class RepoList extends DataComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    repos: PropTypes.map
  }

  resolveData() {
    actions.github.getRepositories({
      subset: 'repos',
      params: {
        name: this.props.name
      }
    })
  }

  renderData({ repos }) {
    return (<Panel rounded>
      <PanelHeader>Repositories</PanelHeader>
      {
        repos.map(repo =>
          <Media key={repo.get('id')} align="center">
            <Heading level={3}>{repo.get('full_name')}</Heading>
            {
              jif(repo.has('description'), () =>
                <Text className="description">
                  {repo.get('description')}
                </Text>
              )
            }
          </Media>
        )
      }
    </Panel>)
  }

  renderErrors(errors) {
    return (<Panel rounded>
      <PanelHeader>Repositories</PanelHeader>
      <Heading>Failed to Load!</Heading>
      {
        errors.map((err, field) =>
          <Media key={field} align="center">
            <Heading level={3}>{field}</Heading>
            <Text>{err.message}</Text>
          </Media>
        ).toArray()
      }
    </Panel>)
  }
}
