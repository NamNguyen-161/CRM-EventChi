import httpRequest from "@/apis/httpRequest";
import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

export async function postApi<TRequest, TResponse>(
  path: string,
  payload: TRequest,
  config?: AxiosRequestConfig
): Promise<TResponse> {
  const response = await httpRequest.post<TResponse>(path, payload, config);
  return response.data;
}

export async function patchApi<TRequest, TResponse>(
  path: string,
  payload: TRequest,

  config?: AxiosRequestConfig
): Promise<TResponse> {
  const response = await httpRequest.patch<TResponse>(path, payload, config);
  return response.data;
}

export async function putApi<TRequest, TResponse>(
  path: string,
  payload: TRequest,
  config?: AxiosRequestConfig
): Promise<TResponse> {
  const response = await httpRequest.put<TResponse>(path, payload, config);
  return response.data;
}

export async function deleteApi<TResponse>(path: string): Promise<TResponse> {
  const response = await httpRequest.delete<TResponse>(path);
  return response.data;
}

export async function getApi<TResponse>(path: string): Promise<TResponse> {
  const response = await httpRequest.get<TResponse>(path);
  return response.data;
}

export function apiOk(data: any) {
  return !data.error;
}

export function apiError(data: any) {
  if (data && data.error && data.error.data)
    return data.error.data.error || data.error.data.Error;
  return true;
}

export interface ApiError {
  data: DataError;
}

export interface DataError {
  error?: string;
  Error?: string;
}

export const onError = (error: any) => {
  const msg =
    (error as any).response.data.Error || (error as any).response.data.error;
  toast.error(msg, {
    position: "top-right",
  });
};
