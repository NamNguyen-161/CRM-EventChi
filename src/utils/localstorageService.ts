import { ITokenResponse } from "@/apis/auth/types";

const accessTokenKey = "access_token";
const refreshTokenKey = "refresh_token";
const userIdKey = "user_id";
const organizationIdKey = "organization_id";

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
  localStorage.setItem(organizationIdKey, userId);
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
