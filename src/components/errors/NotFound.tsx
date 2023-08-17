import {Link} from 'react-router-dom'
import {ASSETS} from 'src/assets'
import {APP_ROUTES} from 'src/router/router'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex-col flex-grow">
        <div className="flex justify-center flex-shrink-0">
          <Link to={APP_ROUTES.ROOT} className="inline-flex">
            <span className="sr-only">KWOTA</span>
            <img
              className="block w-auto h-12 cursor-pointer"
              src={ASSETS.LOGO_LG}
              alt="Piletilevi"
            />
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-base font-semibold text-app-red">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link
                to={APP_ROUTES.ROOT}
                className="text-base font-medium text-app-red"
              >
                  Go back home
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
