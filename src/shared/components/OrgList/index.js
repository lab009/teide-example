import React from 'react'
import { PropTypes, connect } from '@lab009/teide'
import {
  Media, Heading, Text,
  Panel, PanelHeader
} from 'rebass'
import DataComponent from '@lab009/teide-data-view'

import jif from 'jif'
import actions from 'core/actions'

@connect({
  orgs: 'api.subsets.orgs'
})
export default class OrgList extends DataComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    orgs: PropTypes.map
  }

  resolveData() {
    actions.github.getOrganizations({
      subset: 'orgs',
      params: {
        name: this.props.name
      }
    })
  }

  renderData({ orgs }) {
    return (<Panel rounded>
      <PanelHeader>Organizations</PanelHeader>
      {
        orgs.map(org =>
          <Media key={org.get('id')} align="center">
            <Heading level={3}>{org.get('login')}</Heading>
            {
              jif(org.has('description'), () =>
                <Text className="description">
                  {org.get('description')}
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
      <PanelHeader>Organizations</PanelHeader>
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
