import { lazy } from 'react'

export const routes = [
  {
    path: '/',
    component: lazy(() => import('src/containers/activities_tamplate'))
  },
  {
    path: '/index',
    component: lazy(() => import('src/containers/activities_tamplate'))
  },
  {
    path: '/activities_manage',
    component: lazy(() => import('src/containers/activities_manage'))
  },
  {
    path: '/data_form',
    component: lazy(() => import('src/containers/data_form'))
  }
]
