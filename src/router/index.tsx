import {lazy, Suspense} from 'react'
import {Outlet, RouteObject} from 'react-router-dom'
import NotFound from 'src/components/errors/NotFound'
import Loading from 'src/components/loading/Loading'
import BaseLayout from 'src/layouts/BaseLayout'
import EmptyLayout from 'src/layouts/EmptyLayout'

import {APP_ROUTES} from './router'

const SuspenseLoader = (Component: React.ComponentType) => () =>
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>

const Landing = SuspenseLoader(lazy(() => import('src/feature/landing/Landing')))

const BaseLayoutView = () => {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  )
}

const EmptyLayoutView = () => {
  return (
    <EmptyLayout>
      <Outlet />
    </EmptyLayout>
  )
}

const publicRoutes: RouteObject[] = [
  {
    element: <BaseLayoutView />,
    children: [
      {path: APP_ROUTES.ROOT, element: <Landing />},
      {path: APP_ROUTES.LANDING, element: <Landing />}
    ]
  }
]

const appRoutes: RouteObject[] = [
  {
    element: <EmptyLayoutView />,
    children: [
      {path: APP_ROUTES.INVALID, element: <NotFound />},
      {path: APP_ROUTES.NOT_FOUND, element: <NotFound />}
    ]
  }
]

export const router: RouteObject[] = [
  ...publicRoutes,
  ...appRoutes
]
