import { apiOk } from "@/utils/apiHelper";
import { makeFormData } from "@/utils/helper";
import {
  getRefreshToken,
  getUserId,
  storeToken,
  storeUserInfo,
} from "@/utils/localStorageService";
import httpRequest from "../httpRequest";
import {
  ILoginWithPassCode,
  IRole,
  ITokenResponse,
  IUserCompany,
  IUserId,
  IUserInfo,
} from "./types";

const baseApi = "accountmanager";

export const loginWithPhoneFn = async (phoneNumber: string) => {
  const response = await httpRequest.get<string>(
    `${baseApi}/accounts/phone/${phoneNumber}`
  );
  return response.data;
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
  const response = await httpRequest.post<ITokenResponse>(
    "/auth/realms/eventx/protocol/openid-connect/token",
    formData,
    options
  );
  return response.data;
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
  const response = await httpRequest.post<ITokenResponse>(
    "/auth/realms/eventx/protocol/openid-connect/token",
    formData,
    options
  );
  storeToken(response.data);
  return response.data.access_token;
};

export const getListRolesDefaultFn = async () => {
  const response = await httpRequest.get<IRole[]>(`${baseApi}/accounts/roles`);
  return response.data;
};

export const getListRolesCompanyFn = async (data: IUserId) => {
  const response = await httpRequest.post<IUserCompany[]>(
    `${baseApi}/accounts/user-company`,
    data
  );
  return response.data;
};

export const getUserInfoFn = async () => {
  const userId = getUserId();
  const response = await httpRequest.get<IUserInfo>(
    `${baseApi}/accounts/${userId}`
  );
  if (apiOk(response.data)) {
    storeUserInfo(response.data);
  }
  return response.data;
};
