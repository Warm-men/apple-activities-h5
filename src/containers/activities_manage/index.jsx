import { Component } from 'react'
import './index.scss'
import Helmet from 'src/lib/pagehelmet.js'
import ajaxs from 'src/lib/axios'

class ActivitiesManage extends Component {
  componentDidMount() {
    console.log('22222')

    this.getData()
  }
  getData = async () => {
    const res = await ajaxs({
      // api/applet/news/list是一个列表接口, 完整的是 https://dev.tengmoney.com/api/applet/news/list
      url: '/dev/api/applet/news/list',
      params: {
        queryType: 0,
        pageNum: 1,
        pageSize: 15,
        orderType: 0,
        tags: ''
      }
    })
    console.log(res)
  }
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
