import axios, {AxiosError, AxiosResponse} from 'axios'

import {
  ApiErrorResponse,
  AppError,
  DataResponse,
  HttpError,
  HttpMethod,
  HttpSuccess
} from './fetcherTypes'

export const requestWithoutAuthorizationResponseData = <T>(
  url: string,
  method: HttpMethod,
  body?: string
): Promise<DataResponse<T>> => {
  return fetchWithoutAuthorization(url, method, body)
    .then(data => handleAxiosResponse<T>(data))
    .catch(handleAxiosError)
}

export const handleAxiosResponse = <T>(response: AxiosResponse) => {
  const success: HttpSuccess<T> = {
    status: 'SUCCESS',
    data: response.data
  }
  return success
}

export const handleAxiosError = (errorResponse: AxiosError) => {
  const responseData = errorResponse.response && errorResponse.response.data as ApiErrorResponse

  const error: AppError = {
    status: errorResponse.response?.status,
    code: responseData?.error,
    message: responseData?.message || 'Unexpected Error!',
    fieldErrors: responseData?.fieldErrors
  }

  const httpErrorResponse: HttpError = {
    status: 'ERROR',
    error
  }

  return httpErrorResponse
}

const fetchWithoutAuthorization = (
  url: string,
  method: HttpMethod,
  body?: string
): Promise<AxiosResponse> => {
  return apiClient().request({
    url,
    headers: {
      ...body && {'content-type': 'application/json'}
    },
    method,
    data: body
  })
}

const apiClient = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
