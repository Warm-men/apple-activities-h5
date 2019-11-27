import { Component } from 'react'
import './index.scss'
import Helmet from 'src/lib/pagehelmet.js'

class ActivitiesManage extends Component {
  render() {
    return (
      <div className="activities_manage_container">
        <Helmet title="manage" link="/activities_manage" />
        activities_manage
      </div>
    )
  }
}

export default ActivitiesManage
