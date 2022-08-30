import httpRequest from "@/apis/httpRequest";
import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

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
    (error as any).response.data?.Error ||
    (error as any).response.data?.error ||
    error?.message ||
    error("Something wrong");
  toast.error(msg, {
    position: "top-right",
  });
};
