import { lazy, Suspense } from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { routes } from './routerConfig.jsx'
import Layout from '../containers/layout'
import { Router, Route, Redirect, IndexRoute } from 'react-router'
import * as history from 'history'

// const ActivitiesTamplate = lazy(() =>
//   import('src/containers/activities_tamplate')
// )

const browserHistory = history.createBrowserHistory()

function RenderRouters(route, k) {
  return route.IndexRoute ? (
    <IndexRoute
      key={k}
      path={route.path}
      component={props => <route.component {...props} />}
    />
  ) : (
    <Route
      key={k}
      path={route.path}
      component={props => <route.component {...props} />}
    >
      {_.map(route.routers, (v, key) => RenderRouters(v, key))}
    </Route>
  )
}

function Routers() {
  return (
    <Switch>
      <Suspense fallback={<div>Loding...</div>}>
        {/* <Route exact path="/" component={ActivitiesTamplate} />
        <Route exact path="/index" component={ActivitiesTamplate} /> */}
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            {_.map(routes, (route, k) => RenderRouters(route, k))}
          </Route>
          <Redirect from="*" to="/index" />
        </Router>
      </Suspense>
    </Switch>
  )
}

export default withRouter(Routers)
