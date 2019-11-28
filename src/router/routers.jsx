import { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { routes } from './routerConfig.jsx'
import MobileHeaderContainer from 'src/containers/header/mobile/mobile_header_container'
import { Router, Route, Redirect } from 'react-router'
import * as history from 'history'

const browserHistory = history.createBrowserHistory()

function RenderRouters(route, k) {
  return (
    <Route
      key={k}
      exact
      path={route.path}
      component={props => <route.component {...props} />}
    >
      {_.map(route.routers, (v, key) => RenderRouters(v, key))}
    </Route>
  )
}

export default function Routers() {
  return (
    <Suspense fallback={<div>Loding...</div>}>
      <Router history={browserHistory}>
        <Switch>
          {_.map(routes, (route, k) => RenderRouters(route, k))}
          <Redirect from="*" to="/index" />
        </Switch>
        <MobileHeaderContainer />
      </Router>
    </Suspense>
  )
}
