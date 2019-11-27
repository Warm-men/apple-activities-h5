import { useEffect, useState } from 'react'
import { Router } from 'react-router-dom'
import * as history from 'history'
import Routers from './routers'
// import ajaxJsonp from 'src/lib/ajaxJsonp.js'
// import wxLogin from 'src/lib/wx_login.js'
// import * as storage from 'src/lib/storage.js'
// import { parseQueryString } from 'src/lib/parseQueryString.js'

const browserHistory = history.createBrowserHistory()

export default function App() {
  return (
    // <Router history={browserHistory}>

    // </Router>
    <Routers />
  )
}
