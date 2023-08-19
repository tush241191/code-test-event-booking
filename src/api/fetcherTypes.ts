/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpSuccess<R> {
  status: 'SUCCESS';
  data: R;
}

export interface HttpNoContent {
  status: 'OK';
}

export interface FieldError {
  [key: string]: string;
}

export interface AppError {
  status?: number;
  code?: string;
  message?: string;
  fieldErrors?: FieldError;
}

export interface HttpError {
  status: 'ERROR';
  error: AppError;
}

export interface ApiErrorResponse {
  error?: string;
  message: string;
  fieldErrors: FieldError;
}

export type HttpMethod = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH'
export type DataResponse<T> = HttpSuccess<T> | HttpNoContent | HttpError
export type NoContentResponse = HttpNoContent | HttpError
