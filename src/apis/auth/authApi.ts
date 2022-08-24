import { getApi, postApi } from "@/utils/apiHelper";
import { makeFormData } from "@/utils/helper";
import { getRefreshToken, storeToken } from "@/utils/localStorageService";
import httpRequest from "../httpRequest";
import { ILoginWithPassCode, ITokenResponse } from "./types";

const baseApi = "accountmanager";

export const loginWithPhoneFn = async (phoneNumber: string) => {
  const response = await httpRequest.get<string>(
    `${baseApi}/accounts/phone/${phoneNumber}`
  );
  return response;
};

export const fetchAccessTokenFn = async (data: ILoginWithPassCode) => {
  let formData = makeFormData({
    grant_type: "password",
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    username: data.userId,
    password: data.passCode,
  });

  const options = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const response = await postApi<string, ITokenResponse>(
    "/auth/realms/eventx/protocol/openid-connect/token",
    formData,
    options
  );
  return response;
};

export const refreshTokenFn = async () => {
  const token = getRefreshToken();
  if (token === "undefined") return;
  let formData = makeFormData({
    grant_type: "refresh_token",
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    refresh_token: token,
  });

  const options = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const response = await postApi<string, ITokenResponse>(
    "/auth/realms/eventx/protocol/openid-connect/token",
    formData,
    options
  );
  storeToken(response);
  return response.access_token;
};
