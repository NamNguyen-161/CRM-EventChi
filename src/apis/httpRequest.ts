import { getAccessToken } from "@/utils/localStorageService";
import axios, { AxiosRequestConfig } from "axios";
import { refreshTokenFn } from "./auth/authApi";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpRequest.interceptors.request.use(
  function (config) {
    return requestHandler(config);
  },
  function (error) {
    return Promise.reject(error);
  }
);

const requestHandler = (config: AxiosRequestConfig) => {
  const accessToken = getAccessToken();
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
};

httpRequest.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const access_token = await refreshTokenFn();
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      return httpRequest(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default httpRequest;
