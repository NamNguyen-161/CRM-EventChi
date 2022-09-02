import { ITokenResponse, IUserInfo } from "@/apis/auth/types";

const accessTokenKey = "access_token";
const refreshTokenKey = "refresh_token";
const userIdKey = "user_id";
const organizationIdKey = "organization_id";
const authenticated = "isAuthenticated";

const tokenPriceKey = "token_price";
const userInfoKey = "user_info";

export function storeToken(token: ITokenResponse) {
  localStorage.setItem(accessTokenKey, token.access_token);
  localStorage.setItem(refreshTokenKey, token.refresh_token);
}

export function getAccessToken() {
  return localStorage.getItem(accessTokenKey);
}

export function getRefreshToken() {
  return localStorage.getItem(refreshTokenKey);
}

export function storeUserId(userId: string) {
  localStorage.setItem(userIdKey, userId);
}

export function setOrganizationId(userId: string) {
  localStorage.setItem(organizationIdKey, userId);
}

export function getUserId() {
  return localStorage.getItem(userIdKey);
}

export function getOrganizationId() {
  return localStorage.getItem(organizationIdKey) || "";
  // return "GBCAEXSAZI2HU4IUAL6EH6SPHMVNQLKXOM3L63TQOKQGFCSMWPQM6DW7";
}

export function storeUserInfo(user: IUserInfo) {
  localStorage.setItem(userInfoKey, JSON.stringify(user));
}

export function setAuthenticate(value: boolean) {
  localStorage.setItem(authenticated, value.toString());
}

export function getAuthenticate() {
  return localStorage.getItem(authenticated);
}
