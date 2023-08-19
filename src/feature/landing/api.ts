import {API_PATHS} from 'src/api/apiRoutes'
import {requestWithoutAuthorizationResponseData} from 'src/api/fetcher'

import {EventData} from './types'

export const getTopEvents = () => {
  const url = API_PATHS.TOP_EVENTS
  return requestWithoutAuthorizationResponseData<EventData[]>(url, 'GET')
}

export const getAllEvents = () => {
  const url = API_PATHS.EVENTS
  return requestWithoutAuthorizationResponseData<EventData[]>(url, 'GET')
}
