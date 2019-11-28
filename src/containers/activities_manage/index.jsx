import { Component } from 'react'
import './index.scss'
import Helmet from 'src/lib/pagehelmet.js'
import ajaxs from 'src/lib/axios'

const Fetch = ({
  url,
  data,
  headers = { Authorization: 'Bearer {' + localStorage.getItem('token') + '}' },
  type = 'POST',
  mode = 'no-cors',
  credentials,
  success = () => {},
  error = () => {}
}) => {
  const header = new Headers()
  for (let i in headers) {
    header.append(i, headers[i])
  }

  const searchParams = new URLSearchParams()
  for (let i in data) {
    searchParams.append(i, data[i])
  }

  // credentials:'include'   Fetch 跨域请求时默认不会带 cookie, 需要时得手动指定 credentials: 'include'
  const fetch_options = {
    method: type,
    body: searchParams,
    mode: mode,
    headers: header
  }

  return fetch(url, fetch_options).then(res => {
    if (res.ok) {
      success()
      return res.json()
    } else {
      error()
    }
    Promise.reject(new Error(res.status))
  })
}

class ActivitiesManage extends Component {
  componentDidMount() {
    console.log('22222')

    this.getData()
    Fetch({
      type: 'POST',
      url: '/app/vxwork/list',
      mode: 'cors',
      data: {
        offset: 0,
        num: 16,
        fid: 0,
        uid: 0,
        like: 0,
        type: ''
      }
    })
  }
  getData = async () => {
    Fetch({
      type: 'POST',
      url: '/develop/caizhi_miniapi/api/applet/news/list',
      mode: 'cors',
      data: {
        queryType: 0,
        pageNum: 1,
        pageSize: 15,
        orderType: 0,
        tags: ''
      }
    })
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
